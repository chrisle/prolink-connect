/// <reference types="node" />
import { Span } from '@sentry/tracing';
import * as entities from "../entities";
import { Item, ItemType } from './message/item';
import { Connection, LookupDescriptor, Query } from '.';
/**
 * This module contains logic for each type of query to understand what
 * arguments are required, and how to transform the resulting Items into
 * something useful.
 */
interface HandlerOpts<A extends Record<string, unknown> = Record<string, unknown>> {
    conn: Connection;
    lookupDescriptor: LookupDescriptor;
    span: Span;
    args: A;
}
declare type TrackQueryOpts = HandlerOpts<{
    /**
     * The ID of the track to query for
     */
    trackId: number;
}>;
/**
 * Lookup track metadata from rekordbox and coerce it into a Track entity
 */
declare function getMetadata(opts: TrackQueryOpts): Promise<entities.Track<entities.EntityFK.WithRelations>>;
/**
 * Lookup generic metadata for an unanalyzed track
 */
declare function getGenericMetadata(opts: TrackQueryOpts): Promise<entities.Track<entities.EntityFK.WithRelations>>;
/**
 * Lookup the artwork image given the artworkId obtained from a track
 */
declare function getArtwork(opts: HandlerOpts<{
    artworkId: number;
}>): Promise<Buffer>;
/**
 * Lookup the beatgrid for the specified trackId
 */
declare function getBeatgrid(opts: TrackQueryOpts): Promise<import("..").BeatGrid>;
/**
 * Lookup the waveform preview for the specified trackId
 */
declare function getWaveformPreview(opts: TrackQueryOpts): Promise<import("..").WaveformPreview>;
/**
 * Lookup the detailed waveform for the specified trackId
 */
declare function getWaveformDetailed(opts: TrackQueryOpts): Promise<import("..").WaveformDetailed>;
/**
 * Lookup the HD (nexus2) waveform for the specified trackId
 */
declare function getWaveformHD(opts: TrackQueryOpts): Promise<import("..").WaveformHD>;
/**
 * Lookup the [hot]cue points and [hot]loops for a track
 */
declare function getCueAndLoops(opts: TrackQueryOpts): Promise<import("..").CueAndLoop[]>;
/**
 * Lookup the "advanced" (nexus2) [hot]cue points and [hot]loops for a track
 */
declare function getCueAndLoopsAdv(opts: TrackQueryOpts): Promise<import("..").CueAndLoop[]>;
/**
 * Lookup the track information, currently just returns the track path
 */
declare function getTrackInfo(opts: TrackQueryOpts): Promise<string>;
declare type PlaylistQueryOpts = HandlerOpts<{
    /**
     * The ID of the playlist to query for. May be left blank to query the root
     * playlist folder.
     */
    id?: number;
    /**
     * When querying for a playlist folder this must be true.
     */
    isFolderRequest: boolean;
}>;
/**
 * Lookup playlist entries
 */
declare function getPlaylist(opts: PlaylistQueryOpts): Promise<{
    folders: entities.Playlist[];
    playlists: entities.Playlist[];
    trackEntries: Item<ItemType.TrackTitle>[];
}>;
export declare const queryHandlers: {
    8194: typeof getMetadata;
    8195: typeof getArtwork;
    8196: typeof getWaveformPreview;
    8450: typeof getTrackInfo;
    8706: typeof getGenericMetadata;
    8452: typeof getCueAndLoops;
    8708: typeof getBeatgrid;
    10500: typeof getWaveformDetailed;
    11012: typeof getCueAndLoopsAdv;
    11268: typeof getWaveformHD;
    4357: typeof getPlaylist;
};
export declare type Handler<T extends Query> = (typeof queryHandlers)[T];
export declare type HandlerArgs<T extends Query> = Parameters<Handler<T>>[0]['args'];
export declare type HandlerReturn<T extends Query> = ReturnType<Handler<T>>;
export {};
