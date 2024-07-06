/// <reference types="node" />
import { Span } from '@sentry/tracing';
import { Mutex } from 'async-mutex';
import PromiseSocket from 'promise-socket';
import { Socket } from 'net';
import DeviceManager from "../devices";
import { Device, DeviceID, MediaSlot, TrackType } from "../types";
import { Response } from './message/types';
import { Message } from './message';
import { HandlerArgs, HandlerReturn, queryHandlers } from './queries';
declare type Await<T> = T extends PromiseLike<infer U> ? U : T;
/**
 * Menu target specifies where a menu should be "rendered" This differes based
 * on the request being made.
 */
export declare enum MenuTarget {
    Main = 1
}
/**
 * Used to specify where to lookup data when making queries
 */
export interface QueryDescriptor {
    menuTarget: MenuTarget;
    trackSlot: MediaSlot;
    trackType: TrackType;
}
/**
 * Used internally when making queries.
 */
export declare type LookupDescriptor = QueryDescriptor & {
    targetDevice: Device;
    hostDevice: Device;
};
/**
 * Used to specify the query type that is being made
 */
export declare type Query = keyof typeof queryHandlers;
export declare const Query: {
    readonly [x: number]: string;
    readonly GetMetadata: import("./message/types").DataRequest.GetMetadata;
    readonly GetArtwork: import("./message/types").DataRequest.GetArtwork;
    readonly GetWaveformPreview: import("./message/types").DataRequest.GetWaveformPreview;
    readonly GetTrackInfo: import("./message/types").DataRequest.GetTrackInfo;
    readonly GetGenericMetadata: import("./message/types").DataRequest.GetGenericMetadata;
    readonly GetCueAndLoops: import("./message/types").DataRequest.GetCueAndLoops;
    readonly GetBeatGrid: import("./message/types").DataRequest.GetBeatGrid;
    readonly GetWaveformDetailed: import("./message/types").DataRequest.GetWaveformDetailed;
    readonly GetAdvCueAndLoops: import("./message/types").DataRequest.GetAdvCueAndLoops;
    readonly GetWaveformHD: import("./message/types").DataRequest.GetWaveformHD;
    readonly MenuRoot: import("./message/types").MenuRequest.MenuRoot;
    readonly MenuGenre: import("./message/types").MenuRequest.MenuGenre;
    readonly MenuArtist: import("./message/types").MenuRequest.MenuArtist;
    readonly MenuAlbum: import("./message/types").MenuRequest.MenuAlbum;
    readonly MenuTrack: import("./message/types").MenuRequest.MenuTrack;
    readonly MenuBPM: import("./message/types").MenuRequest.MenuBPM;
    readonly MenuRating: import("./message/types").MenuRequest.MenuRating;
    readonly MenuYear: import("./message/types").MenuRequest.MenuYear;
    readonly MenuLabel: import("./message/types").MenuRequest.MenuLabel;
    readonly MenuColor: import("./message/types").MenuRequest.MenuColor;
    readonly MenuTime: import("./message/types").MenuRequest.MenuTime;
    readonly MenuBitrate: import("./message/types").MenuRequest.MenuBitrate;
    readonly MenuHistory: import("./message/types").MenuRequest.MenuHistory;
    readonly MenuFilename: import("./message/types").MenuRequest.MenuFilename;
    readonly MenuKey: import("./message/types").MenuRequest.MenuKey;
    readonly MenuOriginalArtist: import("./message/types").MenuRequest.MenuOriginalArtist;
    readonly MenuRemixer: import("./message/types").MenuRequest.MenuRemixer;
    readonly MenuPlaylist: import("./message/types").MenuRequest.MenuPlaylist;
    readonly MenuArtistsOfGenre: import("./message/types").MenuRequest.MenuArtistsOfGenre;
    readonly MenuAlbumsOfArtist: import("./message/types").MenuRequest.MenuAlbumsOfArtist;
    readonly MenuTracksOfAlbum: import("./message/types").MenuRequest.MenuTracksOfAlbum;
    readonly MenuTracksOfRating: import("./message/types").MenuRequest.MenuTracksOfRating;
    readonly MenuYearsOfDecade: import("./message/types").MenuRequest.MenuYearsOfDecade;
    readonly MenuArtistsOfLabel: import("./message/types").MenuRequest.MenuArtistsOfLabel;
    readonly MenuTracksOfColor: import("./message/types").MenuRequest.MenuTracksOfColor;
    readonly MenuTracksOfTime: import("./message/types").MenuRequest.MenuTracksOfTime;
    readonly MenuTracksOfHistory: import("./message/types").MenuRequest.MenuTracksOfHistory;
    readonly MenuDistancesOfKey: import("./message/types").MenuRequest.MenuDistancesOfKey;
    readonly MenuAlbumsOfOriginalArtist: import("./message/types").MenuRequest.MenuAlbumsOfOriginalArtist;
    readonly MenuAlbumsOfRemixer: import("./message/types").MenuRequest.MenuAlbumsOfRemixer;
    readonly MenuAlbumsOfGenreAndArtist: import("./message/types").MenuRequest.MenuAlbumsOfGenreAndArtist;
    readonly MenuTracksOfArtistAndAlbum: import("./message/types").MenuRequest.MenuTracksOfArtistAndAlbum;
    readonly MenuTracksOfBPMPercentRange: import("./message/types").MenuRequest.MenuTracksOfBPMPercentRange;
    readonly MenuTracksOfDecadeAndYear: import("./message/types").MenuRequest.MenuTracksOfDecadeAndYear;
    readonly MenuAlbumsOfLabelAndArtist: import("./message/types").MenuRequest.MenuAlbumsOfLabelAndArtist;
    readonly MenuTracksNearKey: import("./message/types").MenuRequest.MenuTracksNearKey;
    readonly MenuTracksOfOriginalArtistAndAlbum: import("./message/types").MenuRequest.MenuTracksOfOriginalArtistAndAlbum;
    readonly MenuTracksOfRemixerAndAlbum: import("./message/types").MenuRequest.MenuTracksOfRemixerAndAlbum;
    readonly MenuTracksOfGenreArtistAndAlbum: import("./message/types").MenuRequest.MenuTracksOfGenreArtistAndAlbum;
    readonly MenuTracksOfLabelArtistAndAlbum: import("./message/types").MenuRequest.MenuTracksOfLabelArtistAndAlbum;
    readonly MenuSearch: import("./message/types").MenuRequest.MenuSearch;
    readonly MenuFolder: import("./message/types").MenuRequest.MenuFolder;
    readonly Introduce: import("./message/types").ControlRequest.Introduce;
    readonly Disconnect: import("./message/types").ControlRequest.Disconnect;
    readonly RenderMenu: import("./message/types").ControlRequest.RenderMenu;
};
/**
 * Returns a string representation of a remote query
 */
export declare function getQueryName(query: Query): string;
/**
 * Options used to make a remotedb query
 */
interface QueryOpts<T extends Query> {
    queryDescriptor: QueryDescriptor;
    /**
     * The query type to make
     */
    query: T;
    /**
     * Arguments to pass to the query. These are query speciifc
     */
    args: HandlerArgs<T>;
    /**
     * The sentry span to assicate the query with
     */
    span?: Span;
}
/**
 * Manages a connection to a single device
 */
export declare class Connection {
    #private;
    device: Device;
    constructor(device: Device, socket: PromiseSocket<Socket>);
    writeMessage(message: Message, span: Span): Promise<void>;
    readMessage<T extends Response>(expect: T, span: Span): Promise<Message<T>>;
    close(): void;
}
export declare class QueryInterface {
    #private;
    constructor(conn: Connection, lock: Mutex, hostDevice: Device);
    /**
     * Make a query to the remote database connection.
     */
    query<T extends Query>(opts: QueryOpts<T>): Promise<Await<HandlerReturn<T>>>;
}
/**
 * Service that maintains remote database connections with devices on the network.
 */
export default class RemoteDatabase {
    #private;
    constructor(deviceManager: DeviceManager, hostDevice: Device);
    /**
     * Open a connection to the specified device for querying
     */
    connectToDevice: (device: Device) => Promise<void>;
    /**
     * Disconnect from the specified device
     */
    disconnectFromDevice: (device: Device) => Promise<void>;
    /**
     * Gets the remote database query interface for the given device.
     *
     * If we have not already established a connection with the specified device,
     * we will attempt to first connect.
     *
     * @returns null if the device does not export a remote database service
     */
    get(deviceId: DeviceID): Promise<QueryInterface | null>;
}
export {};
