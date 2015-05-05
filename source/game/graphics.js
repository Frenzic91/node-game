$.getScript("constants.js");
$.getScript("map.js");
$.getScript("tile.js");

var Graphics = {
    constructor: function f0 () {
      // sprite table
        this._sprite_array = ["grass"];
        this._image_table = {};
        this._canvas = document.getElementById("game_canvas");
        this._ctx = this._canvas.getContext("2d");
        //this._image = document.getElementById(this._sprite_table.GRASS_ID);
    },
    // add transparency to all game images (more functionality in future?)
    initialize: function f1 () {
        for (var sprite = 0; sprite < this._sprite_array.length; sprite++) {
            var sprite_name = this._sprite_array[sprite];
            var image = document.getElementById(sprite_name);
            //var trans_image = this.add_transparency(image, image.width, image.height);
            
            this._image_table[sprite_name] = image;
        }
    },
    // set alpha to 0 for (255, 0, 255) pixels
    add_transparency: function f2 (img, img_width, img_height) {
        // create the image canvas and draw the image on it
        var img_canvas = document.createElement("canvas");
        img_canvas.width = img_width;
        img_canvas.height = img_height;
        document.body.appendChild(img_canvas);
        
        var img_canvas_ctx = img_canvas.getContext("2d");
        img_canvas_ctx.drawImage(img, 0, 0);
        
        // get the image data, manipulating array as necessary
        var image_data_obj = img_canvas_ctx.getImageData(0, 0, img_width, img_height);
        var image_data = image_data_obj.data,
            data_length = image_data.length;
            
        for (var component = 0; component < data_length; component += 4) {
            if (image_data[component] == 255 && image_data[component + 1] == 0 && image_data[component + 2] == 255) {
                image_data[component + 3] = 0;
            }
        }
        
        image_data_obj.data = image_data;
        img_canvas_ctx.putImageData(image_data_obj, 0, 0);
        
        img.src = img_canvas.toDataURL();
        
        return img;
        
    },
    // rendering requires the canvas context and map
    render_viewport: function f3 (map) {
          // the map of tile ids
          var tileset = map.get_tileset();
          // the lookup table associating tile ids with actual Tile objects
          var tile_lookup = map.get_tile_lookup();
          
          // for each tile id in the tileset
          for (var tile_id = 0; tile_id < tileset.length; tile_id++) {
              // get the tile associated with the tile_id from the tile lookup table
              var tile = tile_lookup[tileset[tile_id]];
              // get the tiles sprite id
              var sprite_id = tile.get_sprite_id();
              /* get the sprite associated with the sprite id and draw it on the canvas
              at the tiles coordinates */
              this._ctx.drawImage(this._image_table[sprite_id],
              tile.get_x() * TILE_WIDTH, tile.get_y() * TILE_HEIGHT);
          }
      }
};