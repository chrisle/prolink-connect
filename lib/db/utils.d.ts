import { Device, MediaSlot } from "../types";
interface AnlzLoaderOpts {
    device: Device;
    slot: MediaSlot.RB | MediaSlot.USB | MediaSlot.SD;
}
export declare function anlzLoader(opts: AnlzLoaderOpts): (path: string) => Promise<Buffer>;
export {};
