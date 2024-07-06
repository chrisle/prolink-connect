/// <reference types="node" />
/// <reference types="node" />
import { Mutex } from 'async-mutex';
import { OperationOptions } from 'retry';
import { Socket } from 'dgram';
interface RpcCall {
    port: number;
    program: number;
    version: number;
    procedure: number;
    data: Buffer;
}
/**
 * Configuration for the retry strategy to use when making RPC calls
 *
 * @see https://www.npmjs.com/package/promise-retry#promiseretryfn-options
 */
export declare type RetryConfig = OperationOptions & {
    /**
     * Time in milliseconds to wait before a RPC transaction should timeout.
     * @default 1000
     */
    transactionTimeout?: number;
};
/**
 * Generic RPC connection. Can be used to make RPC 2 calls to any program
 * specified in the RpcCall.
 */
export declare class RpcConnection {
    address: string;
    retryConfig: RetryConfig;
    socket: Socket;
    mutex: Mutex;
    xid: number;
    constructor(address: string, retryConfig?: RetryConfig);
    get connected(): boolean;
    setupRequest({ program, version, procedure, data }: Omit<RpcCall, 'port'>): any;
    /**
     * Execute a RPC transaction (call and response).
     *
     * If a transaction does not complete after the configured timeout it will be
     * retried with the retry configuration.
     */
    call({ port, ...call }: RpcCall): Promise<Buffer>;
    disconnect(): Promise<void>;
}
declare type RpcProgramCall = Pick<RpcCall, 'procedure' | 'data'>;
/**
 * RpcProgram is constructed with specialization details for a specific RPC
 * program. This should be used to avoid having to repeat yourself for calls
 * made using the RpcConnection.
 */
export declare class RpcProgram {
    program: number;
    version: number;
    port: number;
    conn: RpcConnection;
    constructor(conn: RpcConnection, program: number, version: number, port: number);
    call(data: RpcProgramCall): Promise<Buffer>;
    disconnect(): void;
}
export {};
