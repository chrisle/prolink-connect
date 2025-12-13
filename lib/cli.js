/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/localdb/kaitai/rekordbox_anlz.ksy":
/*!***********************************************!*\
  !*** ./src/localdb/kaitai/rekordbox_anlz.ksy ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! kaitai-struct/KaitaiStream */ "kaitai-struct/KaitaiStream")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (KaitaiStream) {
/**
 * These files are created by rekordbox when analyzing audio tracks
 * to facilitate DJ performance. They include waveforms, beat grids
 * (information about the precise time at which each beat occurs),
 * time indices to allow efficient seeking to specific positions
 * inside variable bit-rate audio streams, and lists of memory cues
 * and loop points. They are used by Pioneer professional DJ
 * equipment.
 * 
 * The format has been reverse-engineered to facilitate sophisticated
 * integrations with light and laser shows, videos, and other musical
 * instruments, by supporting deep knowledge of what is playing and
 * what is coming next through monitoring the network communications
 * of the players.
 * @see {@link https://reverseengineering.stackexchange.com/questions/4311/help-reversing-a-edb-database-file-for-pioneers-rekordbox-software|Source}
 */

var RekordboxAnlz = (function() {
  RekordboxAnlz.CueEntryStatus = Object.freeze({
    DISABLED: 0,
    ENABLED: 1,

    0: "DISABLED",
    1: "ENABLED",
  });

  RekordboxAnlz.CueListType = Object.freeze({
    MEMORY_CUES: 0,
    HOT_CUES: 1,

    0: "MEMORY_CUES",
    1: "HOT_CUES",
  });

  RekordboxAnlz.MoodHighPhrase = Object.freeze({
    INTRO: 1,
    UP: 2,
    DOWN: 3,
    CHORUS: 5,
    OUTRO: 6,

    1: "INTRO",
    2: "UP",
    3: "DOWN",
    5: "CHORUS",
    6: "OUTRO",
  });

  RekordboxAnlz.TrackBank = Object.freeze({
    DEFAULT: 0,
    COOL: 1,
    NATURAL: 2,
    HOT: 3,
    SUBTLE: 4,
    WARM: 5,
    VIVID: 6,
    CLUB_1: 7,
    CLUB_2: 8,

    0: "DEFAULT",
    1: "COOL",
    2: "NATURAL",
    3: "HOT",
    4: "SUBTLE",
    5: "WARM",
    6: "VIVID",
    7: "CLUB_1",
    8: "CLUB_2",
  });

  RekordboxAnlz.CueEntryType = Object.freeze({
    MEMORY_CUE: 1,
    LOOP: 2,

    1: "MEMORY_CUE",
    2: "LOOP",
  });

  RekordboxAnlz.SectionTags = Object.freeze({
    CUES_2: 1346588466,
    CUES: 1346588482,
    PATH: 1347441736,
    BEAT_GRID: 1347507290,
    SONG_STRUCTURE: 1347638089,
    VBR: 1347830354,
    WAVE_PREVIEW: 1347895638,
    WAVE_TINY: 1347900978,
    WAVE_SCROLL: 1347900979,
    WAVE_COLOR_PREVIEW: 1347900980,
    WAVE_COLOR_SCROLL: 1347900981,

    1346588466: "CUES_2",
    1346588482: "CUES",
    1347441736: "PATH",
    1347507290: "BEAT_GRID",
    1347638089: "SONG_STRUCTURE",
    1347830354: "VBR",
    1347895638: "WAVE_PREVIEW",
    1347900978: "WAVE_TINY",
    1347900979: "WAVE_SCROLL",
    1347900980: "WAVE_COLOR_PREVIEW",
    1347900981: "WAVE_COLOR_SCROLL",
  });

  RekordboxAnlz.TrackMood = Object.freeze({
    HIGH: 1,
    MID: 2,
    LOW: 3,

    1: "HIGH",
    2: "MID",
    3: "LOW",
  });

  RekordboxAnlz.MoodMidPhrase = Object.freeze({
    INTRO: 1,
    VERSE_1: 2,
    VERSE_2: 3,
    VERSE_3: 4,
    VERSE_4: 5,
    VERSE_5: 6,
    VERSE_6: 7,
    BRIDGE: 8,
    CHORUS: 9,
    OUTRO: 10,

    1: "INTRO",
    2: "VERSE_1",
    3: "VERSE_2",
    4: "VERSE_3",
    5: "VERSE_4",
    6: "VERSE_5",
    7: "VERSE_6",
    8: "BRIDGE",
    9: "CHORUS",
    10: "OUTRO",
  });

  RekordboxAnlz.MoodLowPhrase = Object.freeze({
    INTRO: 1,
    VERSE_1: 2,
    VERSE_1B: 3,
    VERSE_1C: 4,
    VERSE_2: 5,
    VERSE_2B: 6,
    VERSE_2C: 7,
    BRIDGE: 8,
    CHORUS: 9,
    OUTRO: 10,

    1: "INTRO",
    2: "VERSE_1",
    3: "VERSE_1B",
    4: "VERSE_1C",
    5: "VERSE_2",
    6: "VERSE_2B",
    7: "VERSE_2C",
    8: "BRIDGE",
    9: "CHORUS",
    10: "OUTRO",
  });

  function RekordboxAnlz(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  RekordboxAnlz.prototype._read = function() {
    this.magic = this._io.readBytes(4);
    if (!((KaitaiStream.byteArrayCompare(this.magic, [80, 77, 65, 73]) == 0))) {
      throw new KaitaiStream.ValidationNotEqualError([80, 77, 65, 73], this.magic, this._io, "/seq/0");
    }
    this.lenHeader = this._io.readU4be();
    this.lenFile = this._io.readU4be();
    this._unnamed3 = this._io.readBytes((this.lenHeader - this._io.pos));
    this.sections = [];
    var i = 0;
    while (!this._io.isEof()) {
      this.sections.push(new TaggedSection(this._io, this, this._root));
      i++;
    }
  }

  var PhraseMid = RekordboxAnlz.PhraseMid = (function() {
    function PhraseMid(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    PhraseMid.prototype._read = function() {
      this.id = this._io.readU2be();
    }

    return PhraseMid;
  })();

  /**
   * Stores the file path of the audio file to which this analysis
   * applies.
   */

  var PathTag = RekordboxAnlz.PathTag = (function() {
    function PathTag(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    PathTag.prototype._read = function() {
      this.lenPath = this._io.readU4be();
      if (this.lenPath > 1) {
        this.path = KaitaiStream.bytesToStr(this._io.readBytes((this.lenPath - 2)), "utf-16be");
      }
    }

    return PathTag;
  })();

  /**
   * Stores a waveform preview image suitable for display above
   * the touch strip for jumping to a track position.
   */

  var WavePreviewTag = RekordboxAnlz.WavePreviewTag = (function() {
    function WavePreviewTag(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    WavePreviewTag.prototype._read = function() {
      this.lenPreview = this._io.readU4be();
      this._unnamed1 = this._io.readU4be();
      if (this._parent.lenTag > this._parent.lenHeader) {
        this.data = this._io.readBytes(this.lenPreview);
      }
    }

    /**
     * The length, in bytes, of the preview data itself. This is
     * slightly redundant because it can be computed from the
     * length of the tag.
     */

    /**
     * The actual bytes of the waveform preview.
     */

    return WavePreviewTag;
  })();

  /**
   * Holds a list of all the beats found within the track, recording
   * their bar position, the time at which they occur, and the tempo
   * at that point.
   */

  var BeatGridTag = RekordboxAnlz.BeatGridTag = (function() {
    function BeatGridTag(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    BeatGridTag.prototype._read = function() {
      this._unnamed0 = this._io.readU4be();
      this._unnamed1 = this._io.readU4be();
      this.lenBeats = this._io.readU4be();
      this.beats = new Array(this.lenBeats);
      for (var i = 0; i < this.lenBeats; i++) {
        this.beats[i] = new BeatGridBeat(this._io, this, this._root);
      }
    }

    /**
     * The number of beat entries which follow.
     */

    /**
     * The entries of the beat grid.
     */

    return BeatGridTag;
  })();

  /**
   * Stores the rest of the song structure tag, which can only be
   * parsed after unmasking.
   */

  var SongStructureBody = RekordboxAnlz.SongStructureBody = (function() {
    function SongStructureBody(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    SongStructureBody.prototype._read = function() {
      this.mood = this._io.readU2be();
      this._unnamed1 = this._io.readBytes(6);
      this.endBeat = this._io.readU2be();
      this._unnamed3 = this._io.readBytes(2);
      this.bank = this._io.readU1();
      this._unnamed5 = this._io.readBytes(1);
      this.entries = new Array(this._parent.lenEntries);
      for (var i = 0; i < this._parent.lenEntries; i++) {
        this.entries[i] = new SongStructureEntry(this._io, this, this._root);
      }
    }

    /**
     * The mood which rekordbox assigns the track as a whole during phrase analysis.
     */

    /**
     * The beat number at which the last phrase ends. The track may
     * continue after the last phrase ends. If this is the case, it will
     * mostly be silence.
     */

    /**
     * The stylistic bank which can be assigned to the track in rekordbox Lighting mode.
     */

    return SongStructureBody;
  })();

  /**
   * A larger, colorful waveform preview image suitable for display
   * above the touch strip for jumping to a track position on newer
   * high-resolution players.
   */

  var WaveColorPreviewTag = RekordboxAnlz.WaveColorPreviewTag = (function() {
    function WaveColorPreviewTag(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    WaveColorPreviewTag.prototype._read = function() {
      this.lenEntryBytes = this._io.readU4be();
      this.lenEntries = this._io.readU4be();
      this._unnamed2 = this._io.readU4be();
      this.entries = this._io.readBytes((this.lenEntries * this.lenEntryBytes));
    }

    /**
     * The size of each entry, in bytes. Seems to always be 6.
     */

    /**
     * The number of waveform data points, each of which takes one
     * byte for each of six channels of information.
     */

    return WaveColorPreviewTag;
  })();

  var PhraseHigh = RekordboxAnlz.PhraseHigh = (function() {
    function PhraseHigh(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    PhraseHigh.prototype._read = function() {
      this.id = this._io.readU2be();
    }

    return PhraseHigh;
  })();

  /**
   * A larger waveform image suitable for scrolling along as a track
   * plays.
   */

  var WaveScrollTag = RekordboxAnlz.WaveScrollTag = (function() {
    function WaveScrollTag(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    WaveScrollTag.prototype._read = function() {
      this.lenEntryBytes = this._io.readU4be();
      this.lenEntries = this._io.readU4be();
      this._unnamed2 = this._io.readU4be();
      this.entries = this._io.readBytes((this.lenEntries * this.lenEntryBytes));
    }

    /**
     * The size of each entry, in bytes. Seems to always be 1.
     */

    /**
     * The number of waveform data points, each of which takes one
     * byte.
     */

    return WaveScrollTag;
  })();

  /**
   * Stores the song structure, also known as phrases (intro, verse,
   * bridge, chorus, up, down, outro).
   */

  var SongStructureTag = RekordboxAnlz.SongStructureTag = (function() {
    function SongStructureTag(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    SongStructureTag.prototype._read = function() {
      this.lenEntryBytes = this._io.readU4be();
      this.lenEntries = this._io.readU2be();
      this._raw__raw_body = this._io.readBytesFull();
      this._raw_body = KaitaiStream.processXorMany(this._raw__raw_body, this.mask);
      var _io__raw_body = new KaitaiStream(this._raw_body);
      this.body = new SongStructureBody(_io__raw_body, this, this._root);
    }
    Object.defineProperty(SongStructureTag.prototype, 'c', {
      get: function() {
        if (this._m_c !== undefined)
          return this._m_c;
        this._m_c = this.lenEntries;
        return this._m_c;
      }
    });
    Object.defineProperty(SongStructureTag.prototype, 'mask', {
      get: function() {
        if (this._m_mask !== undefined)
          return this._m_mask;
        this._m_mask = new Uint8Array([(203 + this.c), (225 + this.c), (238 + this.c), (250 + this.c), (229 + this.c), (238 + this.c), (173 + this.c), (238 + this.c), (233 + this.c), (210 + this.c), (233 + this.c), (235 + this.c), (225 + this.c), (233 + this.c), (243 + this.c), (232 + this.c), (233 + this.c), (244 + this.c), (225 + this.c)]);
        return this._m_mask;
      }
    });

    /**
     * The size of each entry, in bytes. Seems to always be 24.
     */

    /**
     * The number of phrases.
     */

    /**
     * The rest of the tag, which needs to be unmasked before it
     * can be parsed.
     */

    return SongStructureTag;
  })();

  /**
   * A cue extended list entry. Can either describe a memory cue or a
   * loop.
   */

  var CueExtendedEntry = RekordboxAnlz.CueExtendedEntry = (function() {
    function CueExtendedEntry(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    CueExtendedEntry.prototype._read = function() {
      this.magic = this._io.readBytes(4);
      if (!((KaitaiStream.byteArrayCompare(this.magic, [80, 67, 80, 50]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([80, 67, 80, 50], this.magic, this._io, "/types/cue_extended_entry/seq/0");
      }
      this.lenHeader = this._io.readU4be();
      this.lenEntry = this._io.readU4be();
      this.hotCue = this._io.readU4be();
      this.type = this._io.readU1();
      this._unnamed5 = this._io.readBytes(3);
      this.time = this._io.readU4be();
      this.loopTime = this._io.readU4be();
      this.colorId = this._io.readU1();
      this._unnamed9 = this._io.readBytes(11);
      if (this.lenEntry > 43) {
        this.lenComment = this._io.readU4be();
      }
      if (this.lenEntry > 43) {
        this.comment = KaitaiStream.bytesToStr(this._io.readBytes(this.lenComment), "utf-16be");
      }
      if ((this.lenEntry - this.lenComment) > 44) {
        this.colorCode = this._io.readU1();
      }
      if ((this.lenEntry - this.lenComment) > 45) {
        this.colorRed = this._io.readU1();
      }
      if ((this.lenEntry - this.lenComment) > 46) {
        this.colorGreen = this._io.readU1();
      }
      if ((this.lenEntry - this.lenComment) > 47) {
        this.colorBlue = this._io.readU1();
      }
      if ((this.lenEntry - this.lenComment) > 48) {
        this._unnamed16 = this._io.readBytes(((this.lenEntry - 48) - this.lenComment));
      }
    }

    /**
     * Identifies this as an extended cue list entry (cue point).
     */

    /**
     * If zero, this is an ordinary memory cue, otherwise this a
     * hot cue with the specified number.
     */

    /**
     * Indicates whether this is a memory cue or a loop.
     */

    /**
     * The position, in milliseconds, at which the cue point lies
     * in the track.
     */

    /**
     * The position, in milliseconds, at which the player loops
     * back to the cue time if this is a loop.
     */

    /**
     * References a row in the colors table if this is a memory cue or loop
     * and has been assigned a color.
     */

    /**
     * The comment assigned to this cue by the DJ, if any, with a trailing NUL.
     */

    /**
     * A lookup value for a color table? We use this to index to the hot cue colors shown in rekordbox.
     */

    /**
     * The red component of the hot cue color to be displayed.
     */

    /**
     * The green component of the hot cue color to be displayed.
     */

    /**
     * The blue component of the hot cue color to be displayed.
     */

    return CueExtendedEntry;
  })();

  /**
   * Stores an index allowing rapid seeking to particular times
   * within a variable-bitrate audio file.
   */

  var VbrTag = RekordboxAnlz.VbrTag = (function() {
    function VbrTag(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    VbrTag.prototype._read = function() {
      this._unnamed0 = this._io.readU4be();
      this.index = new Array(400);
      for (var i = 0; i < 400; i++) {
        this.index[i] = this._io.readU4be();
      }
    }

    return VbrTag;
  })();

  /**
   * A song structure entry, represents a single phrase.
   */

  var SongStructureEntry = RekordboxAnlz.SongStructureEntry = (function() {
    function SongStructureEntry(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    SongStructureEntry.prototype._read = function() {
      this.phraseNumber = this._io.readU2be();
      this.beatNumber = this._io.readU2be();
      switch (this._parent.mood) {
      case RekordboxAnlz.TrackMood.HIGH:
        this.kind = new PhraseHigh(this._io, this, this._root);
        break;
      case RekordboxAnlz.TrackMood.MID:
        this.kind = new PhraseMid(this._io, this, this._root);
        break;
      case RekordboxAnlz.TrackMood.LOW:
        this.kind = new PhraseLow(this._io, this, this._root);
        break;
      default:
        this.kind = new UnknownTag(this._io, this, this._root);
        break;
      }
      this._unnamed3 = this._io.readBytes((this._parent._parent.lenEntryBytes - 9));
      this.fillIn = this._io.readU1();
      this.fillInBeatNumber = this._io.readU2be();
    }

    /**
     * The absolute number of the phrase, starting at one.
     */

    /**
     * The beat number at which the phrase starts.
     */

    /**
     * The kind of phrase as displayed in rekordbox.
     */

    /**
     * If nonzero, fill-in is present.
     */

    /**
     * The beat number at which fill-in starts.
     */

    return SongStructureEntry;
  })();

  /**
   * A cue list entry. Can either represent a memory cue or a loop.
   */

  var CueEntry = RekordboxAnlz.CueEntry = (function() {
    function CueEntry(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    CueEntry.prototype._read = function() {
      this.magic = this._io.readBytes(4);
      if (!((KaitaiStream.byteArrayCompare(this.magic, [80, 67, 80, 84]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([80, 67, 80, 84], this.magic, this._io, "/types/cue_entry/seq/0");
      }
      this.lenHeader = this._io.readU4be();
      this.lenEntry = this._io.readU4be();
      this.hotCue = this._io.readU4be();
      this.status = this._io.readU4be();
      this._unnamed5 = this._io.readU4be();
      this.orderFirst = this._io.readU2be();
      this.orderLast = this._io.readU2be();
      this.type = this._io.readU1();
      this._unnamed9 = this._io.readBytes(3);
      this.time = this._io.readU4be();
      this.loopTime = this._io.readU4be();
      this._unnamed12 = this._io.readBytes(16);
    }

    /**
     * Identifies this as a cue list entry (cue point).
     */

    /**
     * If zero, this is an ordinary memory cue, otherwise this a
     * hot cue with the specified number.
     */

    /**
     * If zero, this entry should be ignored.
     */

    /**
     * @flesniak says: "0xffff for first cue, 0,1,3 for next"
     */

    /**
     * @flesniak says: "1,2,3 for first, second, third cue, 0xffff for last"
     */

    /**
     * Indicates whether this is a memory cue or a loop.
     */

    /**
     * The position, in milliseconds, at which the cue point lies
     * in the track.
     */

    /**
     * The position, in milliseconds, at which the player loops
     * back to the cue time if this is a loop.
     */

    return CueEntry;
  })();

  /**
   * Describes an individual beat in a beat grid.
   */

  var BeatGridBeat = RekordboxAnlz.BeatGridBeat = (function() {
    function BeatGridBeat(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    BeatGridBeat.prototype._read = function() {
      this.beatNumber = this._io.readU2be();
      this.tempo = this._io.readU2be();
      this.time = this._io.readU4be();
    }

    /**
     * The position of the beat within its musical bar, where beat 1
     * is the down beat.
     */

    /**
     * The tempo at the time of this beat, in beats per minute,
     * multiplied by 100.
     */

    /**
     * The time, in milliseconds, at which this beat occurs when
     * the track is played at normal (100%) pitch.
     */

    return BeatGridBeat;
  })();

  /**
   * A variation of cue_tag which was introduced with the nxs2 line,
   * and adds descriptive names. (Still comes in two forms, either
   * holding memory cues and loop points, or holding hot cues and
   * loop points.) Also includes hot cues D through H and color assignment.
   */

  var CueExtendedTag = RekordboxAnlz.CueExtendedTag = (function() {
    function CueExtendedTag(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    CueExtendedTag.prototype._read = function() {
      this.type = this._io.readU4be();
      this.lenCues = this._io.readU2be();
      this._unnamed2 = this._io.readBytes(2);
      this.cues = new Array(this.lenCues);
      for (var i = 0; i < this.lenCues; i++) {
        this.cues[i] = new CueExtendedEntry(this._io, this, this._root);
      }
    }

    /**
     * Identifies whether this tag stores ordinary or hot cues.
     */

    /**
     * The length of the cue comment list.
     */

    return CueExtendedTag;
  })();

  var PhraseLow = RekordboxAnlz.PhraseLow = (function() {
    function PhraseLow(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    PhraseLow.prototype._read = function() {
      this.id = this._io.readU2be();
    }

    return PhraseLow;
  })();

  var UnknownTag = RekordboxAnlz.UnknownTag = (function() {
    function UnknownTag(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    UnknownTag.prototype._read = function() {
    }

    return UnknownTag;
  })();

  /**
   * A type-tagged file section, identified by a four-byte magic
   * sequence, with a header specifying its length, and whose payload
   * is determined by the type tag.
   */

  var TaggedSection = RekordboxAnlz.TaggedSection = (function() {
    function TaggedSection(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    TaggedSection.prototype._read = function() {
      this.fourcc = this._io.readS4be();
      this.lenHeader = this._io.readU4be();
      this.lenTag = this._io.readU4be();
      switch (this.fourcc) {
      case RekordboxAnlz.SectionTags.WAVE_COLOR_SCROLL:
        this._raw_body = this._io.readBytes((this.lenTag - 12));
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new WaveColorScrollTag(_io__raw_body, this, this._root);
        break;
      case RekordboxAnlz.SectionTags.WAVE_SCROLL:
        this._raw_body = this._io.readBytes((this.lenTag - 12));
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new WaveScrollTag(_io__raw_body, this, this._root);
        break;
      case RekordboxAnlz.SectionTags.VBR:
        this._raw_body = this._io.readBytes((this.lenTag - 12));
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new VbrTag(_io__raw_body, this, this._root);
        break;
      case RekordboxAnlz.SectionTags.CUES_2:
        this._raw_body = this._io.readBytes((this.lenTag - 12));
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new CueExtendedTag(_io__raw_body, this, this._root);
        break;
      case RekordboxAnlz.SectionTags.CUES:
        this._raw_body = this._io.readBytes((this.lenTag - 12));
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new CueTag(_io__raw_body, this, this._root);
        break;
      case RekordboxAnlz.SectionTags.SONG_STRUCTURE:
        this._raw_body = this._io.readBytes((this.lenTag - 12));
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new SongStructureTag(_io__raw_body, this, this._root);
        break;
      case RekordboxAnlz.SectionTags.BEAT_GRID:
        this._raw_body = this._io.readBytes((this.lenTag - 12));
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new BeatGridTag(_io__raw_body, this, this._root);
        break;
      case RekordboxAnlz.SectionTags.WAVE_PREVIEW:
        this._raw_body = this._io.readBytes((this.lenTag - 12));
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new WavePreviewTag(_io__raw_body, this, this._root);
        break;
      case RekordboxAnlz.SectionTags.WAVE_COLOR_PREVIEW:
        this._raw_body = this._io.readBytes((this.lenTag - 12));
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new WaveColorPreviewTag(_io__raw_body, this, this._root);
        break;
      case RekordboxAnlz.SectionTags.PATH:
        this._raw_body = this._io.readBytes((this.lenTag - 12));
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new PathTag(_io__raw_body, this, this._root);
        break;
      case RekordboxAnlz.SectionTags.WAVE_TINY:
        this._raw_body = this._io.readBytes((this.lenTag - 12));
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new WavePreviewTag(_io__raw_body, this, this._root);
        break;
      default:
        this._raw_body = this._io.readBytes((this.lenTag - 12));
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new UnknownTag(_io__raw_body, this, this._root);
        break;
      }
    }

    /**
     * A tag value indicating what kind of section this is.
     */

    /**
     * The size, in bytes, of the header portion of the tag.
     */

    /**
     * The size, in bytes, of this entire tag, counting the header.
     */

    return TaggedSection;
  })();

  /**
   * A larger, colorful waveform image suitable for scrolling along
   * as a track plays on newer high-resolution hardware. Also
   * contains a higher-resolution blue/white waveform.
   */

  var WaveColorScrollTag = RekordboxAnlz.WaveColorScrollTag = (function() {
    function WaveColorScrollTag(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    WaveColorScrollTag.prototype._read = function() {
      this.lenEntryBytes = this._io.readU4be();
      this.lenEntries = this._io.readU4be();
      this._unnamed2 = this._io.readU4be();
      this.entries = this._io.readBytes((this.lenEntries * this.lenEntryBytes));
    }

    /**
     * The size of each entry, in bytes. Seems to always be 2.
     */

    /**
     * The number of columns of waveform data (this matches the
     * non-color waveform length.
     */

    return WaveColorScrollTag;
  })();

  /**
   * Stores either a list of ordinary memory cues and loop points, or
   * a list of hot cues and loop points.
   */

  var CueTag = RekordboxAnlz.CueTag = (function() {
    function CueTag(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    CueTag.prototype._read = function() {
      this.type = this._io.readU4be();
      this._unnamed1 = this._io.readBytes(2);
      this.lenCues = this._io.readU2be();
      this.memoryCount = this._io.readU4be();
      this.cues = new Array(this.lenCues);
      for (var i = 0; i < this.lenCues; i++) {
        this.cues[i] = new CueEntry(this._io, this, this._root);
      }
    }

    /**
     * Identifies whether this tag stores ordinary or hot cues.
     */

    /**
     * The length of the cue list.
     */

    /**
     * Unsure what this means.
     */

    return CueTag;
  })();

  /**
   * Identifies this as an analysis file.
   */

  /**
   * The number of bytes of this header section.
   */

  /**
   * The number of bytes in the entire file.
   */

  /**
   * The remainder of the file is a sequence of type-tagged sections,
   * identified by a four-byte magic sequence.
   */

  return RekordboxAnlz;
})();
return RekordboxAnlz;
}));


/***/ }),

/***/ "./src/localdb/kaitai/rekordbox_pdb.ksy":
/*!**********************************************!*\
  !*** ./src/localdb/kaitai/rekordbox_pdb.ksy ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! kaitai-struct/KaitaiStream */ "kaitai-struct/KaitaiStream")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (KaitaiStream) {
/**
 * This is a relational database format designed to be efficiently used
 * by very low power devices (there were deployments on 16 bit devices
 * with 32K of RAM). Today you are most likely to encounter it within
 * the Pioneer Professional DJ ecosystem, because it is the format that
 * their rekordbox software uses to write USB and SD media which can be
 * mounted in DJ controllers and used to play and mix music.
 * 
 * It has been reverse-engineered to facilitate sophisticated
 * integrations with light and laser shows, videos, and other musical
 * instruments, by supporting deep knowledge of what is playing and
 * what is coming next through monitoring the network communications of
 * the players.
 * 
 * The file is divided into fixed-size blocks. The first block has a
 * header that establishes the block size, and lists the tables
 * available in the database, identifying their types and the index of
 * the first of the series of linked pages that make up that table.
 * 
 * Each table is made up of a series of rows which may be spread across
 * any number of pages. The pages start with a header describing the
 * page and linking to the next page. The rest of the page is used as a
 * heap: rows are scattered around it, and located using an index
 * structure that builds backwards from the end of the page. Each row
 * of a given type has a fixed size structure which links to any
 * variable-sized strings by their offsets within the page.
 * 
 * As changes are made to the table, some records may become unused,
 * and there may be gaps within the heap that are too small to be used
 * by other data. There is a bit map in the row index that identifies
 * which rows are actually present. Rows that are not present must be
 * ignored: they do not contain valid (or even necessarily well-formed)
 * data.
 * 
 * The majority of the work in reverse-engineering this format was
 * performed by @henrybetts and @flesniak, for which I am hugely
 * grateful. @GreyCat helped me learn the intricacies (and best
 * practices) of Kaitai far faster than I would have managed on my own.
 * @see {@link https://github.com/Deep-Symmetry/crate-digger/blob/master/doc/Analysis.pdf|Source}
 */

var RekordboxPdb = (function() {
  RekordboxPdb.PageType = Object.freeze({
    TRACKS: 0,
    GENRES: 1,
    ARTISTS: 2,
    ALBUMS: 3,
    LABELS: 4,
    KEYS: 5,
    COLORS: 6,
    PLAYLIST_TREE: 7,
    PLAYLIST_ENTRIES: 8,
    UNKNOWN_9: 9,
    UNKNOWN_10: 10,
    UNKNOWN_11: 11,
    UNKNOWN_12: 12,
    ARTWORK: 13,
    UNKNOWN_14: 14,
    UNKNOWN_15: 15,
    COLUMNS: 16,
    UNKNOWN_17: 17,
    UNKNOWN_18: 18,
    HISTORY: 19,

    0: "TRACKS",
    1: "GENRES",
    2: "ARTISTS",
    3: "ALBUMS",
    4: "LABELS",
    5: "KEYS",
    6: "COLORS",
    7: "PLAYLIST_TREE",
    8: "PLAYLIST_ENTRIES",
    9: "UNKNOWN_9",
    10: "UNKNOWN_10",
    11: "UNKNOWN_11",
    12: "UNKNOWN_12",
    13: "ARTWORK",
    14: "UNKNOWN_14",
    15: "UNKNOWN_15",
    16: "COLUMNS",
    17: "UNKNOWN_17",
    18: "UNKNOWN_18",
    19: "HISTORY",
  });

  function RekordboxPdb(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  RekordboxPdb.prototype._read = function() {
    this._unnamed0 = this._io.readU4le();
    this.lenPage = this._io.readU4le();
    this.numTables = this._io.readU4le();
    this.nextUnusedPage = this._io.readU4le();
    this._unnamed4 = this._io.readU4le();
    this.sequence = this._io.readU4le();
    this.gap = this._io.readBytes(4);
    if (!((KaitaiStream.byteArrayCompare(this.gap, [0, 0, 0, 0]) == 0))) {
      throw new KaitaiStream.ValidationNotEqualError([0, 0, 0, 0], this.gap, this._io, "/seq/6");
    }
    this.tables = new Array(this.numTables);
    for (var i = 0; i < this.numTables; i++) {
      this.tables[i] = new Table(this._io, this, this._root);
    }
  }

  /**
   * A variable length string which can be stored in a variety of
   * different encodings.
   */

  var DeviceSqlString = RekordboxPdb.DeviceSqlString = (function() {
    function DeviceSqlString(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    DeviceSqlString.prototype._read = function() {
      this.lengthAndKind = this._io.readU1();
      switch (this.lengthAndKind) {
      case 64:
        this.body = new DeviceSqlLongAscii(this._io, this, this._root);
        break;
      case 144:
        this.body = new DeviceSqlLongUtf16le(this._io, this, this._root);
        break;
      default:
        this.body = new DeviceSqlShortAscii(this._io, this, this._root, this.lengthAndKind);
        break;
      }
    }

    /**
     * Mangled length of an ordinary ASCII string if odd, or a flag
     * indicating another encoding with a longer length value to
     * follow.
     */

    return DeviceSqlString;
  })();

  /**
   * A row that holds a playlist name, ID, indication of whether it
   * is an ordinary playlist or a folder of other playlists, a link
   * to its parent folder, and its sort order.
   */

  var PlaylistTreeRow = RekordboxPdb.PlaylistTreeRow = (function() {
    function PlaylistTreeRow(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    PlaylistTreeRow.prototype._read = function() {
      this.parentId = this._io.readU4le();
      this._unnamed1 = this._io.readBytes(4);
      this.sortOrder = this._io.readU4le();
      this.id = this._io.readU4le();
      this.rawIsFolder = this._io.readU4le();
      this.name = new DeviceSqlString(this._io, this, this._root);
    }
    Object.defineProperty(PlaylistTreeRow.prototype, 'isFolder', {
      get: function() {
        if (this._m_isFolder !== undefined)
          return this._m_isFolder;
        this._m_isFolder = this.rawIsFolder != 0;
        return this._m_isFolder;
      }
    });

    /**
     * The ID of the `playlist_tree_row` in which this one can be
     * found, or `0` if this playlist exists at the root level.
     */

    /**
     * The order in which the entries of this playlist are sorted.
     */

    /**
     * The unique identifier by which this playlist or folder can
     * be requested and linked from other rows.
     */

    /**
     * Has a non-zero value if this is actually a folder rather
     * than a playlist.
     */

    /**
     * The variable-length string naming the playlist.
     */

    return PlaylistTreeRow;
  })();

  /**
   * A row that holds a color name and the associated ID.
   */

  var ColorRow = RekordboxPdb.ColorRow = (function() {
    function ColorRow(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ColorRow.prototype._read = function() {
      this._unnamed0 = this._io.readBytes(5);
      this.id = this._io.readU2le();
      this._unnamed2 = this._io.readU1();
      this.name = new DeviceSqlString(this._io, this, this._root);
    }

    /**
     * The unique identifier by which this color can be requested
     * and linked from other rows (such as tracks).
     */

    /**
     * The variable-length string naming the color.
     */

    return ColorRow;
  })();

  /**
   * An ASCII-encoded string up to 127 bytes long.
   */

  var DeviceSqlShortAscii = RekordboxPdb.DeviceSqlShortAscii = (function() {
    function DeviceSqlShortAscii(_io, _parent, _root, mangledLength) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.mangledLength = mangledLength;

      this._read();
    }
    DeviceSqlShortAscii.prototype._read = function() {
      if ( ((KaitaiStream.mod(this.mangledLength, 2) > 0) && (this.length >= 0)) ) {
        this.text = KaitaiStream.bytesToStr(this._io.readBytes(this.length), "ascii");
      }
    }

    /**
     * The un-mangled length of the string, in bytes.
     */
    Object.defineProperty(DeviceSqlShortAscii.prototype, 'length', {
      get: function() {
        if (this._m_length !== undefined)
          return this._m_length;
        this._m_length = (Math.floor((this.mangledLength - 1) / 2) - 1);
        return this._m_length;
      }
    });

    /**
     * The content of the string.
     */

    /**
     * Contains the actual length, incremented, doubled, and
     * incremented again. Go figure.
     */

    return DeviceSqlShortAscii;
  })();

  /**
   * A row that holds an album name and ID.
   */

  var AlbumRow = RekordboxPdb.AlbumRow = (function() {
    function AlbumRow(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    AlbumRow.prototype._read = function() {
      this._unnamed0 = this._io.readU2le();
      this.indexShift = this._io.readU2le();
      this._unnamed2 = this._io.readU4le();
      this.artistId = this._io.readU4le();
      this.id = this._io.readU4le();
      this._unnamed5 = this._io.readU4le();
      this._unnamed6 = this._io.readU1();
      this.ofsName = this._io.readU1();
    }

    /**
     * The name of this album.
     */
    Object.defineProperty(AlbumRow.prototype, 'name', {
      get: function() {
        if (this._m_name !== undefined)
          return this._m_name;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsName));
        this._m_name = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_name;
      }
    });

    /**
     * Some kind of magic word? Usually 0x80, 0x00.
     */

    /**
     * TODO name from @flesniak, but what does it mean?
     */

    /**
     * Identifies the artist associated with the album.
     */

    /**
     * The unique identifier by which this album can be requested
     * and linked from other rows (such as tracks).
     */

    /**
     * @flesniak says: "alwayx 0x03, maybe an unindexed empty string"
     */

    /**
     * The location of the variable-length name string, relative to
     * the start of this row.
     */

    return AlbumRow;
  })();

  /**
   * A table page, consisting of a short header describing the
   * content of the page and linking to the next page, followed by a
   * heap in which row data is found. At the end of the page there is
   * an index which locates all rows present in the heap via their
   * offsets past the end of the page header.
   */

  var Page = RekordboxPdb.Page = (function() {
    function Page(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Page.prototype._read = function() {
      this.gap = this._io.readBytes(4);
      if (!((KaitaiStream.byteArrayCompare(this.gap, [0, 0, 0, 0]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([0, 0, 0, 0], this.gap, this._io, "/types/page/seq/0");
      }
      this.pageIndex = this._io.readU4le();
      this.type = this._io.readU4le();
      this.nextPage = new PageRef(this._io, this, this._root);
      this._unnamed4 = this._io.readU4le();
      this._unnamed5 = this._io.readBytes(4);
      this.numRowsSmall = this._io.readU1();
      this._unnamed7 = this._io.readU1();
      this._unnamed8 = this._io.readU1();
      this.pageFlags = this._io.readU1();
      this.freeSize = this._io.readU2le();
      this.usedSize = this._io.readU2le();
      this._unnamed12 = this._io.readU2le();
      this.numRowsLarge = this._io.readU2le();
      this._unnamed14 = this._io.readU2le();
      this._unnamed15 = this._io.readU2le();
      if (false) {}
    }

    /**
     * The number of rows on this page (controls the number of row
     * index entries there are, but some of those may not be marked
     * as present in the table due to deletion).
     */
    Object.defineProperty(Page.prototype, 'numRows', {
      get: function() {
        if (this._m_numRows !== undefined)
          return this._m_numRows;
        this._m_numRows = ( ((this.numRowsLarge > this.numRowsSmall) && (this.numRowsLarge != 8191))  ? this.numRowsLarge : this.numRowsSmall);
        return this._m_numRows;
      }
    });

    /**
     * The number of row groups that are present in the index. Each
     * group can hold up to sixteen rows. All but the final one
     * will hold sixteen rows.
     */
    Object.defineProperty(Page.prototype, 'numGroups', {
      get: function() {
        if (this._m_numGroups !== undefined)
          return this._m_numGroups;
        this._m_numGroups = (Math.floor((this.numRows - 1) / 16) + 1);
        return this._m_numGroups;
      }
    });

    /**
     * The actual row groups making up the row index. Each group
     * can hold up to sixteen rows. Non-data pages do not have
     * actual rows, and attempting to parse them can crash.
     */
    Object.defineProperty(Page.prototype, 'rowGroups', {
      get: function() {
        if (this._m_rowGroups !== undefined)
          return this._m_rowGroups;
        if (this.isDataPage) {
          this._m_rowGroups = new Array(this.numGroups);
          for (var i = 0; i < this.numGroups; i++) {
            this._m_rowGroups[i] = new RowGroup(this._io, this, this._root, i);
          }
        }
        return this._m_rowGroups;
      }
    });
    Object.defineProperty(Page.prototype, 'heapPos', {
      get: function() {
        if (this._m_heapPos !== undefined)
          return this._m_heapPos;
        this._m_heapPos = this._io.pos;
        return this._m_heapPos;
      }
    });
    Object.defineProperty(Page.prototype, 'isDataPage', {
      get: function() {
        if (this._m_isDataPage !== undefined)
          return this._m_isDataPage;
        this._m_isDataPage = (this.pageFlags & 64) == 0;
        return this._m_isDataPage;
      }
    });

    /**
     * Only exposed until
     * https://github.com/kaitai-io/kaitai_struct/issues/825 can be
     * fixed.
     */

    /**
     * Matches the index we used to look up the page, sanity check?
     */

    /**
     * Identifies the type of information stored in the rows of this page.
     */

    /**
     * Index of the next page containing this type of rows. Points past
     * the end of the file if there are no more.
     */

    /**
     * @flesniak said: "sequence number (0->1: 8->13, 1->2: 22, 2->3: 27)"
     */

    /**
     * Holds the value used for `num_rows` (see below) unless
     * `num_rows_large` is larger (but not equal to `0x1fff`). This
     * seems like some strange mechanism to deal with the fact that
     * lots of tiny entries, such as are found in the
     * `playlist_entries` table, are too big to count with a single
     * byte. But why not just always use `num_rows_large`, then?
     */

    /**
     * @flesniak said: "a bitmask (1st track: 32)"
     */

    /**
     * @flesniak said: "often 0, sometimes larger, esp. for pages
     * with high real_entry_count (e.g. 12 for 101 entries)"
     */

    /**
     * @flesniak said: "strange pages: 0x44, 0x64; otherwise seen: 0x24, 0x34"
     */

    /**
     * Unused space (in bytes) in the page heap, excluding the row
     * index at end of page.
     */

    /**
     * The number of bytes that are in use in the page heap.
     */

    /**
     * @flesniak said: "(0->1: 2)"
     */

    /**
     * Holds the value used for `num_rows` (as described above)
     * when that is too large to fit into `num_rows_small`, and
     * that situation seems to be indicated when this value is
     * larger than `num_rows_small`, but not equal to `0x1fff`.
     * This seems like some strange mechanism to deal with the fact
     * that lots of tiny entries, such as are found in the
     * `playlist_entries` table, are too big to count with a single
     * byte. But why not just always use this value, then?
     */

    /**
     * @flesniak said: "1004 for strange blocks, 0 otherwise"
     */

    /**
     * @flesniak said: "always 0 except 1 for history pages, num
     * entries for strange pages?"
     */

    return Page;
  })();

  /**
   * A group of row indices, which are built backwards from the end
   * of the page. Holds up to sixteen row offsets, along with a bit
   * mask that indicates whether each row is actually present in the
   * table.
   */

  var RowGroup = RekordboxPdb.RowGroup = (function() {
    function RowGroup(_io, _parent, _root, groupIndex) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.groupIndex = groupIndex;

      this._read();
    }
    RowGroup.prototype._read = function() {
    }

    /**
     * The starting point of this group of row indices.
     */
    Object.defineProperty(RowGroup.prototype, 'base', {
      get: function() {
        if (this._m_base !== undefined)
          return this._m_base;
        this._m_base = (this._root.lenPage - (this.groupIndex * 36));
        return this._m_base;
      }
    });

    /**
     * Each bit specifies whether a particular row is present. The
     * low order bit corresponds to the first row in this index,
     * whose offset immediately precedes these flag bits. The
     * second bit corresponds to the row whose offset precedes
     * that, and so on.
     */
    Object.defineProperty(RowGroup.prototype, 'rowPresentFlags', {
      get: function() {
        if (this._m_rowPresentFlags !== undefined)
          return this._m_rowPresentFlags;
        var _pos = this._io.pos;
        this._io.seek((this.base - 4));
        this._m_rowPresentFlags = this._io.readU2le();
        this._io.seek(_pos);
        return this._m_rowPresentFlags;
      }
    });

    /**
     * The row offsets in this group.
     */
    Object.defineProperty(RowGroup.prototype, 'rows', {
      get: function() {
        if (this._m_rows !== undefined)
          return this._m_rows;
        this._m_rows = new Array((this.groupIndex < (this._parent.numGroups - 1) ? 16 : (KaitaiStream.mod((this._parent.numRows - 1), 16) + 1)));
        for (var i = 0; i < (this.groupIndex < (this._parent.numGroups - 1) ? 16 : (KaitaiStream.mod((this._parent.numRows - 1), 16) + 1)); i++) {
          this._m_rows[i] = new RowRef(this._io, this, this._root, i);
        }
        return this._m_rows;
      }
    });

    /**
     * Identifies which group is being generated. They build backwards
     * from the end of the page.
     */

    return RowGroup;
  })();

  /**
   * A row that holds a genre name and the associated ID.
   */

  var GenreRow = RekordboxPdb.GenreRow = (function() {
    function GenreRow(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    GenreRow.prototype._read = function() {
      this.id = this._io.readU4le();
      this.name = new DeviceSqlString(this._io, this, this._root);
    }

    /**
     * The unique identifier by which this genre can be requested
     * and linked from other rows (such as tracks).
     */

    /**
     * The variable-length string naming the genre.
     */

    return GenreRow;
  })();

  /**
   * A row that holds the path to an album art image file and the
   * associated artwork ID.
   */

  var ArtworkRow = RekordboxPdb.ArtworkRow = (function() {
    function ArtworkRow(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ArtworkRow.prototype._read = function() {
      this.id = this._io.readU4le();
      this.path = new DeviceSqlString(this._io, this, this._root);
    }

    /**
     * The unique identifier by which this art can be requested
     * and linked from other rows (such as tracks).
     */

    /**
     * The variable-length file path string at which the art file
     * can be found.
     */

    return ArtworkRow;
  })();

  /**
   * An ASCII-encoded string preceded by a two-byte length field.
   */

  var DeviceSqlLongAscii = RekordboxPdb.DeviceSqlLongAscii = (function() {
    function DeviceSqlLongAscii(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    DeviceSqlLongAscii.prototype._read = function() {
      this.length = this._io.readU2le();
      this.text = KaitaiStream.bytesToStr(this._io.readBytes(this.length), "ascii");
    }

    /**
     * Contains the length of the string in bytes.
     */

    /**
     * The content of the string.
     */

    return DeviceSqlLongAscii;
  })();

  /**
   * A row that holds an artist name and ID.
   */

  var ArtistRow = RekordboxPdb.ArtistRow = (function() {
    function ArtistRow(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ArtistRow.prototype._read = function() {
      this.subtype = this._io.readU2le();
      this.indexShift = this._io.readU2le();
      this.id = this._io.readU4le();
      this._unnamed3 = this._io.readU1();
      this.ofsNameNear = this._io.readU1();
    }

    /**
     * For names that might be further than 0xff bytes from the
     * start of this row, this holds a two-byte offset, and is
     * signalled by the subtype value.
     */
    Object.defineProperty(ArtistRow.prototype, 'ofsNameFar', {
      get: function() {
        if (this._m_ofsNameFar !== undefined)
          return this._m_ofsNameFar;
        if (this.subtype == 100) {
          var _pos = this._io.pos;
          this._io.seek((this._parent.rowBase + 10));
          this._m_ofsNameFar = this._io.readU2le();
          this._io.seek(_pos);
        }
        return this._m_ofsNameFar;
      }
    });

    /**
     * The name of this artist.
     */
    Object.defineProperty(ArtistRow.prototype, 'name', {
      get: function() {
        if (this._m_name !== undefined)
          return this._m_name;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + (this.subtype == 100 ? this.ofsNameFar : this.ofsNameNear)));
        this._m_name = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_name;
      }
    });

    /**
     * Usually 0x60, but 0x64 means we have a long name offset
     * embedded in the row.
     */

    /**
     * TODO name from @flesniak, but what does it mean?
     */

    /**
     * The unique identifier by which this artist can be requested
     * and linked from other rows (such as tracks).
     */

    /**
     * @flesniak says: "always 0x03, maybe an unindexed empty string"
     */

    /**
     * The location of the variable-length name string, relative to
     * the start of this row, unless subtype is 0x64.
     */

    return ArtistRow;
  })();

  /**
   * An index which points to a table page (its offset can be found
   * by multiplying the index by the `page_len` value in the file
   * header). This type allows the linked page to be lazy loaded.
   */

  var PageRef = RekordboxPdb.PageRef = (function() {
    function PageRef(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    PageRef.prototype._read = function() {
      this.index = this._io.readU4le();
    }

    /**
     * When referenced, loads the specified page and parses its
     * contents appropriately for the type of data it contains.
     */
    Object.defineProperty(PageRef.prototype, 'body', {
      get: function() {
        if (this._m_body !== undefined)
          return this._m_body;
        var io = this._root._io;
        var _pos = io.pos;
        io.seek((this._root.lenPage * this.index));
        this._raw__m_body = io.readBytes(this._root.lenPage);
        var _io__raw__m_body = new KaitaiStream(this._raw__m_body);
        this._m_body = new Page(_io__raw__m_body, this, this._root);
        io.seek(_pos);
        return this._m_body;
      }
    });

    /**
     * Identifies the desired page number.
     */

    return PageRef;
  })();

  /**
   * A row that describes a track that can be played, with many
   * details about the music, and links to other tables like artists,
   * albums, keys, etc.
   */

  var TrackRow = RekordboxPdb.TrackRow = (function() {
    function TrackRow(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    TrackRow.prototype._read = function() {
      this._unnamed0 = this._io.readU2le();
      this.indexShift = this._io.readU2le();
      this.bitmask = this._io.readU4le();
      this.sampleRate = this._io.readU4le();
      this.composerId = this._io.readU4le();
      this.fileSize = this._io.readU4le();
      this._unnamed6 = this._io.readU4le();
      this._unnamed7 = this._io.readU2le();
      this._unnamed8 = this._io.readU2le();
      this.artworkId = this._io.readU4le();
      this.keyId = this._io.readU4le();
      this.originalArtistId = this._io.readU4le();
      this.labelId = this._io.readU4le();
      this.remixerId = this._io.readU4le();
      this.bitrate = this._io.readU4le();
      this.trackNumber = this._io.readU4le();
      this.tempo = this._io.readU4le();
      this.genreId = this._io.readU4le();
      this.albumId = this._io.readU4le();
      this.artistId = this._io.readU4le();
      this.id = this._io.readU4le();
      this.discNumber = this._io.readU2le();
      this.playCount = this._io.readU2le();
      this.year = this._io.readU2le();
      this.sampleDepth = this._io.readU2le();
      this.duration = this._io.readU2le();
      this._unnamed26 = this._io.readU2le();
      this.colorId = this._io.readU1();
      this.rating = this._io.readU1();
      this._unnamed29 = this._io.readU2le();
      this._unnamed30 = this._io.readU2le();
      this.ofsStrings = new Array(21);
      for (var i = 0; i < 21; i++) {
        this.ofsStrings[i] = this._io.readU2le();
      }
    }

    /**
     * A string of unknown purpose, usually empty.
     */
    Object.defineProperty(TrackRow.prototype, 'unknownString8', {
      get: function() {
        if (this._m_unknownString8 !== undefined)
          return this._m_unknownString8;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[18]));
        this._m_unknownString8 = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_unknownString8;
      }
    });

    /**
     * A string of unknown purpose, usually empty.
     */
    Object.defineProperty(TrackRow.prototype, 'unknownString6', {
      get: function() {
        if (this._m_unknownString6 !== undefined)
          return this._m_unknownString6;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[9]));
        this._m_unknownString6 = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_unknownString6;
      }
    });

    /**
     * A string containing the date this track was analyzed by rekordbox.
     */
    Object.defineProperty(TrackRow.prototype, 'analyzeDate', {
      get: function() {
        if (this._m_analyzeDate !== undefined)
          return this._m_analyzeDate;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[15]));
        this._m_analyzeDate = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_analyzeDate;
      }
    });

    /**
     * The file path of the track audio file.
     */
    Object.defineProperty(TrackRow.prototype, 'filePath', {
      get: function() {
        if (this._m_filePath !== undefined)
          return this._m_filePath;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[20]));
        this._m_filePath = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_filePath;
      }
    });

    /**
     * A string whose value is always either empty or "ON", and
     * which apparently for some insane reason is used, rather than
     * a single bit somewhere, to control whether hot-cues are
     * auto-loaded for the track.
     */
    Object.defineProperty(TrackRow.prototype, 'autoloadHotcues', {
      get: function() {
        if (this._m_autoloadHotcues !== undefined)
          return this._m_autoloadHotcues;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[7]));
        this._m_autoloadHotcues = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_autoloadHotcues;
      }
    });

    /**
     * A string containing the date this track was added to the collection.
     */
    Object.defineProperty(TrackRow.prototype, 'dateAdded', {
      get: function() {
        if (this._m_dateAdded !== undefined)
          return this._m_dateAdded;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[10]));
        this._m_dateAdded = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_dateAdded;
      }
    });

    /**
     * A string of unknown purpose; @flesniak said "strange
     * strings, often zero length, sometimes low binary values
     * 0x01/0x02 as content"
     */
    Object.defineProperty(TrackRow.prototype, 'unknownString3', {
      get: function() {
        if (this._m_unknownString3 !== undefined)
          return this._m_unknownString3;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[3]));
        this._m_unknownString3 = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_unknownString3;
      }
    });

    /**
     * A string of unknown purpose, which @flesnik named.
     */
    Object.defineProperty(TrackRow.prototype, 'texter', {
      get: function() {
        if (this._m_texter !== undefined)
          return this._m_texter;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[1]));
        this._m_texter = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_texter;
      }
    });

    /**
     * A string whose value is always either empty or "ON", and
     * which apparently for some insane reason is used, rather than
     * a single bit somewhere, to control whether the track
     * information is visible on Kuvo.
     */
    Object.defineProperty(TrackRow.prototype, 'kuvoPublic', {
      get: function() {
        if (this._m_kuvoPublic !== undefined)
          return this._m_kuvoPublic;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[6]));
        this._m_kuvoPublic = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_kuvoPublic;
      }
    });

    /**
     * A string naming the remix of the track, if known.
     */
    Object.defineProperty(TrackRow.prototype, 'mixName', {
      get: function() {
        if (this._m_mixName !== undefined)
          return this._m_mixName;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[12]));
        this._m_mixName = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_mixName;
      }
    });

    /**
     * A string of unknown purpose.
     */
    Object.defineProperty(TrackRow.prototype, 'unknownString5', {
      get: function() {
        if (this._m_unknownString5 !== undefined)
          return this._m_unknownString5;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[8]));
        this._m_unknownString5 = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_unknownString5;
      }
    });

    /**
     * A string of unknown purpose; @flesniak said "strange
     * strings, often zero length, sometimes low binary values
     * 0x01/0x02 as content"
     */
    Object.defineProperty(TrackRow.prototype, 'unknownString4', {
      get: function() {
        if (this._m_unknownString4 !== undefined)
          return this._m_unknownString4;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[4]));
        this._m_unknownString4 = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_unknownString4;
      }
    });

    /**
     * A string of unknown purpose, which @flesnik named.
     */
    Object.defineProperty(TrackRow.prototype, 'message', {
      get: function() {
        if (this._m_message !== undefined)
          return this._m_message;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[5]));
        this._m_message = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_message;
      }
    });

    /**
     * A string of unknown purpose; @flesniak said "thought
     * tracknumber -> wrong!"
     */
    Object.defineProperty(TrackRow.prototype, 'unknownString2', {
      get: function() {
        if (this._m_unknownString2 !== undefined)
          return this._m_unknownString2;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[2]));
        this._m_unknownString2 = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_unknownString2;
      }
    });

    /**
     * International Standard Recording Code of track
     * when known (in mangled format).
     */
    Object.defineProperty(TrackRow.prototype, 'isrc', {
      get: function() {
        if (this._m_isrc !== undefined)
          return this._m_isrc;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[0]));
        this._m_isrc = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_isrc;
      }
    });

    /**
     * A string of unknown purpose, usually empty.
     */
    Object.defineProperty(TrackRow.prototype, 'unknownString7', {
      get: function() {
        if (this._m_unknownString7 !== undefined)
          return this._m_unknownString7;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[13]));
        this._m_unknownString7 = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_unknownString7;
      }
    });

    /**
     * The file name of the track audio file.
     */
    Object.defineProperty(TrackRow.prototype, 'filename', {
      get: function() {
        if (this._m_filename !== undefined)
          return this._m_filename;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[19]));
        this._m_filename = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_filename;
      }
    });

    /**
     * The file path of the track analysis, which allows rapid
     * seeking to particular times in variable bit-rate files,
     * jumping to particular beats, visual waveform previews, and
     * stores cue points and loops.
     */
    Object.defineProperty(TrackRow.prototype, 'analyzePath', {
      get: function() {
        if (this._m_analyzePath !== undefined)
          return this._m_analyzePath;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[14]));
        this._m_analyzePath = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_analyzePath;
      }
    });

    /**
     * The comment assigned to the track by the DJ, if any.
     */
    Object.defineProperty(TrackRow.prototype, 'comment', {
      get: function() {
        if (this._m_comment !== undefined)
          return this._m_comment;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[16]));
        this._m_comment = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_comment;
      }
    });

    /**
     * A string containing the date this track was released, if known.
     */
    Object.defineProperty(TrackRow.prototype, 'releaseDate', {
      get: function() {
        if (this._m_releaseDate !== undefined)
          return this._m_releaseDate;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[11]));
        this._m_releaseDate = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_releaseDate;
      }
    });

    /**
     * The title of the track.
     */
    Object.defineProperty(TrackRow.prototype, 'title', {
      get: function() {
        if (this._m_title !== undefined)
          return this._m_title;
        var _pos = this._io.pos;
        this._io.seek((this._parent.rowBase + this.ofsStrings[17]));
        this._m_title = new DeviceSqlString(this._io, this, this._root);
        this._io.seek(_pos);
        return this._m_title;
      }
    });

    /**
     * Some kind of magic word? Usually 0x24, 0x00.
     */

    /**
     * TODO name from @flesniak, but what does it mean?
     */

    /**
     * TODO what do the bits mean?
     */

    /**
     * Playback sample rate of the audio file.
     */

    /**
     * References a row in the artist table if the composer is
     * known.
     */

    /**
     * The length of the audio file, in bytes.
     */

    /**
     * Some ID? Purpose as yet unknown.
     */

    /**
     * From @flesniak: "always 19048?"
     */

    /**
     * From @flesniak: "always 30967?"
     */

    /**
     * References a row in the artwork table if there is album art.
     */

    /**
     * References a row in the keys table if the track has a known
     * main musical key.
     */

    /**
     * References a row in the artwork table if this is a cover
     * performance and the original artist is known.
     */

    /**
     * References a row in the labels table if the track has a
     * known record label.
     */

    /**
     * References a row in the artists table if the track has a
     * known remixer.
     */

    /**
     * Playback bit rate of the audio file.
     */

    /**
     * The position of the track within an album.
     */

    /**
     * The tempo at the start of the track in beats per minute,
     * multiplied by 100.
     */

    /**
     * References a row in the genres table if the track has a
     * known musical genre.
     */

    /**
     * References a row in the albums table if the track has a
     * known album.
     */

    /**
     * References a row in the artists table if the track has a
     * known performer.
     */

    /**
     * The id by which this track can be looked up; players will
     * report this value in their status packets when they are
     * playing the track.
     */

    /**
     * The number of the disc on which this track is found, if it
     * is known to be part of a multi-disc album.
     */

    /**
     * The number of times this track has been played.
     */

    /**
     * The year in which this track was released.
     */

    /**
     * The number of bits per sample of the audio file.
     */

    /**
     * The length, in seconds, of the track when played at normal
     * speed.
     */

    /**
     * From @flesniak: "always 41?"
     */

    /**
     * References a row in the colors table if the track has been
     * assigned a color.
     */

    /**
     * The number of stars to display for the track, 0 to 5.
     */

    /**
     * From @flesniak: "always 1?"
     */

    /**
     * From @flesniak: "alternating 2 or 3"
     */

    /**
     * The location, relative to the start of this row, of a
     * variety of variable-length strings.
     */

    return TrackRow;
  })();

  /**
   * A row that holds a musical key and the associated ID.
   */

  var KeyRow = RekordboxPdb.KeyRow = (function() {
    function KeyRow(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    KeyRow.prototype._read = function() {
      this.id = this._io.readU4le();
      this.id2 = this._io.readU4le();
      this.name = new DeviceSqlString(this._io, this, this._root);
    }

    /**
     * The unique identifier by which this key can be requested
     * and linked from other rows (such as tracks).
     */

    /**
     * Seems to be a second copy of the ID?
     */

    /**
     * The variable-length string naming the key.
     */

    return KeyRow;
  })();

  /**
   * A row that associates a track with a position in a playlist.
   */

  var PlaylistEntryRow = RekordboxPdb.PlaylistEntryRow = (function() {
    function PlaylistEntryRow(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    PlaylistEntryRow.prototype._read = function() {
      this.entryIndex = this._io.readU4le();
      this.trackId = this._io.readU4le();
      this.playlistId = this._io.readU4le();
    }

    /**
     * The position within the playlist represented by this entry.
     */

    /**
     * The track found at this position in the playlist.
     */

    /**
     * The playlist to which this entry belongs.
     */

    return PlaylistEntryRow;
  })();

  /**
   * A row that holds a label name and the associated ID.
   */

  var LabelRow = RekordboxPdb.LabelRow = (function() {
    function LabelRow(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    LabelRow.prototype._read = function() {
      this.id = this._io.readU4le();
      this.name = new DeviceSqlString(this._io, this, this._root);
    }

    /**
     * The unique identifier by which this label can be requested
     * and linked from other rows (such as tracks).
     */

    /**
     * The variable-length string naming the label.
     */

    return LabelRow;
  })();

  /**
   * A UTF-16LE-encoded string preceded by a two-byte length field.
   */

  var DeviceSqlLongUtf16le = RekordboxPdb.DeviceSqlLongUtf16le = (function() {
    function DeviceSqlLongUtf16le(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    DeviceSqlLongUtf16le.prototype._read = function() {
      this.length = this._io.readU2le();
      this._unnamed1 = this._io.readU1();
      this.text = KaitaiStream.bytesToStr(this._io.readBytes((this.length - 4)), "utf-16le");
    }

    /**
     * Contains the length of the string in bytes, including two trailing nulls.
     */

    /**
     * The content of the string.
     */

    return DeviceSqlLongUtf16le;
  })();

  /**
   * Each table is a linked list of pages containing rows of a single
   * type. This header describes the nature of the table and links to
   * its pages by index.
   */

  var Table = RekordboxPdb.Table = (function() {
    function Table(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Table.prototype._read = function() {
      this.type = this._io.readU4le();
      this.emptyCandidate = this._io.readU4le();
      this.firstPage = new PageRef(this._io, this, this._root);
      this.lastPage = new PageRef(this._io, this, this._root);
    }

    /**
     * Identifies the kind of rows that are found in this table.
     */

    /**
     * Links to the chain of pages making up that table. The first
     * page seems to always contain similar garbage patterns and
     * zero rows, but the next page it links to contains the start
     * of the meaningful data rows.
     */

    /**
     * Holds the index of the last page that makes up this table.
     * When following the linked list of pages of the table, you
     * either need to stop when you reach this page, or when you
     * notice that the `next_page` link you followed took you to a
     * page of a different `type`.
     */

    return Table;
  })();

  /**
   * An offset which points to a row in the table, whose actual
   * presence is controlled by one of the bits in
   * `row_present_flags`. This instance allows the row itself to be
   * lazily loaded, unless it is not present, in which case there is
   * no content to be loaded.
   */

  var RowRef = RekordboxPdb.RowRef = (function() {
    function RowRef(_io, _parent, _root, rowIndex) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.rowIndex = rowIndex;

      this._read();
    }
    RowRef.prototype._read = function() {
    }

    /**
     * The offset of the start of the row (in bytes past the end of
     * the page header).
     */
    Object.defineProperty(RowRef.prototype, 'ofsRow', {
      get: function() {
        if (this._m_ofsRow !== undefined)
          return this._m_ofsRow;
        var _pos = this._io.pos;
        this._io.seek((this._parent.base - (6 + (2 * this.rowIndex))));
        this._m_ofsRow = this._io.readU2le();
        this._io.seek(_pos);
        return this._m_ofsRow;
      }
    });

    /**
     * The location of this row relative to the start of the page.
     * A variety of pointers (such as all device_sql_string values)
     * are calculated with respect to this position.
     */
    Object.defineProperty(RowRef.prototype, 'rowBase', {
      get: function() {
        if (this._m_rowBase !== undefined)
          return this._m_rowBase;
        this._m_rowBase = (this.ofsRow + this._parent._parent.heapPos);
        return this._m_rowBase;
      }
    });

    /**
     * Indicates whether the row index considers this row to be
     * present in the table. Will be `false` if the row has been
     * deleted.
     */
    Object.defineProperty(RowRef.prototype, 'present', {
      get: function() {
        if (this._m_present !== undefined)
          return this._m_present;
        this._m_present = (((this._parent.rowPresentFlags >>> this.rowIndex) & 1) != 0 ? true : false);
        return this._m_present;
      }
    });

    /**
     * The actual content of the row, as long as it is present.
     */
    Object.defineProperty(RowRef.prototype, 'body', {
      get: function() {
        if (this._m_body !== undefined)
          return this._m_body;
        if (this.present) {
          var _pos = this._io.pos;
          this._io.seek(this.rowBase);
          switch (this._parent._parent.type) {
          case RekordboxPdb.PageType.PLAYLIST_TREE:
            this._m_body = new PlaylistTreeRow(this._io, this, this._root);
            break;
          case RekordboxPdb.PageType.KEYS:
            this._m_body = new KeyRow(this._io, this, this._root);
            break;
          case RekordboxPdb.PageType.ARTISTS:
            this._m_body = new ArtistRow(this._io, this, this._root);
            break;
          case RekordboxPdb.PageType.ALBUMS:
            this._m_body = new AlbumRow(this._io, this, this._root);
            break;
          case RekordboxPdb.PageType.GENRES:
            this._m_body = new GenreRow(this._io, this, this._root);
            break;
          case RekordboxPdb.PageType.ARTWORK:
            this._m_body = new ArtworkRow(this._io, this, this._root);
            break;
          case RekordboxPdb.PageType.PLAYLIST_ENTRIES:
            this._m_body = new PlaylistEntryRow(this._io, this, this._root);
            break;
          case RekordboxPdb.PageType.LABELS:
            this._m_body = new LabelRow(this._io, this, this._root);
            break;
          case RekordboxPdb.PageType.TRACKS:
            this._m_body = new TrackRow(this._io, this, this._root);
            break;
          case RekordboxPdb.PageType.COLORS:
            this._m_body = new ColorRow(this._io, this, this._root);
            break;
          }
          this._io.seek(_pos);
        }
        return this._m_body;
      }
    });

    /**
     * Identifies which row within the row index this reference
     * came from, so the correct flag can be checked for the row
     * presence and the correct row offset can be found.
     */

    return RowRef;
  })();

  /**
   * Unknown purpose, perhaps an unoriginal signature, seems to
   * always have the value 0.
   */

  /**
   * The database page size, in bytes. Pages are referred to by
   * index, so this size is needed to calculate their offset, and
   * table pages have a row index structure which is built from the
   * end of the page backwards, so finding that also requires this
   * value.
   */

  /**
   * Determines the number of table entries that are present. Each
   * table is a linked list of pages containing rows of a particular
   * type.
   */

  /**
   * @flesinak said: "Not used as any `empty_candidate`, points
   * past the end of the file."
   */

  /**
   * @flesniak said: "Always incremented by at least one,
   * sometimes by two or three."
   */

  /**
   * Only exposed until
   * https://github.com/kaitai-io/kaitai_struct/issues/825 can be
   * fixed.
   */

  /**
   * Describes and links to the tables present in the database.
   */

  return RekordboxPdb;
})();
return RekordboxPdb;
}));


/***/ }),

/***/ "./src/cli/index.ts":
/*!**************************!*\
  !*** ./src/cli/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! @sentry/tracing */ "@sentry/tracing");
const Sentry = __importStar(__webpack_require__(/*! @sentry/node */ "@sentry/node"));
const signale_1 = __importDefault(__webpack_require__(/*! signale */ "signale"));
const mixstatus_1 = __webpack_require__(/*! src/mixstatus */ "./src/mixstatus/index.ts");
const network_1 = __webpack_require__(/*! src/network */ "./src/network.ts");
Sentry.init({
    dsn: 'https://36570041fd5a4c05af76456e60a1233a@o126623.ingest.sentry.io/5205486',
    tracesSampleRate: 1,
});
async function cli() {
    signale_1.default.await('Bringing up prolink network');
    const network = await (0, network_1.bringOnline)();
    signale_1.default.success('Network online, preparing to connect');
    network.deviceManager.on('connected', d => signale_1.default.star('New device: %s [id: %s]', d.name, d.id));
    signale_1.default.await('Autoconfiguring network.. waiting for devices');
    await network.autoconfigFromPeers();
    signale_1.default.await('Autoconfigure successfull!');
    signale_1.default.await('Connecting to network!');
    network.connect();
    if (!network.isConnected()) {
        signale_1.default.error('Failed to connect to the network');
        return;
    }
    signale_1.default.star('Network connected! Network services initalized');
    const processor = new mixstatus_1.MixstatusProcessor();
    network.statusEmitter.on('status', s => processor.handleState(s));
    const lastTid = new Map();
    network.statusEmitter.on('status', async (state) => {
        const { trackDeviceId, trackSlot, trackType, trackId } = state;
        if (lastTid.get(state.deviceId) === trackId) {
            return;
        }
        lastTid.set(state.deviceId, trackId);
        console.log(trackId);
        const track = await network.db.getMetadata({
            deviceId: trackDeviceId,
            trackSlot,
            trackType,
            trackId,
        });
        if (track === null) {
            signale_1.default.warn('no track');
            return;
        }
        const art = await network.db.getArtwork({
            deviceId: trackDeviceId,
            trackSlot,
            trackType,
            track,
        });
        console.log(trackId, track.title, art === null || art === void 0 ? void 0 : art.length);
    });
    await new Promise(r => setTimeout(r, 3000));
}
cli();


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VIRTUAL_CDJ_FIRMWARE = exports.VIRTUAL_CDJ_NAME = exports.PROLINK_HEADER = exports.ANNOUNCE_INTERVAL = exports.STATUS_PORT = exports.BEAT_PORT = exports.ANNOUNCE_PORT = exports.DEFAULT_VCDJ_ID = void 0;
/**
 * The default virtual CDJ ID to use.
 *
 * This particular ID is out of the 1-6 range, thus will not be able to request
 * metadata via the remotedb for CDJs.
 */
exports.DEFAULT_VCDJ_ID = 0x07;
/**
 * The port on which devices on the prolink network announce themselves.
 */
exports.ANNOUNCE_PORT = 50000;
/**
 * The port on which devices on the prolink network send beat timing information.
 */
exports.BEAT_PORT = 50001;
/**
 * The port on which devices on the prolink network announce themselves.
 */
exports.STATUS_PORT = 50002;
/**
 * The ammount of time in ms between sending each announcment packet.
 */
exports.ANNOUNCE_INTERVAL = 1500;
// prettier-ignore
/**
 * All UDP packets on the PRO DJ LINK network start with this magic header.
 */
exports.PROLINK_HEADER = Uint8Array.of(0x51, 0x73, 0x70, 0x74, 0x31, 0x57, 0x6d, 0x4a, 0x4f, 0x4c);
/**
 * VirtualCDJName is the name given to the Virtual CDJ device.
 */
exports.VIRTUAL_CDJ_NAME = 'prolink-typescript';
/**
 * VirtualCDJFirmware is a string indicating the firmware version reported with
 * status packets.
 */
exports.VIRTUAL_CDJ_FIRMWARE = '1.43';


/***/ }),

/***/ "./src/control/index.ts":
/*!******************************!*\
  !*** ./src/control/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Control_hostDevice, _Control_beatSocket;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makePlaystatePacket = void 0;
const constants_1 = __webpack_require__(/*! src/constants */ "./src/constants.ts");
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
const utils_1 = __webpack_require__(/*! src/utils */ "./src/utils/index.ts");
const udp_1 = __webpack_require__(/*! src/utils/udp */ "./src/utils/udp.ts");
const STATE_MAP = {
    [types_1.CDJStatus.PlayState.Cued]: 0x01,
    [types_1.CDJStatus.PlayState.Playing]: 0x00,
};
/**
 * Generates the packet used to control the playstate of CDJs
 */
const makePlaystatePacket = ({ hostDevice, device, playState }) => Uint8Array.from([
    ...constants_1.PROLINK_HEADER,
    ...[0x02],
    ...(0, utils_1.buildName)(hostDevice),
    ...[0x01, 0x00],
    ...[hostDevice.id],
    ...[0x00, 0x04],
    ...new Array(4)
        .fill(0x00)
        .map((_, i) => (i === device.id ? STATE_MAP[playState] : 0)),
]);
exports.makePlaystatePacket = makePlaystatePacket;
class Control {
    constructor(beatSocket, hostDevice) {
        _Control_hostDevice.set(this, void 0);
        /**
         * The socket used to send control packets
         */
        _Control_beatSocket.set(this, void 0);
        __classPrivateFieldSet(this, _Control_beatSocket, beatSocket, "f");
        __classPrivateFieldSet(this, _Control_hostDevice, hostDevice, "f");
    }
    /**
     * Start or stop a CDJ on the network
     */
    async setPlayState(device, playState) {
        const packet = (0, exports.makePlaystatePacket)({ hostDevice: __classPrivateFieldGet(this, _Control_hostDevice, "f"), device, playState });
        await (0, udp_1.udpSend)(__classPrivateFieldGet(this, _Control_beatSocket, "f"), packet, constants_1.BEAT_PORT, device.ip.address);
    }
}
exports["default"] = Control;
_Control_hostDevice = new WeakMap(), _Control_beatSocket = new WeakMap();


/***/ }),

/***/ "./src/db/getArtwork.ts":
/*!******************************!*\
  !*** ./src/db/getArtwork.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.viaLocal = exports.viaRemote = void 0;
const Sentry = __importStar(__webpack_require__(/*! @sentry/node */ "@sentry/node"));
const nfs_1 = __webpack_require__(/*! src/nfs */ "./src/nfs/index.ts");
const remotedb_1 = __webpack_require__(/*! src/remotedb */ "./src/remotedb/index.ts");
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
async function viaRemote(remote, opts) {
    const { deviceId, trackSlot, trackType, track, span } = opts;
    const conn = await remote.get(deviceId);
    if (conn === null) {
        return null;
    }
    if (track.artwork === null) {
        return null;
    }
    const queryDescriptor = {
        trackSlot,
        trackType,
        menuTarget: remotedb_1.MenuTarget.Main,
    };
    return conn.query({
        queryDescriptor,
        query: remotedb_1.Query.GetArtwork,
        args: { artworkId: track.artwork.id },
        span,
    });
}
exports.viaRemote = viaRemote;
async function viaLocal(local, device, opts) {
    const { deviceId, trackSlot, track } = opts;
    if (trackSlot !== types_1.MediaSlot.USB && trackSlot !== types_1.MediaSlot.SD) {
        throw new Error('Expected USB or SD slot for remote database query');
    }
    const conn = await local.get(deviceId, trackSlot);
    if (conn === null) {
        return null;
    }
    if (track.artwork === null || track.artwork.path === undefined) {
        return null;
    }
    try {
        return (0, nfs_1.fetchFile)({ device, slot: trackSlot, path: track.artwork.path });
    }
    catch (error) {
        Sentry.captureException(error);
        return null;
    }
}
exports.viaLocal = viaLocal;


/***/ }),

/***/ "./src/db/getMetadata.ts":
/*!*******************************!*\
  !*** ./src/db/getMetadata.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.viaLocal = exports.viaRemote = void 0;
const rekordbox_1 = __webpack_require__(/*! src/localdb/rekordbox */ "./src/localdb/rekordbox.ts");
const remotedb_1 = __webpack_require__(/*! src/remotedb */ "./src/remotedb/index.ts");
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/db/utils.ts");
async function viaRemote(remote, opts) {
    const { deviceId, trackSlot, trackType, trackId, span } = opts;
    const conn = await remote.get(deviceId);
    if (conn === null) {
        return null;
    }
    const queryDescriptor = {
        trackSlot,
        trackType,
        menuTarget: remotedb_1.MenuTarget.Main,
    };
    const track = await conn.query({
        queryDescriptor,
        query: remotedb_1.Query.GetMetadata,
        args: { trackId },
        span,
    });
    track.filePath = await conn.query({
        queryDescriptor,
        query: remotedb_1.Query.GetTrackInfo,
        args: { trackId },
        span,
    });
    track.beatGrid = await conn.query({
        queryDescriptor,
        query: remotedb_1.Query.GetBeatGrid,
        args: { trackId },
        span,
    });
    return track;
}
exports.viaRemote = viaRemote;
async function viaLocal(local, device, opts) {
    const { deviceId, trackSlot, trackId } = opts;
    if (trackSlot !== types_1.MediaSlot.USB && trackSlot !== types_1.MediaSlot.SD) {
        throw new Error('Expected USB or SD slot for local database query');
    }
    const orm = await local.get(deviceId, trackSlot);
    if (orm === null) {
        return null;
    }
    const track = orm.findTrack(trackId);
    if (track === null) {
        return null;
    }
    const anlz = await (0, rekordbox_1.loadAnlz)(track, 'DAT', (0, utils_1.anlzLoader)({ device, slot: trackSlot }));
    track.beatGrid = anlz.beatGrid;
    track.cueAndLoops = anlz.cueAndLoops;
    return track;
}
exports.viaLocal = viaLocal;


/***/ }),

/***/ "./src/db/getPlaylist.ts":
/*!*******************************!*\
  !*** ./src/db/getPlaylist.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.viaLocal = exports.viaRemote = void 0;
const remotedb_1 = __webpack_require__(/*! src/remotedb */ "./src/remotedb/index.ts");
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
async function viaRemote(remote, opts) {
    var _a;
    const { playlist, deviceId, mediaSlot, span } = opts;
    const conn = await remote.get(deviceId);
    if (conn === null) {
        return null;
    }
    const queryDescriptor = {
        trackSlot: mediaSlot,
        trackType: types_1.TrackType.RB,
        menuTarget: remotedb_1.MenuTarget.Main,
    };
    const id = playlist === null || playlist === void 0 ? void 0 : playlist.id;
    const isFolderRequest = (_a = playlist === null || playlist === void 0 ? void 0 : playlist.isFolder) !== null && _a !== void 0 ? _a : true;
    const { folders, playlists, trackEntries } = await conn.query({
        queryDescriptor,
        query: remotedb_1.Query.MenuPlaylist,
        args: { id, isFolderRequest },
        span,
    });
    const iterateTracks = async function* () {
        for (const entry of trackEntries) {
            if (!conn) {
                break;
            }
            yield conn.query({
                queryDescriptor,
                query: remotedb_1.Query.GetMetadata,
                args: { trackId: entry.id },
                span,
            });
        }
    };
    const tracks = { [Symbol.asyncIterator]: iterateTracks };
    const totalTracks = trackEntries.length;
    return { folders, playlists, tracks, totalTracks };
}
exports.viaRemote = viaRemote;
async function viaLocal(local, opts) {
    const { playlist, deviceId, mediaSlot } = opts;
    if (mediaSlot !== types_1.MediaSlot.USB && mediaSlot !== types_1.MediaSlot.SD) {
        throw new Error('Expected USB or SD slot for local database query');
    }
    const orm = await local.get(deviceId, mediaSlot);
    if (orm === null) {
        return null;
    }
    const { folders, playlists, trackEntries } = orm.findPlaylist(playlist === null || playlist === void 0 ? void 0 : playlist.id);
    const iterateTracks = async function* () {
        for (const entry of trackEntries) {
            if (!orm) {
                break;
            }
            yield orm.findTrack(entry.id);
        }
    };
    const tracks = { [Symbol.asyncIterator]: iterateTracks };
    const totalTracks = trackEntries.length;
    return { folders, playlists, tracks, totalTracks };
}
exports.viaLocal = viaLocal;


/***/ }),

/***/ "./src/db/getWaveforms.ts":
/*!********************************!*\
  !*** ./src/db/getWaveforms.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.viaLocal = exports.viaRemote = void 0;
const rekordbox_1 = __webpack_require__(/*! src/localdb/rekordbox */ "./src/localdb/rekordbox.ts");
const remotedb_1 = __webpack_require__(/*! src/remotedb */ "./src/remotedb/index.ts");
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/db/utils.ts");
async function viaRemote(remote, opts) {
    const { deviceId, trackSlot, trackType, track, span } = opts;
    const conn = await remote.get(deviceId);
    if (conn === null) {
        return null;
    }
    const queryDescriptor = {
        trackSlot,
        trackType,
        menuTarget: remotedb_1.MenuTarget.Main,
    };
    const waveformHd = await conn.query({
        queryDescriptor,
        query: remotedb_1.Query.GetWaveformHD,
        args: { trackId: track.id },
        span,
    });
    return { waveformHd };
}
exports.viaRemote = viaRemote;
async function viaLocal(local, device, opts) {
    const { deviceId, trackSlot, track } = opts;
    if (trackSlot !== types_1.MediaSlot.USB && trackSlot !== types_1.MediaSlot.SD) {
        throw new Error('Expected USB or SD slot for remote database query');
    }
    const conn = await local.get(deviceId, trackSlot);
    if (conn === null) {
        return null;
    }
    const anlz = await (0, rekordbox_1.loadAnlz)(track, 'EXT', (0, utils_1.anlzLoader)({ device, slot: trackSlot }));
    return { waveformHd: anlz.waveformHd };
}
exports.viaLocal = viaLocal;


/***/ }),

/***/ "./src/db/index.ts":
/*!*************************!*\
  !*** ./src/db/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Database_hostDevice, _Database_deviceManager, _Database_localDatabase, _Database_remoteDatabase, _Database_getTrackLookupStrategy, _Database_getMediaLookupStrategy;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Sentry = __importStar(__webpack_require__(/*! @sentry/node */ "@sentry/node"));
const tracing_1 = __webpack_require__(/*! @sentry/tracing */ "@sentry/tracing");
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
const utils_1 = __webpack_require__(/*! src/utils */ "./src/utils/index.ts");
const GetArtwork = __importStar(__webpack_require__(/*! ./getArtwork */ "./src/db/getArtwork.ts"));
const GetMetadata = __importStar(__webpack_require__(/*! ./getMetadata */ "./src/db/getMetadata.ts"));
const GetPlaylist = __importStar(__webpack_require__(/*! ./getPlaylist */ "./src/db/getPlaylist.ts"));
const GetWaveforms = __importStar(__webpack_require__(/*! ./getWaveforms */ "./src/db/getWaveforms.ts"));
var LookupStrategy;
(function (LookupStrategy) {
    LookupStrategy[LookupStrategy["Remote"] = 0] = "Remote";
    LookupStrategy[LookupStrategy["Local"] = 1] = "Local";
    LookupStrategy[LookupStrategy["NoneAvailable"] = 2] = "NoneAvailable";
})(LookupStrategy || (LookupStrategy = {}));
/**
 * A Database is the central service used to query devices on the prolink
 * network for information from their databases.
 */
class Database {
    constructor(hostDevice, local, remote, deviceManager) {
        _Database_hostDevice.set(this, void 0);
        _Database_deviceManager.set(this, void 0);
        /**
         * The local database service, used when querying media devices connected
         * directly to CDJs containing a rekordbox formatted database.
         */
        _Database_localDatabase.set(this, void 0);
        /**
         * The remote database service, used when querying the Rekordbox software or a
         * CDJ with an unanalyzed media device connected (when possible).
         */
        _Database_remoteDatabase.set(this, void 0);
        _Database_getTrackLookupStrategy.set(this, (device, type) => {
            const isUnanalyzed = type === types_1.TrackType.AudioCD || type === types_1.TrackType.Unanalyzed;
            const requiresCdjRemote = device.type === types_1.DeviceType.CDJ && isUnanalyzed && this.cdjSupportsRemotedb;
            return device.type === types_1.DeviceType.Rekordbox || requiresCdjRemote
                ? LookupStrategy.Remote
                : device.type === types_1.DeviceType.CDJ && type === types_1.TrackType.RB
                    ? LookupStrategy.Local
                    : LookupStrategy.NoneAvailable;
        });
        _Database_getMediaLookupStrategy.set(this, (device, slot) => device.type === types_1.DeviceType.Rekordbox && slot === types_1.MediaSlot.RB
            ? LookupStrategy.Remote
            : device.type === types_1.DeviceType.Rekordbox
                ? LookupStrategy.NoneAvailable
                : LookupStrategy.Local);
        __classPrivateFieldSet(this, _Database_hostDevice, hostDevice, "f");
        __classPrivateFieldSet(this, _Database_localDatabase, local, "f");
        __classPrivateFieldSet(this, _Database_remoteDatabase, remote, "f");
        __classPrivateFieldSet(this, _Database_deviceManager, deviceManager, "f");
    }
    /**
     * Reports weather or not the CDJs can be communcated to over the remote
     * database protocol. This is important when trying to query for unanalyzed or
     * compact disc tracks.
     */
    get cdjSupportsRemotedb() {
        return __classPrivateFieldGet(this, _Database_hostDevice, "f").id > 0 && __classPrivateFieldGet(this, _Database_hostDevice, "f").id < 7;
    }
    /**
     * Retrieve metadata for a track on a specfic device slot.
     */
    async getMetadata(opts) {
        const { deviceId, trackType, trackSlot, span } = opts;
        const tx = span
            ? span.startChild({ op: 'dbGetMetadata' })
            : Sentry.startTransaction({ name: 'dbGetMetadata' });
        tx.setTag('deviceId', deviceId.toString());
        tx.setTag('trackType', (0, utils_1.getTrackTypeName)(trackType));
        tx.setTag('trackSlot', (0, utils_1.getSlotName)(trackSlot));
        const callOpts = { ...opts, span: tx };
        const device = await __classPrivateFieldGet(this, _Database_deviceManager, "f").getDeviceEnsured(deviceId);
        if (device === null) {
            return null;
        }
        const strategy = __classPrivateFieldGet(this, _Database_getTrackLookupStrategy, "f").call(this, device, trackType);
        let track = null;
        if (strategy === LookupStrategy.Remote) {
            track = await GetMetadata.viaRemote(__classPrivateFieldGet(this, _Database_remoteDatabase, "f"), callOpts);
        }
        if (strategy === LookupStrategy.Local) {
            track = await GetMetadata.viaLocal(__classPrivateFieldGet(this, _Database_localDatabase, "f"), device, callOpts);
        }
        if (strategy === LookupStrategy.NoneAvailable) {
            tx.setStatus(tracing_1.SpanStatus.Unavailable);
        }
        tx.finish();
        return track;
    }
    /**
     * Retrives the artwork for a track on a specific device slot.
     */
    async getArtwork(opts) {
        const { deviceId, trackType, trackSlot, span } = opts;
        const tx = span
            ? span.startChild({ op: 'dbGetArtwork' })
            : Sentry.startTransaction({ name: 'dbGetArtwork' });
        tx.setTag('deviceId', deviceId.toString());
        tx.setTag('trackType', (0, utils_1.getTrackTypeName)(trackType));
        tx.setTag('trackSlot', (0, utils_1.getSlotName)(trackSlot));
        const callOpts = { ...opts, span: tx };
        const device = await __classPrivateFieldGet(this, _Database_deviceManager, "f").getDeviceEnsured(deviceId);
        if (device === null) {
            return null;
        }
        const strategy = __classPrivateFieldGet(this, _Database_getTrackLookupStrategy, "f").call(this, device, trackType);
        let artwork = null;
        if (strategy === LookupStrategy.Remote) {
            artwork = await GetArtwork.viaRemote(__classPrivateFieldGet(this, _Database_remoteDatabase, "f"), callOpts);
        }
        if (strategy === LookupStrategy.Local) {
            artwork = await GetArtwork.viaLocal(__classPrivateFieldGet(this, _Database_localDatabase, "f"), device, callOpts);
        }
        if (strategy === LookupStrategy.NoneAvailable) {
            tx.setStatus(tracing_1.SpanStatus.Unavailable);
        }
        tx.finish();
        return artwork;
    }
    /**
     * Retrives the waveforms for a track on a specific device slot.
     */
    async getWaveforms(opts) {
        const { deviceId, trackType, trackSlot, span } = opts;
        const tx = span
            ? span.startChild({ op: 'dbGetWaveforms' })
            : Sentry.startTransaction({ name: 'dbGetWaveforms' });
        tx.setTag('deviceId', deviceId.toString());
        tx.setTag('trackType', (0, utils_1.getTrackTypeName)(trackType));
        tx.setTag('trackSlot', (0, utils_1.getSlotName)(trackSlot));
        const callOpts = { ...opts, span: tx };
        const device = await __classPrivateFieldGet(this, _Database_deviceManager, "f").getDeviceEnsured(deviceId);
        if (device === null) {
            return null;
        }
        const strategy = __classPrivateFieldGet(this, _Database_getTrackLookupStrategy, "f").call(this, device, trackType);
        let waveforms = null;
        if (strategy === LookupStrategy.Remote) {
            waveforms = await GetWaveforms.viaRemote(__classPrivateFieldGet(this, _Database_remoteDatabase, "f"), callOpts);
        }
        if (strategy === LookupStrategy.Local) {
            waveforms = await GetWaveforms.viaLocal(__classPrivateFieldGet(this, _Database_localDatabase, "f"), device, callOpts);
        }
        if (strategy === LookupStrategy.NoneAvailable) {
            tx.setStatus(tracing_1.SpanStatus.Unavailable);
        }
        tx.finish();
        return waveforms;
    }
    /**
     * Retrieve folders, playlists, and tracks within the playlist tree. The id
     * may be left undefined to query the root of the playlist tree.
     *
     * NOTE: You will never receive a track list and playlists or folders at the
     * same time. But the API is simpler to combine the lookup for these.
     */
    async getPlaylist(opts) {
        const { deviceId, mediaSlot, span } = opts;
        const tx = span
            ? span.startChild({ op: 'dbGetPlaylist' })
            : Sentry.startTransaction({ name: 'dbGetPlaylist' });
        tx.setTag('deviceId', deviceId.toString());
        tx.setTag('mediaSlot', (0, utils_1.getSlotName)(mediaSlot));
        const callOpts = { ...opts, span: tx };
        const device = await __classPrivateFieldGet(this, _Database_deviceManager, "f").getDeviceEnsured(deviceId);
        if (device === null) {
            return null;
        }
        const strategy = __classPrivateFieldGet(this, _Database_getMediaLookupStrategy, "f").call(this, device, mediaSlot);
        let contents = null;
        if (strategy === LookupStrategy.Remote) {
            contents = await GetPlaylist.viaRemote(__classPrivateFieldGet(this, _Database_remoteDatabase, "f"), callOpts);
        }
        if (strategy === LookupStrategy.Local) {
            contents = await GetPlaylist.viaLocal(__classPrivateFieldGet(this, _Database_localDatabase, "f"), callOpts);
        }
        if (strategy === LookupStrategy.NoneAvailable) {
            tx.setStatus(tracing_1.SpanStatus.Unavailable);
        }
        tx.finish();
        return contents;
    }
}
_Database_hostDevice = new WeakMap(), _Database_deviceManager = new WeakMap(), _Database_localDatabase = new WeakMap(), _Database_remoteDatabase = new WeakMap(), _Database_getTrackLookupStrategy = new WeakMap(), _Database_getMediaLookupStrategy = new WeakMap();
exports["default"] = Database;


/***/ }),

/***/ "./src/db/utils.ts":
/*!*************************!*\
  !*** ./src/db/utils.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.anlzLoader = void 0;
const nfs_1 = __webpack_require__(/*! src/nfs */ "./src/nfs/index.ts");
function anlzLoader(opts) {
    return (path) => (0, nfs_1.fetchFile)({ ...opts, path });
}
exports.anlzLoader = anlzLoader;


/***/ }),

/***/ "./src/devices/index.ts":
/*!******************************!*\
  !*** ./src/devices/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DeviceManager_config, _DeviceManager_devices, _DeviceManager_deviceTimeouts, _DeviceManager_emitter, _DeviceManager_handleAnnounce, _DeviceManager_handleDisconnect;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __webpack_require__(/*! events */ "events");
const constants_1 = __webpack_require__(/*! src/constants */ "./src/constants.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/devices/utils.ts");
const defaultConfig = {
    deviceTimeout: 10000,
};
/**
 * The upper bound in milliseconds to wait when looking for a device to be on
 * the network when using the `getDeviceEnsured` method.
 */
const ENSURED_TIMEOUT = 2000;
/**
 * The device manager is responsible for tracking devices that appear on the
 * prolink network, providing an API to react to devices livecycle events as
 * they connect and disconnect form the network.
 */
class DeviceManager {
    constructor(announceSocket, config) {
        /**
         * Device manager configuration
         */
        _DeviceManager_config.set(this, void 0);
        /**
         * The map of all active devices currently available on the network.
         */
        _DeviceManager_devices.set(this, new Map());
        /**
         * Tracks device timeout handlers, as devices announce themselves these
         * timeouts will be updated.
         */
        _DeviceManager_deviceTimeouts.set(this, new Map());
        /**
         * The EventEmitter which will be used to trigger device lifecycle events
         */
        _DeviceManager_emitter.set(this, new events_1.EventEmitter());
        // Bind public event emitter interface
        this.on = __classPrivateFieldGet(this, _DeviceManager_emitter, "f").addListener.bind(__classPrivateFieldGet(this, _DeviceManager_emitter, "f"));
        this.off = __classPrivateFieldGet(this, _DeviceManager_emitter, "f").removeListener.bind(__classPrivateFieldGet(this, _DeviceManager_emitter, "f"));
        this.once = __classPrivateFieldGet(this, _DeviceManager_emitter, "f").once.bind(__classPrivateFieldGet(this, _DeviceManager_emitter, "f"));
        _DeviceManager_handleAnnounce.set(this, (message) => {
            const device = (0, utils_1.deviceFromPacket)(message);
            if (device === null) {
                return;
            }
            if (device.name === constants_1.VIRTUAL_CDJ_NAME) {
                return;
            }
            // Device has not checked in before
            if (!__classPrivateFieldGet(this, _DeviceManager_devices, "f").has(device.id)) {
                __classPrivateFieldGet(this, _DeviceManager_devices, "f").set(device.id, device);
                __classPrivateFieldGet(this, _DeviceManager_emitter, "f").emit('connected', device);
            }
            __classPrivateFieldGet(this, _DeviceManager_emitter, "f").emit('announced', device);
            // Reset the device timeout handler
            const activeTimeout = __classPrivateFieldGet(this, _DeviceManager_deviceTimeouts, "f").get(device.id);
            if (activeTimeout) {
                clearTimeout(activeTimeout);
            }
            const timeout = __classPrivateFieldGet(this, _DeviceManager_config, "f").deviceTimeout;
            const newTimeout = setTimeout(__classPrivateFieldGet(this, _DeviceManager_handleDisconnect, "f"), timeout, device);
            __classPrivateFieldGet(this, _DeviceManager_deviceTimeouts, "f").set(device.id, newTimeout);
        });
        _DeviceManager_handleDisconnect.set(this, (removedDevice) => {
            __classPrivateFieldGet(this, _DeviceManager_devices, "f").delete(removedDevice.id);
            __classPrivateFieldGet(this, _DeviceManager_deviceTimeouts, "f").delete(removedDevice.id);
            __classPrivateFieldGet(this, _DeviceManager_emitter, "f").emit('disconnected', removedDevice);
        });
        __classPrivateFieldSet(this, _DeviceManager_config, { ...defaultConfig, ...config }, "f");
        // Begin listening for device announcments
        announceSocket.on('message', __classPrivateFieldGet(this, _DeviceManager_handleAnnounce, "f"));
    }
    /**
     * Get active devices on the network.
     */
    get devices() {
        return __classPrivateFieldGet(this, _DeviceManager_devices, "f");
    }
    /**
     * Waits for a specific device ID to appear on the network, with a
     * configurable timeout, in which case it will resolve with null.
     */
    async getDeviceEnsured(id, timeout = ENSURED_TIMEOUT) {
        const existingDevice = this.devices.get(id);
        if (existingDevice !== undefined) {
            return existingDevice;
        }
        let handler;
        // Wait for the device to be connected
        const devicePromise = new Promise(resolve => {
            handler = (device) => device.id === id && resolve(device);
            this.on('connected', handler);
        });
        const device = await Promise.race([
            devicePromise,
            new Promise(r => setTimeout(() => r(null), timeout)),
        ]);
        this.off('connected', handler);
        return device;
    }
    reconfigure(config) {
        __classPrivateFieldSet(this, _DeviceManager_config, { ...__classPrivateFieldGet(this, _DeviceManager_config, "f"), ...config }, "f");
    }
}
_DeviceManager_config = new WeakMap(), _DeviceManager_devices = new WeakMap(), _DeviceManager_deviceTimeouts = new WeakMap(), _DeviceManager_emitter = new WeakMap(), _DeviceManager_handleAnnounce = new WeakMap(), _DeviceManager_handleDisconnect = new WeakMap();
exports["default"] = DeviceManager;


/***/ }),

/***/ "./src/devices/utils.ts":
/*!******************************!*\
  !*** ./src/devices/utils.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deviceFromPacket = void 0;
const ip = __importStar(__webpack_require__(/*! ip-address */ "ip-address"));
const constants_1 = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/**
 * Converts a announce packet to a device object.
 */
function deviceFromPacket(packet) {
    if (packet.indexOf(constants_1.PROLINK_HEADER) !== 0) {
        throw new Error('Announce packet does not start with expected header');
    }
    if (packet[0x0a] !== 0x06) {
        return null;
    }
    const name = packet
        .slice(0x0c, 0x0c + 20)
        .toString()
        .replace(/\0/g, '');
    const device = {
        name,
        id: packet[0x24],
        type: packet[0x34],
        macAddr: new Uint8Array(packet.slice(0x26, 0x26 + 6)),
        ip: ip.Address4.fromInteger(packet.readUInt32BE(0x2c)),
    };
    return device;
}
exports.deviceFromPacket = deviceFromPacket;


/***/ }),

/***/ "./src/localdb/index.ts":
/*!******************************!*\
  !*** ./src/localdb/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LocalDatabase_hostDevice, _LocalDatabase_deviceManager, _LocalDatabase_statusEmitter, _LocalDatabase_emitter, _LocalDatabase_slotLocks, _LocalDatabase_dbs, _LocalDatabase_handleDeviceRemoved, _LocalDatabase_hydrateDatabase;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Sentry = __importStar(__webpack_require__(/*! @sentry/node */ "@sentry/node"));
const async_mutex_1 = __webpack_require__(/*! async-mutex */ "async-mutex");
const crypto_1 = __webpack_require__(/*! crypto */ "crypto");
const events_1 = __webpack_require__(/*! events */ "events");
const nfs_1 = __webpack_require__(/*! src/nfs */ "./src/nfs/index.ts");
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
const utils_1 = __webpack_require__(/*! src/utils */ "./src/utils/index.ts");
const orm_1 = __webpack_require__(/*! ./orm */ "./src/localdb/orm.ts");
const rekordbox_1 = __webpack_require__(/*! ./rekordbox */ "./src/localdb/rekordbox.ts");
/**
 * Compute the identifier for media device in a CDJ. This is used to determine
 * if we have already hydrated the device or not into our local database.
 */
const getMediaId = (info) => {
    const inputs = [
        info.deviceId,
        info.slot,
        info.name,
        info.freeBytes,
        info.totalBytes,
        info.trackCount,
        info.createdDate,
    ];
    return (0, crypto_1.createHash)('sha256').update(inputs.join('.'), 'utf8').digest().toString();
};
/**
 * The local database is responsible for syncing the remote rekordbox databases
 * of media slots on a device into in-memory sqlite databases.
 *
 * This service will attempt to ensure the in-memory databases for each media
 * device that is connected to a CDJ is locally kept in sync. Fetching the
 * database for any media slot of it's not already cached.
 */
class LocalDatabase {
    constructor(hostDevice, deviceManager, statusEmitter) {
        _LocalDatabase_hostDevice.set(this, void 0);
        _LocalDatabase_deviceManager.set(this, void 0);
        _LocalDatabase_statusEmitter.set(this, void 0);
        /**
         * The EventEmitter that will report database events
         */
        _LocalDatabase_emitter.set(this, new events_1.EventEmitter());
        /**
         * Locks for each device slot: ${device.id}-${slot}. Used when making track
         * requets.
         */
        _LocalDatabase_slotLocks.set(this, new Map());
        /**
         * The current available databases
         */
        _LocalDatabase_dbs.set(this, []);
        // Bind public event emitter interface
        this.on = __classPrivateFieldGet(this, _LocalDatabase_emitter, "f").addListener.bind(__classPrivateFieldGet(this, _LocalDatabase_emitter, "f"));
        this.off = __classPrivateFieldGet(this, _LocalDatabase_emitter, "f").removeListener.bind(__classPrivateFieldGet(this, _LocalDatabase_emitter, "f"));
        this.once = __classPrivateFieldGet(this, _LocalDatabase_emitter, "f").once.bind(__classPrivateFieldGet(this, _LocalDatabase_emitter, "f"));
        /**
         * Closes the database connection and removes the database entry when a
         * device is removed.
         */
        _LocalDatabase_handleDeviceRemoved.set(this, (device) => {
            var _a;
            (_a = __classPrivateFieldGet(this, _LocalDatabase_dbs, "f").find(db => db.media.deviceId === device.id)) === null || _a === void 0 ? void 0 : _a.orm.close();
            __classPrivateFieldSet(this, _LocalDatabase_dbs, __classPrivateFieldGet(this, _LocalDatabase_dbs, "f").filter(db => db.media.deviceId !== device.id), "f");
        });
        /**
         * Downloads and hydrates a new in-memory sqlite database
         */
        _LocalDatabase_hydrateDatabase.set(this, async (device, slot, media) => {
            const tx = Sentry.startTransaction({ name: 'hydrateDatabase' });
            tx.setTag('slot', (0, utils_1.getSlotName)(media.slot));
            tx.setData('numTracks', media.trackCount.toString());
            const dbCreateTx = tx.startChild({ op: 'setupDatabase' });
            const orm = new orm_1.MetadataORM();
            dbCreateTx.finish();
            let pdbData = Buffer.alloc(0);
            const fetchPdbData = async (path) => (pdbData = await (0, nfs_1.fetchFile)({
                device,
                slot,
                path,
                span: tx,
                onProgress: progress => __classPrivateFieldGet(this, _LocalDatabase_emitter, "f").emit('fetchProgress', { device, slot, progress }),
            }));
            // Rekordbox exports to both the `.PIONEER` and `PIONEER` folder, depending
            // on the media devices filesystem (HFS, FAT32, etc). Unfortuantely there's no
            // way for us to know the type of filesystem, so we have to try both
            const path = 'PIONEER/rekordbox/export.pdb';
            // Attempt to be semi-smart and first try the path coorelating to the OS
            // they're running this on. The assumption is they may have used the same
            // machine to export their tracks on.
            const attemptOrder = process.platform === 'win32' ? [path, `.${path}`] : [`.${path}`, path];
            try {
                await fetchPdbData(attemptOrder[0]);
            }
            catch {
                await fetchPdbData(attemptOrder[1]);
            }
            await (0, rekordbox_1.hydrateDatabase)({
                orm,
                pdbData,
                span: tx,
                onProgress: progress => __classPrivateFieldGet(this, _LocalDatabase_emitter, "f").emit('hydrationProgress', { device, slot, progress }),
            });
            __classPrivateFieldGet(this, _LocalDatabase_emitter, "f").emit('hydrationDone', { device, slot });
            const db = { orm, media, id: getMediaId(media) };
            __classPrivateFieldGet(this, _LocalDatabase_dbs, "f").push(db);
            tx.finish();
            return db;
        });
        __classPrivateFieldSet(this, _LocalDatabase_hostDevice, hostDevice, "f");
        __classPrivateFieldSet(this, _LocalDatabase_deviceManager, deviceManager, "f");
        __classPrivateFieldSet(this, _LocalDatabase_statusEmitter, statusEmitter, "f");
        deviceManager.on('disconnected', __classPrivateFieldGet(this, _LocalDatabase_handleDeviceRemoved, "f"));
    }
    /**
     * Disconnects the local database connection for the specified device
     */
    disconnectForDevice(device) {
        __classPrivateFieldGet(this, _LocalDatabase_handleDeviceRemoved, "f").call(this, device);
    }
    /**
     * Gets the sqlite ORM service for to a database hydrated with the media
     * metadata for the provided device slot.
     *
     * If the database has not already been hydrated this will first hydrate the
     * database, which may take some time depending on the size of the database.
     *
     * @returns null if no rekordbox media present
     */
    async get(deviceId, slot) {
        var _a;
        const lockKey = `${deviceId}-${slot}`;
        const lock = (_a = __classPrivateFieldGet(this, _LocalDatabase_slotLocks, "f").get(lockKey)) !== null && _a !== void 0 ? _a : __classPrivateFieldGet(this, _LocalDatabase_slotLocks, "f").set(lockKey, new async_mutex_1.Mutex()).get(lockKey);
        const device = __classPrivateFieldGet(this, _LocalDatabase_deviceManager, "f").devices.get(deviceId);
        if (device === undefined) {
            return null;
        }
        if (device.type !== types_1.DeviceType.CDJ) {
            throw new Error('Cannot create database from devices that are not CDJs');
        }
        const media = await __classPrivateFieldGet(this, _LocalDatabase_statusEmitter, "f").queryMediaSlot({
            hostDevice: __classPrivateFieldGet(this, _LocalDatabase_hostDevice, "f"),
            device,
            slot,
        });
        if (media.tracksType !== types_1.TrackType.RB) {
            return null;
        }
        const id = getMediaId(media);
        // Aquire a lock for this device slot that will not release until we've
        // guarnteed the existance of the database.
        const db = await lock.runExclusive(() => { var _a; return (_a = __classPrivateFieldGet(this, _LocalDatabase_dbs, "f").find(db => db.id === id)) !== null && _a !== void 0 ? _a : __classPrivateFieldGet(this, _LocalDatabase_hydrateDatabase, "f").call(this, device, slot, media); });
        return db.orm;
    }
    /**
     * Preload the databases for all connected devices.
     */
    async preload() {
        const loaders = [...__classPrivateFieldGet(this, _LocalDatabase_deviceManager, "f").devices.values()]
            .filter(device => device.type === types_1.DeviceType.CDJ)
            .map(device => Promise.all([
            this.get(device.id, types_1.MediaSlot.USB),
            this.get(device.id, types_1.MediaSlot.SD),
        ]));
        await Promise.all(loaders);
    }
}
_LocalDatabase_hostDevice = new WeakMap(), _LocalDatabase_deviceManager = new WeakMap(), _LocalDatabase_statusEmitter = new WeakMap(), _LocalDatabase_emitter = new WeakMap(), _LocalDatabase_slotLocks = new WeakMap(), _LocalDatabase_dbs = new WeakMap(), _LocalDatabase_handleDeviceRemoved = new WeakMap(), _LocalDatabase_hydrateDatabase = new WeakMap();
exports["default"] = LocalDatabase;


/***/ }),

/***/ "./src/localdb/orm.ts":
/*!****************************!*\
  !*** ./src/localdb/orm.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _MetadataORM_conn;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetadataORM = exports.Table = void 0;
const better_sqlite3_1 = __importDefault(__webpack_require__(/*! better-sqlite3 */ "better-sqlite3"));
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const schema_1 = __webpack_require__(/*! ./schema */ "./src/localdb/schema.ts");
/**
 * Table names availble
 */
var Table;
(function (Table) {
    Table["Artist"] = "artist";
    Table["Album"] = "album";
    Table["Genre"] = "genre";
    Table["Color"] = "color";
    Table["Label"] = "label";
    Table["Key"] = "key";
    Table["Artwork"] = "artwork";
    Table["Playlist"] = "playlist";
    Table["PlaylistEntry"] = "playlist_entry";
    Table["Track"] = "track";
})(Table = exports.Table || (exports.Table = {}));
const trackRelations = [
    'artwork',
    'artist',
    'originalArtist',
    'remixer',
    'composer',
    'album',
    'label',
    'genre',
    'color',
    'key',
];
const trackRelationTableMap = {
    originalArtist: 'artist',
    remixer: 'artist',
    composer: 'artist',
};
/**
 * Object Relation Mapper as an abstraction ontop of a local database
 * connection.
 *
 * May be used to populate a metadata database and query objects.
 */
class MetadataORM {
    constructor() {
        _MetadataORM_conn.set(this, void 0);
        __classPrivateFieldSet(this, _MetadataORM_conn, (0, better_sqlite3_1.default)(':memory:'), "f");
        __classPrivateFieldGet(this, _MetadataORM_conn, "f").exec((0, schema_1.generateSchema)());
    }
    close() {
        __classPrivateFieldGet(this, _MetadataORM_conn, "f").close();
    }
    /**
     * Insert a entity object into the database.
     */
    insertEntity(table, object) {
        const fields = Object.entries(object);
        const slots = fields.map(f => `:${f[0]}`).join(', ');
        const columns = fields.map(f => (0, lodash_1.snakeCase)(f[0])).join(', ');
        const stmt = __classPrivateFieldGet(this, _MetadataORM_conn, "f").prepare(`insert into ${table} (${columns}) values (${slots})`);
        // Translate date and booleans
        const data = (0, lodash_1.mapValues)(object, value => value instanceof Date
            ? value.toISOString()
            : typeof value === 'boolean'
                ? Number(value)
                : value);
        stmt.run(data);
    }
    /**
     * Locate a track by ID in the database
     */
    findTrack(id) {
        var _a;
        const row = __classPrivateFieldGet(this, _MetadataORM_conn, "f")
            .prepare(`select * from ${Table.Track} where id = ?`)
            .get(id);
        // Map row columns to camel case compatability
        const trackRow = (0, lodash_1.mapKeys)(row, (_, k) => (0, lodash_1.camelCase)(k));
        trackRow.beatGrid = null;
        trackRow.cueAndLoops = null;
        trackRow.waveformHd = null;
        // Explicitly restore dates and booleans
        trackRow.autoloadHotcues = !!trackRow.autoloadHotcues;
        trackRow.kuvoPublic = !!trackRow.kuvoPublic;
        // Explicity restore date objects
        trackRow.analyzeDate = new Date(trackRow.analyzeDate);
        trackRow.dateAdded = new Date(trackRow.dateAdded);
        // Query all track relationships
        const track = trackRow;
        for (const relation of trackRelations) {
            const fkName = `${relation}Id`;
            const fk = track[fkName];
            const table = (0, lodash_1.snakeCase)((_a = trackRelationTableMap[relation]) !== null && _a !== void 0 ? _a : relation);
            // Swap fk for relation key
            delete track[fkName];
            track[relation] = null;
            if (fk === null) {
                continue;
            }
            const relationItem = __classPrivateFieldGet(this, _MetadataORM_conn, "f")
                .prepare(`select * from ${table} where id = ?`)
                .get(fk);
            track[relation] = relationItem;
        }
        return track;
    }
    /**
     * Query for a list of {folders, playlists, tracks} given a playlist ID. If
     * no ID is provided the root list is queried.
     *
     * Note that when tracks are returned there will be no folders or playslists.
     * But the API here is simpler to assume there could be.
     *
     * Tracks are returned in the order they are placed on the playlist.
     */
    findPlaylist(playlistId) {
        const parentCondition = playlistId === undefined ? 'parent_id is ?' : 'parent_id = ?';
        // Lookup playlists / folders for this playlist ID
        const playlistRows = __classPrivateFieldGet(this, _MetadataORM_conn, "f")
            .prepare(`select * from ${Table.Playlist} where ${parentCondition}`)
            .all(playlistId);
        const [folders, playlists] = (0, lodash_1.partition)(playlistRows.map(row => (0, lodash_1.mapKeys)(row, (_, k) => (0, lodash_1.camelCase)(k))), p => p.isFolder);
        const entryRows = __classPrivateFieldGet(this, _MetadataORM_conn, "f")
            .prepare(`select * from ${Table.PlaylistEntry} where playlist_id = ?`)
            .all(playlistId);
        const trackEntries = entryRows.map(row => (0, lodash_1.mapKeys)(row, (_, k) => (0, lodash_1.camelCase)(k)));
        return { folders, playlists, trackEntries };
    }
}
exports.MetadataORM = MetadataORM;
_MetadataORM_conn = new WeakMap();


/***/ }),

/***/ "./src/localdb/rekordbox.ts":
/*!**********************************!*\
  !*** ./src/localdb/rekordbox.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _RekordboxHydrator_orm, _RekordboxHydrator_onProgress;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadAnlz = exports.hydrateDatabase = void 0;
const Sentry = __importStar(__webpack_require__(/*! @sentry/node */ "@sentry/node"));
const kaitai_struct_1 = __webpack_require__(/*! kaitai-struct */ "kaitai-struct");
const rekordbox_anlz_ksy_1 = __importDefault(__webpack_require__(/*! src/localdb/kaitai/rekordbox_anlz.ksy */ "./src/localdb/kaitai/rekordbox_anlz.ksy"));
const rekordbox_pdb_ksy_1 = __importDefault(__webpack_require__(/*! src/localdb/kaitai/rekordbox_pdb.ksy */ "./src/localdb/kaitai/rekordbox_pdb.ksy"));
const orm_1 = __webpack_require__(/*! src/localdb/orm */ "./src/localdb/orm.ts");
const utils_1 = __webpack_require__(/*! src/localdb/utils */ "./src/localdb/utils.ts");
const converters_1 = __webpack_require__(/*! src/utils/converters */ "./src/utils/converters.ts");
/**
 * Given a rekordbox pdb file contents. This function will hydrate the provided
 * database with all entities from the Rekordbox database. This includes all
 * track metadata, including analyzed metadata (such as beatgrids and waveforms).
 */
async function hydrateDatabase({ pdbData, span, ...options }) {
    const hydrator = new RekordboxHydrator(options);
    await hydrator.hydrateFromPdb(pdbData, span);
}
exports.hydrateDatabase = hydrateDatabase;
/**
 * Loads the ANLZ data of a Track entity from the analyzePath.
 */
async function loadAnlz(track, type, anlzResolver) {
    const path = `${track.analyzePath}.${type}`;
    const anlzData = await anlzResolver(path);
    const stream = new kaitai_struct_1.KaitaiStream(anlzData);
    const anlz = new rekordbox_anlz_ksy_1.default(stream);
    const result = {};
    const resultDat = result;
    const resultExt = result;
    for (const section of anlz.sections) {
        if (section.fourcc === SectionTags.BEAT_GRID) {
            resultDat.beatGrid = makeBeatGrid(section);
            continue;
        }
        if (section.fourcc === SectionTags.CUES) {
            resultDat.cueAndLoops = makeCueAndLoop(section);
            continue;
        }
        if (section.fourcc === SectionTags.WAVE_COLOR_SCROLL) {
            resultExt.waveformHd = makeWaveformHd(section);
            continue;
        }
        // TODO: The following sections haven't yet been extracted into the local
        //       database.
        //
        // [SectionTags.CUES_2]: null,             <- In the EXT file
        // [SectionTags.SONG_STRUCTURE]: null,     <- In the EXT file
        // [SectionTags.WAVE_PREVIEW]: null,
        // [SectionTags.WAVE_SCROLL]: null,
        // [SectionTags.WAVE_COLOR_PREVIEW]: null, <- In the EXT file
    }
    return result;
}
exports.loadAnlz = loadAnlz;
/**
 * This service provides utilities for translating rekordbox database (pdb_ and
 * analysis (ANLZ) files into the common entity types used in this library.
 */
class RekordboxHydrator {
    constructor({ orm, onProgress }) {
        _RekordboxHydrator_orm.set(this, void 0);
        _RekordboxHydrator_onProgress.set(this, void 0);
        __classPrivateFieldSet(this, _RekordboxHydrator_orm, orm, "f");
        __classPrivateFieldSet(this, _RekordboxHydrator_onProgress, onProgress !== null && onProgress !== void 0 ? onProgress : (() => null), "f");
    }
    /**
     * Extract entries from a rekordbox pdb file and hydrate the passed database
     * connection with entities derived from the rekordbox entries.
     */
    async hydrateFromPdb(pdbData, span) {
        const tx = span
            ? span.startChild({ op: 'hydrateFromPdb' })
            : Sentry.startTransaction({ name: 'hydrateFromPdb' });
        const parseTx = tx.startChild({ op: 'parsePdbData', data: { size: pdbData.length } });
        const stream = new kaitai_struct_1.KaitaiStream(pdbData);
        const db = new rekordbox_pdb_ksy_1.default(stream);
        parseTx.finish();
        const hydrateTx = tx.startChild({ op: 'hydration' });
        await Promise.all(db.tables.map((table) => this.hydrateFromTable(table, hydrateTx)));
        hydrateTx.finish();
        tx.finish();
    }
    /**
     * Hydrate the database with entities from the provided RekordboxPdb table.
     * See pdbEntityCreators for how tables are mapped into database entities.
     */
    async hydrateFromTable(table, span) {
        const tableName = pdbTables[table.type];
        const createObject = pdbEntityCreators[table.type];
        const tx = span.startChild({ op: 'hydrateFromTable', description: tableName });
        if (createObject === undefined) {
            return;
        }
        let totalSaved = 0;
        let totalItems = 0;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const _ of tableRows(table)) {
            totalItems++;
        }
        tx.setData('items', totalItems);
        for (const row of tableRows(table)) {
            __classPrivateFieldGet(this, _RekordboxHydrator_orm, "f").insertEntity(tableName, createObject(row));
            __classPrivateFieldGet(this, _RekordboxHydrator_onProgress, "f").call(this, { complete: ++totalSaved, table: tableName, total: totalItems });
            // Allow additional tasks to occur during hydration
            await new Promise(r => setTimeout(r, 0));
        }
        tx.finish();
    }
}
_RekordboxHydrator_orm = new WeakMap(), _RekordboxHydrator_onProgress = new WeakMap();
/**
 * Utility generator that pages through a table and yields every present row.
 * This flattens the concept of rowGroups and refs.
 */
function* tableRows(table) {
    const { firstPage, lastPage } = table;
    let pageRef = firstPage;
    do {
        const page = pageRef.body;
        // Adjust our page ref for the next iteration. We do this early in our loop
        // so we can break without having to remember to update for the next iter.
        pageRef = page.nextPage;
        // Ignore non-data pages. Not sure what these are for?
        if (!page.isDataPage) {
            continue;
        }
        const rows = page.rowGroups
            .map((group) => group.rows)
            .flat()
            .filter((row) => row.present);
        for (const row of rows) {
            yield row.body;
        }
    } while (pageRef.index <= lastPage.index);
}
const ensureDate = (date) => date instanceof Date && !isNaN(date.valueOf()) ? date : undefined;
/**
 * Utility to create a hydrator that hydrates the provided entity with the id
 * and name properties from the row.
 */
const makeIdNameHydrator = () => (row) => {
    var _a;
    return ({
        id: row.id,
        name: (_a = row.name.body.text) !== null && _a !== void 0 ? _a : '',
    });
};
/**
 * Translates a pdb track row entry to a {@link Track} entity.
 */
function createTrack(trackRow) {
    const analyzePath = trackRow.analyzePath.body.text;
    const track = {
        id: trackRow.id,
        title: trackRow.title.body.text,
        trackNumber: trackRow.trackNumber,
        discNumber: trackRow.discNumber,
        duration: trackRow.duration,
        sampleRate: trackRow.sampleRate,
        sampleDepth: trackRow.sampleDepth,
        bitrate: trackRow.bitrate,
        tempo: trackRow.tempo / 100,
        playCount: trackRow.playCount,
        year: trackRow.year,
        rating: trackRow.rating,
        mixName: trackRow.mixName.body.text,
        comment: trackRow.comment.body.text,
        autoloadHotcues: trackRow.autoloadHotcues.body.text === 'ON',
        kuvoPublic: trackRow.kuvoPublic.body.text === 'ON',
        filePath: trackRow.filePath.body.text,
        fileName: trackRow.filename.body.text,
        fileSize: trackRow.fileSize,
        releaseDate: trackRow.releaseDate.body.text,
        analyzeDate: ensureDate(new Date(trackRow.analyzeDate.body.text)),
        dateAdded: ensureDate(new Date(trackRow.dateAdded.body.text)),
        // The analyze file comes in 3 forms
        //
        //  1. A `DAT` file, which is missing some extended information, for the older
        //     Pioneer equipment (likely due to memory constraints).
        //
        //  2. A `EXT` file which includes colored waveforms and other extended data.
        //
        //  3. A `EX2` file -- currently unknown
        //
        // We noramlize this path by trimming the DAT extension off. Later we will
        // try and read whatever is available.
        analyzePath: analyzePath === null || analyzePath === void 0 ? void 0 : analyzePath.substring(0, analyzePath.length - 4),
        artworkId: trackRow.artworkId || null,
        artistId: trackRow.artistId || null,
        originalArtistId: trackRow.originalArtistId || null,
        remixerId: trackRow.remixerId || null,
        composerId: trackRow.composerId || null,
        albumId: trackRow.albumId || null,
        labelId: trackRow.labelId || null,
        genreId: trackRow.genreId || null,
        colorId: trackRow.colorId || null,
        keyId: trackRow.keyId || null,
        // NOTE: There are a few additional columns that will be hydrated through
        // the analyze files (given the analyzePath) which we do not assign here.
        beatGrid: null,
        cueAndLoops: null,
        waveformHd: null,
    };
    return track;
}
/**
 * Translates a pdb playlist row entry into a {@link Playlist} entity.
 */
function createPlaylist(playlistRow) {
    const playlist = {
        id: playlistRow.id,
        name: playlistRow.name.body.text,
        isFolder: playlistRow.rawIsFolder !== 0,
        parentId: playlistRow.parentId || null,
    };
    return playlist;
}
/**
 * Translates a pdb playlist track entry into a {@link PlaylistTrack} entity.
 */
function createPlaylistEntry(playlistTrackRow) {
    const entry = {
        id: playlistTrackRow.id,
        sortIndex: playlistTrackRow.entryIndex,
        playlistId: playlistTrackRow.playlistId,
        trackId: playlistTrackRow.trackId,
    };
    return entry;
}
/**
 * Translates a pdb artwork entry into a {@link Artwork} entity.
 */
function createArtworkEntry(artworkRow) {
    const art = {
        id: artworkRow.id,
        path: artworkRow.path.body.text,
    };
    return art;
}
/**
 * Fill beatgrid data from the ANLZ section
 */
function makeBeatGrid(data) {
    return data.body.beats.map((beat) => ({
        offset: beat.time,
        bpm: beat.tempo / 100,
        count: beat.beatNumber,
    }));
}
/**
 * Fill cue and loop data from the ANLZ section
 */
function makeCueAndLoop(data) {
    return data.body.cues.map((entry) => {
        // Cues with the status 0 are likely leftovers that were removed
        const button = entry.hotCue === 0 ? false : entry.type;
        const isCue = entry.type === 0x01;
        const isLoop = entry.type === 0x02;
        // NOTE: Unlike the remotedb, these entries are already in milliseconds.
        const offset = entry.time;
        const length = entry.loopTime - offset;
        return (0, utils_1.makeCueLoopEntry)(isCue, isLoop, offset, length, button);
    });
}
/**
 * Fill waveform HD data from the ANLZ section
 */
function makeWaveformHd(data) {
    return (0, converters_1.convertWaveformHDData)(Buffer.from(data.body.entries));
}
const { PageType } = rekordbox_pdb_ksy_1.default;
const { SectionTags } = rekordbox_anlz_ksy_1.default;
/**
 * Maps rekordbox pdb table types to orm table names.
 */
const pdbTables = {
    [PageType.TRACKS]: orm_1.Table.Track,
    [PageType.ARTISTS]: orm_1.Table.Artist,
    [PageType.GENRES]: orm_1.Table.Genre,
    [PageType.ALBUMS]: orm_1.Table.Album,
    [PageType.LABELS]: orm_1.Table.Label,
    [PageType.COLORS]: orm_1.Table.Color,
    [PageType.KEYS]: orm_1.Table.Key,
    [PageType.ARTWORK]: orm_1.Table.Artwork,
    [PageType.PLAYLIST_TREE]: orm_1.Table.Playlist,
    [PageType.PLAYLIST_ENTRIES]: orm_1.Table.PlaylistEntry,
};
/**
 * Maps rekordbox pdb table types to functions that create entity objects for
 * the passed pdb row.
 */
const pdbEntityCreators = {
    [PageType.TRACKS]: createTrack,
    [PageType.ARTISTS]: makeIdNameHydrator(),
    [PageType.GENRES]: makeIdNameHydrator(),
    [PageType.ALBUMS]: makeIdNameHydrator(),
    [PageType.LABELS]: makeIdNameHydrator(),
    [PageType.COLORS]: makeIdNameHydrator(),
    [PageType.KEYS]: makeIdNameHydrator(),
    [PageType.ARTWORK]: createArtworkEntry,
    [PageType.PLAYLIST_TREE]: createPlaylist,
    [PageType.PLAYLIST_ENTRIES]: createPlaylistEntry,
    // TODO: Register PageType.HISTORY
};


/***/ }),

/***/ "./src/localdb/schema.ts":
/*!*******************************!*\
  !*** ./src/localdb/schema.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateSchema = void 0;
const orm_1 = __webpack_require__(/*! ./orm */ "./src/localdb/orm.ts");
const generateSchema = () => `
  CREATE TABLE '${orm_1.Table.Artist}' (
    'id' integer not null primary key,
    'name' varchar not null
  );
  CREATE TABLE '${orm_1.Table.Album}' (
    'id' integer not null primary key,
    'name' varchar not null
  );
  CREATE TABLE '${orm_1.Table.Genre}' (
    'id' integer not null primary key,
    'name' varchar not null
  );
  CREATE TABLE '${orm_1.Table.Color}' (
    'id' integer not null primary key,
    'name' varchar not null
  );
  CREATE TABLE '${orm_1.Table.Label}' (
    'id' integer not null primary key,
    'name' varchar not null
  );
  CREATE TABLE '${orm_1.Table.Key}' (
    'id' integer not null primary key,
    'name' varchar not null
  );
  CREATE TABLE '${orm_1.Table.Artwork}' (
    'id' integer not null primary key,
    'path' varchar not null
  );
  CREATE TABLE '${orm_1.Table.Track}' (
    'id' integer not null primary key,
    'title' varchar not null,
    'duration' integer not null,
    'bitrate' integer not null,
    'tempo' integer not null,
    'rating' integer not null,
    'comment' varchar not null,
    'file_path' varchar not null,
    'file_name' varchar not null,
    'track_number' integer not null,
    'disc_number' integer not null,
    'sample_rate' integer not null,
    'sample_depth' integer not null,
    'play_count' integer not null,
    'year' integer not null,
    'mix_name' varchar not null,
    'autoload_hotcues' integer not null,
    'kuvo_public' integer not null,
    'file_size' integer not null,
    'analyze_path' varchar not null,
    'release_date' varchar not null,
    'analyze_date' datetime,
    'date_added' datetime,
    'beat_grid' text null,
    'cue_and_loops' text null,
    'waveform_hd' text null,
    'artwork_id' integer null,
    'artist_id' integer null,
    'original_artist_id' integer null,
    'remixer_id' integer null,
    'composer_id' integer null,
    'album_id' integer null,
    'label_id' integer null,
    'genre_id' integer null,
    'color_id' integer null,
    'key_id' integer null
  );
  CREATE TABLE '${orm_1.Table.Playlist}' (
    'id' integer not null primary key,
    'is_folder' integer not null,
    'name' varchar not null,
    'parent_id' integer null
  );
  CREATE TABLE '${orm_1.Table.PlaylistEntry}' (
    'id' integer not null primary key,
    'sort_index' integer not null,
    'playlist_id' integer null,
    'track_id' integer null
  );
  CREATE INDEX 'track_artwork_id_index'           on '${orm_1.Table.Track}' ('artwork_id');
  CREATE INDEX 'track_artist_id_index'            on '${orm_1.Table.Track}' ('artist_id');
  CREATE INDEX 'track_original_artist_id_index'   on '${orm_1.Table.Track}' ('original_artist_id');
  CREATE INDEX 'track_remixer_id_index'           on '${orm_1.Table.Track}' ('remixer_id');
  CREATE INDEX 'track_composer_id_index'          on '${orm_1.Table.Track}' ('composer_id');
  CREATE INDEX 'track_album_id_index'             on '${orm_1.Table.Track}' ('album_id');
  CREATE INDEX 'track_label_id_index'             on '${orm_1.Table.Track}' ('label_id');
  CREATE INDEX 'track_genre_id_index'             on '${orm_1.Table.Track}' ('genre_id');
  CREATE INDEX 'track_color_id_index'             on '${orm_1.Table.Track}' ('color_id');
  CREATE INDEX 'track_key_id_index'               on '${orm_1.Table.Track}' ('key_id');
  CREATE INDEX 'playlist_parent_id_index'         on '${orm_1.Table.Playlist}' ('parent_id');
  CREATE INDEX 'playlist_entry_playlist_id_index' on '${orm_1.Table.PlaylistEntry}' ('playlist_id');
  CREATE INDEX 'playlist_entry_track_id_index'    on '${orm_1.Table.PlaylistEntry}' ('track_id');
`;
exports.generateSchema = generateSchema;


/***/ }),

/***/ "./src/localdb/utils.ts":
/*!******************************!*\
  !*** ./src/localdb/utils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeCueLoopEntry = void 0;
/**
 * Create a CueAndLoop entry given common parameters
 */
const makeCueLoopEntry = (isCue, isLoop, offset, length, button) => button !== false
    ? isLoop
        ? { type: 'hot_loop', offset, length, button }
        : { type: 'hot_cue', offset, button }
    : isLoop
        ? { type: 'loop', offset, length }
        : isCue
            ? { type: 'cue_point', offset }
            : null;
exports.makeCueLoopEntry = makeCueLoopEntry;


/***/ }),

/***/ "./src/mixstatus/index.ts":
/*!********************************!*\
  !*** ./src/mixstatus/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MixstatusProcessor_emitter, _MixstatusProcessor_lastState, _MixstatusProcessor_lastStartTime, _MixstatusProcessor_lastStoppedTimes, _MixstatusProcessor_livePlayers, _MixstatusProcessor_isSetActive, _MixstatusProcessor_cancelSetEnding, _MixstatusProcessor_config, _MixstatusProcessor_onAir, _MixstatusProcessor_promotePlayer, _MixstatusProcessor_promoteNextPlayer, _MixstatusProcessor_markPlayerStopped, _MixstatusProcessor_setMayStop, _MixstatusProcessor_playerMayBeFirst, _MixstatusProcessor_playerMayStop, _MixstatusProcessor_handlePlaystateChange, _MixstatusProcessor_handleOnairChange;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MixstatusProcessor = void 0;
const events_1 = __webpack_require__(/*! events */ "events");
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
const utils_1 = __webpack_require__(/*! src/utils */ "./src/utils/index.ts");
const utils_2 = __webpack_require__(/*! ./utils */ "./src/mixstatus/utils.ts");
const defaultConfig = {
    mode: types_1.MixstatusMode.SmartTiming,
    timeBetweenSets: 30,
    allowedInterruptBeats: 8,
    beatsUntilReported: 128,
    useOnAirStatus: true,
};
/**
 * MixstatusProcessor is a configurable processor which when fed device state
 * will attempt to accurately determine events that happen within the DJ set.
 *
 * The following events are fired:
 *
 * - nowPlaying: The track is considered playing and on air to the audience.
 * - stopped:    The track was stopped / paused / went off-air.
 *
 * Additionally the following non-track status are reported:
 *
 * - setStarted: The first track has begun playing.
 * - setEnded:   The TimeBetweenSets has passed since any tracks were live.
 *
 * See Config for configuration options.
 *
 * Config options may be changed after the processor has been created and is
 * actively receiving state updates.
 */
class MixstatusProcessor {
    constructor(config) {
        /**
         * Used to fire track mix status events
         */
        _MixstatusProcessor_emitter.set(this, new events_1.EventEmitter());
        /**
         * Records the most recent state of each player
         */
        _MixstatusProcessor_lastState.set(this, new Map());
        /**
         * Records when each device last started playing a track
         */
        _MixstatusProcessor_lastStartTime.set(this, new Map());
        /**
         * Records when a device entered a 'may stop' state. If it's in the state for
         * long enough it will be reported as stopped.
         */
        _MixstatusProcessor_lastStoppedTimes.set(this, new Map());
        /**
         * Records which players have been reported as 'live'
         */
        _MixstatusProcessor_livePlayers.set(this, new Set());
        /**
         * Incidates if we're currentiny in an active DJ set
         */
        _MixstatusProcessor_isSetActive.set(this, false);
        /**
         * When we are waiting for a set to end, use this to cancel the timer.
         */
        _MixstatusProcessor_cancelSetEnding.set(this, void 0);
        /**
         * The configuration for this instance of the processor
         */
        _MixstatusProcessor_config.set(this, void 0);
        // Bind public event emitter interface
        this.on = __classPrivateFieldGet(this, _MixstatusProcessor_emitter, "f").addListener.bind(__classPrivateFieldGet(this, _MixstatusProcessor_emitter, "f"));
        this.off = __classPrivateFieldGet(this, _MixstatusProcessor_emitter, "f").removeListener.bind(__classPrivateFieldGet(this, _MixstatusProcessor_emitter, "f"));
        this.once = __classPrivateFieldGet(this, _MixstatusProcessor_emitter, "f").once.bind(__classPrivateFieldGet(this, _MixstatusProcessor_emitter, "f"));
        /**
         * Helper to account for the useOnAirStatus config. If not configured
         * with this flag the state will always be determined as on air.
         */
        _MixstatusProcessor_onAir.set(this, (state) => __classPrivateFieldGet(this, _MixstatusProcessor_config, "f").useOnAirStatus ? state.isOnAir : true);
        /**
         * Report a player as 'live'. Will not report the state if the player has
         * already previously been reported as live.
         */
        _MixstatusProcessor_promotePlayer.set(this, (state) => {
            const { deviceId } = state;
            if (!__classPrivateFieldGet(this, _MixstatusProcessor_onAir, "f").call(this, state) || !(0, utils_2.isPlaying)(state)) {
                return;
            }
            if (__classPrivateFieldGet(this, _MixstatusProcessor_livePlayers, "f").has(deviceId)) {
                return;
            }
            if (!__classPrivateFieldGet(this, _MixstatusProcessor_isSetActive, "f")) {
                __classPrivateFieldSet(this, _MixstatusProcessor_isSetActive, true, "f");
                __classPrivateFieldGet(this, _MixstatusProcessor_emitter, "f").emit('setStarted');
            }
            if (__classPrivateFieldGet(this, _MixstatusProcessor_cancelSetEnding, "f")) {
                __classPrivateFieldGet(this, _MixstatusProcessor_cancelSetEnding, "f").call(this);
            }
            __classPrivateFieldGet(this, _MixstatusProcessor_livePlayers, "f").add(deviceId);
            __classPrivateFieldGet(this, _MixstatusProcessor_emitter, "f").emit('nowPlaying', state);
        });
        /**
         * Locate the player that has been playing for the longest time and is onair,
         * and report that device as now playing.
         */
        _MixstatusProcessor_promoteNextPlayer.set(this, () => {
            var _a;
            const longestPlayingId = (_a = [...__classPrivateFieldGet(this, _MixstatusProcessor_lastStartTime, "f").entries()]
                .map(([deviceId, startedAt]) => ({
                deviceId,
                startedAt,
                state: __classPrivateFieldGet(this, _MixstatusProcessor_lastState, "f").get(deviceId),
            }))
                .filter(s => !__classPrivateFieldGet(this, _MixstatusProcessor_livePlayers, "f").has(s.deviceId))
                .filter(s => s.state && (0, utils_2.isPlaying)(s.state))
                .sort((a, b) => b.startedAt - a.startedAt)
                .pop()) === null || _a === void 0 ? void 0 : _a.deviceId;
            // No other players currently playing?
            if (longestPlayingId === undefined) {
                __classPrivateFieldGet(this, _MixstatusProcessor_setMayStop, "f").call(this);
                return;
            }
            // We know this value is available since we have a live player playing ID
            const nextPlayerState = __classPrivateFieldGet(this, _MixstatusProcessor_lastState, "f").get(longestPlayingId);
            __classPrivateFieldGet(this, _MixstatusProcessor_promotePlayer, "f").call(this, nextPlayerState);
        });
        _MixstatusProcessor_markPlayerStopped.set(this, ({ deviceId }) => {
            __classPrivateFieldGet(this, _MixstatusProcessor_lastStoppedTimes, "f").delete(deviceId);
            __classPrivateFieldGet(this, _MixstatusProcessor_lastStartTime, "f").delete(deviceId);
            __classPrivateFieldGet(this, _MixstatusProcessor_livePlayers, "f").delete(deviceId);
            __classPrivateFieldGet(this, _MixstatusProcessor_promoteNextPlayer, "f").call(this);
            __classPrivateFieldGet(this, _MixstatusProcessor_emitter, "f").emit('stopped', { deviceId });
        });
        _MixstatusProcessor_setMayStop.set(this, async () => {
            // We handle the set ending interupt as a async timeout as in the case with
            // a set ending, the DJ may immediately turn off the CDJs, stopping state
            // packets meaning we can't process on a heartbeat.
            if (!__classPrivateFieldGet(this, _MixstatusProcessor_isSetActive, "f")) {
                return;
            }
            // If any tracks are still playing the set has not ended
            if ([...__classPrivateFieldGet(this, _MixstatusProcessor_lastState, "f").values()].some(s => (0, utils_2.isPlaying)(s) && __classPrivateFieldGet(this, _MixstatusProcessor_onAir, "f").call(this, s))) {
                return;
            }
            const shouldEnd = await new Promise(resolve => {
                const endTimeout = setTimeout(() => resolve(true), __classPrivateFieldGet(this, _MixstatusProcessor_config, "f").timeBetweenSets * 1000);
                __classPrivateFieldSet(this, _MixstatusProcessor_cancelSetEnding, () => {
                    clearTimeout(endTimeout);
                    resolve(false);
                }, "f");
            });
            __classPrivateFieldSet(this, _MixstatusProcessor_cancelSetEnding, undefined, "f");
            if (!shouldEnd || !__classPrivateFieldGet(this, _MixstatusProcessor_isSetActive, "f")) {
                return;
            }
            __classPrivateFieldGet(this, _MixstatusProcessor_emitter, "f").emit('setEnded');
        });
        /**
         * Called to indicate that we think this player may be the first one to start
         * playing. Will check if no other players are playing, if so it will report
         * the player as now playing.
         */
        _MixstatusProcessor_playerMayBeFirst.set(this, (state) => {
            const otherPlayersPlaying = [...__classPrivateFieldGet(this, _MixstatusProcessor_lastState, "f").values()]
                .filter(otherState => otherState.deviceId !== state.deviceId)
                .some(otherState => __classPrivateFieldGet(this, _MixstatusProcessor_onAir, "f").call(this, otherState) && (0, utils_2.isPlaying)(otherState));
            if (otherPlayersPlaying) {
                return;
            }
            __classPrivateFieldGet(this, _MixstatusProcessor_promotePlayer, "f").call(this, state);
        });
        /**
         * Called when the player is in a state where it is no longer playing, but
         * may come back onair. Examples are slip pause, or 'cutting' a track on the
         * mixer taking it offair.
         */
        _MixstatusProcessor_playerMayStop.set(this, ({ deviceId }) => {
            __classPrivateFieldGet(this, _MixstatusProcessor_lastStoppedTimes, "f").set(deviceId, Date.now());
        });
        /**
         * Called to indicate that a device has reported a different playState than
         * it had previously reported.
         */
        _MixstatusProcessor_handlePlaystateChange.set(this, (lastState, state) => {
            const { deviceId } = state;
            const isFollowingMaster = __classPrivateFieldGet(this, _MixstatusProcessor_config, "f").mode === types_1.MixstatusMode.FollowsMaster && state.isMaster;
            const nowPlaying = (0, utils_2.isPlaying)(state);
            const wasPlaying = (0, utils_2.isPlaying)(lastState);
            const isNowPlaying = nowPlaying && !wasPlaying;
            // Was this device in a 'may stop' state and it has begun on-air playing
            // again?
            if (__classPrivateFieldGet(this, _MixstatusProcessor_lastStoppedTimes, "f").has(deviceId) && nowPlaying && __classPrivateFieldGet(this, _MixstatusProcessor_onAir, "f").call(this, state)) {
                __classPrivateFieldGet(this, _MixstatusProcessor_lastStoppedTimes, "f").delete(deviceId);
                return;
            }
            if (isNowPlaying && isFollowingMaster) {
                __classPrivateFieldGet(this, _MixstatusProcessor_promotePlayer, "f").call(this, state);
            }
            if (isNowPlaying) {
                __classPrivateFieldGet(this, _MixstatusProcessor_lastStartTime, "f").set(deviceId, Date.now());
                __classPrivateFieldGet(this, _MixstatusProcessor_playerMayBeFirst, "f").call(this, state);
                return;
            }
            if (wasPlaying && (0, utils_2.isStopping)(state)) {
                __classPrivateFieldGet(this, _MixstatusProcessor_markPlayerStopped, "f").call(this, state);
                return;
            }
            if (wasPlaying && !nowPlaying) {
                __classPrivateFieldGet(this, _MixstatusProcessor_playerMayStop, "f").call(this, state);
            }
        });
        _MixstatusProcessor_handleOnairChange.set(this, (state) => {
            const { deviceId } = state;
            // Player may have just been brought on with nothing else playing
            __classPrivateFieldGet(this, _MixstatusProcessor_playerMayBeFirst, "f").call(this, state);
            if (!__classPrivateFieldGet(this, _MixstatusProcessor_livePlayers, "f").has(deviceId)) {
                return;
            }
            if (!__classPrivateFieldGet(this, _MixstatusProcessor_onAir, "f").call(this, state)) {
                __classPrivateFieldGet(this, _MixstatusProcessor_playerMayStop, "f").call(this, state);
                return;
            }
            // Play has come back onair
            __classPrivateFieldGet(this, _MixstatusProcessor_lastStoppedTimes, "f").delete(deviceId);
        });
        __classPrivateFieldSet(this, _MixstatusProcessor_config, { ...defaultConfig, ...config }, "f");
    }
    /**
     * Update the configration
     */
    configure(config) {
        __classPrivateFieldSet(this, _MixstatusProcessor_config, { ...__classPrivateFieldGet(this, _MixstatusProcessor_config, "f"), ...config }, "f");
    }
    /**
     * Feed a CDJStatus state object to the mix state processor
     */
    handleState(state) {
        const { deviceId, playState } = state;
        const lastState = __classPrivateFieldGet(this, _MixstatusProcessor_lastState, "f").get(deviceId);
        __classPrivateFieldGet(this, _MixstatusProcessor_lastState, "f").set(deviceId, state);
        // If this is the first time we've heard from this CDJ, and it is on air
        // and playing, report it immediately. This is different from reporting the
        // first playing track, as the CDJ will have already sent many states.
        if (lastState === undefined && __classPrivateFieldGet(this, _MixstatusProcessor_onAir, "f").call(this, state) && (0, utils_2.isPlaying)(state)) {
            __classPrivateFieldGet(this, _MixstatusProcessor_lastStartTime, "f").set(deviceId, Date.now());
            __classPrivateFieldGet(this, _MixstatusProcessor_playerMayBeFirst, "f").call(this, state);
            return;
        }
        // Play state has changed since this play last reported
        if (lastState && lastState.playState !== playState) {
            __classPrivateFieldGet(this, _MixstatusProcessor_handlePlaystateChange, "f").call(this, lastState, state);
        }
        if (lastState && __classPrivateFieldGet(this, _MixstatusProcessor_onAir, "f").call(this, lastState) !== __classPrivateFieldGet(this, _MixstatusProcessor_onAir, "f").call(this, state)) {
            __classPrivateFieldGet(this, _MixstatusProcessor_handleOnairChange, "f").call(this, state);
        }
        // Are we simply following master?
        if (__classPrivateFieldGet(this, _MixstatusProcessor_config, "f").mode === types_1.MixstatusMode.FollowsMaster &&
            (lastState === null || lastState === void 0 ? void 0 : lastState.isMaster) === false &&
            state.isMaster) {
            __classPrivateFieldGet(this, _MixstatusProcessor_promotePlayer, "f").call(this, state);
            return;
        }
        // If a device has been playing for the required number of beats, we may be
        // able to report it as live
        const startedAt = __classPrivateFieldGet(this, _MixstatusProcessor_lastStartTime, "f").get(deviceId);
        const requiredPlayTime = __classPrivateFieldGet(this, _MixstatusProcessor_config, "f").beatsUntilReported *
            (0, utils_1.bpmToSeconds)(state.trackBPM, state.sliderPitch) *
            1000;
        if (__classPrivateFieldGet(this, _MixstatusProcessor_config, "f").mode === types_1.MixstatusMode.SmartTiming &&
            startedAt !== undefined &&
            requiredPlayTime <= Date.now() - startedAt) {
            __classPrivateFieldGet(this, _MixstatusProcessor_promotePlayer, "f").call(this, state);
        }
        // If a device has been in a 'potentially stopped' state for long enough,
        // we can mark the track as truely stopped.
        const stoppedAt = __classPrivateFieldGet(this, _MixstatusProcessor_lastStoppedTimes, "f").get(deviceId);
        const requiredStopTime = __classPrivateFieldGet(this, _MixstatusProcessor_config, "f").allowedInterruptBeats *
            (0, utils_1.bpmToSeconds)(state.trackBPM, state.sliderPitch) *
            1000;
        if (stoppedAt !== undefined && requiredStopTime <= Date.now() - stoppedAt) {
            __classPrivateFieldGet(this, _MixstatusProcessor_markPlayerStopped, "f").call(this, state);
        }
    }
    /**
     * Manually reports the track that has been playing the longest which has not
     * yet been reported as live.
     */
    triggerNextTrack() {
        __classPrivateFieldGet(this, _MixstatusProcessor_promoteNextPlayer, "f").call(this);
    }
}
exports.MixstatusProcessor = MixstatusProcessor;
_MixstatusProcessor_emitter = new WeakMap(), _MixstatusProcessor_lastState = new WeakMap(), _MixstatusProcessor_lastStartTime = new WeakMap(), _MixstatusProcessor_lastStoppedTimes = new WeakMap(), _MixstatusProcessor_livePlayers = new WeakMap(), _MixstatusProcessor_isSetActive = new WeakMap(), _MixstatusProcessor_cancelSetEnding = new WeakMap(), _MixstatusProcessor_config = new WeakMap(), _MixstatusProcessor_onAir = new WeakMap(), _MixstatusProcessor_promotePlayer = new WeakMap(), _MixstatusProcessor_promoteNextPlayer = new WeakMap(), _MixstatusProcessor_markPlayerStopped = new WeakMap(), _MixstatusProcessor_setMayStop = new WeakMap(), _MixstatusProcessor_playerMayBeFirst = new WeakMap(), _MixstatusProcessor_playerMayStop = new WeakMap(), _MixstatusProcessor_handlePlaystateChange = new WeakMap(), _MixstatusProcessor_handleOnairChange = new WeakMap();


/***/ }),

/***/ "./src/mixstatus/utils.ts":
/*!********************************!*\
  !*** ./src/mixstatus/utils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isStopping = exports.isPlaying = void 0;
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
const playingStates = [types_1.CDJStatus.PlayState.Playing, types_1.CDJStatus.PlayState.Looping];
const stoppingStates = [
    types_1.CDJStatus.PlayState.Cued,
    types_1.CDJStatus.PlayState.Ended,
    types_1.CDJStatus.PlayState.Loading,
];
/**
 * Returns true if the the status reports a playing state.
 */
const isPlaying = (s) => playingStates.includes(s.playState);
exports.isPlaying = isPlaying;
/**
 * Returns true if the status reports a stopping state.
 */
const isStopping = (s) => stoppingStates.includes(s.playState);
exports.isStopping = isStopping;


/***/ }),

/***/ "./src/network.ts":
/*!************************!*\
  !*** ./src/network.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _ProlinkNetwork_state, _ProlinkNetwork_announceSocket, _ProlinkNetwork_beatSocket, _ProlinkNetwork_statusSocket, _ProlinkNetwork_deviceManager, _ProlinkNetwork_statusEmitter, _ProlinkNetwork_config, _ProlinkNetwork_connection, _ProlinkNetwork_mixstatus;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProlinkNetwork = exports.bringOnline = void 0;
const Sentry = __importStar(__webpack_require__(/*! @sentry/node */ "@sentry/node"));
const tracing_1 = __webpack_require__(/*! @sentry/tracing */ "@sentry/tracing");
const crypto_1 = __webpack_require__(/*! crypto */ "crypto");
const dgram_1 = __importDefault(__webpack_require__(/*! dgram */ "dgram"));
const constants_1 = __webpack_require__(/*! src/constants */ "./src/constants.ts");
const control_1 = __importDefault(__webpack_require__(/*! src/control */ "./src/control/index.ts"));
const db_1 = __importDefault(__webpack_require__(/*! src/db */ "./src/db/index.ts"));
const devices_1 = __importDefault(__webpack_require__(/*! src/devices */ "./src/devices/index.ts"));
const localdb_1 = __importDefault(__webpack_require__(/*! src/localdb */ "./src/localdb/index.ts"));
const mixstatus_1 = __webpack_require__(/*! src/mixstatus */ "./src/mixstatus/index.ts");
const remotedb_1 = __importDefault(__webpack_require__(/*! src/remotedb */ "./src/remotedb/index.ts"));
const status_1 = __importDefault(__webpack_require__(/*! src/status */ "./src/status/index.ts"));
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
const utils_1 = __webpack_require__(/*! src/utils */ "./src/utils/index.ts");
const udp_1 = __webpack_require__(/*! src/utils/udp */ "./src/utils/udp.ts");
const virtualcdj_1 = __webpack_require__(/*! src/virtualcdj */ "./src/virtualcdj/index.ts");
const connectErrorHelp = 'Network must be configured. Try using `autoconfigFromPeers` or `configure`';
/**
 * Brings the Prolink network online.
 *
 * This is the primary entrypoint for connecting to the prolink network.
 */
async function bringOnline(config) {
    Sentry.setTag('connectionId', (0, crypto_1.randomUUID)());
    const tx = Sentry.startTransaction({ name: 'bringOnline' });
    // Socket used to listen for devices on the network
    const announceSocket = dgram_1.default.createSocket('udp4');
    // Socket used to listen for beat timing information
    const beatSocket = dgram_1.default.createSocket('udp4');
    // Socket used to listen for status packets
    const statusSocket = dgram_1.default.createSocket('udp4');
    try {
        await (0, udp_1.udpBind)(announceSocket, constants_1.ANNOUNCE_PORT, '0.0.0.0');
        await (0, udp_1.udpBind)(beatSocket, constants_1.BEAT_PORT, '0.0.0.0');
        await (0, udp_1.udpBind)(statusSocket, constants_1.STATUS_PORT, '0.0.0.0');
    }
    catch (err) {
        Sentry.captureException(err);
        tx.setStatus(tracing_1.SpanStatus.Unavailable);
        tx.finish();
        throw err;
    }
    const deviceManager = new devices_1.default(announceSocket);
    const statusEmitter = new status_1.default(statusSocket);
    tx.finish();
    const network = new ProlinkNetwork({
        config,
        announceSocket,
        beatSocket,
        statusSocket,
        deviceManager,
        statusEmitter,
    });
    return network;
}
exports.bringOnline = bringOnline;
class ProlinkNetwork {
    /**
     * @internal
     */
    constructor({ config, announceSocket, beatSocket, statusSocket, deviceManager, statusEmitter, }) {
        _ProlinkNetwork_state.set(this, types_1.NetworkState.Online);
        _ProlinkNetwork_announceSocket.set(this, void 0);
        _ProlinkNetwork_beatSocket.set(this, void 0);
        _ProlinkNetwork_statusSocket.set(this, void 0);
        _ProlinkNetwork_deviceManager.set(this, void 0);
        _ProlinkNetwork_statusEmitter.set(this, void 0);
        _ProlinkNetwork_config.set(this, void 0);
        _ProlinkNetwork_connection.set(this, void 0);
        _ProlinkNetwork_mixstatus.set(this, void 0);
        __classPrivateFieldSet(this, _ProlinkNetwork_config, config !== null && config !== void 0 ? config : null, "f");
        __classPrivateFieldSet(this, _ProlinkNetwork_announceSocket, announceSocket, "f");
        __classPrivateFieldSet(this, _ProlinkNetwork_beatSocket, beatSocket, "f");
        __classPrivateFieldSet(this, _ProlinkNetwork_statusSocket, statusSocket, "f");
        __classPrivateFieldSet(this, _ProlinkNetwork_deviceManager, deviceManager, "f");
        __classPrivateFieldSet(this, _ProlinkNetwork_statusEmitter, statusEmitter, "f");
        __classPrivateFieldSet(this, _ProlinkNetwork_connection, null, "f");
        __classPrivateFieldSet(this, _ProlinkNetwork_mixstatus, null, "f");
        // We always start online when constructing the network
        __classPrivateFieldSet(this, _ProlinkNetwork_state, types_1.NetworkState.Online, "f");
    }
    /**
     * Configure / reconfigure the network with an explicit configuration.
     *
     * You may need to disconnect and re-connect the network after making a
     * networking configuration change.
     */
    configure(config) {
        __classPrivateFieldSet(this, _ProlinkNetwork_config, { ...__classPrivateFieldGet(this, _ProlinkNetwork_config, "f"), ...config }, "f");
    }
    /**
     * Wait for another device to show up on the network to determine which network
     * interface to listen on.
     *
     * Defaults the Virtual CDJ ID to 5.
     */
    async autoconfigFromPeers() {
        const tx = Sentry.startTransaction({ name: 'autoConfigure' });
        // wait for first device to appear on the network
        const firstDevice = await new Promise(resolve => __classPrivateFieldGet(this, _ProlinkNetwork_deviceManager, "f").once('connected', resolve));
        const iface = (0, utils_1.getMatchingInterface)(firstDevice.ip);
        // Log addr and iface addr / mask for cases where it may have matched the
        // wrong interface
        tx.setTag('deviceName', firstDevice.name);
        tx.setData('deviceAddr', firstDevice.ip.address);
        tx.setData('ifaceAddr', iface === null || iface === void 0 ? void 0 : iface.address);
        if (iface === null) {
            tx.setStatus(tracing_1.SpanStatus.InternalError);
            tx.setTag('noIfaceFound', 'yes');
            tx.finish();
            throw new Error('Unable to determine network interface');
        }
        __classPrivateFieldSet(this, _ProlinkNetwork_config, { ...__classPrivateFieldGet(this, _ProlinkNetwork_config, "f"), vcdjId: constants_1.DEFAULT_VCDJ_ID, iface }, "f");
        tx.finish();
    }
    /**
     * Connect to the network.
     *
     * The network must first have been configured (either with autoconfigFromPeers
     * or manual configuration). This will then initialize all the network services.
     */
    connect() {
        if (__classPrivateFieldGet(this, _ProlinkNetwork_config, "f") === null) {
            throw new Error(connectErrorHelp);
        }
        const tx = Sentry.startTransaction({ name: 'connect' });
        // Create VCDJ for the interface's broadcast address
        const vcdj = (0, virtualcdj_1.getVirtualCDJ)(__classPrivateFieldGet(this, _ProlinkNetwork_config, "f").iface, __classPrivateFieldGet(this, _ProlinkNetwork_config, "f").vcdjId);
        // Start announcing
        const announcer = new virtualcdj_1.Announcer(vcdj, __classPrivateFieldGet(this, _ProlinkNetwork_announceSocket, "f"), this.deviceManager);
        announcer.start();
        // Create remote and local databases
        const remotedb = new remotedb_1.default(__classPrivateFieldGet(this, _ProlinkNetwork_deviceManager, "f"), vcdj);
        const localdb = new localdb_1.default(vcdj, __classPrivateFieldGet(this, _ProlinkNetwork_deviceManager, "f"), __classPrivateFieldGet(this, _ProlinkNetwork_statusEmitter, "f"));
        // Create unified database
        const database = new db_1.default(vcdj, localdb, remotedb, __classPrivateFieldGet(this, _ProlinkNetwork_deviceManager, "f"));
        // Create controller service
        const control = new control_1.default(__classPrivateFieldGet(this, _ProlinkNetwork_beatSocket, "f"), vcdj);
        __classPrivateFieldSet(this, _ProlinkNetwork_state, types_1.NetworkState.Connected, "f");
        __classPrivateFieldSet(this, _ProlinkNetwork_connection, { announcer, control, remotedb, localdb, database }, "f");
        tx.finish();
    }
    /**
     * Disconnect from the network
     */
    disconnect() {
        var _a, _b, _c;
        if (__classPrivateFieldGet(this, _ProlinkNetwork_config, "f") === null) {
            throw new Error(connectErrorHelp);
        }
        // Stop announcing ourself
        (_a = __classPrivateFieldGet(this, _ProlinkNetwork_connection, "f")) === null || _a === void 0 ? void 0 : _a.announcer.stop();
        // Disconnect devices from the remote and local databases
        for (const device of this.deviceManager.devices.values()) {
            (_b = this.remotedb) === null || _b === void 0 ? void 0 : _b.disconnectFromDevice(device);
            (_c = this.localdb) === null || _c === void 0 ? void 0 : _c.disconnectForDevice(device);
        }
        return Promise.all([
            (0, udp_1.udpClose)(__classPrivateFieldGet(this, _ProlinkNetwork_announceSocket, "f")),
            (0, udp_1.udpClose)(__classPrivateFieldGet(this, _ProlinkNetwork_statusSocket, "f")),
            (0, udp_1.udpClose)(__classPrivateFieldGet(this, _ProlinkNetwork_beatSocket, "f")),
        ]);
    }
    /**
     * Get the current NetworkState of the network.
     *
     * When the network is Online you may use the deviceManager to list and react to
     * devices on the nettwork
     *
     * Once the network is Connected you may use the statusEmitter to listen for
     * player status events, query the media databases of devices using the db
     * service (or specifically query the localdb or remotedb).
     */
    get state() {
        return __classPrivateFieldGet(this, _ProlinkNetwork_state, "f");
    }
    /**
     * Check if the network has been configured. You cannot connect to the network
     * until it has been configured.
     */
    get isConfigured() {
        return __classPrivateFieldGet(this, _ProlinkNetwork_config, "f") !== null;
    }
    /**
     * Typescript discriminate helper. Refines the type of the network to one
     * that reflects the connected status. Useful to avoid having to gaurd the
     * service getters from nulls.
     */
    isConnected() {
        return __classPrivateFieldGet(this, _ProlinkNetwork_state, "f") === types_1.NetworkState.Connected;
    }
    /**
     * Get the {@link DeviceManager} service. This service is used to monitor and
     * react to devices connecting and disconnecting from the prolink network.
     */
    get deviceManager() {
        return __classPrivateFieldGet(this, _ProlinkNetwork_deviceManager, "f");
    }
    /**
     * Get the {@link StatusEmitter} service. This service is used to monitor
     * status updates on each CDJ.
     */
    get statusEmitter() {
        // Even though the status emitter service does not need to wait for the
        // network to be Connected, it does not make sense to use it unless it is. So
        // we artificially return null if we are not connected
        return __classPrivateFieldGet(this, _ProlinkNetwork_state, "f") === types_1.NetworkState.Connected ? __classPrivateFieldGet(this, _ProlinkNetwork_statusEmitter, "f") : null;
    }
    /**
     * Get the {@link Control} service. This service can be used to control the
     * Playstate of CDJs on the network.
     */
    get control() {
        var _a, _b;
        return (_b = (_a = __classPrivateFieldGet(this, _ProlinkNetwork_connection, "f")) === null || _a === void 0 ? void 0 : _a.control) !== null && _b !== void 0 ? _b : null;
    }
    /**
     * Get the {@link Database} service. This service is used to retrieve
     * metadata and listings from devices on the network, automatically choosing the
     * best strategy to access the data.
     */
    get db() {
        var _a, _b;
        return (_b = (_a = __classPrivateFieldGet(this, _ProlinkNetwork_connection, "f")) === null || _a === void 0 ? void 0 : _a.database) !== null && _b !== void 0 ? _b : null;
    }
    /**
     * Get the {@link LocalDatabase} service. This service is used to query and sync
     * metadata that is downloaded directly from the rekordbox database present
     * on media connected to the CDJs.
     */
    get localdb() {
        var _a, _b;
        return (_b = (_a = __classPrivateFieldGet(this, _ProlinkNetwork_connection, "f")) === null || _a === void 0 ? void 0 : _a.localdb) !== null && _b !== void 0 ? _b : null;
    }
    /**
     * Get the {@link RemoteDatabase} service. This service is used to query
     * metadata directly from the database service running on Rekordbox and the CDJs
     * themselves.
     *
     * NOTE: To use this service to access the CDJ remote database service, the
     *       Virtual CDJ must report itself as an ID between 1 and 6. This means
     *       there cannot be four physical CDJs on the network to access any CDJs
     *       remote database.
     */
    get remotedb() {
        var _a, _b;
        return (_b = (_a = __classPrivateFieldGet(this, _ProlinkNetwork_connection, "f")) === null || _a === void 0 ? void 0 : _a.remotedb) !== null && _b !== void 0 ? _b : null;
    }
    /**
     * Get (and initalize) the {@link MixstatusProcessor} service. This service can
     * be used to monitor the 'status' of devices on the network as a whole.
     */
    get mixstatus() {
        if (__classPrivateFieldGet(this, _ProlinkNetwork_connection, "f") === null) {
            return null;
        }
        // Delay initialization of the mixstatus processor so that we don't consume
        // status events unless we actually want to.
        if (__classPrivateFieldGet(this, _ProlinkNetwork_mixstatus, "f") === null) {
            __classPrivateFieldSet(this, _ProlinkNetwork_mixstatus, new mixstatus_1.MixstatusProcessor(), "f");
            __classPrivateFieldGet(this, _ProlinkNetwork_statusEmitter, "f").on('status', s => { var _a; return (_a = __classPrivateFieldGet(this, _ProlinkNetwork_mixstatus, "f")) === null || _a === void 0 ? void 0 : _a.handleState(s); });
        }
        return __classPrivateFieldGet(this, _ProlinkNetwork_mixstatus, "f");
    }
}
exports.ProlinkNetwork = ProlinkNetwork;
_ProlinkNetwork_state = new WeakMap(), _ProlinkNetwork_announceSocket = new WeakMap(), _ProlinkNetwork_beatSocket = new WeakMap(), _ProlinkNetwork_statusSocket = new WeakMap(), _ProlinkNetwork_deviceManager = new WeakMap(), _ProlinkNetwork_statusEmitter = new WeakMap(), _ProlinkNetwork_config = new WeakMap(), _ProlinkNetwork_connection = new WeakMap(), _ProlinkNetwork_mixstatus = new WeakMap();


/***/ }),

/***/ "./src/nfs/index.ts":
/*!**************************!*\
  !*** ./src/nfs/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.configureRetryStrategy = exports.resetDeviceCache = exports.fetchFile = void 0;
const Sentry = __importStar(__webpack_require__(/*! @sentry/node */ "@sentry/node"));
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
const utils_1 = __webpack_require__(/*! src/utils */ "./src/utils/index.ts");
const programs_1 = __webpack_require__(/*! ./programs */ "./src/nfs/programs.ts");
const rpc_1 = __webpack_require__(/*! ./rpc */ "./src/nfs/rpc.ts");
const xdr_1 = __webpack_require__(/*! ./xdr */ "./src/nfs/xdr.ts");
/**
 * The slot <-> mount name mapping is well known.
 */
const slotMountMapping = {
    [types_1.MediaSlot.USB]: '/C/',
    [types_1.MediaSlot.SD]: '/B/',
    [types_1.MediaSlot.RB]: '/',
};
/**
 * The module-level retry configuration for newly created RpcConnections.
 */
let retryConfig = {};
/**
 * This module maintains a singleton cached list of player addresses -> active
 * connections. It is not guaranteed that the connections in the cache will
 * still be connected.
 */
const clientsCache = new Map();
/**
 * Given a device address running a nfs and mountd RPC server, provide
 * RpcProgram clients that may be used to call these services.
 *
 * NOTE: This function will cache the clients for the address, recreating the
 * connections if the cached clients have disconnected.
 */
async function getClients(address) {
    const cachedSet = clientsCache.get(address);
    if (cachedSet !== undefined && cachedSet.conn.connected) {
        return cachedSet;
    }
    // Cached socket is no longer connected. Remove and reconnect
    if (cachedSet !== undefined) {
        clientsCache.delete(address);
    }
    const conn = new rpc_1.RpcConnection(address, retryConfig);
    const mountClient = await (0, programs_1.makeProgramClient)(conn, {
        id: xdr_1.mount.Program,
        version: xdr_1.mount.Version,
    });
    const nfsClient = await (0, programs_1.makeProgramClient)(conn, {
        id: xdr_1.nfs.Program,
        version: xdr_1.nfs.Version,
    });
    const set = { conn, mountClient, nfsClient };
    clientsCache.set(address, set);
    return set;
}
/**
 * This module maintains a singleton cached list of (device address + slot) -> file
 * handles. The file handles may become stale in this list should the devices
 * connected to the players slot change.
 */
const rootHandleCache = new Map();
/**
 * Locate the root filehandle of the given device slot.
 *
 * NOTE: This function will cache the root handle for the device + slot. Should
 *       the device have changed the slot will not longer be valid (TODO,
 *       verify this). It is up to the caller to clear the cache and get the
 *       new root handle in that case.
 */
async function getRootHandle({ device, slot, mountClient, span }) {
    var _a;
    const tx = span === null || span === void 0 ? void 0 : span.startChild({ op: 'getRootHandle' });
    const { address } = device.ip;
    const deviceSlotCache = (_a = rootHandleCache.get(address)) !== null && _a !== void 0 ? _a : new Map();
    const cachedRootHandle = deviceSlotCache.get(slot);
    if (cachedRootHandle !== undefined) {
        return cachedRootHandle;
    }
    const exports = await (0, programs_1.getExports)(mountClient, tx);
    const targetExport = exports.find(e => e.filesystem === slotMountMapping[slot]);
    if (targetExport === undefined) {
        return null;
    }
    const rootHandle = await (0, programs_1.mountFilesystem)(mountClient, targetExport, tx);
    deviceSlotCache.set(slot, rootHandle);
    rootHandleCache.set(address, deviceSlotCache);
    tx === null || tx === void 0 ? void 0 : tx.finish();
    return rootHandle;
}
const badRoothandleError = (slot, deviceId) => new Error(`The slot (${slot}) is not exported on Device ${deviceId}`);
/**
 * Fetch a file from a devices NFS server.
 *
 * NOTE: The connection and root filehandle (The 'mounted' NFS export on the
 *       device) is cached to improve subsequent fetching performance. It's
 *       important that when the device disconnects you call the {@link
 *       resetDeviceCache} function.
 */
async function fetchFile({ device, slot, path, onProgress, span, }) {
    const tx = span
        ? span.startChild({ op: 'fetchFile' })
        : Sentry.startTransaction({ name: 'fetchFile' });
    const { mountClient, nfsClient } = await getClients(device.ip.address);
    const rootHandle = await getRootHandle({ device, slot, mountClient, span: tx });
    if (rootHandle === null) {
        throw badRoothandleError(slot, device.id);
    }
    // It's possible that our roothandle is no longer valid, if we fail to lookup
    // a path lets first try and clear our roothandle cache
    let fileInfo = null;
    try {
        fileInfo = await (0, programs_1.lookupPath)(nfsClient, rootHandle, path, tx);
    }
    catch {
        rootHandleCache.delete(device.ip.address);
        const rootHandle = await getRootHandle({ device, slot, mountClient, span: tx });
        if (rootHandle === null) {
            throw badRoothandleError(slot, device.id);
        }
        // Desperately try once more to lookup the file
        fileInfo = await (0, programs_1.lookupPath)(nfsClient, rootHandle, path, tx);
    }
    const file = await (0, programs_1.fetchFile)(nfsClient, fileInfo, onProgress, tx);
    tx.setData('path', path);
    tx.setData('slot', (0, utils_1.getSlotName)(slot));
    tx.setData('size', fileInfo.size);
    tx.finish();
    return file;
}
exports.fetchFile = fetchFile;
/**
 * Clear the cached NFS connection and root filehandle for the given device
 */
function resetDeviceCache(device) {
    clientsCache.delete(device.ip.address);
    rootHandleCache.delete(device.ip.address);
}
exports.resetDeviceCache = resetDeviceCache;
/**
 * Configure the retry strategy for making NFS calls using this module
 */
function configureRetryStrategy(config) {
    retryConfig = config;
    for (const client of clientsCache.values()) {
        client.conn.retryConfig = config;
    }
}
exports.configureRetryStrategy = configureRetryStrategy;


/***/ }),

/***/ "./src/nfs/programs.ts":
/*!*****************************!*\
  !*** ./src/nfs/programs.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fetchFile = exports.lookupPath = exports.lookupFile = exports.mountFilesystem = exports.getExports = exports.makeProgramClient = void 0;
const rpc_1 = __webpack_require__(/*! ./rpc */ "./src/nfs/rpc.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/nfs/utils.ts");
const xdr_1 = __webpack_require__(/*! ./xdr */ "./src/nfs/xdr.ts");
/**
 * How many bytes of a file should we read at once.
 */
const READ_SIZE = 2048;
/**
 * Queries for the listening port of a RPC program
 */
async function makeProgramClient(conn, program) {
    const getPortData = new xdr_1.portmap.GetPort({
        program: program.id,
        version: program.version,
        protocol: 17,
        port: 0,
    });
    const data = await conn.call({
        port: 111,
        program: xdr_1.portmap.Program,
        version: xdr_1.portmap.Version,
        procedure: xdr_1.portmap.Procedure.getPort().value,
        data: getPortData.toXDR(),
    });
    const port = data.readInt32BE();
    return new rpc_1.RpcProgram(conn, program.id, program.version, port);
}
exports.makeProgramClient = makeProgramClient;
/**
 * Request a list of export entries.
 */
async function getExports(conn, span) {
    const tx = span === null || span === void 0 ? void 0 : span.startChild({ op: 'getExports' });
    const data = await conn.call({
        procedure: xdr_1.mount.Procedure.export().value,
        data: Buffer.alloc(0),
    });
    const entry = xdr_1.mount.ExportListResponse.fromXDR(data).next();
    if (entry === undefined) {
        return [];
    }
    const exports = (0, utils_1.flattenLinkedList)(entry).map((entry) => ({
        filesystem: entry.filesystem(),
        groups: (0, utils_1.flattenLinkedList)(entry.groups()).map((g) => g.name().toString()),
    }));
    tx === null || tx === void 0 ? void 0 : tx.finish();
    return exports;
}
exports.getExports = getExports;
/**
 * Mount the specified export, returning the file handle.
 */
async function mountFilesystem(conn, { filesystem }, span) {
    const tx = span === null || span === void 0 ? void 0 : span.startChild({ op: 'mountFilesystem', data: { filesystem } });
    const resp = await conn.call({
        procedure: xdr_1.mount.Procedure.mount().value,
        data: new xdr_1.mount.MountRequest({ filesystem }).toXDR(),
    });
    const fileHandleResp = xdr_1.mount.FHStatus.fromXDR(resp);
    if (fileHandleResp.arm() !== 'success') {
        throw new Error('Failed to mount filesystem');
    }
    tx === null || tx === void 0 ? void 0 : tx.finish();
    return fileHandleResp.success();
}
exports.mountFilesystem = mountFilesystem;
/**
 * Lookup a file within the directory of the provided file handle, returning
 * the FileInfo object if the file can be located.
 */
async function lookupFile(conn, handle, filename, span) {
    const tx = span === null || span === void 0 ? void 0 : span.startChild({ op: 'lookupFile', description: filename });
    const resp = await conn.call({
        procedure: xdr_1.nfs.Procedure.lookup().value,
        data: new xdr_1.nfs.DirectoryOpArgs({ handle, filename }).toXDR(),
    });
    const fileResp = xdr_1.nfs.DirectoryOpResponse.fromXDR(resp);
    if (fileResp.arm() !== 'success') {
        throw new Error(`Failed file lookup of ${filename}`);
    }
    const fileHandle = fileResp.success().handle();
    const attributes = fileResp.success().attributes();
    const info = {
        name: filename,
        handle: fileHandle,
        size: attributes.size(),
        type: attributes.type().name,
    };
    tx === null || tx === void 0 ? void 0 : tx.finish();
    return info;
}
exports.lookupFile = lookupFile;
/**
 * Lookup the absolute path to a file, given the root file handle and path,
 */
async function lookupPath(conn, rootHandle, filepath, span) {
    const tx = span === null || span === void 0 ? void 0 : span.startChild({ op: 'lookupPath', description: filepath });
    // There are times when the path includes a leading slash, sanitize that
    const pathParts = filepath.replace(/^\//, '').split('/');
    let handle = rootHandle;
    let info;
    while (pathParts.length !== 0) {
        const filename = pathParts.shift();
        const fileInfo = await lookupFile(conn, handle, filename, tx);
        info = fileInfo;
        handle = info.handle;
    }
    tx === null || tx === void 0 ? void 0 : tx.finish();
    // We can gaurentee this will be set since we will have failed to lookup the
    // file above
    return info;
}
exports.lookupPath = lookupPath;
/**
 * Fetch the specified file the remote NFS server. This will read the entire
 * file into memory.
 */
async function fetchFile(conn, file, onProgress, span) {
    const { handle, name, size } = file;
    const data = Buffer.alloc(size);
    const tx = span === null || span === void 0 ? void 0 : span.startChild({
        op: 'download',
        description: name,
        data: { size },
    });
    let bytesRead = 0;
    while (bytesRead < size) {
        const readArgs = new xdr_1.nfs.ReadArgs({
            handle,
            offset: bytesRead,
            count: READ_SIZE,
            totalCount: 0,
        });
        const resp = await conn.call({
            procedure: xdr_1.nfs.Procedure.read().value,
            data: readArgs.toXDR(),
        });
        const dataResp = xdr_1.nfs.ReadResponse.fromXDR(resp);
        if (dataResp.arm() !== 'success') {
            throw new Error(`Failed to read file at offset ${bytesRead} / ${size}`);
        }
        const buffer = dataResp.success().data();
        data.set(buffer, bytesRead);
        bytesRead += buffer.length;
        onProgress === null || onProgress === void 0 ? void 0 : onProgress({ read: bytesRead, total: size });
    }
    tx === null || tx === void 0 ? void 0 : tx.finish();
    return data;
}
exports.fetchFile = fetchFile;


/***/ }),

/***/ "./src/nfs/rpc.ts":
/*!************************!*\
  !*** ./src/nfs/rpc.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RpcProgram = exports.RpcConnection = void 0;
const async_mutex_1 = __webpack_require__(/*! async-mutex */ "async-mutex");
const promise_retry_1 = __importDefault(__webpack_require__(/*! promise-retry */ "promise-retry"));
const promise_timeout_1 = __webpack_require__(/*! promise-timeout */ "promise-timeout");
const dgram_1 = __importDefault(__webpack_require__(/*! dgram */ "dgram"));
const udp_1 = __webpack_require__(/*! src/utils/udp */ "./src/utils/udp.ts");
const xdr_1 = __webpack_require__(/*! ./xdr */ "./src/nfs/xdr.ts");
/**
 * The RPC auth stamp passed by the CDJs. It's unclear if this is actually
 * important, but I'm keeping the rpc calls as close to CDJ calls as I can.
 */
const CDJ_AUTH_STAMP = 0x967b8703;
const rpcAuthMessage = new xdr_1.rpc.UnixAuth({
    stamp: CDJ_AUTH_STAMP,
    name: '',
    uid: 0,
    gid: 0,
    gids: [],
});
/**
 * Generic RPC connection. Can be used to make RPC 2 calls to any program
 * specified in the RpcCall.
 */
class RpcConnection {
    constructor(address, retryConfig) {
        this.xid = 1;
        this.address = address;
        this.retryConfig = retryConfig !== null && retryConfig !== void 0 ? retryConfig : {};
        this.socket = dgram_1.default.createSocket('udp4');
        this.mutex = new async_mutex_1.Mutex();
    }
    get connected() {
        // TODO: Figure out what logic we can do here to determine if the socket is
        // still open.
        return true;
    }
    setupRequest({ program, version, procedure, data }) {
        const auth = new xdr_1.rpc.Auth({
            flavor: 1,
            body: rpcAuthMessage.toXDR(),
        });
        const verifier = new xdr_1.rpc.Auth({
            flavor: 0,
            body: Buffer.alloc(0),
        });
        const request = new xdr_1.rpc.Request({
            rpcVersion: xdr_1.rpc.Version,
            programVersion: version,
            program,
            procedure,
            auth,
            verifier,
            data,
        });
        const packet = new xdr_1.rpc.Packet({
            xid: this.xid,
            message: xdr_1.rpc.Message.request(request),
        });
        return packet.toXDR();
    }
    /**
     * Execute a RPC transaction (call and response).
     *
     * If a transaction does not complete after the configured timeout it will be
     * retried with the retry configuration.
     */
    async call({ port, ...call }) {
        this.xid++;
        const callData = this.setupRequest(call);
        // Function to execute the transaction
        const executeCall = async () => {
            await (0, udp_1.udpSend)(this.socket, callData, 0, callData.length, port, this.address);
            return (0, udp_1.udpRead)(this.socket);
        };
        const { transactionTimeout, ...retryConfig } = this.retryConfig;
        // Function to execute the transaction, with timeout if the transaction
        // does not resolve after RESPONSE_RETRY_TIMEOUT.
        const executeWithTimeout = () => (0, promise_timeout_1.timeout)(executeCall(), transactionTimeout !== null && transactionTimeout !== void 0 ? transactionTimeout : 1000);
        // Function to execute the transaction, with retries if the transaction times out.
        const executeWithRetry = () => (0, promise_retry_1.default)(retryConfig, async (retry) => {
            try {
                return await executeWithTimeout();
            }
            catch (err) {
                if (err instanceof promise_timeout_1.TimeoutError) {
                    retry(err);
                }
                else {
                    throw err;
                }
            }
            return undefined;
        });
        // Execute the transaction exclusively to avoid async call races
        const resp = await this.mutex.runExclusive(executeWithRetry);
        // Decode the XDR response
        const packet = xdr_1.rpc.Packet.fromXDR(resp);
        const message = packet.message().response();
        if (message.arm() !== 'accepted') {
            throw new Error('RPC request was denied');
        }
        const body = message.accepted().response();
        if (body.arm() !== 'success') {
            throw new Error('RPC did not successfully return data');
        }
        return body.success();
    }
    async disconnect() {
        await (0, udp_1.udpClose)(this.socket);
    }
}
exports.RpcConnection = RpcConnection;
/**
 * RpcProgram is constructed with specialization details for a specific RPC
 * program. This should be used to avoid having to repeat yourself for calls
 * made using the RpcConnection.
 */
class RpcProgram {
    constructor(conn, program, version, port) {
        this.conn = conn;
        this.program = program;
        this.version = version;
        this.port = port;
    }
    call(data) {
        const { program, version, port } = this;
        return this.conn.call({ program, version, port, ...data });
    }
    disconnect() {
        this.conn.disconnect();
    }
}
exports.RpcProgram = RpcProgram;


/***/ }),

/***/ "./src/nfs/utils.ts":
/*!**************************!*\
  !*** ./src/nfs/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flattenLinkedList = void 0;
/**
 * Helper to flatten linked list structures into an array
 */
const flattenLinkedList = (item) => [
    item,
    ...(item.next() ? (0, exports.flattenLinkedList)(item.next()) : []),
];
exports.flattenLinkedList = flattenLinkedList;


/***/ }),

/***/ "./src/nfs/xdr.ts":
/*!************************!*\
  !*** ./src/nfs/xdr.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nfs = exports.mount = exports.portmap = exports.rpc = void 0;
const XDR = __importStar(__webpack_require__(/*! js-xdr */ "js-xdr"));
const util_1 = __webpack_require__(/*! js-xdr/lib/util */ "js-xdr/lib/util");
/**
 * A xdr type to read the rest of the data in the buffer
 */
const OpaqueData = {
    read(io) {
        return io.slice().buffer();
    },
    write(value, io) {
        io.writeBufferPadded(value);
    },
    isValid(value) {
        return Buffer.isBuffer(value);
    },
};
/**
 * In the standard NFS protocol,strings are typically ASCII. For Pioneer
 * players, it is an UTF-16LE encoded string; This type handles conversion.
 */
class StringUTF16LE {
    read(io) {
        const length = XDR.Int.read(io);
        const padding = (0, util_1.calculatePadding)(length);
        const result = io.slice(length);
        (0, util_1.slicePadding)(io, padding);
        return result.buffer().toString('utf16le');
    }
    write(value, io) {
        const data = Buffer.from(value, 'utf16le');
        XDR.Int.write(data.length, io);
        io.writeBufferPadded(data);
    }
    isValid(value) {
        return typeof value === 'string';
    }
}
/**
 * RPC XDR data types. This implemenets nearly the entire XDR spec for the
 * ONC-RPC protocol.
 */
exports.rpc = XDR.config((xdr) => {
    xdr.const('Version', 2);
    xdr.enum('MessageType', {
        request: 0,
        response: 1,
    });
    xdr.enum('ResponseStatus', {
        accepted: 0,
        denied: 1,
    });
    xdr.enum('AcceptStatus', {
        success: 0,
        programUnavailable: 1,
        programMismatch: 2,
        processUnavailable: 3,
        garbageArguments: 4,
        systemError: 5,
    });
    xdr.enum('RejectStatus', {
        mismatch: 0,
        authError: 1,
    });
    xdr.enum('AuthStatus', {
        ok: 0,
        badCredentials: 1,
        rjectedCredentials: 2,
        badVerification: 3,
        rejectedVerification: 4,
        tooWeak: 5,
        invalidResponse: 6,
        failed: 7,
    });
    xdr.struct('UnixAuth', [
        ['stamp', xdr.uint()],
        ['name', xdr.string(255)],
        ['uid', xdr.uint()],
        ['gid', xdr.uint()],
        ['gids', xdr.varArray(xdr.uint(), 16)],
    ]);
    xdr.struct('Auth', [
        ['flavor', xdr.uint()],
        ['body', xdr.varOpaque(400)],
    ]);
    xdr.struct('Request', [
        ['rpcVersion', xdr.uint()],
        ['program', xdr.uint()],
        ['programVersion', xdr.uint()],
        ['procedure', xdr.uint()],
        ['auth', xdr.lookup('Auth')],
        ['verifier', xdr.lookup('Auth')],
        ['data', OpaqueData],
    ]);
    xdr.struct('MismatchInfo', [
        ['low', xdr.uint()],
        ['high', xdr.uint()],
    ]);
    xdr.union('ResponseData', {
        switchOn: xdr.lookup('AcceptStatus'),
        defaultArm: xdr.void(),
        switches: [
            ['success', 'success'],
            ['programMismatch', 'programMismatch'],
        ],
        arms: {
            success: OpaqueData,
            programMismatch: xdr.lookup('MismatchInfo'),
        },
    });
    xdr.struct('AcceptedResponse', [
        ['verifier', xdr.lookup('Auth')],
        ['response', xdr.lookup('ResponseData')],
    ]);
    xdr.union('RejectedResponse', {
        switchOn: xdr.lookup('RejectStatus'),
        switches: [
            ['mismatch', 'mismatch'],
            ['authError', 'authError'],
        ],
        arms: {
            mismatch: xdr.lookup('MismatchInfo'),
            authError: xdr.lookup('AuthStatus'),
        },
    });
    xdr.union('Response', {
        switchOn: xdr.lookup('ResponseStatus'),
        switches: [
            ['accepted', 'accepted'],
            ['denied', 'denied'],
        ],
        arms: {
            accepted: xdr.lookup('AcceptedResponse'),
            denied: xdr.void(),
        },
    });
    xdr.union('Message', {
        switchOn: xdr.lookup('MessageType'),
        switches: [
            ['request', 'request'],
            ['response', 'response'],
        ],
        arms: {
            request: xdr.lookup('Request'),
            response: xdr.lookup('Response'),
        },
    });
    xdr.struct('Packet', [
        ['xid', xdr.uint()],
        ['message', xdr.lookup('Message')],
    ]);
});
/**
 * Portmap RPC XDR types
 */
exports.portmap = XDR.config((xdr) => {
    xdr.const('Program', 100000);
    xdr.const('Version', 2);
    xdr.enum('Procedure', {
        getPort: 3,
    });
    xdr.struct('GetPort', [
        ['program', xdr.uint()],
        ['version', xdr.uint()],
        ['protocol', xdr.uint()],
        ['port', xdr.uint()],
    ]);
});
/**
 * Mount RPC XDR types
 */
exports.mount = XDR.config((xdr) => {
    xdr.const('Program', 100005);
    xdr.const('Version', 1);
    xdr.enum('Procedure', {
        mount: 1,
        export: 5,
    });
    xdr.typedef('Path', new StringUTF16LE());
    xdr.typedef('Filehandle', xdr.opaque(32));
    xdr.struct('MountRequest', [['filesystem', xdr.lookup('Path')]]);
    xdr.struct('Groups', [
        ['name', xdr.string(255)],
        ['next', xdr.option(xdr.lookup('Groups'))],
    ]);
    xdr.struct('ExportList', [
        ['filesystem', xdr.lookup('Path')],
        ['groups', xdr.option(xdr.lookup('Groups'))],
        ['next', xdr.option(xdr.lookup('ExportList'))],
    ]);
    xdr.union('FHStatus', {
        switchOn: xdr.uint(),
        defaultArm: xdr.void(),
        switches: [[0, 'success']],
        arms: {
            success: xdr.lookup('Filehandle'),
        },
    });
    xdr.struct('ExportListResponse', [['next', xdr.option(xdr.lookup('ExportList'))]]);
});
/**
 * NFS RPC XDR types
 */
exports.nfs = XDR.config((xdr) => {
    xdr.const('Program', 100003);
    xdr.const('Version', 2);
    xdr.enum('Procedure', {
        lookup: 4,
        read: 6,
    });
    xdr.typedef('Filename', new StringUTF16LE());
    xdr.typedef('Filehandle', xdr.opaque(32));
    xdr.typedef('NFSData', xdr.varOpaque(8192));
    xdr.enum('FileType', {
        null: 0,
        regular: 1,
        directory: 2,
        block: 3,
        char: 4,
        link: 5,
    });
    xdr.struct('TimeValue', [
        ['seconds', xdr.uint()],
        ['useconds', xdr.uint()],
    ]);
    xdr.struct('FileAttributes', [
        ['type', xdr.lookup('FileType')],
        ['mode', xdr.uint()],
        ['nlink', xdr.uint()],
        ['uid', xdr.uint()],
        ['gid', xdr.uint()],
        ['size', xdr.uint()],
        ['blocksize', xdr.uint()],
        ['rdev', xdr.uint()],
        ['blocks', xdr.uint()],
        ['fsid', xdr.uint()],
        ['fileid', xdr.uint()],
        ['atime', xdr.lookup('TimeValue')],
        ['mtime', xdr.lookup('TimeValue')],
        ['ctime', xdr.lookup('TimeValue')],
    ]);
    xdr.struct('DirectoryOpArgs', [
        ['handle', xdr.lookup('Filehandle')],
        ['filename', xdr.lookup('Filename')],
    ]);
    xdr.struct('DirectoryOpResponseBody', [
        ['handle', xdr.lookup('Filehandle')],
        ['attributes', xdr.lookup('FileAttributes')],
    ]);
    xdr.union('DirectoryOpResponse', {
        switchOn: xdr.uint(),
        defaultArm: xdr.void(),
        switches: [[0, 'success']],
        arms: {
            success: xdr.lookup('DirectoryOpResponseBody'),
        },
    });
    xdr.struct('ReadArgs', [
        ['handle', xdr.lookup('Filehandle')],
        ['offset', xdr.uint()],
        ['count', xdr.uint()],
        ['totalCount', xdr.uint()],
    ]);
    xdr.struct('ReadBody', [
        ['attributes', xdr.lookup('FileAttributes')],
        ['data', xdr.lookup('NFSData')],
    ]);
    xdr.union('ReadResponse', {
        switchOn: xdr.uint(),
        defaultArm: xdr.void(),
        switches: [[0, 'success']],
        arms: {
            success: xdr.lookup('ReadBody'),
        },
    });
});


/***/ }),

/***/ "./src/remotedb/constants.ts":
/*!***********************************!*\
  !*** ./src/remotedb/constants.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REMOTEDB_SERVER_QUERY_PORT = exports.REMOTEDB_MAGIC = void 0;
/**
 * All remote database messages include this 4 byte magic value.
 */
exports.REMOTEDB_MAGIC = 0x872349ae;
/**
 * The consistent port on which we can query the remote db server for the port
 */
exports.REMOTEDB_SERVER_QUERY_PORT = 12523;


/***/ }),

/***/ "./src/remotedb/fields.ts":
/*!********************************!*\
  !*** ./src/remotedb/fields.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readField = exports.Binary = exports.String = exports.UInt32 = exports.UInt16 = exports.UInt8 = exports.BaseField = exports.FieldType = void 0;
const NULL_CHAR = '\0';
/**
 * Field type is a leading byte that indicates what the field is.
 */
var FieldType;
(function (FieldType) {
    FieldType[FieldType["UInt8"] = 15] = "UInt8";
    FieldType[FieldType["UInt16"] = 16] = "UInt16";
    FieldType[FieldType["UInt32"] = 17] = "UInt32";
    FieldType[FieldType["Binary"] = 20] = "Binary";
    FieldType[FieldType["String"] = 38] = "String";
})(FieldType = exports.FieldType || (exports.FieldType = {}));
class BaseField {
}
exports.BaseField = BaseField;
const numberNameMap = Object.fromEntries(Object.entries(FieldType).map(e => [e[1], e[0]]));
const numberBufferInfo = {
    [FieldType.UInt8]: [1, 'writeUInt8', 'readUInt8'],
    [FieldType.UInt16]: [2, 'writeUInt16BE', 'readUInt16BE'],
    [FieldType.UInt32]: [4, 'writeUInt32BE', 'readUInt32BE'],
};
function parseNumber(value, type) {
    const [bytes, writeFn, readFn] = numberBufferInfo[type];
    const data = Buffer.alloc(bytes);
    if (typeof value === 'number') {
        data[writeFn](value);
        return [value, data];
    }
    return [value[readFn](), value];
}
function makeVariableBuffer(type, fieldData, lengthHeader) {
    // Add 4 bytes for length header and 1 byte for type header.
    const data = Buffer.alloc(fieldData.length + 4 + 1);
    data.writeUInt8(type);
    data.writeUInt32BE(lengthHeader !== null && lengthHeader !== void 0 ? lengthHeader : fieldData.length, 0x01);
    fieldData.copy(data, 0x05);
    return data;
}
const makeNumberField = (type) => {
    var _a;
    const Number = (_a = class extends BaseField {
            constructor(value) {
                super();
                const [number, data] = parseNumber(value, type);
                this.data = data;
                this.value = number;
            }
            get buffer() {
                return Buffer.from([type, ...this.data]);
            }
        },
        _a.type = type,
        _a.bytesToRead = numberBufferInfo[type][0],
        _a);
    // We use the name property in readField to create helpful error messages
    Object.defineProperty(Number, 'name', { value: numberNameMap[type] });
    return Number;
};
/**
 * Field representing a UInt8
 */
exports.UInt8 = makeNumberField(FieldType.UInt8);
/**
 * Field representing a UInt16
 */
exports.UInt16 = makeNumberField(FieldType.UInt16);
/**
 * Field representing a UInt32
 */
exports.UInt32 = makeNumberField(FieldType.UInt32);
/**
 * Field representing a null-terminated big endian UTF-16 string
 */
class String extends BaseField {
    constructor(value) {
        super();
        if (typeof value === 'string') {
            this.value = value;
            this.data = Buffer.from(value + NULL_CHAR, 'utf16le').swap16();
            return;
        }
        // Slice off the last two bytes to remove the trailing null bytes
        this.value = Buffer.from(value).swap16().slice(0, -2).toString('utf16le');
        this.data = value;
    }
    get buffer() {
        return makeVariableBuffer(FieldType.String, this.data, this.data.length / 2);
    }
}
exports.String = String;
String.type = FieldType.String;
// Compute the number of bytes in the string given the length of the string.
// A UTF-16 string takes 2 bytes per character.
String.bytesToRead = (length) => length * 2;
/**
 * Field representing binary data
 */
class Binary extends BaseField {
    constructor(value) {
        super();
        this.value = this.data = value;
    }
    get buffer() {
        return makeVariableBuffer(FieldType.Binary, this.data);
    }
}
exports.Binary = Binary;
Binary.type = FieldType.Binary;
Binary.bytesToRead = (bytes) => bytes;
const fieldMap = {
    [FieldType.UInt8]: exports.UInt8,
    [FieldType.UInt16]: exports.UInt16,
    [FieldType.UInt32]: exports.UInt32,
    [FieldType.Binary]: Binary,
    [FieldType.String]: String,
};
/**
 * Helper to read from stream.
 *
 * NOTE: I suspect the typescript interface on PromiseReadable may be wrong, as
 * I'm not sure when this would return a string. We'll play it safe for now.
 */
async function read(stream, bytes) {
    const data = await stream.read(bytes);
    if (data instanceof Buffer) {
        return data;
    }
    throw new Error('Expected buffer from stream read');
}
/**
 * Read a single field from a socket stream.
 */
async function readField(stream, expect) {
    const typeData = await read(stream, 1);
    const Field = fieldMap[typeData[0]];
    if (Field.type !== expect) {
        throw new Error(`Expected ${fieldMap[expect].name} but got ${Field.name}`);
    }
    let nextByteCount;
    if (typeof Field.bytesToRead === 'number') {
        nextByteCount = Field.bytesToRead;
    }
    else {
        // Read the field length as a UInt32 when we do not know the field length
        // from the type
        const lengthData = await read(stream, 4);
        nextByteCount = Field.bytesToRead(lengthData.readUInt32BE());
    }
    const data = nextByteCount === 0 ? Buffer.alloc(0) : await read(stream, nextByteCount);
    return new Field(data);
}
exports.readField = readField;


/***/ }),

/***/ "./src/remotedb/index.ts":
/*!*******************************!*\
  !*** ./src/remotedb/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Connection_socket, _Connection_txId, _Connection_lock, _QueryInterface_conn, _QueryInterface_hostDevice, _QueryInterface_lock, _RemoteDatabase_hostDevice, _RemoteDatabase_deviceManager, _RemoteDatabase_connections, _RemoteDatabase_deviceLocks;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryInterface = exports.Connection = exports.getQueryName = exports.Query = exports.MenuTarget = void 0;
const Sentry = __importStar(__webpack_require__(/*! @sentry/node */ "@sentry/node"));
const async_mutex_1 = __webpack_require__(/*! async-mutex */ "async-mutex");
const promise_socket_1 = __importDefault(__webpack_require__(/*! promise-socket */ "promise-socket"));
const net_1 = __webpack_require__(/*! net */ "net");
const types_1 = __webpack_require__(/*! ./message/types */ "./src/remotedb/message/types.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/remotedb/constants.ts");
const fields_1 = __webpack_require__(/*! ./fields */ "./src/remotedb/fields.ts");
const message_1 = __webpack_require__(/*! ./message */ "./src/remotedb/message/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/remotedb/queries.ts");
/**
 * Menu target specifies where a menu should be "rendered" This differes based
 * on the request being made.
 */
var MenuTarget;
(function (MenuTarget) {
    MenuTarget[MenuTarget["Main"] = 1] = "Main";
})(MenuTarget = exports.MenuTarget || (exports.MenuTarget = {}));
exports.Query = types_1.Request;
const QueryInverse = Object.fromEntries(Object.entries(exports.Query).map(e => [e[1], e[0]]));
/**
 * Returns a string representation of a remote query
 */
function getQueryName(query) {
    return QueryInverse[query];
}
exports.getQueryName = getQueryName;
/**
 * Queries the remote device for the port that the remote database server is
 * listening on for requests.
 */
async function getRemoteDBServerPort(deviceIp) {
    const conn = new promise_socket_1.default(new net_1.Socket());
    await conn.connect(constants_1.REMOTEDB_SERVER_QUERY_PORT, deviceIp.address);
    // Magic request packet asking the device to report it's remoteDB port
    const data = Buffer.from([
        ...[0x00, 0x00, 0x00, 0x0f],
        ...Buffer.from('RemoteDBServer', 'ascii'),
        0x00,
    ]);
    await conn.write(data);
    const resp = await conn.read();
    if (typeof resp !== 'object') {
        throw new Error('Invalid response from remotedb');
    }
    if (resp.length !== 2) {
        throw new Error(`Expected 2 bytes, got ${resp.length}`);
    }
    return resp.readUInt16BE();
}
/**
 * Manages a connection to a single device
 */
class Connection {
    constructor(device, socket) {
        _Connection_socket.set(this, void 0);
        _Connection_txId.set(this, 0);
        _Connection_lock.set(this, new async_mutex_1.Mutex());
        __classPrivateFieldSet(this, _Connection_socket, socket, "f");
        this.device = device;
    }
    async writeMessage(message, span) {
        var _a;
        const tx = span.startChild({
            op: 'writeMessage',
            description: (0, types_1.getMessageName)(message.type),
        });
        message.transactionId = __classPrivateFieldSet(this, _Connection_txId, (_a = __classPrivateFieldGet(this, _Connection_txId, "f"), ++_a), "f");
        await __classPrivateFieldGet(this, _Connection_socket, "f").write(message.buffer);
        tx.finish();
    }
    readMessage(expect, span) {
        return __classPrivateFieldGet(this, _Connection_lock, "f").runExclusive(() => message_1.Message.fromStream(__classPrivateFieldGet(this, _Connection_socket, "f"), expect, span));
    }
    close() {
        __classPrivateFieldGet(this, _Connection_socket, "f").destroy();
    }
}
exports.Connection = Connection;
_Connection_socket = new WeakMap(), _Connection_txId = new WeakMap(), _Connection_lock = new WeakMap();
class QueryInterface {
    constructor(conn, lock, hostDevice) {
        _QueryInterface_conn.set(this, void 0);
        _QueryInterface_hostDevice.set(this, void 0);
        _QueryInterface_lock.set(this, void 0);
        __classPrivateFieldSet(this, _QueryInterface_conn, conn, "f");
        __classPrivateFieldSet(this, _QueryInterface_lock, lock, "f");
        __classPrivateFieldSet(this, _QueryInterface_hostDevice, hostDevice, "f");
    }
    /**
     * Make a query to the remote database connection.
     */
    async query(opts) {
        const { query, queryDescriptor, args, span } = opts;
        const conn = __classPrivateFieldGet(this, _QueryInterface_conn, "f");
        const queryName = getQueryName(opts.query);
        const tx = span
            ? span.startChild({ op: 'remoteQuery', description: queryName })
            : Sentry.startTransaction({ name: 'remoteQuery', description: queryName });
        const lookupDescriptor = {
            ...queryDescriptor,
            hostDevice: __classPrivateFieldGet(this, _QueryInterface_hostDevice, "f"),
            targetDevice: __classPrivateFieldGet(this, _QueryInterface_conn, "f").device,
        };
        // TODO: Figure out why typescirpt can't understand our query type discriminate
        // for args here. The interface for this actual query funciton discrimites just
        // fine.
        const anyArgs = args;
        const handler = queries_1.queryHandlers[query];
        const releaseLock = await __classPrivateFieldGet(this, _QueryInterface_lock, "f").acquire();
        const response = await handler({ conn, lookupDescriptor, span: tx, args: anyArgs });
        releaseLock();
        tx.finish();
        return response;
    }
}
exports.QueryInterface = QueryInterface;
_QueryInterface_conn = new WeakMap(), _QueryInterface_hostDevice = new WeakMap(), _QueryInterface_lock = new WeakMap();
/**
 * Service that maintains remote database connections with devices on the network.
 */
class RemoteDatabase {
    constructor(deviceManager, hostDevice) {
        _RemoteDatabase_hostDevice.set(this, void 0);
        _RemoteDatabase_deviceManager.set(this, void 0);
        /**
         * Active device connection map
         */
        _RemoteDatabase_connections.set(this, new Map());
        /**
         * Locks for each device when locating the connection
         */
        _RemoteDatabase_deviceLocks.set(this, new Map());
        /**
         * Open a connection to the specified device for querying
         */
        this.connectToDevice = async (device) => {
            const tx = Sentry.startTransaction({ name: 'connectRemotedb', data: { device } });
            const { ip } = device;
            const dbPort = await getRemoteDBServerPort(ip);
            const socket = new promise_socket_1.default(new net_1.Socket());
            await socket.connect(dbPort, ip.address);
            // Send required preamble to open communications with the device
            const preamble = new fields_1.UInt32(0x01);
            await socket.write(preamble.buffer);
            // Read the response. It should be a UInt32 field with the value 0x01.
            // There is some kind of problem if not.
            const data = await (0, fields_1.readField)(socket, fields_1.UInt32.type);
            if (data.value !== 0x01) {
                throw new Error(`Expected 0x01 during preamble handshake. Got ${data.value}`);
            }
            // Send introduction message to set context for querying
            const intro = new message_1.Message({
                transactionId: 0xfffffffe,
                type: types_1.MessageType.Introduce,
                args: [new fields_1.UInt32(__classPrivateFieldGet(this, _RemoteDatabase_hostDevice, "f").id)],
            });
            await socket.write(intro.buffer);
            const resp = await message_1.Message.fromStream(socket, types_1.MessageType.Success, tx);
            if (resp.type !== types_1.MessageType.Success) {
                throw new Error(`Failed to introduce self to device ID: ${device.id}`);
            }
            __classPrivateFieldGet(this, _RemoteDatabase_connections, "f").set(device.id, new Connection(device, socket));
            tx.finish();
        };
        /**
         * Disconnect from the specified device
         */
        this.disconnectFromDevice = async (device) => {
            const tx = Sentry.startTransaction({ name: 'disconnectFromDevice', data: { device } });
            const conn = __classPrivateFieldGet(this, _RemoteDatabase_connections, "f").get(device.id);
            if (conn === undefined) {
                return;
            }
            const goodbye = new message_1.Message({
                transactionId: 0xfffffffe,
                type: types_1.MessageType.Disconnect,
                args: [],
            });
            await conn.writeMessage(goodbye, tx);
            conn.close();
            __classPrivateFieldGet(this, _RemoteDatabase_connections, "f").delete(device.id);
            tx.finish();
        };
        __classPrivateFieldSet(this, _RemoteDatabase_deviceManager, deviceManager, "f");
        __classPrivateFieldSet(this, _RemoteDatabase_hostDevice, hostDevice, "f");
    }
    /**
     * Gets the remote database query interface for the given device.
     *
     * If we have not already established a connection with the specified device,
     * we will attempt to first connect.
     *
     * @returns null if the device does not export a remote database service
     */
    async get(deviceId) {
        var _a;
        const device = __classPrivateFieldGet(this, _RemoteDatabase_deviceManager, "f").devices.get(deviceId);
        if (device === undefined) {
            return null;
        }
        const lock = (_a = __classPrivateFieldGet(this, _RemoteDatabase_deviceLocks, "f").get(device.id)) !== null && _a !== void 0 ? _a : __classPrivateFieldGet(this, _RemoteDatabase_deviceLocks, "f").set(device.id, new async_mutex_1.Mutex()).get(device.id);
        const releaseLock = await lock.acquire();
        let conn = __classPrivateFieldGet(this, _RemoteDatabase_connections, "f").get(deviceId);
        if (conn === undefined) {
            await this.connectToDevice(device);
        }
        conn = __classPrivateFieldGet(this, _RemoteDatabase_connections, "f").get(deviceId);
        releaseLock();
        // NOTE: We pass the same lock we use for this device to the query
        // interface to ensure all query interfaces use the same lock.
        return new QueryInterface(conn, lock, __classPrivateFieldGet(this, _RemoteDatabase_hostDevice, "f"));
    }
}
exports["default"] = RemoteDatabase;
_RemoteDatabase_hostDevice = new WeakMap(), _RemoteDatabase_deviceManager = new WeakMap(), _RemoteDatabase_connections = new WeakMap(), _RemoteDatabase_deviceLocks = new WeakMap();


/***/ }),

/***/ "./src/remotedb/message/index.ts":
/*!***************************************!*\
  !*** ./src/remotedb/message/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Message = void 0;
const tracing_1 = __webpack_require__(/*! @sentry/tracing */ "@sentry/tracing");
const constants_1 = __webpack_require__(/*! src/remotedb/constants */ "./src/remotedb/constants.ts");
const fields_1 = __webpack_require__(/*! src/remotedb/fields */ "./src/remotedb/fields.ts");
const response_1 = __webpack_require__(/*! src/remotedb/message/response */ "./src/remotedb/message/response.ts");
const types_1 = __webpack_require__(/*! src/remotedb/message/types */ "./src/remotedb/message/types.ts");
/**
 * Argument types are used in argument list fields. This is essentially
 * duplicating the field type, but has different values for whatever reason.
 *
 * There do not appear to be argument types for UInt8 and UInt16. At least, no
 * messages include these field types as arguments as far as we know.
 */
var ArgumentType;
(function (ArgumentType) {
    ArgumentType[ArgumentType["String"] = 2] = "String";
    ArgumentType[ArgumentType["Binary"] = 3] = "Binary";
    ArgumentType[ArgumentType["UInt32"] = 6] = "UInt32";
})(ArgumentType || (ArgumentType = {}));
/**
 * The message argument list always containts 12 slots
 */
const ARG_COUNT = 12;
const fieldArgsMap = {
    [fields_1.FieldType.UInt32]: ArgumentType.UInt32,
    [fields_1.FieldType.String]: ArgumentType.String,
    [fields_1.FieldType.Binary]: ArgumentType.Binary,
    // The following two field types do not have associated argument types (see
    // the note in ArgumentType), but we declare them here to make typescript happy
    // when mapping these values over.
    [fields_1.FieldType.UInt8]: 0x00,
    [fields_1.FieldType.UInt16]: 0x00,
};
const argsFieldMap = {
    [ArgumentType.UInt32]: fields_1.FieldType.UInt32,
    [ArgumentType.String]: fields_1.FieldType.String,
    [ArgumentType.Binary]: fields_1.FieldType.Binary,
};
/**
 * Representation of a set of fields sequenced into a known message format.
 */
class Message {
    constructor({ transactionId, type, args }) {
        this.transactionId = transactionId;
        this.type = type;
        this.args = args;
    }
    /**
     * Read a single mesasge via a readable stream
     */
    static async fromStream(stream, expect, span) {
        var _a;
        const tx = span.startChild({
            op: 'readFromStream',
            description: (0, types_1.getMessageName)(expect),
        });
        // 01. Read magic bytes
        const magicHeader = await (0, fields_1.readField)(stream, fields_1.FieldType.UInt32);
        if (magicHeader.value !== constants_1.REMOTEDB_MAGIC) {
            throw new Error('Did not recieve expected magic value. Corrupt message');
        }
        // 02. Read transaction ID
        const txId = await (0, fields_1.readField)(stream, fields_1.FieldType.UInt32);
        // 03. Read message type
        const messageType = await (0, fields_1.readField)(stream, fields_1.FieldType.UInt16);
        // 04. Read argument count
        const argCount = await (0, fields_1.readField)(stream, fields_1.FieldType.UInt8);
        // 05. Read argument list
        const argList = await (0, fields_1.readField)(stream, fields_1.FieldType.Binary);
        // 06. Read all argument fields in
        const args = new Array(argCount.value);
        for (let i = 0; i < argCount.value; ++i) {
            // XXX: There is a small quirk in a few message response types that send
            //      binary data, but if the binary data is empty the field will not
            //      be sent.
            if (argList.value[i] === ArgumentType.Binary && ((_a = args[i - 1]) === null || _a === void 0 ? void 0 : _a.value) === 0) {
                args[i] = new fields_1.Binary(Buffer.alloc(0));
                continue;
            }
            args[i] = await (0, fields_1.readField)(stream, argsFieldMap[argList.value[i]]);
        }
        if (messageType.value !== expect) {
            const expected = expect.toString(16);
            const actual = messageType.value.toString(16);
            tx.setStatus(tracing_1.SpanStatus.FailedPrecondition);
            tx.finish();
            throw new Error(`Expected message type 0x${expected}, got 0x${actual}`);
        }
        tx.finish();
        return new Message({
            transactionId: txId.value,
            type: messageType.value,
            args,
        });
    }
    /**
     * The byte serialization of the message
     */
    get buffer() {
        var _a;
        // Determine the argument list from the list of fields
        const argList = Buffer.alloc(ARG_COUNT, 0x00);
        argList.set(this.args.map(arg => fieldArgsMap[arg.constructor.type]));
        // XXX: Following the parsing quirk for messages that contain binary data
        //      but are _empty_, we check for binary fields with UInt32 fields
        //      before with the value of 0 (indicating "an empty binary field").
        const args = this.args.reduce((args, arg, i) => {
            const prevArg = this.args[i - 1];
            const isEmptyBuffer = arg.constructor.type === fields_1.FieldType.Binary &&
                i !== 0 &&
                prevArg.constructor.type === fields_1.FieldType.UInt32 &&
                prevArg.value === 0;
            return isEmptyBuffer ? args : [...args, arg];
        }, []);
        const fields = [
            new fields_1.UInt32(constants_1.REMOTEDB_MAGIC),
            new fields_1.UInt32((_a = this.transactionId) !== null && _a !== void 0 ? _a : 0),
            new fields_1.UInt16(this.type),
            new fields_1.UInt8(this.args.length),
            new fields_1.Binary(argList),
            ...args,
        ];
        return Buffer.concat(fields.map(f => f.buffer));
    }
    /**
     * The JS representation of the message.
     *
     * Currently only supports representing response messages.
     */
    get data() {
        const type = this.type;
        if (!Object.values(types_1.Response).includes(type)) {
            throw new Error('Representation of non-responses is not currently supported');
        }
        return response_1.responseTransform[type](this.args);
    }
}
exports.Message = Message;


/***/ }),

/***/ "./src/remotedb/message/item.ts":
/*!**************************************!*\
  !*** ./src/remotedb/message/item.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fieldsToItem = exports.ItemType = void 0;
const Sentry = __importStar(__webpack_require__(/*! @sentry/node */ "@sentry/node"));
/**
 * Item types associated to the MenuItem message type.
 */
var ItemType;
(function (ItemType) {
    ItemType[ItemType["Path"] = 0] = "Path";
    ItemType[ItemType["Folder"] = 1] = "Folder";
    ItemType[ItemType["AlbumTitle"] = 2] = "AlbumTitle";
    ItemType[ItemType["Disc"] = 3] = "Disc";
    ItemType[ItemType["TrackTitle"] = 4] = "TrackTitle";
    ItemType[ItemType["Genre"] = 6] = "Genre";
    ItemType[ItemType["Artist"] = 7] = "Artist";
    ItemType[ItemType["Playlist"] = 8] = "Playlist";
    ItemType[ItemType["Rating"] = 10] = "Rating";
    ItemType[ItemType["Duration"] = 11] = "Duration";
    ItemType[ItemType["Tempo"] = 13] = "Tempo";
    ItemType[ItemType["Label"] = 14] = "Label";
    ItemType[ItemType["Key"] = 15] = "Key";
    ItemType[ItemType["BitRate"] = 16] = "BitRate";
    ItemType[ItemType["Year"] = 17] = "Year";
    ItemType[ItemType["Comment"] = 35] = "Comment";
    ItemType[ItemType["HistoryPlaylist"] = 36] = "HistoryPlaylist";
    ItemType[ItemType["OrigianlArtist"] = 40] = "OrigianlArtist";
    ItemType[ItemType["Remixer"] = 41] = "Remixer";
    ItemType[ItemType["DateAdded"] = 46] = "DateAdded";
    ItemType[ItemType["Unknown01"] = 47] = "Unknown01";
    ItemType[ItemType["Unknown02"] = 42] = "Unknown02";
    ItemType[ItemType["ColorNone"] = 19] = "ColorNone";
    ItemType[ItemType["ColorPink"] = 20] = "ColorPink";
    ItemType[ItemType["ColorRed"] = 21] = "ColorRed";
    ItemType[ItemType["ColorOrange"] = 22] = "ColorOrange";
    ItemType[ItemType["ColorYellow"] = 23] = "ColorYellow";
    ItemType[ItemType["ColorGreen"] = 24] = "ColorGreen";
    ItemType[ItemType["ColorAqua"] = 25] = "ColorAqua";
    ItemType[ItemType["ColorBlue"] = 26] = "ColorBlue";
    ItemType[ItemType["ColorPurple"] = 27] = "ColorPurple";
    ItemType[ItemType["MenuGenre"] = 128] = "MenuGenre";
    ItemType[ItemType["MenuArtist"] = 129] = "MenuArtist";
    ItemType[ItemType["MenuAlbum"] = 130] = "MenuAlbum";
    ItemType[ItemType["MenuTrack"] = 131] = "MenuTrack";
    ItemType[ItemType["MenuPlaylist"] = 132] = "MenuPlaylist";
    ItemType[ItemType["MenuBPM"] = 133] = "MenuBPM";
    ItemType[ItemType["MenuRating"] = 134] = "MenuRating";
    ItemType[ItemType["MenuYear"] = 135] = "MenuYear";
    ItemType[ItemType["MenuRemixer"] = 136] = "MenuRemixer";
    ItemType[ItemType["MenuLabel"] = 137] = "MenuLabel";
    ItemType[ItemType["MenuOriginal"] = 138] = "MenuOriginal";
    ItemType[ItemType["MenuKey"] = 139] = "MenuKey";
    ItemType[ItemType["MenuColor"] = 142] = "MenuColor";
    ItemType[ItemType["MenuFolder"] = 144] = "MenuFolder";
    ItemType[ItemType["MenuSearch"] = 145] = "MenuSearch";
    ItemType[ItemType["MenuTime"] = 146] = "MenuTime";
    ItemType[ItemType["MenuBit"] = 147] = "MenuBit";
    ItemType[ItemType["MenuFilename"] = 148] = "MenuFilename";
    ItemType[ItemType["MenuHistory"] = 149] = "MenuHistory";
    ItemType[ItemType["MenuAll"] = 160] = "MenuAll";
    ItemType[ItemType["TrackTitleAlbum"] = 516] = "TrackTitleAlbum";
    ItemType[ItemType["TrackTitleGenre"] = 1540] = "TrackTitleGenre";
    ItemType[ItemType["TrackTitleArtist"] = 1796] = "TrackTitleArtist";
    ItemType[ItemType["TrackTitleRating"] = 2564] = "TrackTitleRating";
    ItemType[ItemType["TrackTitleTime"] = 2820] = "TrackTitleTime";
    ItemType[ItemType["TrackTitleBPM"] = 3332] = "TrackTitleBPM";
    ItemType[ItemType["TrackTitleLabel"] = 3588] = "TrackTitleLabel";
    ItemType[ItemType["TrackTitleKey"] = 3844] = "TrackTitleKey";
    ItemType[ItemType["TrackTitleBitRate"] = 4100] = "TrackTitleBitRate";
    ItemType[ItemType["TrackTitleColor"] = 6660] = "TrackTitleColor";
    ItemType[ItemType["TrackTitleComment"] = 8964] = "TrackTitleComment";
    ItemType[ItemType["TrackTitleOriginalArtist"] = 10244] = "TrackTitleOriginalArtist";
    ItemType[ItemType["TrackTitleRemixer"] = 10500] = "TrackTitleRemixer";
    ItemType[ItemType["TrackTitleDJPlayCount"] = 10756] = "TrackTitleDJPlayCount";
    ItemType[ItemType["MenuTrackTitleDateAdded"] = 11780] = "MenuTrackTitleDateAdded";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
/**
 * Convert a message item argument lists to a structured intermediate object
 * for more clear access.
 */
const makeItemData = (args) => ({
    parentId: args[0].value,
    mainId: args[1].value,
    label1: args[3].value,
    label2: args[5].value,
    type: args[6].value,
    artworkId: args[8].value,
});
/**
 * Generic transformer for items that include just an id and label
 */
const mapIdName = (a) => ({
    id: a.mainId,
    name: a.label1,
});
/**
 * Maps item types to structured objects
 */
const transformItem = {
    [ItemType.Path]: (a) => ({ path: a.label1 }),
    [ItemType.TrackTitle]: (a) => ({
        id: a.mainId,
        title: a.label1,
        artworkId: a.artworkId,
    }),
    [ItemType.AlbumTitle]: mapIdName,
    [ItemType.Artist]: mapIdName,
    [ItemType.Genre]: mapIdName,
    [ItemType.Label]: mapIdName,
    [ItemType.Key]: mapIdName,
    [ItemType.OrigianlArtist]: mapIdName,
    [ItemType.Remixer]: mapIdName,
    [ItemType.BitRate]: (a) => ({ bitrate: a.mainId }),
    [ItemType.Comment]: (a) => ({ comment: a.label1 }),
    [ItemType.Year]: (a) => ({ year: Number(a.label1) }),
    [ItemType.Rating]: (a) => ({ rating: a.mainId }),
    [ItemType.Tempo]: (a) => ({ bpm: a.mainId / 100 }),
    [ItemType.Duration]: (a) => ({ duration: a.mainId }),
    [ItemType.Unknown01]: (_) => null,
    [ItemType.Unknown02]: (_) => null,
    [ItemType.ColorNone]: mapIdName,
    [ItemType.ColorPink]: mapIdName,
    [ItemType.ColorRed]: mapIdName,
    [ItemType.ColorOrange]: mapIdName,
    [ItemType.ColorYellow]: mapIdName,
    [ItemType.ColorGreen]: mapIdName,
    [ItemType.ColorAqua]: mapIdName,
    [ItemType.ColorBlue]: mapIdName,
    [ItemType.ColorPurple]: mapIdName,
    [ItemType.Folder]: mapIdName,
    [ItemType.Playlist]: mapIdName,
    // TODO: All of these item types are missing
    [ItemType.Disc]: (a) => a,
    [ItemType.HistoryPlaylist]: (a) => a,
    [ItemType.DateAdded]: (a) => a,
    [ItemType.MenuGenre]: (a) => a,
    [ItemType.MenuArtist]: (a) => a,
    [ItemType.MenuAlbum]: (a) => a,
    [ItemType.MenuTrack]: (a) => a,
    [ItemType.MenuPlaylist]: (a) => a,
    [ItemType.MenuBPM]: (a) => a,
    [ItemType.MenuRating]: (a) => a,
    [ItemType.MenuYear]: (a) => a,
    [ItemType.MenuRemixer]: (a) => a,
    [ItemType.MenuLabel]: (a) => a,
    [ItemType.MenuOriginal]: (a) => a,
    [ItemType.MenuKey]: (a) => a,
    [ItemType.MenuColor]: (a) => a,
    [ItemType.MenuFolder]: (a) => a,
    [ItemType.MenuSearch]: (a) => a,
    [ItemType.MenuTime]: (a) => a,
    [ItemType.MenuBit]: (a) => a,
    [ItemType.MenuFilename]: (a) => a,
    [ItemType.MenuHistory]: (a) => a,
    [ItemType.MenuAll]: (a) => a,
    [ItemType.TrackTitleAlbum]: (a) => a,
    [ItemType.TrackTitleGenre]: (a) => a,
    [ItemType.TrackTitleArtist]: (a) => a,
    [ItemType.TrackTitleRating]: (a) => a,
    [ItemType.TrackTitleTime]: (a) => a,
    [ItemType.TrackTitleBPM]: (a) => a,
    [ItemType.TrackTitleLabel]: (a) => a,
    [ItemType.TrackTitleKey]: (a) => a,
    [ItemType.TrackTitleBitRate]: (a) => a,
    [ItemType.TrackTitleColor]: (a) => a,
    [ItemType.TrackTitleComment]: (a) => a,
    [ItemType.TrackTitleOriginalArtist]: (a) => a,
    [ItemType.TrackTitleRemixer]: (a) => a,
    [ItemType.TrackTitleDJPlayCount]: (a) => a,
    [ItemType.MenuTrackTitleDateAdded]: (a) => a,
};
/**
 * Translate a list of fields for an item response into a structure object,
 * making items more clear to work with.
 */
const fieldsToItem = (args) => {
    const itemData = makeItemData(args);
    const { type } = itemData;
    let transformer = transformItem[type];
    // Typescript gives us safety, but it is possible there is an itemType we're
    // not aware of yet.
    if (transformer === undefined) {
        transformer = () => null;
        Sentry.captureMessage(`No item transformer registered for item type ${type}`, Sentry.Severity.Error);
    }
    return { ...transformer(itemData), type };
};
exports.fieldsToItem = fieldsToItem;


/***/ }),

/***/ "./src/remotedb/message/response.ts":
/*!******************************************!*\
  !*** ./src/remotedb/message/response.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.responseTransform = void 0;
const utils_1 = __webpack_require__(/*! src/localdb/utils */ "./src/localdb/utils.ts");
const item_1 = __webpack_require__(/*! src/remotedb/message/item */ "./src/remotedb/message/item.ts");
const types_1 = __webpack_require__(/*! src/remotedb/message/types */ "./src/remotedb/message/types.ts");
const converters_1 = __webpack_require__(/*! src/utils/converters */ "./src/utils/converters.ts");
/**
 * Generic null converter, for responses with no data.
 */
const nullConverter = (_args) => null;
/**
 * Converts setup success messages, which primarily includes the number of
 * items available upon the next request.
 */
const convertSuccess = (args) => ({
    itemsAvailable: args[1].value,
});
/**
 * Converts artwork to a buffer. Will be mempty for empty artwork
 */
const convertArtwork = (args) => args[3].value;
/**
 * Converts the beat grid binary response to a BeatGrid array.
 */
const convertBeatGrid = (args) => {
    const BEATGRID_START = 0x14;
    const data = args[3].value.slice(BEATGRID_START);
    return (0, converters_1.makeOffsetArray)(data.length, 0x10).map(byteOffset => ({
        offset: data.readUInt32LE(byteOffset + 4),
        bpm: data.readUInt16LE(byteOffset + 2) / 100,
        count: data[byteOffset],
    }));
};
/**
 * Converts preview waveform data
 */
const convertWaveformPreview = (args) => {
    const data = args[3].value;
    // TODO: The last 100 bytes in the data array is a tiny waveform preview
    const PREVIEW_DATA_LEN = 800;
    return (0, converters_1.makeOffsetArray)(PREVIEW_DATA_LEN, 0x02).map(byteOffset => ({
        height: data[byteOffset],
        whiteness: data[byteOffset + 1] / 7,
    }));
};
/**
 * Converts detailed waveform data.
 */
const convertWaveformDetailed = (args) => {
    const data = args[3].value;
    // Every byte reperesents one segment of the waveform, and there are 150
    // segments per second of audio. (These seem to correspond to 'half frames'
    // following the seconds in the player display.) Each byte encodes both a
    // color and height.
    //
    // |  7  6  5  |  4  3  2  1  0 |
    // [ whiteness |     height     ]
    const whitenessMask = 0b11100000; // prettier-ignore
    const heightMask = 0b00011111; // prettier-ignore
    return Array.from(data).map(b => ({
        height: (0, converters_1.extractBitMask)(b, heightMask),
        whiteness: (0, converters_1.extractColor)(b, whitenessMask),
    }));
};
/**
 * Converts HD waveform data.
 */
const convertWaveformHD = (args) => {
    // TODO: Verify this 0x34 offset is correct
    const WAVEFORM_START = 0x34;
    const data = args[3].value.slice(WAVEFORM_START);
    // TODO: This response is also used for the HD waveform previews, however
    // those have a much more complex data structure.
    return (0, converters_1.convertWaveformHDData)(data);
};
/**
 * Converts old-style cue / loop / hotcue / hotloop data.
 */
const convertCueAndLoops = (args) => {
    const data = args[3].value;
    return (0, converters_1.makeOffsetArray)(data.length, 0x24)
        .map(byteOffset => {
        const entry = data.slice(byteOffset, byteOffset + 0x24);
        const isLoop = !!entry[0];
        const isCue = !!entry[1];
        const button = entry[2] === 0 ? false : entry[2];
        const offsetInFrames = entry.readUInt32LE(0x0c);
        const lengthInFrames = entry.readUInt32LE(0x10) - offsetInFrames;
        // NOTE: The offset and length are reported as 1/150th second increments.
        //       We convert these to milliseconds here.
        const offset = (offsetInFrames / 150) * 1000;
        const length = (lengthInFrames / 150) * 1000;
        return (0, utils_1.makeCueLoopEntry)(isCue, isLoop, offset, length, button);
    })
        .filter((c) => c !== null);
};
/**
 * Converts new-style cue / loop / hotcue / hotloop data, including labels and
 * colors.
 */
const convertAdvCueAndLoops = (args) => {
    const data = args[3].value;
    const entries = [];
    for (let offset = 0; offset < data.length;) {
        const length = data.readUInt32LE(offset);
        entries.push(data.slice(offset, offset + length));
        offset += length;
    }
    return entries
        .map(entry => {
        // Deleted cue point
        if (entry[6] === 0x00) {
            return null;
        }
        // The layout here is minorly different from the basic cue and loops,
        // so we unfortunately cannot reuse that logic.
        const button = entry[4] === 0 ? false : entry[4];
        const isCue = entry[6] === 0x01;
        const isLoop = entry[6] === 0x02;
        const offsetInFrames = entry.readUInt32LE(0x0c);
        const lengthInFrames = entry.readUInt32LE(0x10) - offsetInFrames;
        // NOTE: The offset and length are reported as 1/150th second increments.
        //       We convert these to milliseconds here.
        const offset = (offsetInFrames / 150) * 1000;
        const length = (lengthInFrames / 150) * 1000;
        const basicEntry = (0, utils_1.makeCueLoopEntry)(isCue, isLoop, offset, length, button);
        // It seems the label may not always be included, if the entry is only 0x38
        // bytes long, exclude color and comment
        if (entry.length === 0x38) {
            return basicEntry;
        }
        const labelByteLength = entry.readUInt16LE(0x48);
        const label = entry
            .slice(0x4a, 0x4a + labelByteLength)
            .slice(0, -2)
            .toString('utf16le');
        const color = entry[0x4a + labelByteLength + 0x04];
        return { ...basicEntry, color, label };
    })
        .filter((c) => c !== null);
};
exports.responseTransform = {
    [types_1.Response.Success]: convertSuccess,
    [types_1.Response.Error]: nullConverter,
    [types_1.Response.MenuHeader]: nullConverter,
    [types_1.Response.MenuFooter]: nullConverter,
    [types_1.Response.MenuItem]: item_1.fieldsToItem,
    [types_1.Response.Artwork]: convertArtwork,
    [types_1.Response.BeatGrid]: convertBeatGrid,
    [types_1.Response.CueAndLoop]: convertCueAndLoops,
    [types_1.Response.WaveformPreview]: convertWaveformPreview,
    [types_1.Response.WaveformDetailed]: convertWaveformDetailed,
    [types_1.Response.WaveformHD]: convertWaveformHD,
    [types_1.Response.AdvCueAndLoops]: convertAdvCueAndLoops,
};


/***/ }),

/***/ "./src/remotedb/message/types.ts":
/*!***************************************!*\
  !*** ./src/remotedb/message/types.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMessageName = exports.MessageType = exports.Request = exports.Response = exports.DataRequest = exports.MenuRequest = exports.ControlRequest = void 0;
/**
 * Used for control messages with the remote database
 */
var ControlRequest;
(function (ControlRequest) {
    ControlRequest[ControlRequest["Introduce"] = 0] = "Introduce";
    ControlRequest[ControlRequest["Disconnect"] = 256] = "Disconnect";
    ControlRequest[ControlRequest["RenderMenu"] = 12288] = "RenderMenu";
})(ControlRequest = exports.ControlRequest || (exports.ControlRequest = {}));
/**
 * Used to setup renders for specific Menus
 */
var MenuRequest;
(function (MenuRequest) {
    MenuRequest[MenuRequest["MenuRoot"] = 4096] = "MenuRoot";
    MenuRequest[MenuRequest["MenuGenre"] = 4097] = "MenuGenre";
    MenuRequest[MenuRequest["MenuArtist"] = 4098] = "MenuArtist";
    MenuRequest[MenuRequest["MenuAlbum"] = 4099] = "MenuAlbum";
    MenuRequest[MenuRequest["MenuTrack"] = 4100] = "MenuTrack";
    MenuRequest[MenuRequest["MenuBPM"] = 4102] = "MenuBPM";
    MenuRequest[MenuRequest["MenuRating"] = 4103] = "MenuRating";
    MenuRequest[MenuRequest["MenuYear"] = 4104] = "MenuYear";
    MenuRequest[MenuRequest["MenuLabel"] = 4106] = "MenuLabel";
    MenuRequest[MenuRequest["MenuColor"] = 4109] = "MenuColor";
    MenuRequest[MenuRequest["MenuTime"] = 4112] = "MenuTime";
    MenuRequest[MenuRequest["MenuBitrate"] = 4113] = "MenuBitrate";
    MenuRequest[MenuRequest["MenuHistory"] = 4114] = "MenuHistory";
    MenuRequest[MenuRequest["MenuFilename"] = 4115] = "MenuFilename";
    MenuRequest[MenuRequest["MenuKey"] = 4116] = "MenuKey";
    MenuRequest[MenuRequest["MenuOriginalArtist"] = 4866] = "MenuOriginalArtist";
    MenuRequest[MenuRequest["MenuRemixer"] = 5634] = "MenuRemixer";
    MenuRequest[MenuRequest["MenuPlaylist"] = 4357] = "MenuPlaylist";
    MenuRequest[MenuRequest["MenuArtistsOfGenre"] = 4353] = "MenuArtistsOfGenre";
    MenuRequest[MenuRequest["MenuAlbumsOfArtist"] = 4354] = "MenuAlbumsOfArtist";
    MenuRequest[MenuRequest["MenuTracksOfAlbum"] = 4355] = "MenuTracksOfAlbum";
    MenuRequest[MenuRequest["MenuTracksOfRating"] = 4359] = "MenuTracksOfRating";
    MenuRequest[MenuRequest["MenuYearsOfDecade"] = 4360] = "MenuYearsOfDecade";
    MenuRequest[MenuRequest["MenuArtistsOfLabel"] = 4362] = "MenuArtistsOfLabel";
    MenuRequest[MenuRequest["MenuTracksOfColor"] = 4365] = "MenuTracksOfColor";
    MenuRequest[MenuRequest["MenuTracksOfTime"] = 4368] = "MenuTracksOfTime";
    MenuRequest[MenuRequest["MenuTracksOfHistory"] = 4370] = "MenuTracksOfHistory";
    MenuRequest[MenuRequest["MenuDistancesOfKey"] = 4372] = "MenuDistancesOfKey";
    MenuRequest[MenuRequest["MenuAlbumsOfOriginalArtist"] = 5122] = "MenuAlbumsOfOriginalArtist";
    MenuRequest[MenuRequest["MenuAlbumsOfRemixer"] = 5890] = "MenuAlbumsOfRemixer";
    MenuRequest[MenuRequest["MenuAlbumsOfGenreAndArtist"] = 4609] = "MenuAlbumsOfGenreAndArtist";
    MenuRequest[MenuRequest["MenuTracksOfArtistAndAlbum"] = 4610] = "MenuTracksOfArtistAndAlbum";
    MenuRequest[MenuRequest["MenuTracksOfBPMPercentRange"] = 4614] = "MenuTracksOfBPMPercentRange";
    MenuRequest[MenuRequest["MenuTracksOfDecadeAndYear"] = 4616] = "MenuTracksOfDecadeAndYear";
    MenuRequest[MenuRequest["MenuAlbumsOfLabelAndArtist"] = 4618] = "MenuAlbumsOfLabelAndArtist";
    MenuRequest[MenuRequest["MenuTracksNearKey"] = 4628] = "MenuTracksNearKey";
    MenuRequest[MenuRequest["MenuTracksOfOriginalArtistAndAlbum"] = 5378] = "MenuTracksOfOriginalArtistAndAlbum";
    MenuRequest[MenuRequest["MenuTracksOfRemixerAndAlbum"] = 6146] = "MenuTracksOfRemixerAndAlbum";
    MenuRequest[MenuRequest["MenuTracksOfGenreArtistAndAlbum"] = 4865] = "MenuTracksOfGenreArtistAndAlbum";
    MenuRequest[MenuRequest["MenuTracksOfLabelArtistAndAlbum"] = 4874] = "MenuTracksOfLabelArtistAndAlbum";
    MenuRequest[MenuRequest["MenuSearch"] = 4864] = "MenuSearch";
    MenuRequest[MenuRequest["MenuFolder"] = 8198] = "MenuFolder";
})(MenuRequest = exports.MenuRequest || (exports.MenuRequest = {}));
/**
 * Request message types used to obtain specfiic track information
 */
var DataRequest;
(function (DataRequest) {
    DataRequest[DataRequest["GetMetadata"] = 8194] = "GetMetadata";
    DataRequest[DataRequest["GetArtwork"] = 8195] = "GetArtwork";
    DataRequest[DataRequest["GetWaveformPreview"] = 8196] = "GetWaveformPreview";
    DataRequest[DataRequest["GetTrackInfo"] = 8450] = "GetTrackInfo";
    DataRequest[DataRequest["GetGenericMetadata"] = 8706] = "GetGenericMetadata";
    DataRequest[DataRequest["GetCueAndLoops"] = 8452] = "GetCueAndLoops";
    DataRequest[DataRequest["GetBeatGrid"] = 8708] = "GetBeatGrid";
    DataRequest[DataRequest["GetWaveformDetailed"] = 10500] = "GetWaveformDetailed";
    DataRequest[DataRequest["GetAdvCueAndLoops"] = 11012] = "GetAdvCueAndLoops";
    DataRequest[DataRequest["GetWaveformHD"] = 11268] = "GetWaveformHD";
})(DataRequest = exports.DataRequest || (exports.DataRequest = {}));
/**
 * Response message types for messages sent back by the server.
 */
var Response;
(function (Response) {
    Response[Response["Success"] = 16384] = "Success";
    Response[Response["Error"] = 16387] = "Error";
    Response[Response["Artwork"] = 16386] = "Artwork";
    Response[Response["MenuItem"] = 16641] = "MenuItem";
    Response[Response["MenuHeader"] = 16385] = "MenuHeader";
    Response[Response["MenuFooter"] = 16897] = "MenuFooter";
    Response[Response["BeatGrid"] = 17922] = "BeatGrid";
    Response[Response["CueAndLoop"] = 18178] = "CueAndLoop";
    Response[Response["WaveformPreview"] = 17410] = "WaveformPreview";
    Response[Response["WaveformDetailed"] = 18946] = "WaveformDetailed";
    Response[Response["AdvCueAndLoops"] = 19970] = "AdvCueAndLoops";
    Response[Response["WaveformHD"] = 20226] = "WaveformHD";
})(Response = exports.Response || (exports.Response = {}));
exports.Request = {
    ...ControlRequest,
    ...MenuRequest,
    ...DataRequest,
};
exports.MessageType = {
    ...ControlRequest,
    ...MenuRequest,
    ...DataRequest,
    ...Response,
};
const MessageTypeInverse = Object.fromEntries(Object.entries(exports.MessageType).map(e => [e[1], e[0]]));
/**
 * Returns a string representation of a message type
 */
function getMessageName(type) {
    return MessageTypeInverse[type];
}
exports.getMessageName = getMessageName;


/***/ }),

/***/ "./src/remotedb/queries.ts":
/*!*********************************!*\
  !*** ./src/remotedb/queries.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queryHandlers = void 0;
const item_1 = __webpack_require__(/*! ./message/item */ "./src/remotedb/message/item.ts");
const types_1 = __webpack_require__(/*! ./message/types */ "./src/remotedb/message/types.ts");
const fields_1 = __webpack_require__(/*! ./fields */ "./src/remotedb/fields.ts");
const message_1 = __webpack_require__(/*! ./message */ "./src/remotedb/message/index.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/remotedb/utils.ts");
/**
 * Lookup track metadata from rekordbox and coerce it into a Track entity
 */
async function getMetadata(opts) {
    var _a, _b, _c, _d, _e;
    const { conn, lookupDescriptor, span, args } = opts;
    const { trackId } = args;
    const request = new message_1.Message({
        type: types_1.Request.GetMetadata,
        args: [(0, utils_1.fieldFromDescriptor)(lookupDescriptor), new fields_1.UInt32(trackId)],
    });
    await conn.writeMessage(request, span);
    const resp = await conn.readMessage(types_1.Response.Success, span);
    const items = (0, utils_1.renderItems)(conn, lookupDescriptor, resp.data.itemsAvailable, span);
    // NOTE: We do a bit of any-ing here to help typescript understand we're
    // discriminating the type by our object key
    const trackItems = {};
    for await (const item of items) {
        trackItems[item.type] = item;
    }
    // Translate our trackItems into a (partial) Track entity.
    const track = {
        id: trackItems[item_1.ItemType.TrackTitle].id,
        title: trackItems[item_1.ItemType.TrackTitle].title,
        duration: trackItems[item_1.ItemType.Duration].duration,
        tempo: trackItems[item_1.ItemType.Tempo].bpm,
        comment: trackItems[item_1.ItemType.Comment].comment,
        rating: trackItems[item_1.ItemType.Rating].rating,
        year: (_a = trackItems === null || trackItems === void 0 ? void 0 : trackItems[item_1.ItemType.Year]) === null || _a === void 0 ? void 0 : _a.year,
        bitrate: (_b = trackItems === null || trackItems === void 0 ? void 0 : trackItems[item_1.ItemType.BitRate]) === null || _b === void 0 ? void 0 : _b.bitrate,
        artwork: { id: trackItems[item_1.ItemType.TrackTitle].artworkId },
        album: trackItems[item_1.ItemType.AlbumTitle],
        artist: trackItems[item_1.ItemType.Artist],
        genre: trackItems[item_1.ItemType.Genre],
        key: trackItems[item_1.ItemType.Key],
        color: (0, utils_1.findColor)(Object.values(trackItems)),
        label: (_c = trackItems[item_1.ItemType.Label]) !== null && _c !== void 0 ? _c : null,
        remixer: (_d = trackItems === null || trackItems === void 0 ? void 0 : trackItems[item_1.ItemType.Remixer]) !== null && _d !== void 0 ? _d : null,
        originalArtist: (_e = trackItems === null || trackItems === void 0 ? void 0 : trackItems[item_1.ItemType.OrigianlArtist]) !== null && _e !== void 0 ? _e : null,
        composer: null,
        fileName: '',
        filePath: '',
        beatGrid: null,
        cueAndLoops: null,
        waveformHd: null,
    };
    return track;
}
/**
 * Lookup generic metadata for an unanalyzed track
 */
async function getGenericMetadata(opts) {
    const { conn, lookupDescriptor, span, args } = opts;
    const { trackId } = args;
    const request = new message_1.Message({
        type: types_1.Request.GetGenericMetadata,
        args: [(0, utils_1.fieldFromDescriptor)(lookupDescriptor), new fields_1.UInt32(trackId)],
    });
    await conn.writeMessage(request, span);
    const resp = await conn.readMessage(types_1.Response.Success, span);
    const items = (0, utils_1.renderItems)(conn, lookupDescriptor, resp.data.itemsAvailable, span);
    // NOTE: We do a bit of any-ing here to help typescript understand we're
    // discriminating the type by our object key
    const fileItems = {};
    for await (const item of items) {
        fileItems[item.type] = item;
    }
    // Translate our fileItems into a (partial) Track entity.
    const track = {
        id: fileItems[item_1.ItemType.TrackTitle].id,
        title: fileItems[item_1.ItemType.TrackTitle].title,
        duration: fileItems[item_1.ItemType.Duration].duration,
        tempo: fileItems[item_1.ItemType.Tempo].bpm,
        comment: fileItems[item_1.ItemType.Comment].comment,
        rating: fileItems[item_1.ItemType.Rating].rating,
        bitrate: fileItems[item_1.ItemType.BitRate].bitrate,
        artwork: { id: fileItems[item_1.ItemType.TrackTitle].artworkId },
        album: fileItems === null || fileItems === void 0 ? void 0 : fileItems[item_1.ItemType.AlbumTitle],
        artist: fileItems[item_1.ItemType.Artist],
        genre: fileItems[item_1.ItemType.Genre],
        color: (0, utils_1.findColor)(Object.values(fileItems)),
        fileName: '',
        filePath: '',
        key: null,
        label: null,
        remixer: null,
        originalArtist: null,
        composer: null,
        beatGrid: null,
        cueAndLoops: null,
        waveformHd: null,
    };
    return track;
}
/**
 * Lookup the artwork image given the artworkId obtained from a track
 */
async function getArtwork(opts) {
    const { conn, lookupDescriptor, span, args } = opts;
    const { artworkId } = args;
    const request = new message_1.Message({
        type: types_1.Request.GetArtwork,
        args: [(0, utils_1.fieldFromDescriptor)(lookupDescriptor), new fields_1.UInt32(artworkId)],
    });
    await conn.writeMessage(request, span);
    const art = await conn.readMessage(types_1.Response.Artwork, span);
    return art.data;
}
/**
 * Lookup the beatgrid for the specified trackId
 */
async function getBeatgrid(opts) {
    const { conn, lookupDescriptor, span, args } = opts;
    const { trackId } = args;
    const request = new message_1.Message({
        type: types_1.Request.GetBeatGrid,
        args: [(0, utils_1.fieldFromDescriptor)(lookupDescriptor), new fields_1.UInt32(trackId)],
    });
    await conn.writeMessage(request, span);
    const grid = await conn.readMessage(types_1.Response.BeatGrid, span);
    return grid.data;
}
/**
 * Lookup the waveform preview for the specified trackId
 */
async function getWaveformPreview(opts) {
    const { conn, lookupDescriptor, span, args } = opts;
    const { trackId } = args;
    const request = new message_1.Message({
        type: types_1.Request.GetWaveformPreview,
        args: [
            (0, utils_1.fieldFromDescriptor)(lookupDescriptor),
            new fields_1.UInt32(0),
            new fields_1.UInt32(trackId),
            new fields_1.UInt32(0),
            new fields_1.Binary(Buffer.alloc(0)),
        ],
    });
    await conn.writeMessage(request, span);
    const waveformPreview = await conn.readMessage(types_1.Response.WaveformPreview, span);
    return waveformPreview.data;
}
/**
 * Lookup the detailed waveform for the specified trackId
 */
async function getWaveformDetailed(opts) {
    const { conn, lookupDescriptor, span, args } = opts;
    const { trackId } = args;
    const request = new message_1.Message({
        type: types_1.Request.GetWaveformDetailed,
        args: [(0, utils_1.fieldFromDescriptor)(lookupDescriptor), new fields_1.UInt32(trackId), new fields_1.UInt32(0)],
    });
    await conn.writeMessage(request, span);
    const waveformDetailed = await conn.readMessage(types_1.Response.WaveformDetailed, span);
    return waveformDetailed.data;
}
/**
 * Lookup the HD (nexus2) waveform for the specified trackId
 */
async function getWaveformHD(opts) {
    const { conn, lookupDescriptor, span, args } = opts;
    const { trackId } = args;
    const request = new message_1.Message({
        type: types_1.Request.GetWaveformHD,
        args: [
            (0, utils_1.fieldFromDescriptor)(lookupDescriptor),
            new fields_1.UInt32(trackId),
            new fields_1.UInt32(Buffer.from('PWV5').readUInt32LE()),
            new fields_1.UInt32(Buffer.from('EXT\0').readUInt32LE()),
        ],
    });
    await conn.writeMessage(request, span);
    const waveformHD = await conn.readMessage(types_1.Response.WaveformHD, span);
    return waveformHD.data;
}
/**
 * Lookup the [hot]cue points and [hot]loops for a track
 */
async function getCueAndLoops(opts) {
    const { conn, lookupDescriptor, span, args } = opts;
    const { trackId } = args;
    const request = new message_1.Message({
        type: types_1.Request.GetCueAndLoops,
        args: [(0, utils_1.fieldFromDescriptor)(lookupDescriptor), new fields_1.UInt32(trackId)],
    });
    await conn.writeMessage(request, span);
    const cueAndLoops = await conn.readMessage(types_1.Response.CueAndLoop, span);
    return cueAndLoops.data;
}
/**
 * Lookup the "advanced" (nexus2) [hot]cue points and [hot]loops for a track
 */
async function getCueAndLoopsAdv(opts) {
    const { conn, lookupDescriptor, span, args } = opts;
    const { trackId } = args;
    const request = new message_1.Message({
        type: types_1.Request.GetAdvCueAndLoops,
        args: [(0, utils_1.fieldFromDescriptor)(lookupDescriptor), new fields_1.UInt32(trackId), new fields_1.UInt32(0)],
    });
    await conn.writeMessage(request, span);
    const advCueAndLoops = await conn.readMessage(types_1.Response.AdvCueAndLoops, span);
    return advCueAndLoops.data;
}
/**
 * Lookup the track information, currently just returns the track path
 */
async function getTrackInfo(opts) {
    const { conn, lookupDescriptor, span, args } = opts;
    const { trackId } = args;
    const request = new message_1.Message({
        type: types_1.Request.GetTrackInfo,
        args: [(0, utils_1.fieldFromDescriptor)(lookupDescriptor), new fields_1.UInt32(trackId)],
    });
    await conn.writeMessage(request, span);
    const resp = await conn.readMessage(types_1.Response.Success, span);
    const items = (0, utils_1.renderItems)(conn, lookupDescriptor, resp.data.itemsAvailable, span);
    const infoItems = {};
    for await (const item of items) {
        infoItems[item.type] = item;
    }
    return infoItems[item_1.ItemType.Path].path;
}
/**
 * Lookup playlist entries
 */
async function getPlaylist(opts) {
    const { conn, lookupDescriptor, span, args } = opts;
    // XXX: The or operator is correct here to coerece `0` into null to keep a
    // consistent representation of parentId.
    const parentId = args.id || null;
    // TODO: Maybe sort could become a parameter
    const sort = new fields_1.UInt32(0);
    const id = new fields_1.UInt32(parentId !== null && parentId !== void 0 ? parentId : 0);
    const isFolder = new fields_1.UInt32(args.isFolderRequest ? 0x1 : 0x0);
    const request = new message_1.Message({
        type: types_1.Request.MenuPlaylist,
        args: [(0, utils_1.fieldFromDescriptor)(lookupDescriptor), sort, id, isFolder],
    });
    await conn.writeMessage(request, span);
    const resp = await conn.readMessage(types_1.Response.Success, span);
    const items = (0, utils_1.renderItems)(conn, lookupDescriptor, resp.data.itemsAvailable, span);
    const playlistItems = [];
    for await (const item of items) {
        playlistItems.push(item);
    }
    const folders = playlistItems
        .filter(item => item.type === item_1.ItemType.Folder)
        .map(({ id, name }) => ({ isFolder: true, id, name, parentId }));
    const playlists = playlistItems
        .filter(item => item.type === item_1.ItemType.Playlist)
        .map(({ id, name }) => ({ isFolder: false, id, name, parentId }));
    const trackEntries = playlistItems.filter(item => item.type === item_1.ItemType.TrackTitle);
    return { folders, playlists, trackEntries };
}
exports.queryHandlers = {
    [types_1.Request.GetMetadata]: getMetadata,
    [types_1.Request.GetArtwork]: getArtwork,
    [types_1.Request.GetWaveformPreview]: getWaveformPreview,
    [types_1.Request.GetTrackInfo]: getTrackInfo,
    [types_1.Request.GetGenericMetadata]: getGenericMetadata,
    [types_1.Request.GetCueAndLoops]: getCueAndLoops,
    [types_1.Request.GetBeatGrid]: getBeatgrid,
    [types_1.Request.GetWaveformDetailed]: getWaveformDetailed,
    [types_1.Request.GetAdvCueAndLoops]: getCueAndLoopsAdv,
    [types_1.Request.GetWaveformHD]: getWaveformHD,
    [types_1.Request.MenuPlaylist]: getPlaylist,
    // TODO: Add queries for all different kinds of menu requests
};


/***/ }),

/***/ "./src/remotedb/utils.ts":
/*!*******************************!*\
  !*** ./src/remotedb/utils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findColor = exports.renderItems = exports.makeRenderMessage = exports.fieldFromDescriptor = void 0;
const item_1 = __webpack_require__(/*! ./message/item */ "./src/remotedb/message/item.ts");
const types_1 = __webpack_require__(/*! ./message/types */ "./src/remotedb/message/types.ts");
const fields_1 = __webpack_require__(/*! ./fields */ "./src/remotedb/fields.ts");
const message_1 = __webpack_require__(/*! ./message */ "./src/remotedb/message/index.ts");
/**
 * Specifies the number of items we should request at a time in menu render
 * requests.
 */
const LIMIT = 64;
const fieldFromDescriptor = ({ hostDevice, menuTarget, trackSlot, trackType, }) => new fields_1.UInt32(Buffer.of(hostDevice.id, menuTarget, trackSlot, trackType));
exports.fieldFromDescriptor = fieldFromDescriptor;
const makeRenderMessage = (descriptor, offset, count, total) => new message_1.Message({
    type: types_1.MessageType.RenderMenu,
    args: [
        (0, exports.fieldFromDescriptor)(descriptor),
        new fields_1.UInt32(offset),
        new fields_1.UInt32(count),
        new fields_1.UInt32(0),
        new fields_1.UInt32(total),
        new fields_1.UInt32(0x0c),
    ],
});
exports.makeRenderMessage = makeRenderMessage;
/**
 * Async generator to page through menu results after a successful lookup
 * request.
 */
async function* renderItems(conn, descriptor, total, span) {
    let itemsRead = 0;
    while (itemsRead < total) {
        // Request another page of items
        if (itemsRead % LIMIT === 0) {
            // XXX: itemsRead + count should NOT exceed the total. A larger value
            // will push the offset back to accomadate for the extra items, ensuring
            // we always recieve count items.
            const count = Math.min(LIMIT, total - itemsRead);
            const message = (0, exports.makeRenderMessage)(descriptor, itemsRead, count, total);
            await conn.writeMessage(message, span);
            await conn.readMessage(types_1.MessageType.MenuHeader, span);
        }
        // Read each item. Ignoring headers and footers, we will determine when to
        // stop by counting the items read until we reach the total items.
        const resp = await conn.readMessage(types_1.MessageType.MenuItem, span);
        yield resp.data;
        itemsRead++;
        // When we've reached the end of a page we must read the footer
        if (itemsRead % LIMIT === 0 || itemsRead === total) {
            await conn.readMessage(types_1.MessageType.MenuFooter, span);
        }
    }
}
exports.renderItems = renderItems;
const colors = [
    item_1.ItemType.ColorNone,
    item_1.ItemType.ColorPink,
    item_1.ItemType.ColorRed,
    item_1.ItemType.ColorOrange,
    item_1.ItemType.ColorYellow,
    item_1.ItemType.ColorGreen,
    item_1.ItemType.ColorAqua,
    item_1.ItemType.ColorBlue,
    item_1.ItemType.ColorPurple,
];
const colorSet = new Set(colors);
/**
 * Locate the color item in an item list
 */
const findColor = (items) => items.filter(item => colorSet.has(item.type)).pop();
exports.findColor = findColor;


/***/ }),

/***/ "./src/status/index.ts":
/*!*****************************!*\
  !*** ./src/status/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StatusEmitter_statusSocket, _StatusEmitter_emitter, _StatusEmitter_mediaSlotQueryLock, _StatusEmitter_handleStatus;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const async_mutex_1 = __webpack_require__(/*! async-mutex */ "async-mutex");
const events_1 = __webpack_require__(/*! events */ "events");
const constants_1 = __webpack_require__(/*! src/constants */ "./src/constants.ts");
const udp_1 = __webpack_require__(/*! src/utils/udp */ "./src/utils/udp.ts");
const media_1 = __webpack_require__(/*! ./media */ "./src/status/media.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/status/utils.ts");
/**
 * The status emitter will report every time a device status is recieved
 */
class StatusEmitter {
    /**
     * @param statusSocket A UDP socket to recieve CDJ status packets on
     */
    constructor(statusSocket) {
        _StatusEmitter_statusSocket.set(this, void 0);
        /**
         * The EventEmitter which reports the device status
         */
        _StatusEmitter_emitter.set(this, new events_1.EventEmitter());
        /**
         * Lock used to avoid media slot query races
         */
        _StatusEmitter_mediaSlotQueryLock.set(this, new async_mutex_1.Mutex());
        // Bind public event emitter interface
        this.on = __classPrivateFieldGet(this, _StatusEmitter_emitter, "f").addListener.bind(__classPrivateFieldGet(this, _StatusEmitter_emitter, "f"));
        this.off = __classPrivateFieldGet(this, _StatusEmitter_emitter, "f").removeListener.bind(__classPrivateFieldGet(this, _StatusEmitter_emitter, "f"));
        this.once = __classPrivateFieldGet(this, _StatusEmitter_emitter, "f").once.bind(__classPrivateFieldGet(this, _StatusEmitter_emitter, "f"));
        _StatusEmitter_handleStatus.set(this, (message) => {
            const status = (0, utils_1.statusFromPacket)(message);
            if (status !== undefined) {
                return __classPrivateFieldGet(this, _StatusEmitter_emitter, "f").emit('status', status);
            }
            // Media slot status is also reported on this socket
            const mediaSlot = (0, utils_1.mediaSlotFromPacket)(message);
            if (mediaSlot !== undefined) {
                return __classPrivateFieldGet(this, _StatusEmitter_emitter, "f").emit('mediaSlot', mediaSlot);
            }
            return undefined;
        });
        __classPrivateFieldSet(this, _StatusEmitter_statusSocket, statusSocket, "f");
        statusSocket.on('message', __classPrivateFieldGet(this, _StatusEmitter_handleStatus, "f"));
    }
    /**
     * Retrieve media slot status information.
     */
    async queryMediaSlot(options) {
        const request = (0, media_1.makeMediaSlotRequest)(options);
        const media = await __classPrivateFieldGet(this, _StatusEmitter_mediaSlotQueryLock, "f").runExclusive(async () => {
            await (0, udp_1.udpSend)(__classPrivateFieldGet(this, _StatusEmitter_statusSocket, "f"), request, constants_1.STATUS_PORT, options.device.ip.address);
            return new Promise(resolve => this.once('mediaSlot', resolve));
        });
        return media;
    }
}
_StatusEmitter_statusSocket = new WeakMap(), _StatusEmitter_emitter = new WeakMap(), _StatusEmitter_mediaSlotQueryLock = new WeakMap(), _StatusEmitter_handleStatus = new WeakMap();
exports["default"] = StatusEmitter;


/***/ }),

/***/ "./src/status/media.ts":
/*!*****************************!*\
  !*** ./src/status/media.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeMediaSlotRequest = void 0;
const constants_1 = __webpack_require__(/*! src/constants */ "./src/constants.ts");
const utils_1 = __webpack_require__(/*! src/utils */ "./src/utils/index.ts");
/**
 * Get information about the media connected to the specifed slot on the
 * device.
 */
const makeMediaSlotRequest = ({ hostDevice, device, slot }) => Uint8Array.from([
    ...constants_1.PROLINK_HEADER,
    ...[0x05],
    ...(0, utils_1.buildName)(hostDevice),
    ...[0x01, 0x00],
    ...[hostDevice.id],
    ...[0x00, 0x0c],
    ...hostDevice.ip.toArray(),
    ...[0x00, 0x00, 0x00, device.id],
    ...[0x00, 0x00, 0x00, slot],
]);
exports.makeMediaSlotRequest = makeMediaSlotRequest;


/***/ }),

/***/ "./src/status/types.ts":
/*!*****************************!*\
  !*** ./src/status/types.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayState = exports.StatusFlag = void 0;
/**
 * Status flag bitmasks
 */
var StatusFlag;
(function (StatusFlag) {
    StatusFlag[StatusFlag["OnAir"] = 8] = "OnAir";
    StatusFlag[StatusFlag["Sync"] = 16] = "Sync";
    StatusFlag[StatusFlag["Master"] = 32] = "Master";
    StatusFlag[StatusFlag["Playing"] = 64] = "Playing";
})(StatusFlag = exports.StatusFlag || (exports.StatusFlag = {}));
/**
 * Play state flags
 */
var PlayState;
(function (PlayState) {
    PlayState[PlayState["Empty"] = 0] = "Empty";
    PlayState[PlayState["Loading"] = 2] = "Loading";
    PlayState[PlayState["Playing"] = 3] = "Playing";
    PlayState[PlayState["Looping"] = 4] = "Looping";
    PlayState[PlayState["Paused"] = 5] = "Paused";
    PlayState[PlayState["Cued"] = 6] = "Cued";
    PlayState[PlayState["Cuing"] = 7] = "Cuing";
    PlayState[PlayState["PlatterHeld"] = 8] = "PlatterHeld";
    PlayState[PlayState["Searching"] = 9] = "Searching";
    PlayState[PlayState["SpunDown"] = 14] = "SpunDown";
    PlayState[PlayState["Ended"] = 17] = "Ended";
})(PlayState = exports.PlayState || (exports.PlayState = {}));


/***/ }),

/***/ "./src/status/utils.ts":
/*!*****************************!*\
  !*** ./src/status/utils.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mediaSlotFromPacket = exports.statusFromPacket = void 0;
const constants_1 = __webpack_require__(/*! src/constants */ "./src/constants.ts");
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
const MAX_INT32 = Math.pow(2, 32) - 1;
const MAX_INT16 = Math.pow(2, 16) - 1;
const MAX_INT9 = Math.pow(2, 9) - 1;
function statusFromPacket(packet) {
    if (packet.indexOf(constants_1.PROLINK_HEADER) !== 0) {
        throw new Error('CDJ status packet does not start with the expected header');
    }
    // Rekordbox sends some short status packets that we can just ignore.
    if (packet.length < 0xc8) {
        return undefined;
    }
    // No track loaded: BPM = MAX_INT16
    const rawBPM = packet.readUInt16BE(0x92);
    const trackBPM = rawBPM === MAX_INT16 ? null : rawBPM / 100;
    // No next cue: beatsUntilCue = MAX_INT9
    const rawBeatsUntilCue = packet.readUInt16BE(0xa4);
    const beatsUntilCue = rawBeatsUntilCue === MAX_INT9 ? null : rawBeatsUntilCue;
    // No track loaded: beat = MAX_INT32
    const rawBeat = packet.readUInt32BE(0xa0);
    const beat = rawBeat === MAX_INT32 ? null : rawBeat;
    const status = {
        deviceId: packet[0x21],
        trackId: packet.readUInt32BE(0x2c),
        trackDeviceId: packet[0x28],
        trackSlot: packet[0x29],
        trackType: packet[0x2a],
        playState: packet[0x7b],
        isOnAir: (packet[0x89] & types_1.CDJStatus.StatusFlag.OnAir) !== 0,
        isSync: (packet[0x89] & types_1.CDJStatus.StatusFlag.Sync) !== 0,
        isMaster: (packet[0x89] & types_1.CDJStatus.StatusFlag.Master) !== 0,
        isEmergencyMode: !!packet[0xba],
        trackBPM,
        sliderPitch: calcPitch(packet.slice(0x8d, 0x8d + 3)),
        effectivePitch: calcPitch(packet.slice(0x99, 0x99 + 3)),
        beatInMeasure: packet[0xa6],
        beatsUntilCue,
        beat,
        packetNum: packet.readUInt32BE(0xc8),
    };
    return status;
}
exports.statusFromPacket = statusFromPacket;
function mediaSlotFromPacket(packet) {
    if (packet.indexOf(constants_1.PROLINK_HEADER) !== 0) {
        throw new Error('CDJ media slot packet does not start with the expected header');
    }
    if (packet[0x0a] !== 0x06) {
        return undefined;
    }
    const name = packet
        .slice(0x2c, 0x0c + 40)
        .toString()
        .replace(/\0/g, '');
    const createdDate = new Date(packet
        .slice(0x6c, 0x6c + 24)
        .toString()
        .replace(/\0/g, ''));
    const deviceId = packet[0x27];
    const slot = packet[0x2b];
    const trackCount = packet.readUInt16BE(0xa6);
    const tracksType = packet[0xaa];
    const hasSettings = !!packet[0xab];
    const playlistCount = packet.readUInt16BE(0xae);
    const color = packet.readUInt8(0xa8);
    const totalBytes = packet.readBigUInt64BE(0xb0);
    const freeBytes = packet.readBigUInt64BE(0xb8);
    const info = {
        deviceId,
        slot,
        name,
        color,
        createdDate,
        freeBytes,
        totalBytes,
        tracksType,
        trackCount,
        playlistCount,
        hasSettings,
    };
    return info;
}
exports.mediaSlotFromPacket = mediaSlotFromPacket;
/**
 * calcPitch converts a uint24 byte value into a flaot32 pitch.
 *
 * The pitch information ranges from 0x000000 (meaning -100%, complete stop) to
 * 0x200000 (+100%).
 */
function calcPitch(pitch) {
    const value = Buffer.from([0x0, ...pitch]).readUInt32BE();
    const relativeZero = 0x100000;
    const computed = ((value - relativeZero) / relativeZero) * 100;
    return +computed.toFixed(2);
}


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MixstatusMode = exports.NetworkState = exports.CueColor = exports.HotcueButton = exports.TrackType = exports.MediaSlot = exports.MediaColor = exports.DeviceType = exports.CDJStatus = void 0;
exports.CDJStatus = __importStar(__webpack_require__(/*! src/status/types */ "./src/status/types.ts"));
/**
 * Known device types on the network
 */
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["CDJ"] = 1] = "CDJ";
    DeviceType[DeviceType["Mixer"] = 3] = "Mixer";
    DeviceType[DeviceType["Rekordbox"] = 4] = "Rekordbox";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
var MediaColor;
(function (MediaColor) {
    MediaColor[MediaColor["Default"] = 0] = "Default";
    MediaColor[MediaColor["Pink"] = 1] = "Pink";
    MediaColor[MediaColor["Red"] = 2] = "Red";
    MediaColor[MediaColor["Orange"] = 3] = "Orange";
    MediaColor[MediaColor["Yellow"] = 4] = "Yellow";
    MediaColor[MediaColor["Green"] = 5] = "Green";
    MediaColor[MediaColor["Aqua"] = 6] = "Aqua";
    MediaColor[MediaColor["Blue"] = 7] = "Blue";
    MediaColor[MediaColor["Purple"] = 8] = "Purple";
})(MediaColor = exports.MediaColor || (exports.MediaColor = {}));
/**
 * A slot where media is present on the CDJ
 */
var MediaSlot;
(function (MediaSlot) {
    MediaSlot[MediaSlot["Empty"] = 0] = "Empty";
    MediaSlot[MediaSlot["CD"] = 1] = "CD";
    MediaSlot[MediaSlot["SD"] = 2] = "SD";
    MediaSlot[MediaSlot["USB"] = 3] = "USB";
    MediaSlot[MediaSlot["RB"] = 4] = "RB";
})(MediaSlot = exports.MediaSlot || (exports.MediaSlot = {}));
/**
 * Track type flags
 */
var TrackType;
(function (TrackType) {
    TrackType[TrackType["None"] = 0] = "None";
    TrackType[TrackType["RB"] = 1] = "RB";
    TrackType[TrackType["Unanalyzed"] = 2] = "Unanalyzed";
    TrackType[TrackType["AudioCD"] = 5] = "AudioCD";
})(TrackType = exports.TrackType || (exports.TrackType = {}));
/**
 * A hotcue button label
 */
var HotcueButton;
(function (HotcueButton) {
    HotcueButton[HotcueButton["A"] = 1] = "A";
    HotcueButton[HotcueButton["B"] = 2] = "B";
    HotcueButton[HotcueButton["C"] = 3] = "C";
    HotcueButton[HotcueButton["D"] = 4] = "D";
    HotcueButton[HotcueButton["E"] = 5] = "E";
    HotcueButton[HotcueButton["F"] = 6] = "F";
    HotcueButton[HotcueButton["G"] = 7] = "G";
    HotcueButton[HotcueButton["H"] = 8] = "H";
})(HotcueButton = exports.HotcueButton || (exports.HotcueButton = {}));
/**
 * When a custom color is not configured the cue point will be one of these
 * colors.
 */
var CueColor;
(function (CueColor) {
    CueColor[CueColor["None"] = 0] = "None";
    CueColor[CueColor["Blank"] = 21] = "Blank";
    CueColor[CueColor["Magenta"] = 49] = "Magenta";
    CueColor[CueColor["Violet"] = 56] = "Violet";
    CueColor[CueColor["Fuchsia"] = 60] = "Fuchsia";
    CueColor[CueColor["LightSlateBlue"] = 62] = "LightSlateBlue";
    CueColor[CueColor["Blue"] = 1] = "Blue";
    CueColor[CueColor["SteelBlue"] = 5] = "SteelBlue";
    CueColor[CueColor["Aqua"] = 9] = "Aqua";
    CueColor[CueColor["SeaGreen"] = 14] = "SeaGreen";
    CueColor[CueColor["Teal"] = 18] = "Teal";
    CueColor[CueColor["Green"] = 22] = "Green";
    CueColor[CueColor["Lime"] = 26] = "Lime";
    CueColor[CueColor["Olive"] = 30] = "Olive";
    CueColor[CueColor["Yellow"] = 32] = "Yellow";
    CueColor[CueColor["Orange"] = 38] = "Orange";
    CueColor[CueColor["Red"] = 42] = "Red";
    CueColor[CueColor["Pink"] = 45] = "Pink";
})(CueColor = exports.CueColor || (exports.CueColor = {}));
var NetworkState;
(function (NetworkState) {
    /**
     * The network is offline when we don't have an open connection to the network
     * (no connection to the announcment and or status UDP socket is present).
     */
    NetworkState[NetworkState["Offline"] = 0] = "Offline";
    /**
     * The network is online when we have opened sockets to the network, but have
     * not yet started announcing ourselves as a virtual CDJ.
     */
    NetworkState[NetworkState["Online"] = 1] = "Online";
    /**
     * The network is connected once we have heard from another device on the network
     */
    NetworkState[NetworkState["Connected"] = 2] = "Connected";
    /**
     * The network may have failed to connect if we aren't able to open the
     * announcment and or status UDP socket.
     */
    NetworkState[NetworkState["Failed"] = 3] = "Failed";
})(NetworkState = exports.NetworkState || (exports.NetworkState = {}));
/**
 * Mixstatus reporting modes specify how the mixstatus processor will determine when a new
 * track is 'now playing'.
 */
var MixstatusMode;
(function (MixstatusMode) {
    /**
     * Tracks will be smartly marked as playing following rules:
     *
     * - The track that has been in the play state with the CDJ in the "on air" state
     *   for the longest period of time (allowing for a configurable length of
     *   interruption with allowedInterruptBeats) is considered to be the active
     *   track that incoming tracks will be compared against.
     *
     * - A incoming track will immediately be reported as nowPlaying if it is on
     *   air, playing, and the last active track has been cued.
     *
     * - A incoming track will be reported as nowPlaying if the active track has
     *   not been on air or has not been playing for the configured
     *   allowedInterruptBeats.
     *
     * - A incoming track will be reported as nowPlaying if it has played
     *   consecutively (with allowedInterruptBeats honored for the incoming track)
     *   for the configured beatsUntilReported.
     */
    MixstatusMode[MixstatusMode["SmartTiming"] = 0] = "SmartTiming";
    /**
     * Tracks will not be reported after the beatsUntilReported AND will ONLY
     * be reported if the other track has gone into a non-playing play state, or
     * taken off air (when useOnAirStatus is enabled).
     */
    MixstatusMode[MixstatusMode["WaitsForSilence"] = 1] = "WaitsForSilence";
    /**
     * The track will simply be reported only after the player becomes master.
     */
    MixstatusMode[MixstatusMode["FollowsMaster"] = 2] = "FollowsMaster";
})(MixstatusMode = exports.MixstatusMode || (exports.MixstatusMode = {}));


/***/ }),

/***/ "./src/utils/converters.ts":
/*!*********************************!*\
  !*** ./src/utils/converters.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertWaveformHDData = exports.makeOffsetArray = exports.extractColor = exports.extractBitMask = void 0;
/**
 * Extracts a specific bitmask, shifting it to the bitmask.
 */
const extractBitMask = (val, mask) => (val & mask) >> Math.log2(mask & -mask);
exports.extractBitMask = extractBitMask;
/**
 * Pioneer colors are 3 bits, convert this to a percentage.
 */
const extractColor = (val, mask) => (0, exports.extractBitMask)(val, mask) / 0b111;
exports.extractColor = extractColor;
/**
 * Utility to generate an filled with byte offsets for each segment
 */
const makeOffsetArray = (byteLength, segmentSize) => new Array(byteLength / segmentSize).fill(null).map((_, i) => i * segmentSize);
exports.makeOffsetArray = makeOffsetArray;
/**
 * Convert raw waveform HD data into the structured WaveformHD type
 */
const convertWaveformHDData = (data) => {
    // Two byte bit representation for the color waveform.
    //
    // | f  e  d | c  b  a | 9  8  7 | 6  5  4  3  2 | 1   0 |
    // [   red   |  green  |   blue  |     height    | ~ | ~ ]
    const redMask = 57344; // prettier-ignore
    const greenMask = 7168; // prettier-ignore
    const blueMask = 896; // prettier-ignore
    const heightMask = 124; // prettier-ignore
    const ec = exports.extractColor;
    return (0, exports.makeOffsetArray)(data.length, 0x02)
        .map(byteOffset => data.readUInt16BE(byteOffset))
        .map(v => ({
        height: (0, exports.extractBitMask)(v, heightMask),
        color: [ec(v, redMask), ec(v, greenMask), ec(v, blueMask)],
    }));
};
exports.convertWaveformHDData = convertWaveformHDData;


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTrackTypeName = exports.getSlotName = exports.bpmToSeconds = exports.getMatchingInterface = exports.buildName = void 0;
const ip = __importStar(__webpack_require__(/*! ip-address */ "ip-address"));
const os_1 = __webpack_require__(/*! os */ "os");
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
/**
 * Get the byte representation of the device name
 */
function buildName(device) {
    const name = new Uint8Array(20);
    name.set(Buffer.from(device.name, 'ascii'));
    return name;
}
exports.buildName = buildName;
/**
 * Determines the interface that routes the given address by comparing the
 * masked addresses. This type of information is generally determined through
 * the kernels routing table, but for sake of cross-platform compatibility, we
 * do some rudimentary lookup.
 */
function getMatchingInterface(ipAddr) {
    const flatList = Object.entries((0, os_1.networkInterfaces)()).reduce((acc, [name, info]) => info !== undefined ? acc.concat(info.map(i => ({ ...i, name }))) : acc, []);
    let matchedIface = null;
    let matchedSubnet = 0;
    for (const iface of flatList) {
        const { internal, cidr } = iface;
        if (iface.family !== 'IPv4' || internal || cidr === null) {
            continue;
        }
        const ifaceAddr = new ip.Address4(cidr);
        if (ipAddr.isInSubnet(ifaceAddr) && ifaceAddr.subnetMask > matchedSubnet) {
            matchedIface = iface;
            matchedSubnet = ifaceAddr.subnetMask;
        }
    }
    return matchedIface;
}
exports.getMatchingInterface = getMatchingInterface;
/**
 * Given a BPM and pitch value, compute how many seconds per beat
 */
function bpmToSeconds(bpm, pitch) {
    const bps = ((pitch / 100) * bpm + bpm) / 60;
    return 1 / bps;
}
exports.bpmToSeconds = bpmToSeconds;
const slotNames = Object.fromEntries(Object.entries(types_1.MediaSlot).map(e => [e[1], e[0].toLowerCase()]));
/**
 * Returns a string representation of a media slot
 */
function getSlotName(slot) {
    return slotNames[slot];
}
exports.getSlotName = getSlotName;
const trackTypeNames = Object.fromEntries(Object.entries(types_1.TrackType).map(e => [e[1], e[0].toLowerCase()]));
/**
 * Returns a string representation of a track type
 */
function getTrackTypeName(type) {
    return trackTypeNames[type];
}
exports.getTrackTypeName = getTrackTypeName;


/***/ }),

/***/ "./src/utils/udp.ts":
/*!**************************!*\
  !*** ./src/utils/udp.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.udpClose = exports.udpSend = exports.udpRead = exports.udpBind = void 0;
function udpBind(conn, arg1, arg2) {
    return new Promise((resolve, reject) => {
        conn.once('error', reject);
        conn.once('listening', () => {
            conn.off('error', reject);
            resolve(conn.address());
        });
        if (arg2 !== undefined) {
            conn.bind(arg1, arg2);
        }
        else {
            conn.bind(arg1);
        }
    });
}
exports.udpBind = udpBind;
/**
 * Async version of udp socket read
 */
function udpRead(conn) {
    return new Promise(resolve => conn.once('message', resolve));
}
exports.udpRead = udpRead;
function udpSend(conn, arg1, arg2, arg3, arg4, arg5) {
    return new Promise((resolve, reject) => {
        try {
            if (arg4 !== undefined) {
                conn.send(arg1, arg2, arg3, arg4, arg5, (err, sent) => err ? reject(err) : resolve(sent));
            }
            else {
                conn.send(arg1, arg2, arg3, (err, sent) => (err ? reject(err) : resolve(sent)));
            }
        }
        catch (err) {
            reject(err);
        }
    });
}
exports.udpSend = udpSend;
/**
 * Async version of udp socket close
 */
function udpClose(conn) {
    return new Promise((resolve, reject) => {
        try {
            conn.once('close', resolve);
            conn.close();
        }
        catch (err) {
            reject(err);
        }
    });
}
exports.udpClose = udpClose;


/***/ }),

/***/ "./src/virtualcdj/index.ts":
/*!*********************************!*\
  !*** ./src/virtualcdj/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Announcer_announceSocket, _Announcer_deviceManager, _Announcer_vcdj, _Announcer_intervalHandle;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Announcer = exports.makeAnnouncePacket = exports.makeStatusPacket = exports.getVirtualCDJ = void 0;
const ip = __importStar(__webpack_require__(/*! ip-address */ "ip-address"));
const constants_1 = __webpack_require__(/*! src/constants */ "./src/constants.ts");
const types_1 = __webpack_require__(/*! src/types */ "./src/types.ts");
const utils_1 = __webpack_require__(/*! src/utils */ "./src/utils/index.ts");
/**
 * Constructs a virtual CDJ Device.
 */
const getVirtualCDJ = (iface, id) => ({
    id,
    name: constants_1.VIRTUAL_CDJ_NAME,
    type: types_1.DeviceType.CDJ,
    ip: new ip.Address4(iface.address),
    macAddr: new Uint8Array(iface.mac.split(':').map(s => parseInt(s, 16))),
});
exports.getVirtualCDJ = getVirtualCDJ;
/**
 * Returns a mostly empty-state status packet. This is currently used to report
 * the virtual CDJs status, which *seems* to be required for the CDJ to send
 * metadata about some unanalyzed mp3 files.
 */
function makeStatusPacket(device) {
    // NOTE: It seems that byte 0x68 and 0x75 MUST be 1 in order for the CDJ to
    //       correctly report mp3 metadata (again, only for some files).
    //       See https://github.com/brunchboy/dysentery/issues/15
    // NOTE: Byte 0xb6 MUST be 1 in order for the CDJ to not think that our
    //       device is "running an older firmware"
    //
    // prettier-ignore
    const b = new Uint8Array([
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0a, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
        0x03, 0x00, 0x00, 0xf8, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x04, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x9c, 0xff, 0xfe, 0x00, 0x10, 0x00, 0x00,
        0x7f, 0xff, 0xff, 0xff, 0x7f, 0xff, 0xff, 0xff, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff,
        0xff, 0xff, 0xff, 0xff, 0x01, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x10, 0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0f, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    ]);
    // The following items get replaced in this format:
    //
    //  - 0x00: 10 byte header
    //  - 0x0B: 20 byte device name
    //  - 0x21: 01 byte device ID
    //  - 0x24: 01 byte device ID
    //  - 0x7C: 04 byte firmware string
    b.set(constants_1.PROLINK_HEADER, 0x0b);
    b.set(Buffer.from(device.name, 'ascii'), 0x0b);
    b.set(new Uint8Array([device.id]), 0x21);
    b.set(new Uint8Array([device.id]), 0x24);
    b.set(Buffer.from(constants_1.VIRTUAL_CDJ_FIRMWARE, 'ascii'), 0x7c);
    return b;
}
exports.makeStatusPacket = makeStatusPacket;
/**
 * constructs the announce packet that is sent on the prolink network to
 * announce a devices existence.
 */
function makeAnnouncePacket(deviceToAnnounce) {
    const d = deviceToAnnounce;
    // unknown padding bytes
    const unknown1 = [0x01, 0x02];
    const unknown2 = [0x01, 0x00, 0x00, 0x00];
    // The packet blow is constructed in the followig format:
    //
    //  - 0x00: 10 byte header
    //  - 0x0A: 02 byte announce packet type
    //  - 0x0c: 20 byte device name
    //  - 0x20: 02 byte unknown
    //  - 0x22: 02 byte packet length
    //  - 0x24: 01 byte for the player ID
    //  - 0x25: 01 byte for the player type
    //  - 0x26: 06 byte mac address
    //  - 0x2C: 04 byte IP address
    //  - 0x30: 04 byte unknown
    //  - 0x34: 01 byte for the player type
    //  - 0x35: 01 byte final padding
    const parts = [
        ...constants_1.PROLINK_HEADER,
        ...[0x06, 0x00],
        ...(0, utils_1.buildName)(d),
        ...unknown1,
        ...[0x00, 0x36],
        ...[d.id],
        ...[d.type],
        ...d.macAddr,
        ...d.ip.toArray(),
        ...unknown2,
        ...[d.type],
        ...[0x00],
    ];
    return Uint8Array.from(parts);
}
exports.makeAnnouncePacket = makeAnnouncePacket;
/**
 * the announcer service is used to report our fake CDJ to the prolink network,
 * as if it was a real CDJ.
 */
class Announcer {
    constructor(vcdj, announceSocket, deviceManager) {
        /**
         * The announce socket to use to make the announcments
         */
        _Announcer_announceSocket.set(this, void 0);
        /**
         * The device manager service used to determine which devices to announce
         * ourselves to.
         */
        _Announcer_deviceManager.set(this, void 0);
        /**
         * The virtual CDJ device to announce
         */
        _Announcer_vcdj.set(this, void 0);
        /**
         * The interval handle used to stop announcing
         */
        _Announcer_intervalHandle.set(this, void 0);
        __classPrivateFieldSet(this, _Announcer_vcdj, vcdj, "f");
        __classPrivateFieldSet(this, _Announcer_announceSocket, announceSocket, "f");
        __classPrivateFieldSet(this, _Announcer_deviceManager, deviceManager, "f");
    }
    start() {
        const announcePacket = makeAnnouncePacket(__classPrivateFieldGet(this, _Announcer_vcdj, "f"));
        const announceToDevice = (device) => __classPrivateFieldGet(this, _Announcer_announceSocket, "f").send(announcePacket, constants_1.ANNOUNCE_PORT, device.ip.address);
        __classPrivateFieldSet(this, _Announcer_intervalHandle, setInterval(() => [...__classPrivateFieldGet(this, _Announcer_deviceManager, "f").devices.values()].forEach(announceToDevice), constants_1.ANNOUNCE_INTERVAL), "f");
    }
    stop() {
        if (__classPrivateFieldGet(this, _Announcer_intervalHandle, "f") !== undefined) {
            clearInterval(__classPrivateFieldGet(this, _Announcer_intervalHandle, "f"));
        }
    }
}
exports.Announcer = Announcer;
_Announcer_announceSocket = new WeakMap(), _Announcer_deviceManager = new WeakMap(), _Announcer_vcdj = new WeakMap(), _Announcer_intervalHandle = new WeakMap();


/***/ }),

/***/ "@sentry/node":
/*!*******************************!*\
  !*** external "@sentry/node" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/node");

/***/ }),

/***/ "@sentry/tracing":
/*!**********************************!*\
  !*** external "@sentry/tracing" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/tracing");

/***/ }),

/***/ "async-mutex":
/*!******************************!*\
  !*** external "async-mutex" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async-mutex");

/***/ }),

/***/ "better-sqlite3":
/*!*********************************!*\
  !*** external "better-sqlite3" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("better-sqlite3");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "ip-address":
/*!*****************************!*\
  !*** external "ip-address" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("ip-address");

/***/ }),

/***/ "js-xdr":
/*!*************************!*\
  !*** external "js-xdr" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-xdr");

/***/ }),

/***/ "js-xdr/lib/util":
/*!**********************************!*\
  !*** external "js-xdr/lib/util" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-xdr/lib/util");

/***/ }),

/***/ "kaitai-struct":
/*!********************************!*\
  !*** external "kaitai-struct" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("kaitai-struct");

/***/ }),

/***/ "kaitai-struct/KaitaiStream":
/*!*********************************************!*\
  !*** external "kaitai-struct/KaitaiStream" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("kaitai-struct/KaitaiStream");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "promise-retry":
/*!********************************!*\
  !*** external "promise-retry" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("promise-retry");

/***/ }),

/***/ "promise-socket":
/*!*********************************!*\
  !*** external "promise-socket" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("promise-socket");

/***/ }),

/***/ "promise-timeout":
/*!**********************************!*\
  !*** external "promise-timeout" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("promise-timeout");

/***/ }),

/***/ "signale":
/*!**************************!*\
  !*** external "signale" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("signale");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "dgram":
/*!************************!*\
  !*** external "dgram" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("dgram");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/cli/index.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=cli.js.map