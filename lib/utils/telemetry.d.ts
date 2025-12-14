/**
 * Telemetry utility that wraps Sentry and provides opt-in telemetry.
 * Telemetry is disabled by default and can be enabled by setting
 * PROLINK_CONNECT_TELEMETRY=true in the environment.
 */
import * as Sentry from '@sentry/node';
import { Span, SpanStatus } from '@sentry/tracing';
/**
 * Check if telemetry is enabled via environment variable.
 */
export declare const isTelemetryEnabled: () => boolean;
/**
 * Re-export SpanStatus for convenience.
 */
export { SpanStatus };
/**
 * Initialize Sentry if telemetry is enabled.
 */
export declare function init(options: Sentry.NodeOptions): void;
/**
 * Start a transaction if telemetry is enabled, otherwise return a no-op.
 */
export declare function startTransaction(context: Parameters<typeof Sentry.startTransaction>[0]): Span;
/**
 * Capture an exception if telemetry is enabled.
 */
export declare function captureException(exception: unknown, hint?: Parameters<typeof Sentry.captureException>[1]): string;
/**
 * Capture a message if telemetry is enabled.
 */
export declare function captureMessage(message: string, level?: Sentry.Severity | Parameters<typeof Sentry.captureMessage>[1]): string;
/**
 * Set a tag if telemetry is enabled.
 */
export declare function setTag(key: string, value: string): void;
/**
 * Re-export Severity enum for convenience.
 */
export declare const Severity: typeof Sentry.Severity;
