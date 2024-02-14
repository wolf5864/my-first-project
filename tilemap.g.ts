// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`2800100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010105000000000000000000000404040404000000000000000000000000000000000000000000000000020500000000000000000000000000000000000000000000000000000000000000000000000000000002050000000000000000000000000000000000000404040404040000000000000000000000000000000201010101000000000000000000000000000404030000000404000000000000000000000000000000000000000000000000000000000000040403000000000002040000000000000000000000000000000000000000000601010101010101010103000000000000000400000000000000000000000000000000000000000603000000000000000000000000000000000404000000000000000000000000000000000000000603000000000000000000000000000000000404030000000000000000000000000000000000000603000000000000000000000000000000000404030000000000000000000000000000010101010103000000000000000000040404040404040404030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007070707070707070707070707070707070707070707070707070707070707070707070707070707`, img`
........................................
........................................
........................................
2222..........22222.....................
...22...................................
....22..................222222..........
.....22222.............222...22.........
.....................222.....22.........
............22222222222.......2.........
...........22................22.........
..........22................222.........
.........22................222..........
....222222.........2222222222...........
........................................
........................................
2222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile2,myTiles.tile5,myTiles.tile7,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Grass block":
            case "tile1":return tile1;
            case "Side grass block left0":
            case "tile3":return tile3;
            case "Side grass block right":
            case "tile4":return tile4;
            case "Grass block0":
            case "tile2":return tile2;
            case "Grass block with side0":
            case "tile5":return tile5;
            case "Grass block with side":
            case "tile7":return tile7;
            case "fire":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
