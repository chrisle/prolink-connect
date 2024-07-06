/// <reference types="node" />
import { PromiseReadable } from 'promise-readable';
/**
 * Field type is a leading byte that indicates what the field is.
 */
export declare enum FieldType {
    UInt8 = 15,
    UInt16 = 16,
    UInt32 = 17,
    Binary = 20,
    String = 38
}
/**
 * The generic interface for all field types
 */
export interface BaseField {
    /**
     * The raw field data
     */
    data: Buffer;
    /**
     * Corce the field into a buffer. This differes from reading the data
     * property in that it will include the field type header.
     */
    readonly buffer: Buffer;
}
export declare class BaseField {
    /**
     * Declares the type of field this class represents
     */
    static type: FieldType;
    /**
     * The number of bytes to read for this field. If the field is not a fixed size,
     * set this to a function which will recieve the UInt32 value just after
     * reading the field type, returning the next number of bytes to read.
     */
    static bytesToRead: number | ((reportedLength: number) => number);
    ['constructor']: typeof BaseField;
}
export declare type NumberField<T extends number = number> = BaseField & {
    /**
     * The fields number value
     */
    value: T;
};
export declare type StringField<T extends string = string> = BaseField & {
    /**
     * The fields decoded string value
     */
    value: T;
};
export declare type BinaryField = BaseField & {
    /**
     * The binary value encapsulated in the field
     */
    value: Buffer;
};
export declare type Field = NumberField | StringField | BinaryField;
declare type NumberFieldType = FieldType.UInt32 | FieldType.UInt16 | FieldType.UInt8;
/**
 * Field representing a UInt8
 */
export declare const UInt8: {
    new (value: number | Buffer): {
        value: number;
        readonly buffer: Buffer;
        /**
         * The raw field data
         */
        data: Buffer;
        constructor: typeof BaseField;
    };
    type: NumberFieldType;
    bytesToRead: 1 | 2 | 4;
};
/**
 * Field representing a UInt16
 */
export declare const UInt16: {
    new (value: number | Buffer): {
        value: number;
        readonly buffer: Buffer;
        /**
         * The raw field data
         */
        data: Buffer;
        constructor: typeof BaseField;
    };
    type: NumberFieldType;
    bytesToRead: 1 | 2 | 4;
};
/**
 * Field representing a UInt32
 */
export declare const UInt32: {
    new (value: number | Buffer): {
        value: number;
        readonly buffer: Buffer;
        /**
         * The raw field data
         */
        data: Buffer;
        constructor: typeof BaseField;
    };
    type: NumberFieldType;
    bytesToRead: 1 | 2 | 4;
};
/**
 * Field representing a null-terminated big endian UTF-16 string
 */
export declare class String extends BaseField implements StringField {
    static type: FieldType.String;
    static bytesToRead: (length: number) => number;
    value: string;
    constructor(value: Buffer | string);
    get buffer(): Buffer;
}
/**
 * Field representing binary data
 */
export declare class Binary extends BaseField implements BinaryField {
    static type: FieldType.Binary;
    static bytesToRead: (bytes: number) => number;
    value: Buffer;
    constructor(value: Buffer);
    get buffer(): Buffer;
}
declare const fieldMap: {
    readonly 15: {
        new (value: number | Buffer): {
            value: number;
            readonly buffer: Buffer;
            /**
             * The raw field data
             */
            data: Buffer;
            constructor: typeof BaseField;
        };
        type: NumberFieldType;
        bytesToRead: 1 | 2 | 4;
    };
    readonly 16: {
        new (value: number | Buffer): {
            value: number;
            readonly buffer: Buffer;
            /**
             * The raw field data
             */
            data: Buffer;
            constructor: typeof BaseField;
        };
        type: NumberFieldType;
        bytesToRead: 1 | 2 | 4;
    };
    readonly 17: {
        new (value: number | Buffer): {
            value: number;
            readonly buffer: Buffer;
            /**
             * The raw field data
             */
            data: Buffer;
            constructor: typeof BaseField;
        };
        type: NumberFieldType;
        bytesToRead: 1 | 2 | 4;
    };
    readonly 20: typeof Binary;
    readonly 38: typeof String;
};
/**
 * Read a single field from a socket stream.
 */
export declare function readField<T extends FieldType, F extends InstanceType<(typeof fieldMap)[T]>>(stream: PromiseReadable<any>, expect: T): Promise<F>;
export {};
