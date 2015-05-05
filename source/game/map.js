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
              var tile_x = tile_id % MAP_WIDTH;
              var tile_y = Math.floor(tile_id / MAP_WIDTH);
              
              map_tile.constructor(tile_id, tile_x, tile_y, false, GRASS_ID);
              // add the tile id to the tileset
              this._tileset.push(tile_x.toString() + tile_y.toString());
              // add the Tile to the tile lookup table
              this._tile_lookup[tile_x.toString() + tile_y.toString()] = map_tile;
          }
      },
      // getters and setters
      get_tileset: function f2 () {return this._tileset;},
      get_tile_lookup: function f3 () {return this._tile_lookup;}
};