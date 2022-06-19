import * as Sentry from '@sentry/node';
import {Span} from '@sentry/tracing';

import {Track} from 'src/entities';
import LocalDatabase from 'src/localdb';
import {fetchFile} from 'src/nfs';
import RemoteDatabase, {MenuTarget, Query} from 'src/remotedb';
import {Device, DeviceID, MediaSlot, TrackType} from 'src/types';

export type Options = {
  /**
   * The device to query the file off of
   */
  deviceId: DeviceID;
  /**
   * The media slot the track is present in
   */
  trackSlot: MediaSlot;
  /**
   * The type of track we are querying file for
   */
  trackType: TrackType;
  /**
   * The track to get track for
   */
  track: Track;
  /**
   * The Sentry transaction span
   */
  span?: Span;
};

export async function viaRemote(remote: RemoteDatabase, device: Device, opts: Required<Options>) {
  const {deviceId, trackSlot, trackType, track, span} = opts;

  console.error('Getting a file from Rekordbox via ProDJ-Link is not yet supported.')
  return null;

  // const conn = await remote.get(deviceId);
  // if (conn === null) {
  //   return null;
  // }

  // if (track.artwork === null) {
  //   return null;
  // }

  // const queryDescriptor = {
  //   trackSlot,
  //   trackType,
  //   menuTarget: MenuTarget.Main,
  // };

  // return conn.query({
  //   queryDescriptor,
  //   query: Query.GetArtwork,
  //   args: {artworkId: track.artwork.id},
  //   span,
  // });
}

export async function viaLocal(
  local: LocalDatabase,
  device: Device,
  opts: Required<Options>
) {
  const {deviceId, trackSlot, track} = opts;

  if (trackSlot !== MediaSlot.USB && trackSlot !== MediaSlot.SD) {
    throw new Error('Expected USB or SD or RB slot for remote database query');
  }

  const conn = await local.get(deviceId, trackSlot);
  if (conn === null) {
    return null;
  }

  try {
    return fetchFile({
      device,
      slot: trackSlot,
      path: track.filePath
    });
  } catch (error) {
    Sentry.captureException(error);
    return null;
  }
}
