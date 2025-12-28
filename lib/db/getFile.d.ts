import { Track } from "../entities";
import LocalDatabase from "../localdb";
import RemoteDatabase from "../remotedb";
import { Device, DeviceID, MediaSlot, TrackType } from "../types";
import { TelemetrySpan as Span } from "../utils/telemetry";
export interface Options {
    /**
     * The device to query the file off of
     */
    deviceId: DeviceID;
    /**
     * The media slot the track is present in
     */
    trackSlot: MediaSlot;
    /**
     * The type of track we are querying file for
     */
    trackType: TrackType;
    /**
     * The track to get track for
     */
    track: Track;
    /**
     * The Sentry transaction span
     */
    span?: Span;
}
export declare function viaRemote(_remote: RemoteDatabase, _device: Device, _opts: Required<Options>): null;
export declare function viaLocal(local: LocalDatabase, device: Device, opts: Required<Options>): Promise<Buffer<ArrayBuffer> | null>;
