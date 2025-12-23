import { CDJStatus, MediaSlotInfo } from 'src/types';
export declare function statusFromPacket(packet: Buffer): CDJStatus.State | undefined;
export declare function mediaSlotFromPacket(packet: Buffer): MediaSlotInfo | undefined;
/**
 * Parse absolute position packet from CDJ-3000+ devices.
 * These packets are sent every 30ms on port 50001 while a track is loaded.
 * Packet structure: subtype 0x00, lenr varies based on device.
 */
export declare function positionFromPacket(packet: Buffer): CDJStatus.PositionState | undefined;
