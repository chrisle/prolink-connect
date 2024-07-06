import { Span } from '@sentry/tracing';
import LocalDatabase from "../localdb";
import RemoteDatabase from "../remotedb";
import { Device, DeviceID, MediaSlot, TrackType } from "../types";
export interface Options {
    /**
     * The device to query the track metadata from
     */
    deviceId: DeviceID;
    /**
     * The media slot the track is present in
     */
    trackSlot: MediaSlot;
    /**
     * The type of track we are querying for
     */
    trackType: TrackType;
    /**
     * The track id to retrive metadata for
     */
    trackId: number;
    /**
     * The Sentry transaction span
     */
    span?: Span;
}
export declare function viaRemote(remote: RemoteDatabase, opts: Required<Options>): Promise<import("../types").Track<import("..").EntityFK.WithRelations> | null>;
export declare function viaLocal(local: LocalDatabase, device: Device, opts: Required<Options>): Promise<import("../types").Track<import("..").EntityFK.WithRelations> | null>;
