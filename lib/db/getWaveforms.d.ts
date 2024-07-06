import { Span } from '@sentry/tracing';
import { Track } from "../entities";
import LocalDatabase from "../localdb";
import RemoteDatabase from "../remotedb";
import { Device, DeviceID, MediaSlot, TrackType, Waveforms } from "../types";
export interface Options {
    /**
     * The device to query the track waveforms off of
     */
    deviceId: DeviceID;
    /**
     * The media slot the track is present in
     */
    trackSlot: MediaSlot;
    /**
     * The type of track we are querying waveforms for
     */
    trackType: TrackType;
    /**
     * The track to lookup waveforms for
     */
    track: Track;
    /**
     * The Sentry transaction span
     */
    span?: Span;
}
export declare function viaRemote(remote: RemoteDatabase, opts: Required<Options>): Promise<Waveforms | null>;
export declare function viaLocal(local: LocalDatabase, device: Device, opts: Required<Options>): Promise<Waveforms | null>;
