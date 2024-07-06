import { Field, NumberField, StringField } from "../fields";
/**
 * Item types associated to the MenuItem message type.
 */
export declare enum ItemType {
    Path = 0,
    Folder = 1,
    AlbumTitle = 2,
    Disc = 3,
    TrackTitle = 4,
    Genre = 6,
    Artist = 7,
    Playlist = 8,
    Rating = 10,
    Duration = 11,
    Tempo = 13,
    Label = 14,
    Key = 15,
    BitRate = 16,
    Year = 17,
    Comment = 35,
    HistoryPlaylist = 36,
    OrigianlArtist = 40,
    Remixer = 41,
    DateAdded = 46,
    Unknown01 = 47,
    Unknown02 = 42,
    ColorNone = 19,
    ColorPink = 20,
    ColorRed = 21,
    ColorOrange = 22,
    ColorYellow = 23,
    ColorGreen = 24,
    ColorAqua = 25,
    ColorBlue = 26,
    ColorPurple = 27,
    MenuGenre = 128,
    MenuArtist = 129,
    MenuAlbum = 130,
    MenuTrack = 131,
    MenuPlaylist = 132,
    MenuBPM = 133,
    MenuRating = 134,
    MenuYear = 135,
    MenuRemixer = 136,
    MenuLabel = 137,
    MenuOriginal = 138,
    MenuKey = 139,
    MenuColor = 142,
    MenuFolder = 144,
    MenuSearch = 145,
    MenuTime = 146,
    MenuBit = 147,
    MenuFilename = 148,
    MenuHistory = 149,
    MenuAll = 160,
    TrackTitleAlbum = 516,
    TrackTitleGenre = 1540,
    TrackTitleArtist = 1796,
    TrackTitleRating = 2564,
    TrackTitleTime = 2820,
    TrackTitleBPM = 3332,
    TrackTitleLabel = 3588,
    TrackTitleKey = 3844,
    TrackTitleBitRate = 4100,
    TrackTitleColor = 6660,
    TrackTitleComment = 8964,
    TrackTitleOriginalArtist = 10244,
    TrackTitleRemixer = 10500,
    TrackTitleDJPlayCount = 10756,
    MenuTrackTitleDateAdded = 11780
}
/**
 * All items have 12 arguments of these types
 */
declare type ItemArgs = [
    NumberField,
    NumberField,
    NumberField,
    StringField,
    NumberField,
    StringField,
    NumberField<ItemType>,
    NumberField,
    NumberField,
    NumberField,
    NumberField,
    NumberField
];
/**
 * Convert a message item argument lists to a structured intermediate object
 * for more clear access.
 */
declare const makeItemData: (args: ItemArgs) => {
    parentId: number;
    mainId: number;
    label1: string;
    label2: string;
    type: ItemType;
    artworkId: number;
};
declare type ItemData = ReturnType<typeof makeItemData>;
/**
 * Maps item types to structured objects
 */
declare const transformItem: {
    0: (a: ItemData) => {
        path: string;
    };
    4: (a: ItemData) => {
        id: number;
        title: string;
        artworkId: number;
    };
    2: (a: ItemData) => {
        id: number;
        name: string;
    };
    7: (a: ItemData) => {
        id: number;
        name: string;
    };
    6: (a: ItemData) => {
        id: number;
        name: string;
    };
    14: (a: ItemData) => {
        id: number;
        name: string;
    };
    15: (a: ItemData) => {
        id: number;
        name: string;
    };
    40: (a: ItemData) => {
        id: number;
        name: string;
    };
    41: (a: ItemData) => {
        id: number;
        name: string;
    };
    16: (a: ItemData) => {
        bitrate: number;
    };
    35: (a: ItemData) => {
        comment: string;
    };
    17: (a: ItemData) => {
        year: number;
    };
    10: (a: ItemData) => {
        rating: number;
    };
    13: (a: ItemData) => {
        bpm: number;
    };
    11: (a: ItemData) => {
        duration: number;
    };
    47: (_: ItemData) => null;
    42: (_: ItemData) => null;
    19: (a: ItemData) => {
        id: number;
        name: string;
    };
    20: (a: ItemData) => {
        id: number;
        name: string;
    };
    21: (a: ItemData) => {
        id: number;
        name: string;
    };
    22: (a: ItemData) => {
        id: number;
        name: string;
    };
    23: (a: ItemData) => {
        id: number;
        name: string;
    };
    24: (a: ItemData) => {
        id: number;
        name: string;
    };
    25: (a: ItemData) => {
        id: number;
        name: string;
    };
    26: (a: ItemData) => {
        id: number;
        name: string;
    };
    27: (a: ItemData) => {
        id: number;
        name: string;
    };
    1: (a: ItemData) => {
        id: number;
        name: string;
    };
    8: (a: ItemData) => {
        id: number;
        name: string;
    };
    3: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    36: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    46: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    128: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    129: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    130: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    131: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    132: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    133: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    134: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    135: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    136: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    137: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    138: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    139: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    142: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    144: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    145: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    146: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    147: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    148: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    149: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    160: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    516: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    1540: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    1796: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    2564: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    2820: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    3332: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    3588: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    3844: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    4100: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    6660: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    8964: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    10244: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    10500: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    10756: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
    11780: (a: ItemData) => {
        parentId: number;
        mainId: number;
        label1: string;
        label2: string;
        type: ItemType;
        artworkId: number;
    };
};
/**
 * Represents a generic Item, specialized to a specific item by providing a
 * ItemType to the template.
 */
export declare type Item<T extends ItemType> = ReturnType<(typeof transformItem)[T]> & {
    type: T;
};
/**
 * Maps ItemTypes to Items
 */
export declare type Items = {
    [T in keyof typeof transformItem]: Item<T>;
};
/**
 * Translate a list of fields for an item response into a structure object,
 * making items more clear to work with.
 */
export declare const fieldsToItem: (args: Field[]) => Item<ItemType.Path> | Item<ItemType.Folder> | Item<ItemType.AlbumTitle> | Item<ItemType.Disc> | Item<ItemType.TrackTitle> | Item<ItemType.Genre> | Item<ItemType.Artist> | Item<ItemType.Playlist> | Item<ItemType.Rating> | Item<ItemType.Duration> | Item<ItemType.Tempo> | Item<ItemType.Label> | Item<ItemType.Key> | Item<ItemType.BitRate> | Item<ItemType.Year> | Item<ItemType.Comment> | Item<ItemType.HistoryPlaylist> | Item<ItemType.OrigianlArtist> | Item<ItemType.Remixer> | Item<ItemType.DateAdded> | Item<ItemType.ColorNone> | Item<ItemType.ColorPink> | Item<ItemType.ColorRed> | Item<ItemType.ColorOrange> | Item<ItemType.ColorYellow> | Item<ItemType.ColorGreen> | Item<ItemType.ColorAqua> | Item<ItemType.ColorBlue> | Item<ItemType.ColorPurple> | Item<ItemType.MenuGenre> | Item<ItemType.MenuArtist> | Item<ItemType.MenuAlbum> | Item<ItemType.MenuTrack> | Item<ItemType.MenuPlaylist> | Item<ItemType.MenuBPM> | Item<ItemType.MenuRating> | Item<ItemType.MenuYear> | Item<ItemType.MenuRemixer> | Item<ItemType.MenuLabel> | Item<ItemType.MenuOriginal> | Item<ItemType.MenuKey> | Item<ItemType.MenuColor> | Item<ItemType.MenuFolder> | Item<ItemType.MenuSearch> | Item<ItemType.MenuTime> | Item<ItemType.MenuBit> | Item<ItemType.MenuFilename> | Item<ItemType.MenuHistory> | Item<ItemType.MenuAll> | Item<ItemType.TrackTitleAlbum> | Item<ItemType.TrackTitleGenre> | Item<ItemType.TrackTitleArtist> | Item<ItemType.TrackTitleRating> | Item<ItemType.TrackTitleTime> | Item<ItemType.TrackTitleBPM> | Item<ItemType.TrackTitleLabel> | Item<ItemType.TrackTitleKey> | Item<ItemType.TrackTitleBitRate> | Item<ItemType.TrackTitleColor> | Item<ItemType.TrackTitleComment> | Item<ItemType.TrackTitleOriginalArtist> | Item<ItemType.TrackTitleRemixer> | Item<ItemType.TrackTitleDJPlayCount> | Item<ItemType.MenuTrackTitleDateAdded>;
export {};
