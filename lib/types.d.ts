import type { Address4 } from 'ip-address';
import type { Playlist, Track } from './entities';
export * as CDJStatus from "./status/types";
/**
 * Re-export various types for the types only compile target
 */
export type { Album, Artist, Artwork, Color, Genre, Key, Label, Playlist, Track, } from './entities';
export type { HydrationProgress } from './localdb/rekordbox';
export type { MixstatusConfig, MixstatusProcessor } from './mixstatus';
export type { ConnectedProlinkNetwork, NetworkConfig, ProlinkNetwork } from './network';
export type { FetchProgress } from './nfs';
/**
 * Known device types on the network
 */
export declare enum DeviceType {
    CDJ = 1,
    Mixer = 3,
    Rekordbox = 4
}
/**
 * The 8-bit identifier of the device on the network
 */
export declare type DeviceID = number;
/**
 * Represents a device on the prolink network.
 */
export interface Device {
    name: string;
    id: DeviceID;
    type: DeviceType;
    macAddr: Uint8Array;
    ip: Address4;
    lastActive?: Date;
}
/**
 * Details of a particular media slot on the CDJ
 */
export interface MediaSlotInfo {
    /**
     * The device the slot physically exists on
     */
    deviceId: DeviceID;
    /**
     * The slot type
     */
    slot: MediaSlot;
    /**
     * The name of the media connected
     */
    name: string;
    /**
     * The rekordbox configured color of the media connected
     */
    color: MediaColor;
    /**
     * Creation date
     */
    createdDate: Date;
    /**
     * Number of free bytes available on the media
     */
    freeBytes: bigint;
    /**
     * Number of bytes used on the media
     */
    totalBytes: bigint;
    /**
     * Specifies the available tracks type on the media
     */
    tracksType: TrackType;
    /**
     * Total number of rekordbox tracks on the media. Will be zero if there is
     * no rekordbox database on the media
     */
    trackCount: number;
    /**
     * Same as track count, except for playlists
     */
    playlistCount: number;
    /**
     * True when a rekordbox 'my settings' file has been exported to the media
     */
    hasSettings: boolean;
}
export declare enum MediaColor {
    Default = 0,
    Pink = 1,
    Red = 2,
    Orange = 3,
    Yellow = 4,
    Green = 5,
    Aqua = 6,
    Blue = 7,
    Purple = 8
}
/**
 * A slot where media is present on the CDJ
 */
export declare enum MediaSlot {
    Empty = 0,
    CD = 1,
    SD = 2,
    USB = 3,
    RB = 4
}
/**
 * Track type flags
 */
export declare enum TrackType {
    None = 0,
    RB = 1,
    Unanalyzed = 2,
    AudioCD = 5
}
/**
 * A beat grid is a series of offsets from the start of the track. Each offset
 * indicates what count within the measure it is along with the BPM.
 */
export declare type BeatGrid = Array<{
    /**
     * Offset from the beginning of track in milliseconds of this beat.
     */
    offset: number;
    /**
     * The count of this particular beat within the measure
     */
    count: 1 | 2 | 3 | 4;
    /**
     * The BPM at this beat.
     */
    bpm: number;
}>;
/**
 * A waveform segment contains a height and 'whiteness' value.
 */
interface WaveformSegment {
    /**
     * The height this segment in the waveform. Ranges from 0 - 31.
     */
    height: number;
    /**
     * The level of "whiteness" of the waveform. 0 being completely blue, and 1
     * being completely white.
     */
    whiteness: number;
}
/**
 * A HD waveform segment contains the height of the waveform, and it's color
 * represented as RGB values.
 */
interface WaveformHDSegment {
    /**
     * The height this segment in the waveform. Ranges from 0 - 31.
     */
    height: number;
    /**
     * the RGB value, each channel ranges from 0-1 for the segment.
     */
    color: [number, number, number];
}
/**
 * The waveform preview will be 400 segments of data.
 */
export declare type WaveformPreview = WaveformSegment[];
/**
 * Detailed waveforms have 150 segments per second of audio (150 'half frames'
 * per second of audio).
 */
export declare type WaveformDetailed = WaveformSegment[];
/**
 * HD waveforms have 150 segments per second of audio (150 'half frames' per
 * second of audio).
 */
export declare type WaveformHD = WaveformHDSegment[];
/**
 * The result of looking up track waveforms
 */
export interface Waveforms {
    /**
     * The full-size and full-color waveform
     */
    waveformHd: WaveformHD;
}
/**
 * A hotcue button label
 */
export declare enum HotcueButton {
    A = 1,
    B = 2,
    C = 3,
    D = 4,
    E = 5,
    F = 6,
    G = 7,
    H = 8
}
/**
 * When a custom color is not configured the cue point will be one of these
 * colors.
 */
export declare enum CueColor {
    None = 0,
    Blank = 21,
    Magenta = 49,
    Violet = 56,
    Fuchsia = 60,
    LightSlateBlue = 62,
    Blue = 1,
    SteelBlue = 5,
    Aqua = 9,
    SeaGreen = 14,
    Teal = 18,
    Green = 22,
    Lime = 26,
    Olive = 30,
    Yellow = 32,
    Orange = 38,
    Red = 42,
    Pink = 45
}
/**
 * Represents a single cue point. On older exports the label and color may be
 * undefined.
 */
export interface CuePoint {
    type: 'cue_point';
    /**
     * Number of milliseconds from the start of the track.
     */
    offset: number;
    /**
     * The comment associated to the cue point
     */
    label?: string;
    /**
     * RGB values of the hotcue color
     */
    color?: CueColor;
}
declare type BareCuePoint = Omit<CuePoint, 'type'>;
/**
 * A loop, similar to a cue point, but includes a length.
 */
export declare type Loop = BareCuePoint & {
    type: 'loop';
    /**
     * The length in milliseconds of the loop
     */
    length: number;
};
/**
 * A hotcue is like a cue point, but also includes the button it is assigned to.
 */
export declare type Hotcue = BareCuePoint & {
    type: 'hot_cue';
    /**
     * Which hotcue button this hotcue is assigned to.
     */
    button: HotcueButton;
};
/**
 * A hot loop, this is the union of a hotcue and a loop.
 */
export declare type Hotloop = {
    type: 'hot_loop';
} & (Omit<Hotcue, 'type'> & Omit<Loop, 'type'>);
export declare type CueAndLoop = CuePoint | Loop | Hotcue | Hotloop;
/**
 * Represents the contents of a playlist
 */
export interface PlaylistContents {
    /**
     * The playlists in this playlist.
     */
    playlists: Playlist[];
    /**
     * The folders in this playlist.
     */
    folders: Playlist[];
    /**
     * The tracks in this playlist. This is an AsyncIterator as looking up track
     * metadata may be slow when connected to the remote database.
     */
    tracks: AsyncIterable<Track>;
    /**
     * The total number of tracks in this playlist.
     */
    totalTracks: number;
}
export declare enum NetworkState {
    /**
     * The network is offline when we don't have an open connection to the network
     * (no connection to the announcment and or status UDP socket is present).
     */
    Offline = 0,
    /**
     * The network is online when we have opened sockets to the network, but have
     * not yet started announcing ourselves as a virtual CDJ.
     */
    Online = 1,
    /**
     * The network is connected once we have heard from another device on the network
     */
    Connected = 2,
    /**
     * The network may have failed to connect if we aren't able to open the
     * announcment and or status UDP socket.
     */
    Failed = 3
}
/**
 * Mixstatus reporting modes specify how the mixstatus processor will determine when a new
 * track is 'now playing'.
 */
export declare enum MixstatusMode {
    /**
     * Tracks will be smartly marked as playing following rules:
     *
     * - The track that has been in the play state with the CDJ in the "on air" state
     *   for the longest period of time (allowing for a configurable length of
     *   interruption with allowedInterruptBeats) is considered to be the active
     *   track that incoming tracks will be compared against.
     *
     * - A incoming track will immediately be reported as nowPlaying if it is on
     *   air, playing, and the last active track has been cued.
     *
     * - A incoming track will be reported as nowPlaying if the active track has
     *   not been on air or has not been playing for the configured
     *   allowedInterruptBeats.
     *
     * - A incoming track will be reported as nowPlaying if it has played
     *   consecutively (with allowedInterruptBeats honored for the incoming track)
     *   for the configured beatsUntilReported.
     */
    SmartTiming = 0,
    /**
     * Tracks will not be reported after the beatsUntilReported AND will ONLY
     * be reported if the other track has gone into a non-playing play state, or
     * taken off air (when useOnAirStatus is enabled).
     */
    WaitsForSilence = 1,
    /**
     * The track will simply be reported only after the player becomes master.
     */
    FollowsMaster = 2
}
