import {Device} from 'src/types';
import {fetchFileRange, getFileInfo, NfsMediaSlot} from 'src/nfs';

import {FileReader} from './types';

/**
 * Create a FileReader backed by NFS that reads from a device's media slot.
 */
export function createNfsFileReader(
  device: Device,
  slot: NfsMediaSlot,
  path: string,
  fileSize: number
): FileReader {
  const extension = path.split('.').pop()?.toLowerCase() ?? '';

  return {
    size: fileSize,
    extension,
    read: async (offset: number, length: number): Promise<Buffer> => {
      return fetchFileRange({device, slot, path, offset, length});
    },
  };
}

/**
 * Create a FileReader backed by NFS, automatically fetching file size.
 */
export async function createNfsFileReaderWithInfo(
  device: Device,
  slot: NfsMediaSlot,
  path: string
): Promise<FileReader> {
  const fileInfo = await getFileInfo({device, slot, path});
  return createNfsFileReader(device, slot, path, fileInfo.size);
}

/**
 * Create a FileReader from a Buffer (for testing).
 */
export function createBufferReader(buffer: Buffer, extension: string): FileReader {
  return {
    size: buffer.length,
    extension,
    read: async (offset: number, length: number): Promise<Buffer> => {
      const end = Math.min(offset + length, buffer.length);
      return buffer.subarray(offset, end);
    },
  };
}
