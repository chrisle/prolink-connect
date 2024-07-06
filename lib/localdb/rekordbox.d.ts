/// <reference types="node" />
import { Span } from '@sentry/tracing';
import { Track } from "../entities";
import { MetadataORM } from "./orm";
import { BeatGrid, CueAndLoop, WaveformHD } from "../types";
/**
 * The provided function should resolve ANLZ files into buffers. Typically
 * you would just read the file, but in the case of the prolink network, this
 * would handle loading the file over NFS.
 */
declare type AnlzResolver = (path: string) => Promise<Buffer>;
/**
 * Data returned from loading DAT anlz files
 */
interface AnlzResponseDAT {
    /**
     * Embedded beat grid information
     */
    beatGrid: BeatGrid | null;
    /**
     * Embedded cue and loop information
     */
    cueAndLoops: CueAndLoop[] | null;
}
/**
 * Data returned from loading EXT anlz files
 */
interface AnlzResponseEXT {
    /**
     * HD Waveform information
     */
    waveformHd: WaveformHD | null;
}
interface AnlzResponse {
    DAT: AnlzResponseDAT;
    EXT: AnlzResponseEXT;
}
/**
 * Details about the current state of the hydtration task
 */
export interface HydrationProgress {
    /**
     * The specific table that progress is being reported for
     */
    table: string;
    /**
     * The total progress steps for this table
     */
    total: number;
    /**
     * The completed number of progress steps
     */
    complete: number;
}
/**
 * Options to hydrate the database
 */
interface Options {
    /**
     * The metadata ORM of which the tables will be hydrated
     */
    orm: MetadataORM;
    /**
     * This buffer should contain the Rekordbox pdb file contents. It will be
     * used to do the hydration
     */
    pdbData: Buffer;
    /**
     * Sentry tracing span for the parent transaction
     */
    span?: Span;
    /**
     * For larger music collections, it may take some time to load everything,
     * especially when limited by IO. When hydration progresses this function
     * will be called.
     */
    onProgress?: (progress: HydrationProgress) => void;
}
/**
 * Given a rekordbox pdb file contents. This function will hydrate the provided
 * database with all entities from the Rekordbox database. This includes all
 * track metadata, including analyzed metadata (such as beatgrids and waveforms).
 */
export declare function hydrateDatabase({ pdbData, span, ...options }: Options): Promise<void>;
/**
 * Loads the ANLZ data of a Track entity from the analyzePath.
 */
export declare function loadAnlz<T extends keyof AnlzResponse>(track: Track, type: T, anlzResolver: AnlzResolver): Promise<AnlzResponse[T]>;
export {};
