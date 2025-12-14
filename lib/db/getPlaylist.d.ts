import { Span } from '@sentry/tracing';
import { Playlist } from 'src/entities';
import LocalDatabase from 'src/localdb';
import RemoteDatabase from 'src/remotedb';
import { DeviceID, MediaSlot, PlaylistContents } from 'src/types';
export interface Options {
    /**
     * The playlist or folder to query the entries of. This may be left as
     * undefined to retrieve the root playlist.
     */
    playlist?: Playlist;
    /**
     * The device to query the track metadata from
     */
    deviceId: DeviceID;
    /**
     * The media slot the track is present in
     */
    mediaSlot: MediaSlot;
    /**
     * The Sentry transaction span
     */
    span?: Span;
}
export declare function viaRemote(remote: RemoteDatabase, opts: Options): Promise<PlaylistContents | null>;
export declare function viaLocal(local: LocalDatabase, opts: Options): Promise<PlaylistContents | null>;
