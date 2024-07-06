/// <reference types="node" />
import { Device } from "../types";
/**
 * Converts a announce packet to a device object.
 */
export declare function deviceFromPacket(packet: Buffer): Device | null;
