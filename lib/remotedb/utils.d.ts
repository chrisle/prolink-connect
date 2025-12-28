import { Span } from '@sentry/tracing';
import { Items, ItemType } from './message/item';
import { Message } from './message';
import { Connection, LookupDescriptor } from '.';
export declare const fieldFromDescriptor: ({ hostDevice, menuTarget, trackSlot, trackType, }: LookupDescriptor) => {
    value: number;
    readonly buffer: Buffer<ArrayBuffer>;
    constructor: typeof import("./fields").BaseField;
    data: Buffer;
};
export declare const makeRenderMessage: (descriptor: LookupDescriptor, offset: number, count: number, total: number) => Message<import("./message/types").ControlRequest.RenderMenu>;
/**
 * Async generator to page through menu results after a successful lookup
 * request.
 */
export declare function renderItems<T extends ItemType = ItemType>(conn: Connection, descriptor: LookupDescriptor, total: number, span: Span): AsyncGenerator<Items[T], void, unknown>;
declare const colors: readonly [ItemType.ColorNone, ItemType.ColorPink, ItemType.ColorRed, ItemType.ColorOrange, ItemType.ColorYellow, ItemType.ColorGreen, ItemType.ColorAqua, ItemType.ColorBlue, ItemType.ColorPurple];
type ColorType = (typeof colors)[number];
/**
 * Locate the color item in an item list
 */
export declare const findColor: (items: Array<Items[ItemType]>) => Items[ColorType];
export {};
