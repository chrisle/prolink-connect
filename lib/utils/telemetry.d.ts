/**
 * Telemetry utility - Sentry removed, now a no-op implementation.
 */
/**
 * Check if telemetry is enabled - always false now.
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
 * Initialize telemetry - no-op.
 */
export declare function init(_options?: unknown): void;
/**
 * Start a transaction/span - returns no-op.
 */
export declare function startTransaction(_context: SpanContext): TelemetrySpan;
/**
 * Capture an exception - no-op.
 */
export declare function captureException(_exception: unknown, _hint?: unknown): string;
/**
 * Capture a message - no-op.
 */
export declare function captureMessage(_message: string, _level?: unknown): string;
/**
 * Set a tag - no-op.
 */
export declare function setTag(_key: string, _value: string): void;
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
