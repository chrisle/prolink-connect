import { TelemetrySpan as Span } from "../../utils/telemetry";
import { PromiseReadable } from 'promise-readable';
import { Field } from "../fields";
import { responseTransform } from "./response";
import { MessageType, Response } from "./types";
interface Options<T extends MessageType> {
    transactionId?: number;
    type: T;
    args: Field[];
}
type ResponseType<T> = T extends Response ? T : never;
type Data<T> = ReturnType<(typeof responseTransform)[ResponseType<T>]>;
/**
 * Representation of a set of fields sequenced into a known message format.
 */
export declare class Message<T extends MessageType = MessageType> {
    /**
     * Read a single mesasge via a readable stream
     */
    static fromStream<T extends Response>(stream: PromiseReadable<any>, expect: T, span: Span): Promise<Message<T>>;
    /**
     * The transaction ID is used to associate responses to their requests.
     */
    transactionId?: number;
    readonly type: T;
    readonly args: Field[];
    constructor({ transactionId, type, args }: Options<T>);
    /**
     * The byte serialization of the message
     */
    get buffer(): Buffer<ArrayBuffer>;
    /**
     * The JS representation of the message.
     *
     * Currently only supports representing response messages.
     */
    get data(): Data<T>;
}
export {};
