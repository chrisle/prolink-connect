import { CDJStatus, MediaSlotInfo } from "../types";
export declare function statusFromPacket(packet: Buffer): CDJStatus.State | undefined;
export declare function mediaSlotFromPacket(packet: Buffer): MediaSlotInfo | undefined;
/**
 * Parse absolute position packet from CDJ-3000+ devices.
 * These packets are sent every 30ms on port 50001 while a track is loaded.
 * Packet structure: subtype 0x00, lenr varies based on device.
 */
export declare function positionFromPacket(packet: Buffer): CDJStatus.PositionState | undefined;
/**
 * Parse on-air status packet from DJM mixer.
 * The mixer broadcasts which channels are currently audible.
 * Supports both 4-channel (subtype 0x00) and 6-channel (subtype 0x03) variants.
 *
 * Packet structure:
 * - 4-channel: subtype 0x00, length 0x0009 (9 data bytes: F1 F2 F3 F4 00 00 00 00 00)
 * - 6-channel: subtype 0x03, length 0x0011 (17 data bytes: F1 F2 F3 F4 00 00 00 00 00 F5 F6 00 30 00 00 00 00 00)
 */
export declare function onAirFromPacket(packet: Buffer): CDJStatus.OnAirStatus | undefined;
