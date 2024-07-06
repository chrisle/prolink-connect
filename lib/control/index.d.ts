/// <reference types="node" />
import { Socket } from 'dgram';
import { CDJStatus, Device } from "../types";
interface Options {
    hostDevice: Device;
    device: Device;
    playState: CDJStatus.PlayState.Cued | CDJStatus.PlayState.Playing;
}
/**
 * Generates the packet used to control the playstate of CDJs
 */
export declare const makePlaystatePacket: ({ hostDevice, device, playState }: Options) => Uint8Array;
export default class Control {
    #private;
    constructor(beatSocket: Socket, hostDevice: Device);
    /**
     * Start or stop a CDJ on the network
     */
    setPlayState(device: Device, playState: Options['playState']): Promise<void>;
}
export {};
