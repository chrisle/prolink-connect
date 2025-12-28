import { Track } from "../entities";
import LocalDatabase from "../localdb";
import RemoteDatabase from "../remotedb";
import { Device, DeviceID, MediaSlot, TrackType } from "../types";
import { TelemetrySpan as Span } from "../utils/telemetry";
export interface Options {
    /**
     * The device to query the track artwork off of
     */
    deviceId: DeviceID;
    /**
     * The media slot the track is present in
     */
    trackSlot: MediaSlot;
    /**
     * The type of track we are querying artwork for
     */
    trackType: TrackType;
    /**
     * The track to lookup artwork for
     */
    track: Track;
    /**
     * The Sentry transaction span
     */
    span?: Span;
}
export declare function viaRemote(remote: RemoteDatabase, opts: Required<Options>): Promise<Buffer<ArrayBufferLike> | null>;
export declare function viaLocal(local: LocalDatabase, device: Device, opts: Required<Options>): Promise<Buffer<ArrayBuffer> | null>;
