$.getScript("constants.js");
$.getScript("map.js");
$.getScript("tile.js");

var Graphics = {
  constructor: function f0 () {
      // sprite table
      var sprite_table = {GRASS_ID: "grass.png"};
  },
  // rendering requires the canvas context and map
  render_map: function f1 (ctx, map) {
      // the map of tile ids
      var tileset = map.get_tileset();
      // the lookup table associating tile ids with actual Tile objects
      var lookup = map.get_tile_lookup();
      
      // for each tile id in the tileset
      for (var tile_id = 0; tile_id < (GAME_WIDTH * GAME_HEIGHT); tile_id++) {
          // get the tile associated with the tile_id from the tile lookup table
          var tile = lookup.tile_id;
          // get the tiles sprite id
          var sprite_id = tile.get_sprite_id();
          /* get the sprite associated with the sprite id and draw it on the canvas
          at the tiles coordinates */
          ctx.drawImage(sprite_table.sprite_id, tile.get_x(), tile.get_y());
      }
  }
};