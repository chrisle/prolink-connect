/**
 * Telemetry utility that wraps Sentry and provides opt-in telemetry.
 * Telemetry is disabled by default and can be enabled by setting
 * PROLINK_CONNECT_TELEMETRY=true in the environment.
 */
import * as Sentry from '@sentry/node';

/**
 * Check if telemetry is enabled via environment variable.
 */
export const isTelemetryEnabled = (): boolean => {
  const value = process.env.PROLINK_CONNECT_TELEMETRY;
  return value === 'true' || value === '1';
};

/**
 * Span status values for telemetry.
 */
export const SpanStatus = {
  Ok: 'ok',
  Cancelled: 'cancelled',
  Unknown: 'unknown',
  InvalidArgument: 'invalid_argument',
  DeadlineExceeded: 'deadline_exceeded',
  NotFound: 'not_found',
  AlreadyExists: 'already_exists',
  PermissionDenied: 'permission_denied',
  ResourceExhausted: 'resource_exhausted',
  FailedPrecondition: 'failed_precondition',
  Aborted: 'aborted',
  OutOfRange: 'out_of_range',
  Unimplemented: 'unimplemented',
  InternalError: 'internal_error',
  Unavailable: 'unavailable',
  DataLoss: 'data_loss',
  Unauthenticated: 'unauthenticated',
} as const;

export type SpanStatusType = (typeof SpanStatus)[keyof typeof SpanStatus];

/**
 * Context for starting a child span.
 */
export interface SpanContext {
  name?: string;
  op?: string;
  description?: string;
  data?: Record<string, unknown>;
}

/**
 * Interface for span-like objects returned by telemetry functions.
 */
export interface TelemetrySpan {
  startChild(context?: SpanContext): TelemetrySpan;
  setData(key: string, value: unknown): TelemetrySpan;
  setTag(key: string, value: string): TelemetrySpan;
  setStatus(status: SpanStatusType): TelemetrySpan;
  end(): void;
  /** @deprecated Use end() instead */
  finish(): void;
}

/**
 * No-op span implementation for when telemetry is disabled.
 */
const noopSpan: TelemetrySpan = {
  startChild(_context?: SpanContext) {
    return noopSpan;
  },
  setData(_key: string, _value: unknown) {
    return noopSpan;
  },
  setTag(_key: string, _value: string) {
    return noopSpan;
  },
  setStatus(_status: SpanStatusType) {
    return noopSpan;
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  end() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  finish() {},
};

/**
 * Create a TelemetrySpan wrapper around a Sentry span.
 */
function wrapSpan(span: Sentry.Span | undefined): TelemetrySpan {
  if (!span) {
    return noopSpan;
  }
  return {
    startChild(context?: SpanContext) {
      const child = Sentry.startInactiveSpan({
        name: context?.name ?? context?.description ?? 'child',
        op: context?.op,
        attributes: context?.data as Record<string, string> | undefined,
      });
      return wrapSpan(child);
    },
    setData(key: string, value: unknown) {
      span.setAttribute(key, value as string);
      return this;
    },
    setTag(key: string, value: string) {
      span.setAttribute(key, value);
      return this;
    },
    setStatus(status: SpanStatusType) {
      span.setStatus({code: status === 'ok' ? 1 : 2, message: status});
      return this;
    },
    end() {
      span.end();
    },
    finish() {
      span.end();
    },
  };
}

/**
 * Initialize Sentry if telemetry is enabled.
 */
export function init(options: Sentry.NodeOptions): void {
  if (isTelemetryEnabled()) {
    Sentry.init(options);
  }
}

/**
 * Start a transaction/span if telemetry is enabled, otherwise return a no-op.
 */
export function startTransaction(context: SpanContext): TelemetrySpan {
  if (isTelemetryEnabled()) {
    const span = Sentry.startInactiveSpan({
      name: context.name ?? context.description ?? 'transaction',
      op: context.op,
      forceTransaction: true,
      attributes: context.data as Record<string, string> | undefined,
    });
    return wrapSpan(span);
  }
  return noopSpan;
}

/**
 * Capture an exception if telemetry is enabled.
 */
export function captureException(
  exception: unknown,
  hint?: Parameters<typeof Sentry.captureException>[1]
): string {
  if (isTelemetryEnabled()) {
    return Sentry.captureException(exception, hint);
  }
  return '';
}

/**
 * Capture a message if telemetry is enabled.
 */
export function captureMessage(
  message: string,
  level?: Sentry.SeverityLevel | Parameters<typeof Sentry.captureMessage>[1]
): string {
  if (isTelemetryEnabled()) {
    return Sentry.captureMessage(message, level);
  }
  return '';
}

/**
 * Set a tag if telemetry is enabled.
 */
export function setTag(key: string, value: string): void {
  if (isTelemetryEnabled()) {
    Sentry.setTag(key, value);
  }
}

/**
 * Severity levels for messages.
 */
export const Severity = {
  Fatal: 'fatal',
  Error: 'error',
  Warning: 'warning',
  Log: 'log',
  Info: 'info',
  Debug: 'debug',
} as const;
