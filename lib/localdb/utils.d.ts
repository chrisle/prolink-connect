import { CueAndLoop, HotcueButton } from 'src/types';
/**
 * Create a CueAndLoop entry given common parameters
 */
export declare const makeCueLoopEntry: (isCue: boolean, isLoop: boolean, offset: number, length: number, button: false | HotcueButton) => null | CueAndLoop;
