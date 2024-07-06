/// <reference types="node" />
/// <reference types="node" />
import StrictEventEmitter from 'strict-event-emitter-types';
import { Socket } from 'dgram';
import { EventEmitter } from 'events';
import { CDJStatus, MediaSlotInfo } from "../types";
import { makeMediaSlotRequest } from './media';
interface StatusEvents {
    /**
     * Fired each time the CDJ reports its status
     */
    status: (status: CDJStatus.State) => void;
    /**
     * Fired when the CDJ reports its media slot status
     */
    mediaSlot: (info: MediaSlotInfo) => void;
}
declare type Emitter = StrictEventEmitter<EventEmitter, StatusEvents>;
declare type MediaSlotOptions = Parameters<typeof makeMediaSlotRequest>[0];
/**
 * The status emitter will report every time a device status is recieved
 */
declare class StatusEmitter {
    #private;
    /**
     * @param statusSocket A UDP socket to recieve CDJ status packets on
     */
    constructor(statusSocket: Socket);
    on: Emitter['on'];
    off: Emitter['off'];
    once: Emitter['once'];
    /**
     * Retrieve media slot status information.
     */
    queryMediaSlot(options: MediaSlotOptions): Promise<MediaSlotInfo>;
}
export default StatusEmitter;
