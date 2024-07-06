/// <reference types="node" />
/// <reference types="node" />
import StrictEventEmitter from 'strict-event-emitter-types';
import { Socket } from 'dgram';
import { EventEmitter } from 'events';
import { Device, DeviceID } from "../types";
interface Config {
    /**
     * Time in milliseconds after which a device is considered to have
     * disconnected if it has not broadcast an announcment.
     *
     * @default 10000 ms
     */
    deviceTimeout?: number;
}
/**
 * The configuration object that may be passed to reconfigure the manager
 */
declare type ConfigEditable = Omit<Config, 'announceSocket'>;
/**
 * The interface the device manager event emitter should follow
 */
interface DeviceEvents {
    /**
     * Fired when a new device becomes available on the network
     */
    connected: (device: Device) => void;
    /**
     * Fired when a device has not announced itself on the network for the
     * specified timeout.
     */
    disconnected: (device: Device) => void;
    /**
     * Fired every time the device announces itself on the network
     */
    announced: (device: Device) => void;
}
declare type Emitter = StrictEventEmitter<EventEmitter, DeviceEvents>;
/**
 * The device manager is responsible for tracking devices that appear on the
 * prolink network, providing an API to react to devices livecycle events as
 * they connect and disconnect form the network.
 */
declare class DeviceManager {
    #private;
    constructor(announceSocket: Socket, config?: Config);
    on: Emitter['on'];
    off: Emitter['off'];
    once: Emitter['once'];
    /**
     * Get active devices on the network.
     */
    get devices(): Map<number, Device>;
    /**
     * Waits for a specific device ID to appear on the network, with a
     * configurable timeout, in which case it will resolve with null.
     */
    getDeviceEnsured(id: DeviceID, timeout?: number): Promise<Device | null>;
    reconfigure(config: ConfigEditable): void;
}
export default DeviceManager;
