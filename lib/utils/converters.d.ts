import { WaveformHD } from "../types";
/**
 * Extracts a specific bitmask, shifting it to the bitmask.
 */
export declare const extractBitMask: (val: number, mask: number) => number;
/**
 * Pioneer colors are 3 bits, convert this to a percentage.
 */
export declare const extractColor: (val: number, mask: number) => number;
/**
 * Utility to generate an filled with byte offsets for each segment
 */
export declare const makeOffsetArray: (byteLength: number, segmentSize: number) => number[];
/**
 * Convert raw waveform HD data into the structured WaveformHD type
 */
export declare const convertWaveformHDData: (data: Buffer) => WaveformHD;
