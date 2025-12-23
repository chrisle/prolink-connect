import { Socket } from 'dgram';
import { EventEmitter } from 'events';
import StrictEventEmitter from 'strict-event-emitter-types';
import { CDJStatus } from 'src/types';
interface PositionEvents {
    /**
     * Fired when an absolute position packet is received from a CDJ-3000+.
     * These packets are sent approximately every 30ms while a track is loaded.
     */
    position: (position: CDJStatus.PositionState) => void;
}
type Emitter = StrictEventEmitter<EventEmitter, PositionEvents>;
/**
 * The position emitter reports absolute playhead position updates from CDJ-3000+ devices.
 * These packets provide precise track position independent of beat grids, enabling
 * accurate timecode, lighting cue, and video synchronization even during scratching,
 * reverse play, loops, and needle jumps.
 */
declare class PositionEmitter {
    #private;
    /**
     * @param beatSocket A UDP socket to receive position packets on port 50001
     */
    constructor(beatSocket: Socket);
    on: Emitter['on'];
    off: Emitter['off'];
    once: Emitter['once'];
}
export default PositionEmitter;
