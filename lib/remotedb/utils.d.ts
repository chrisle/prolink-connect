import { Span } from '@sentry/tracing';
import { Items, ItemType } from './message/item';
import { Message } from './message';
import { Connection, LookupDescriptor } from '.';
export declare const fieldFromDescriptor: ({ hostDevice, menuTarget, trackSlot, trackType, }: LookupDescriptor) => {
    value: number;
    readonly buffer: Buffer;
    data: Buffer;
    constructor: typeof import("./fields").BaseField;
};
export declare const makeRenderMessage: (descriptor: LookupDescriptor, offset: number, count: number, total: number) => Message<import("./message/types").ControlRequest.RenderMenu>;
/**
 * Async generator to page through menu results after a successful lookup
 * request.
 */
export declare function renderItems<T extends ItemType = ItemType>(conn: Connection, descriptor: LookupDescriptor, total: number, span: Span): AsyncGenerator<Items[T], void, unknown>;
/**
 * Locate the color item in an item list
 */
export declare const findColor: (items: Array<Items[ItemType]>) => import("./message/item").Item<ItemType.ColorNone> | import("./message/item").Item<ItemType.ColorPink> | import("./message/item").Item<ItemType.ColorRed> | import("./message/item").Item<ItemType.ColorOrange> | import("./message/item").Item<ItemType.ColorYellow> | import("./message/item").Item<ItemType.ColorGreen> | import("./message/item").Item<ItemType.ColorAqua> | import("./message/item").Item<ItemType.ColorBlue> | import("./message/item").Item<ItemType.ColorPurple>;
