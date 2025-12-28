/**
 * Telemetry utility that wraps Sentry and provides opt-in telemetry.
 * Telemetry is disabled by default and can be enabled by setting
 * PROLINK_CONNECT_TELEMETRY=true in the environment.
 */
import * as Sentry from '@sentry/node';
/**
 * Get the Sentry DSN from environment variable.
 */
export declare const getSentryDsn: () => string | undefined;
/**
 * Check if telemetry is enabled via environment variable.
 * Telemetry is enabled if PROLINK_CONNECT_TELEMETRY is set to 'true' or '1',
 * or if a Sentry DSN is provided.
 */
export declare const isTelemetryEnabled: () => boolean;
/**
 * Span status values for telemetry.
 */
export declare const SpanStatus: {
    readonly Ok: "ok";
    readonly Cancelled: "cancelled";
    readonly Unknown: "unknown";
    readonly InvalidArgument: "invalid_argument";
    readonly DeadlineExceeded: "deadline_exceeded";
    readonly NotFound: "not_found";
    readonly AlreadyExists: "already_exists";
    readonly PermissionDenied: "permission_denied";
    readonly ResourceExhausted: "resource_exhausted";
    readonly FailedPrecondition: "failed_precondition";
    readonly Aborted: "aborted";
    readonly OutOfRange: "out_of_range";
    readonly Unimplemented: "unimplemented";
    readonly InternalError: "internal_error";
    readonly Unavailable: "unavailable";
    readonly DataLoss: "data_loss";
    readonly Unauthenticated: "unauthenticated";
};
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
 * Initialize Sentry if telemetry is enabled.
 * DSN can be provided via options or via environment variable
 * (PROLINK_CONNECT_SENTRY_DSN or SENTRY_DSN).
 */
export declare function init(options?: Sentry.NodeOptions): void;
/**
 * Start a transaction/span if telemetry is enabled, otherwise return a no-op.
 */
export declare function startTransaction(context: SpanContext): TelemetrySpan;
/**
 * Capture an exception if telemetry is enabled.
 */
export declare function captureException(exception: unknown, hint?: Parameters<typeof Sentry.captureException>[1]): string;
/**
 * Capture a message if telemetry is enabled.
 */
export declare function captureMessage(message: string, level?: Sentry.SeverityLevel | Parameters<typeof Sentry.captureMessage>[1]): string;
/**
 * Set a tag if telemetry is enabled.
 */
export declare function setTag(key: string, value: string): void;
/**
 * Severity levels for messages.
 */
export declare const Severity: {
    readonly Fatal: "fatal";
    readonly Error: "error";
    readonly Warning: "warning";
    readonly Log: "log";
    readonly Info: "info";
    readonly Debug: "debug";
};
