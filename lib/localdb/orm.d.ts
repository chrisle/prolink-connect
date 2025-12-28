import { EntityFK, Playlist, PlaylistEntry, Track } from "../entities";
/**
 * Table names available
 */
export declare enum Table {
    Artist = "artist",
    Album = "album",
    Genre = "genre",
    Color = "color",
    Label = "label",
    Key = "key",
    Artwork = "artwork",
    Playlist = "playlist",
    PlaylistEntry = "playlist_entry",
    Track = "track"
}
/**
 * Object Relation Mapper as an abstraction ontop of a local database
 * connection.
 *
 * May be used to populate a metadata database and query objects.
 */
export declare class MetadataORM {
    #private;
    constructor();
    close(): void;
    /**
     * Insert a entity object into the database.
     */
    insertEntity(table: Table, object: Record<string, any>): void;
    /**
     * Locate a track by ID in the database
     */
    findTrack(id: number): Track;
    /**
     * Query for a list of {folders, playlists, tracks} given a playlist ID. If
     * no ID is provided the root list is queried.
     *
     * Note that when tracks are returned there will be no folders or playslists.
     * But the API here is simpler to assume there could be.
     *
     * Tracks are returned in the order they are placed on the playlist.
     */
    findPlaylist(playlistId?: number): {
        folders: Playlist[];
        playlists: Playlist[];
        trackEntries: PlaylistEntry<EntityFK.WithFKs>[];
    };
}
