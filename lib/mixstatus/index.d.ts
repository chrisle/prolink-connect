/// <reference types="node" />
import StrictEventEmitter from 'strict-event-emitter-types';
import { EventEmitter } from 'events';
import { CDJStatus, DeviceID, MixstatusMode } from "../types";
export interface MixstatusConfig {
    /**
     * Selects the mixstatus reporting mode
     */
    mode: MixstatusMode;
    /**
     * Specifies the duration in seconds that no tracks must be on air. This can
     * be thought of as how long 'air silence' is reasonable in a set before a
     * separate one is considered have begun.
     *
     * @default 30 (half a minute)
     */
    timeBetweenSets: number;
    /**
     * Indicates if the status objects reported should have their on-air flag
     * read. Setting this to false will degrade the functionality of the processor
     * such that it will not consider the value of isOnAir and always assume CDJs
     * are live.
     *
     * @default true
     */
    useOnAirStatus: boolean;
    /**
     * Configures how many beats a track may not be live or playing for it to
     * still be considered active.
     *
     * @default 8 (two bars)
     */
    allowedInterruptBeats: number;
    /**
     * Configures how many beats the track must consecutively be playing for
     * (since the beat it was cued at) until the track is considered to be
     * active.
     *
     * Used for MixstatusMode.SmartTiming
     *
     * @default 128 (2 phrases)
     */
    beatsUntilReported: number;
}
/**
 * The interface the mix status event emitter should follow
 */
interface MixstatusEvents {
    /**
     * Fired when a track is considered to be on-air and is being heard by the
     * audiance
     */
    nowPlaying: (state: CDJStatus.State) => void;
    /**
     * Fired when a track has stopped and is completley offair
     */
    stopped: (opt: {
        deviceId: DeviceID;
    }) => void;
    /**
     * Fired when a DJ set first starts
     */
    setStarted: () => void;
    /**
     * Fired when tracks have been stopped
     */
    setEnded: () => void;
}
declare type Emitter = StrictEventEmitter<EventEmitter, MixstatusEvents>;
/**
 * MixstatusProcessor is a configurable processor which when fed device state
 * will attempt to accurately determine events that happen within the DJ set.
 *
 * The following events are fired:
 *
 * - nowPlaying: The track is considered playing and on air to the audience.
 * - stopped:    The track was stopped / paused / went off-air.
 *
 * Additionally the following non-track status are reported:
 *
 * - setStarted: The first track has begun playing.
 * - setEnded:   The TimeBetweenSets has passed since any tracks were live.
 *
 * See Config for configuration options.
 *
 * Config options may be changed after the processor has been created and is
 * actively receiving state updates.
 */
export declare class MixstatusProcessor {
    #private;
    constructor(config?: Partial<MixstatusConfig>);
    /**
     * Update the configration
     */
    configure(config?: Partial<MixstatusConfig>): void;
    on: Emitter['on'];
    off: Emitter['off'];
    once: Emitter['once'];
    /**
     * Feed a CDJStatus state object to the mix state processor
     */
    handleState(state: CDJStatus.State): void;
    /**
     * Manually reports the track that has been playing the longest which has not
     * yet been reported as live.
     */
    triggerNextTrack(): void;
}
export {};
