/// <reference types="node" />
import { Socket } from 'dgram';
import { NetworkInterfaceInfoIPv4 } from 'os';
import DeviceManager from "../devices";
import { Device, DeviceID } from "../types";
/**
 * Constructs a virtual CDJ Device.
 */
export declare const getVirtualCDJ: (iface: NetworkInterfaceInfoIPv4, id: DeviceID) => Device;
/**
 * Returns a mostly empty-state status packet. This is currently used to report
 * the virtual CDJs status, which *seems* to be required for the CDJ to send
 * metadata about some unanalyzed mp3 files.
 */
export declare function makeStatusPacket(device: Device): Uint8Array;
/**
 * constructs the announce packet that is sent on the prolink network to
 * announce a devices existence.
 */
export declare function makeAnnouncePacket(deviceToAnnounce: Device): Uint8Array;
/**
 * the announcer service is used to report our fake CDJ to the prolink network,
 * as if it was a real CDJ.
 */
export declare class Announcer {
    #private;
    constructor(vcdj: Device, announceSocket: Socket, deviceManager: DeviceManager);
    start(): void;
    stop(): void;
}
