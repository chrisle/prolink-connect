import DeviceManager from 'src/devices';
import { Track } from 'src/entities';
import LocalDatabase from 'src/localdb';
import RemoteDatabase from 'src/remotedb';
import { Device, PlaylistContents, Waveforms } from 'src/types';
import * as GetArtworkThumbnail from './getArtworkThumbnail';
import * as GetMetadata from './getMetadata';
import * as GetPlaylist from './getPlaylist';
/**
 * A Database is the central service used to query devices on the prolink
 * network for information from their databases.
 */
declare class Database {
    #private;
    constructor(hostDevice: Device, local: LocalDatabase, remote: RemoteDatabase, deviceManager: DeviceManager);
    /**
     * Reports weather or not the CDJs can be communcated to over the remote
     * database protocol. This is important when trying to query for unanalyzed or
     * compact disc tracks.
     */
    get cdjSupportsRemotedb(): boolean;
    /**
     * Retrieve metadata for a track on a specfic device slot.
     */
    getMetadata(opts: GetMetadata.Options): Promise<Track | null>;
    /**
     * Retrives the file off a specific device slot.
     */
    getFile(opts: GetArtworkThumbnail.Options): Promise<Buffer<ArrayBufferLike> | null>;
    /**
     * Retrives the artwork for a track on a specific device slot.
     */
    getArtworkThumbnail(opts: GetArtworkThumbnail.Options): Promise<Buffer<ArrayBufferLike> | null>;
    /**
     * Retrives the waveforms for a track on a specific device slot.
     */
    getWaveforms(opts: GetArtworkThumbnail.Options): Promise<Waveforms | null>;
    /**
     * Retrieve folders, playlists, and tracks within the playlist tree. The id
     * may be left undefined to query the root of the playlist tree.
     *
     * NOTE: You will never receive a track list and playlists or folders at the
     * same time. But the API is simpler to combine the lookup for these.
     */
    getPlaylist(opts: GetPlaylist.Options): Promise<PlaylistContents | null>;
}
export default Database;
