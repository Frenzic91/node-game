$.getScript("constants.js");
$.getScript("tile.js");


// defined as a collection of Tiles
var Map = {
      constructor: function f0 () {
          // tileset defined here
          this._tileset = [];
          // tile lookup table defined here
          this._tile_lookup = {};
      },
      initialize: function f1 () {
          // create a map with MAP_WIDTH * MAP_HEIGHT dimensions
          for (var tile_id = 0; tile_id < (MAP_WIDTH * MAP_HEIGHT); tile_id++) {
              // instantiate a Tile object
              var map_tile = Object.create(Tile);
              // initialize properties of the Tile
              map_tile.constructor(tile_id, (tile_id / MAP_WIDTH), (tile_id % MAP_HEIGHT), false, GRASS_ID);
              // add the tile id to the tileset
              this._tileset.push(tile_id);
              // add the Tile to the tile lookup table
              this._tile_lookup.tile_id = map_tile;
          }
      },
      // getters and setters
      get_tileset: function f2 () {return this._tileset;},
      get_tile_lookup: function f3 () {return this._tile_lookup;}
};