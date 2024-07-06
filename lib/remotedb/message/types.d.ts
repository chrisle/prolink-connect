/**
 * Used for control messages with the remote database
 */
export declare enum ControlRequest {
    Introduce = 0,
    Disconnect = 256,
    RenderMenu = 12288
}
/**
 * Used to setup renders for specific Menus
 */
export declare enum MenuRequest {
    MenuRoot = 4096,
    MenuGenre = 4097,
    MenuArtist = 4098,
    MenuAlbum = 4099,
    MenuTrack = 4100,
    MenuBPM = 4102,
    MenuRating = 4103,
    MenuYear = 4104,
    MenuLabel = 4106,
    MenuColor = 4109,
    MenuTime = 4112,
    MenuBitrate = 4113,
    MenuHistory = 4114,
    MenuFilename = 4115,
    MenuKey = 4116,
    MenuOriginalArtist = 4866,
    MenuRemixer = 5634,
    MenuPlaylist = 4357,
    MenuArtistsOfGenre = 4353,
    MenuAlbumsOfArtist = 4354,
    MenuTracksOfAlbum = 4355,
    MenuTracksOfRating = 4359,
    MenuYearsOfDecade = 4360,
    MenuArtistsOfLabel = 4362,
    MenuTracksOfColor = 4365,
    MenuTracksOfTime = 4368,
    MenuTracksOfHistory = 4370,
    MenuDistancesOfKey = 4372,
    MenuAlbumsOfOriginalArtist = 5122,
    MenuAlbumsOfRemixer = 5890,
    MenuAlbumsOfGenreAndArtist = 4609,
    MenuTracksOfArtistAndAlbum = 4610,
    MenuTracksOfBPMPercentRange = 4614,
    MenuTracksOfDecadeAndYear = 4616,
    MenuAlbumsOfLabelAndArtist = 4618,
    MenuTracksNearKey = 4628,
    MenuTracksOfOriginalArtistAndAlbum = 5378,
    MenuTracksOfRemixerAndAlbum = 6146,
    MenuTracksOfGenreArtistAndAlbum = 4865,
    MenuTracksOfLabelArtistAndAlbum = 4874,
    MenuSearch = 4864,
    MenuFolder = 8198
}
/**
 * Request message types used to obtain specfiic track information
 */
export declare enum DataRequest {
    GetMetadata = 8194,
    GetArtwork = 8195,
    GetWaveformPreview = 8196,
    GetTrackInfo = 8450,
    GetGenericMetadata = 8706,
    GetCueAndLoops = 8452,
    GetBeatGrid = 8708,
    GetWaveformDetailed = 10500,
    GetAdvCueAndLoops = 11012,
    GetWaveformHD = 11268
}
/**
 * Response message types for messages sent back by the server.
 */
export declare enum Response {
    Success = 16384,
    Error = 16387,
    Artwork = 16386,
    MenuItem = 16641,
    MenuHeader = 16385,
    MenuFooter = 16897,
    BeatGrid = 17922,
    CueAndLoop = 18178,
    WaveformPreview = 17410,
    WaveformDetailed = 18946,
    AdvCueAndLoops = 19970,
    WaveformHD = 20226
}
/**
 * Request message types, only sent to the device.
 */
export declare type Request = ControlRequest | MenuRequest | DataRequest;
export declare const Request: {
    readonly [x: number]: string;
    readonly GetMetadata: DataRequest.GetMetadata;
    readonly GetArtwork: DataRequest.GetArtwork;
    readonly GetWaveformPreview: DataRequest.GetWaveformPreview;
    readonly GetTrackInfo: DataRequest.GetTrackInfo;
    readonly GetGenericMetadata: DataRequest.GetGenericMetadata;
    readonly GetCueAndLoops: DataRequest.GetCueAndLoops;
    readonly GetBeatGrid: DataRequest.GetBeatGrid;
    readonly GetWaveformDetailed: DataRequest.GetWaveformDetailed;
    readonly GetAdvCueAndLoops: DataRequest.GetAdvCueAndLoops;
    readonly GetWaveformHD: DataRequest.GetWaveformHD;
    readonly MenuRoot: MenuRequest.MenuRoot;
    readonly MenuGenre: MenuRequest.MenuGenre;
    readonly MenuArtist: MenuRequest.MenuArtist;
    readonly MenuAlbum: MenuRequest.MenuAlbum;
    readonly MenuTrack: MenuRequest.MenuTrack;
    readonly MenuBPM: MenuRequest.MenuBPM;
    readonly MenuRating: MenuRequest.MenuRating;
    readonly MenuYear: MenuRequest.MenuYear;
    readonly MenuLabel: MenuRequest.MenuLabel;
    readonly MenuColor: MenuRequest.MenuColor;
    readonly MenuTime: MenuRequest.MenuTime;
    readonly MenuBitrate: MenuRequest.MenuBitrate;
    readonly MenuHistory: MenuRequest.MenuHistory;
    readonly MenuFilename: MenuRequest.MenuFilename;
    readonly MenuKey: MenuRequest.MenuKey;
    readonly MenuOriginalArtist: MenuRequest.MenuOriginalArtist;
    readonly MenuRemixer: MenuRequest.MenuRemixer;
    readonly MenuPlaylist: MenuRequest.MenuPlaylist;
    readonly MenuArtistsOfGenre: MenuRequest.MenuArtistsOfGenre;
    readonly MenuAlbumsOfArtist: MenuRequest.MenuAlbumsOfArtist;
    readonly MenuTracksOfAlbum: MenuRequest.MenuTracksOfAlbum;
    readonly MenuTracksOfRating: MenuRequest.MenuTracksOfRating;
    readonly MenuYearsOfDecade: MenuRequest.MenuYearsOfDecade;
    readonly MenuArtistsOfLabel: MenuRequest.MenuArtistsOfLabel;
    readonly MenuTracksOfColor: MenuRequest.MenuTracksOfColor;
    readonly MenuTracksOfTime: MenuRequest.MenuTracksOfTime;
    readonly MenuTracksOfHistory: MenuRequest.MenuTracksOfHistory;
    readonly MenuDistancesOfKey: MenuRequest.MenuDistancesOfKey;
    readonly MenuAlbumsOfOriginalArtist: MenuRequest.MenuAlbumsOfOriginalArtist;
    readonly MenuAlbumsOfRemixer: MenuRequest.MenuAlbumsOfRemixer;
    readonly MenuAlbumsOfGenreAndArtist: MenuRequest.MenuAlbumsOfGenreAndArtist;
    readonly MenuTracksOfArtistAndAlbum: MenuRequest.MenuTracksOfArtistAndAlbum;
    readonly MenuTracksOfBPMPercentRange: MenuRequest.MenuTracksOfBPMPercentRange;
    readonly MenuTracksOfDecadeAndYear: MenuRequest.MenuTracksOfDecadeAndYear;
    readonly MenuAlbumsOfLabelAndArtist: MenuRequest.MenuAlbumsOfLabelAndArtist;
    readonly MenuTracksNearKey: MenuRequest.MenuTracksNearKey;
    readonly MenuTracksOfOriginalArtistAndAlbum: MenuRequest.MenuTracksOfOriginalArtistAndAlbum;
    readonly MenuTracksOfRemixerAndAlbum: MenuRequest.MenuTracksOfRemixerAndAlbum;
    readonly MenuTracksOfGenreArtistAndAlbum: MenuRequest.MenuTracksOfGenreArtistAndAlbum;
    readonly MenuTracksOfLabelArtistAndAlbum: MenuRequest.MenuTracksOfLabelArtistAndAlbum;
    readonly MenuSearch: MenuRequest.MenuSearch;
    readonly MenuFolder: MenuRequest.MenuFolder;
    readonly Introduce: ControlRequest.Introduce;
    readonly Disconnect: ControlRequest.Disconnect;
    readonly RenderMenu: ControlRequest.RenderMenu;
};
/**
 * All Known message types. These are used for both request and response messages.
 */
export declare type MessageType = ControlRequest | MenuRequest | DataRequest | Response;
export declare const MessageType: {
    readonly [x: number]: string;
    readonly Success: Response.Success;
    readonly Error: Response.Error;
    readonly Artwork: Response.Artwork;
    readonly MenuItem: Response.MenuItem;
    readonly MenuHeader: Response.MenuHeader;
    readonly MenuFooter: Response.MenuFooter;
    readonly BeatGrid: Response.BeatGrid;
    readonly CueAndLoop: Response.CueAndLoop;
    readonly WaveformPreview: Response.WaveformPreview;
    readonly WaveformDetailed: Response.WaveformDetailed;
    readonly AdvCueAndLoops: Response.AdvCueAndLoops;
    readonly WaveformHD: Response.WaveformHD;
    readonly GetMetadata: DataRequest.GetMetadata;
    readonly GetArtwork: DataRequest.GetArtwork;
    readonly GetWaveformPreview: DataRequest.GetWaveformPreview;
    readonly GetTrackInfo: DataRequest.GetTrackInfo;
    readonly GetGenericMetadata: DataRequest.GetGenericMetadata;
    readonly GetCueAndLoops: DataRequest.GetCueAndLoops;
    readonly GetBeatGrid: DataRequest.GetBeatGrid;
    readonly GetWaveformDetailed: DataRequest.GetWaveformDetailed;
    readonly GetAdvCueAndLoops: DataRequest.GetAdvCueAndLoops;
    readonly GetWaveformHD: DataRequest.GetWaveformHD;
    readonly MenuRoot: MenuRequest.MenuRoot;
    readonly MenuGenre: MenuRequest.MenuGenre;
    readonly MenuArtist: MenuRequest.MenuArtist;
    readonly MenuAlbum: MenuRequest.MenuAlbum;
    readonly MenuTrack: MenuRequest.MenuTrack;
    readonly MenuBPM: MenuRequest.MenuBPM;
    readonly MenuRating: MenuRequest.MenuRating;
    readonly MenuYear: MenuRequest.MenuYear;
    readonly MenuLabel: MenuRequest.MenuLabel;
    readonly MenuColor: MenuRequest.MenuColor;
    readonly MenuTime: MenuRequest.MenuTime;
    readonly MenuBitrate: MenuRequest.MenuBitrate;
    readonly MenuHistory: MenuRequest.MenuHistory;
    readonly MenuFilename: MenuRequest.MenuFilename;
    readonly MenuKey: MenuRequest.MenuKey;
    readonly MenuOriginalArtist: MenuRequest.MenuOriginalArtist;
    readonly MenuRemixer: MenuRequest.MenuRemixer;
    readonly MenuPlaylist: MenuRequest.MenuPlaylist;
    readonly MenuArtistsOfGenre: MenuRequest.MenuArtistsOfGenre;
    readonly MenuAlbumsOfArtist: MenuRequest.MenuAlbumsOfArtist;
    readonly MenuTracksOfAlbum: MenuRequest.MenuTracksOfAlbum;
    readonly MenuTracksOfRating: MenuRequest.MenuTracksOfRating;
    readonly MenuYearsOfDecade: MenuRequest.MenuYearsOfDecade;
    readonly MenuArtistsOfLabel: MenuRequest.MenuArtistsOfLabel;
    readonly MenuTracksOfColor: MenuRequest.MenuTracksOfColor;
    readonly MenuTracksOfTime: MenuRequest.MenuTracksOfTime;
    readonly MenuTracksOfHistory: MenuRequest.MenuTracksOfHistory;
    readonly MenuDistancesOfKey: MenuRequest.MenuDistancesOfKey;
    readonly MenuAlbumsOfOriginalArtist: MenuRequest.MenuAlbumsOfOriginalArtist;
    readonly MenuAlbumsOfRemixer: MenuRequest.MenuAlbumsOfRemixer;
    readonly MenuAlbumsOfGenreAndArtist: MenuRequest.MenuAlbumsOfGenreAndArtist;
    readonly MenuTracksOfArtistAndAlbum: MenuRequest.MenuTracksOfArtistAndAlbum;
    readonly MenuTracksOfBPMPercentRange: MenuRequest.MenuTracksOfBPMPercentRange;
    readonly MenuTracksOfDecadeAndYear: MenuRequest.MenuTracksOfDecadeAndYear;
    readonly MenuAlbumsOfLabelAndArtist: MenuRequest.MenuAlbumsOfLabelAndArtist;
    readonly MenuTracksNearKey: MenuRequest.MenuTracksNearKey;
    readonly MenuTracksOfOriginalArtistAndAlbum: MenuRequest.MenuTracksOfOriginalArtistAndAlbum;
    readonly MenuTracksOfRemixerAndAlbum: MenuRequest.MenuTracksOfRemixerAndAlbum;
    readonly MenuTracksOfGenreArtistAndAlbum: MenuRequest.MenuTracksOfGenreArtistAndAlbum;
    readonly MenuTracksOfLabelArtistAndAlbum: MenuRequest.MenuTracksOfLabelArtistAndAlbum;
    readonly MenuSearch: MenuRequest.MenuSearch;
    readonly MenuFolder: MenuRequest.MenuFolder;
    readonly Introduce: ControlRequest.Introduce;
    readonly Disconnect: ControlRequest.Disconnect;
    readonly RenderMenu: ControlRequest.RenderMenu;
};
/**
 * Returns a string representation of a message type
 */
export declare function getMessageName(type: MessageType): string;
