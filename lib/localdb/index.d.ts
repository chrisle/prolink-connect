/// <reference types="node" />
import StrictEventEmitter from 'strict-event-emitter-types';
import { EventEmitter } from 'events';
import DeviceManager from "../devices";
import { FetchProgress } from "../nfs";
import StatusEmitter from "../status";
import { Device, DeviceID, MediaSlot } from "../types";
import { MetadataORM } from './orm';
import { HydrationProgress } from './rekordbox';
/**
 * Rekordbox databases will only exist within these two slots
 */
declare type DatabaseSlot = MediaSlot.USB | MediaSlot.SD;
interface CommonProgressOpts {
    /**
     * The device progress is being reported for
     */
    device: Device;
    /**
     * The media slot progress is being reported for
     */
    slot: MediaSlot;
}
declare type DownloadProgressOpts = CommonProgressOpts & {
    /**
     * The current progress of the fetch
     */
    progress: FetchProgress;
};
declare type HydrationProgressOpts = CommonProgressOpts & {
    /**
     * The current progress of the database hydration
     */
    progress: HydrationProgress;
};
declare type HydrationDoneOpts = CommonProgressOpts;
/**
 * Events that may be triggered  by the LocalDatabase emitter
 */
interface DatabaseEvents {
    /**
     * Triggered when we are fetching a database from a CDJ
     */
    fetchProgress: (opts: DownloadProgressOpts) => void;
    /**
     * Triggered when we are hydrating a rekordbox database into the in-memory
     * sqlite database.
     */
    hydrationProgress: (opts: HydrationProgressOpts) => void;
    /**
     * Triggered when the database has been fully hydrated.
     *
     * There is a period of time between hydrationProgress reporting 100% copletion,
     * and the database being flushed, so it may be useful to wait for this event
     * before considering the databas to be fully hydrated.
     */
    hydrationDone: (opts: HydrationDoneOpts) => void;
}
declare type Emitter = StrictEventEmitter<EventEmitter, DatabaseEvents>;
/**
 * The local database is responsible for syncing the remote rekordbox databases
 * of media slots on a device into in-memory sqlite databases.
 *
 * This service will attempt to ensure the in-memory databases for each media
 * device that is connected to a CDJ is locally kept in sync. Fetching the
 * database for any media slot of it's not already cached.
 */
declare class LocalDatabase {
    #private;
    constructor(hostDevice: Device, deviceManager: DeviceManager, statusEmitter: StatusEmitter);
    on: Emitter['on'];
    off: Emitter['off'];
    once: Emitter['once'];
    /**
     * Disconnects the local database connection for the specified device
     */
    disconnectForDevice(device: Device): void;
    /**
     * Gets the sqlite ORM service for to a database hydrated with the media
     * metadata for the provided device slot.
     *
     * If the database has not already been hydrated this will first hydrate the
     * database, which may take some time depending on the size of the database.
     *
     * @returns null if no rekordbox media present
     */
    get(deviceId: DeviceID, slot: DatabaseSlot): Promise<MetadataORM | null>;
    /**
     * Preload the databases for all connected devices.
     */
    preload(): Promise<void>;
}
export default LocalDatabase;
