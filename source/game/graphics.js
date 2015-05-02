$.getScript("constants.js");
$.getScript("map.js");
$.getScript("tile.js");

var Graphics = {
    constructor: function f0 () {
      // sprite table
        this._sprite_table = {GRASS_ID: "grass"};
        this._canvas = document.getElementById("game_canvas");
        this._ctx = this._canvas.getContext("2d");
        this._image = document.getElementById(this._sprite_table.GRASS_ID);
    },
    // rendering requires the canvas context and map
    render_map: function f1 (map) {
          // the map of tile ids
          var tileset = map.get_tileset();
          // the lookup table associating tile ids with actual Tile objects
          var tile_lookup = map.get_tile_lookup();
          
          console.log(this._image);
          console.log(this._canvas);
          console.log(this._ctx);
          console.log(tileset);
          console.log(tile_lookup);
          // for each tile id in the tileset
          for (var tile_id = 0; tile_id < tileset.length; tile_id++) {
              // get the tile associated with the tile_id from the tile lookup table
              var tile = tile_lookup[tile_id];
              // get the tiles sprite id
              var sprite_id = tile.get_sprite_id();
              /* get the sprite associated with the sprite id and draw it on the canvas
              at the tiles coordinates */
              console.log(tileset.length);
              console.log("x=%d, y=%d", tile.get_x(), tile.get_y());
              this._ctx.drawImage(this._image, tile.get_x() * TILE_WIDTH, tile.get_y() * TILE_HEIGHT);
          }
      }
};