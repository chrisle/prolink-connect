import { Span } from '@sentry/tracing';
import { Track } from 'src/entities';
import LocalDatabase from 'src/localdb';
import RemoteDatabase from 'src/remotedb';
import { Device, DeviceID, MediaSlot, TrackType } from 'src/types';
export type Options = {
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
};
export declare function viaRemote(remote: RemoteDatabase, device: Device, opts: Required<Options>): Promise<null>;
export declare function viaLocal(local: LocalDatabase, device: Device, opts: Required<Options>): Promise<Buffer<ArrayBuffer> | null>;
