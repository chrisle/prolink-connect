import { Field } from "../fields";
import { BeatGrid, CueAndLoop, WaveformDetailed, WaveformHD, WaveformPreview } from "../../types";
export declare const responseTransform: {
    readonly 16384: (args: Field[]) => {
        itemsAvailable: number;
    };
    readonly 16387: (_args: Field[]) => null;
    readonly 16385: (_args: Field[]) => null;
    readonly 16897: (_args: Field[]) => null;
    readonly 16641: (args: Field[]) => import("./item").Items[import("./item").ItemType];
    readonly 16386: (args: Field[]) => Buffer;
    readonly 17922: (args: Field[]) => BeatGrid;
    readonly 18178: (args: Field[]) => CueAndLoop[];
    readonly 17410: (args: Field[]) => WaveformPreview;
    readonly 18946: (args: Field[]) => WaveformDetailed;
    readonly 20226: (args: Field[]) => WaveformHD;
    readonly 19970: (args: Field[]) => CueAndLoop[];
};
