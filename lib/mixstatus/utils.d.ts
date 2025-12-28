import { CDJStatus } from "../types";
/**
 * Returns true if the the status reports a playing state.
 */
export declare const isPlaying: (s: CDJStatus.State) => boolean;
/**
 * Returns true if the status reports a stopping state.
 */
export declare const isStopping: (s: CDJStatus.State) => boolean;
