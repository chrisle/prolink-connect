/// <reference types="node" />
import { CDJStatus, MediaSlotInfo } from "../types";
export declare function statusFromPacket(packet: Buffer): CDJStatus.State | undefined;
export declare function mediaSlotFromPacket(packet: Buffer): MediaSlotInfo | undefined;
