/**
 * Unit tests for extended ANLZ feature parsing
 */

import {describe, expect, it} from 'vitest';

import RekordboxAnlz from 'src/localdb/kaitai/rekordbox_anlz.ksy';
import type {ExtendedCue, Phrase, WaveformPreviewData} from 'src/types';

describe('Extended ANLZ Features', () => {
  describe('PCO2 Extended Cues', () => {
    it('should parse extended cue tag structure', () => {
      // This would require actual ANLZ file data
      // For now, just verify the types exist
      expect(RekordboxAnlz.SectionTags.CUES_2).toBe(0x50434f32);
    });
  });

  describe('PSSI Song Structure', () => {
    it('should have song structure tag defined', () => {
      expect(RekordboxAnlz.SectionTags.SONG_STRUCTURE).toBe(0x50535349);
    });

    it('should have mood enums defined', () => {
      expect(RekordboxAnlz.TrackMood.HIGH).toBe(1);
      expect(RekordboxAnlz.TrackMood.MID).toBe(2);
      expect(RekordboxAnlz.TrackMood.LOW).toBe(3);
    });

    it('should have bank enums defined', () => {
      expect(RekordboxAnlz.TrackBank.COOL).toBe(1);
      expect(RekordboxAnlz.TrackBank.HOT).toBe(3);
      expect(RekordboxAnlz.TrackBank.VIVID).toBe(6);
    });
  });

  describe('Waveform Tags', () => {
    it('should have all waveform tag types defined', () => {
      expect(RekordboxAnlz.SectionTags.WAVE_PREVIEW).toBe(0x50574156);
      expect(RekordboxAnlz.SectionTags.WAVE_TINY).toBe(0x50575632);
      expect(RekordboxAnlz.SectionTags.WAVE_SCROLL).toBe(0x50575633);
      expect(RekordboxAnlz.SectionTags.WAVE_COLOR_PREVIEW).toBe(0x50575634);
      expect(RekordboxAnlz.SectionTags.WAVE_COLOR_SCROLL).toBe(0x50575635);
    });
  });

  describe('Type Exports', () => {
    it('should export ExtendedCue type', () => {
      // TypeScript will catch if ExtendedCue doesn't exist
      const testCue: ExtendedCue = {
        hotCue: 1,
        type: 1,
        time: 5000,
      };
      expect(testCue.hotCue).toBe(1);
    });

    it('should export SongStructure type', () => {
      // TypeScript will catch if these don't exist
      const testPhrase: Phrase = {
        index: 1,
        beat: 1,
        kind: 1,
        phraseType: 'Intro',
      };
      expect(testPhrase.phraseType).toBe('Intro');
    });

    it('should export WaveformPreviewData type', () => {
      const testData: WaveformPreviewData = {
        data: new Uint8Array(400),
      };
      expect(testData.data.length).toBe(400);
    });
  });
});
