import { Device } from 'src/types';
/**
 * Converts a announce packet to a device object.
 */
export declare function deviceFromPacket(packet: Buffer): Device | null;
