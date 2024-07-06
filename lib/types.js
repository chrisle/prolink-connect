/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/status/types.ts":
/*!*****************************!*\
  !*** ./src/status/types.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


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

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/types.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=types.js.map