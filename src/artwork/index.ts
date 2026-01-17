import {Device} from 'src/types';
import {getFileInfo, NfsMediaSlot} from 'src/nfs';

import {createNfsFileReader} from './reader';
import {ExtractedArtwork, FileReader} from './types';
import {extractFromMp3, extractFromMp4, extractFromFlac, extractFromAiff} from './parsers';

export type {ExtractedArtwork, FileReader} from './types';
export {PictureType} from './types';
export {createNfsFileReader, createNfsFileReaderWithInfo, createBufferReader} from './reader';

const SUPPORTED_EXTENSIONS = new Set(['mp3', 'm4a', 'mp4', 'aac', 'flac', 'aiff', 'aif']);

export function isArtworkExtractionSupported(extension: string): boolean {
  return SUPPORTED_EXTENSIONS.has(extension.toLowerCase());
}

export async function extractArtwork(reader: FileReader): Promise<ExtractedArtwork | null> {
  const ext = reader.extension.toLowerCase();

  switch (ext) {
    case 'mp3':
      return extractFromMp3(reader);
    case 'm4a':
    case 'mp4':
    case 'aac':
      return extractFromMp4(reader);
    case 'flac':
      return extractFromFlac(reader);
    case 'aiff':
    case 'aif':
      return extractFromAiff(reader);
    default:
      const mp3Result = await extractFromMp3(reader);
      if (mp3Result) return mp3Result;
      return extractFromMp4(reader);
  }
}

export async function extractArtworkFromDevice(
  device: Device,
  slot: NfsMediaSlot,
  filePath: string
): Promise<ExtractedArtwork | null> {
  const fileInfo = await getFileInfo({device, slot, path: filePath});
  const reader = createNfsFileReader(device, slot, filePath, fileInfo.size);
  return extractArtwork(reader);
}
