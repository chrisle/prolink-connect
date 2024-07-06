/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { BindOptions, Socket } from 'dgram';
import { AddressInfo } from 'net';
/**
 * Async version of upd socket bind
 */
export declare function udpBind(conn: Socket, port?: number, address?: string): Promise<AddressInfo>;
export declare function udpBind(conn: Socket, options: BindOptions): Promise<AddressInfo>;
/**
 * Async version of udp socket read
 */
export declare function udpRead(conn: Socket): Promise<Buffer>;
/**
 * Async version of udp socket send
 */
export declare function udpSend(conn: Socket, msg: Buffer | string | Uint8Array | any[], port: number, address: string): Promise<number>;
export declare function udpSend(conn: Socket, msg: Buffer | string | Uint8Array, offset: number, length: number, port: number, address: string): Promise<number>;
/**
 * Async version of udp socket close
 */
export declare function udpClose(conn: Socket): Promise<unknown>;
