/**
 * The default virtual CDJ ID to use.
 *
 * This particular ID is out of the 1-6 range, thus will not be able to request
 * metadata via the remotedb for CDJs.
 */
export declare const DEFAULT_VCDJ_ID = 7;
/**
 * The port on which devices on the prolink network announce themselves.
 */
export declare const ANNOUNCE_PORT = 50000;
/**
 * The port on which devices on the prolink network send beat timing information.
 */
export declare const BEAT_PORT = 50001;
/**
 * The port on which devices on the prolink network announce themselves.
 */
export declare const STATUS_PORT = 50002;
/**
 * The amount of time in ms between sending each announcement packet.
 */
export declare const ANNOUNCE_INTERVAL = 1500;
/**
 * The interval in ms between startup stage packets (0x0a, 0x00, 0x02, 0x04).
 */
export declare const STARTUP_STAGE_INTERVAL = 300;
/**
 * All UDP packets on the PRO DJ LINK network start with this magic header.
 */
export declare const PROLINK_HEADER: Uint8Array<ArrayBuffer>;
/**
 * VirtualCDJName is the name given to the Virtual CDJ device.
 */
export declare const VIRTUAL_CDJ_NAME = "Now Playing";
/**
 * VirtualCDJFirmware is a string indicating the firmware version reported with
 * status packets.
 */
export declare const VIRTUAL_CDJ_FIRMWARE = "1.43";
