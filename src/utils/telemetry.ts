/**
 * Telemetry utility that wraps Sentry and provides opt-in telemetry.
 * Telemetry is disabled by default and can be enabled by setting
 * PROLINK_CONNECT_TELEMETRY=true in the environment.
 */
import * as Sentry from '@sentry/node';
import {Span, SpanStatus} from '@sentry/tracing';

/**
 * Check if telemetry is enabled via environment variable.
 */
export const isTelemetryEnabled = (): boolean => {
  const value = process.env.PROLINK_CONNECT_TELEMETRY;
  return value === 'true' || value === '1';
};

/**
 * Re-export SpanStatus for convenience.
 */
export {SpanStatus};

/**
 * No-op span implementation for when telemetry is disabled.
 * Cast to Span for type compatibility with existing code.
 */
const noopSpan = {
  startChild(_context?: unknown) {
    return noopSpan;
  },
  finish() {},
  setData(_key: string, _value: unknown) {
    return noopSpan;
  },
  setTag(_key: string, _value: string) {
    return noopSpan;
  },
  setStatus(_status: unknown) {
    return noopSpan;
  },
} as unknown as Span;

/**
 * Initialize Sentry if telemetry is enabled.
 */
export function init(options: Sentry.NodeOptions): void {
  if (isTelemetryEnabled()) {
    Sentry.init(options);
  }
}

/**
 * Start a transaction if telemetry is enabled, otherwise return a no-op.
 */
export function startTransaction(
  context: Parameters<typeof Sentry.startTransaction>[0]
): Span {
  if (isTelemetryEnabled()) {
    return Sentry.startTransaction(context);
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
  level?: Sentry.Severity | Parameters<typeof Sentry.captureMessage>[1]
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
 * Re-export Severity enum for convenience.
 */
export const Severity = Sentry.Severity;
