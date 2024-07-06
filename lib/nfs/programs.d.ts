/// <reference types="node" />
import { Span } from '@sentry/tracing';
import { RpcConnection, RpcProgram } from './rpc';
import { FetchProgress } from '.';
interface Program {
    id: number;
    version: number;
}
/**
 * Queries for the listening port of a RPC program
 */
export declare function makeProgramClient(conn: RpcConnection, program: Program): Promise<RpcProgram>;
/**
 * Export represents a NFS export on a remote system
 */
interface Export {
    /**
     * The name of the exported filesystem
     */
    filesystem: string;
    /**
     * The groups allowed to mount this filesystem
     */
    groups: string[];
}
/**
 * Attributes a remote file
 */
export interface FileInfo {
    handle: Buffer;
    name: string;
    size: number;
    type: 'null' | 'regular' | 'directory' | 'block' | 'char' | 'link';
}
/**
 * Request a list of export entries.
 */
export declare function getExports(conn: RpcProgram, span?: Span): Promise<Export[]>;
/**
 * Mount the specified export, returning the file handle.
 */
export declare function mountFilesystem(conn: RpcProgram, { filesystem }: Export, span?: Span): Promise<Buffer>;
/**
 * Lookup a file within the directory of the provided file handle, returning
 * the FileInfo object if the file can be located.
 */
export declare function lookupFile(conn: RpcProgram, handle: Buffer, filename: string, span?: Span): Promise<FileInfo>;
/**
 * Lookup the absolute path to a file, given the root file handle and path,
 */
export declare function lookupPath(conn: RpcProgram, rootHandle: Buffer, filepath: string, span?: Span): Promise<FileInfo>;
/**
 * Fetch the specified file the remote NFS server. This will read the entire
 * file into memory.
 */
export declare function fetchFile(conn: RpcProgram, file: FileInfo, onProgress?: (progress: FetchProgress) => void, span?: Span): Promise<Buffer>;
export {};
