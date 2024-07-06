import { Device, MediaSlot } from "../types";
interface Options {
    /**
     * The device asking for media info
     */
    hostDevice: Device;
    /**
     * The target device. This is the device we'll be querying for details of
     * it's media slot.
     */
    device: Device;
    /**
     * The specific slot
     */
    slot: MediaSlot;
}
/**
 * Get information about the media connected to the specifed slot on the
 * device.
 */
export declare const makeMediaSlotRequest: ({ hostDevice, device, slot }: Options) => Uint8Array;
export {};
