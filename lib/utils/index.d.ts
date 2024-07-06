/// <reference types="node" />
import * as ip from 'ip-address';
import { NetworkInterfaceInfoIPv4 } from 'os';
import { Device, MediaSlot, TrackType } from "../types";
/**
 * Get the byte representation of the device name
 */
export declare function buildName(device: Device): Uint8Array;
/**
 * Determines the interface that routes the given address by comparing the
 * masked addresses. This type of information is generally determined through
 * the kernels routing table, but for sake of cross-platform compatibility, we
 * do some rudimentary lookup.
 */
export declare function getMatchingInterface(ipAddr: ip.Address4): (NetworkInterfaceInfoIPv4 & {
    name: string;
}) | null;
/**
 * Given a BPM and pitch value, compute how many seconds per beat
 */
export declare function bpmToSeconds(bpm: number, pitch: number): number;
/**
 * Returns a string representation of a media slot
 */
export declare function getSlotName(slot: MediaSlot): string;
/**
 * Returns a string representation of a track type
 */
export declare function getTrackTypeName(type: TrackType): string;
