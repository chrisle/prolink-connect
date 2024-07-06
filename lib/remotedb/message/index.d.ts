/// <reference types="node" />
import { Span } from '@sentry/tracing';
import { PromiseReadable } from 'promise-readable';
import { Field } from "../fields";
import { responseTransform } from "./response";
import { MessageType, Response } from "./types";
interface Options<T extends MessageType> {
    transactionId?: number;
    type: T;
    args: Field[];
}
declare type ResponseType<T> = T extends Response ? T : never;
declare type Data<T> = ReturnType<(typeof responseTransform)[ResponseType<T>]>;
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
    get buffer(): Buffer;
    /**
     * The JS representation of the message.
     *
     * Currently only supports representing response messages.
     */
    get data(): Data<T>;
}
export {};
