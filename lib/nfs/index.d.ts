/// <reference types="node" />
import { Span } from '@sentry/tracing';
import { Device } from "../types";
import { fetchFile as fetchFileCall } from './programs';
import { RetryConfig } from './rpc';
export interface FetchProgress {
    read: number;
    total: number;
}
/**
 * The slot <-> mount name mapping is well known.
 */
declare const slotMountMapping: {
    readonly 3: "/C/";
    readonly 2: "/B/";
    readonly 4: "/";
};
interface FetchFileOptions {
    device: Device;
    slot: keyof typeof slotMountMapping;
    path: string;
    onProgress?: Parameters<typeof fetchFileCall>[2];
    span?: Span;
}
/**
 * Fetch a file from a devices NFS server.
 *
 * NOTE: The connection and root filehandle (The 'mounted' NFS export on the
 *       device) is cached to improve subsequent fetching performance. It's
 *       important that when the device disconnects you call the {@link
 *       resetDeviceCache} function.
 */
export declare function fetchFile({ device, slot, path, onProgress, span, }: FetchFileOptions): Promise<Buffer>;
/**
 * Clear the cached NFS connection and root filehandle for the given device
 */
export declare function resetDeviceCache(device: Device): void;
/**
 * Configure the retry strategy for making NFS calls using this module
 */
export declare function configureRetryStrategy(config: RetryConfig): void;
export {};
