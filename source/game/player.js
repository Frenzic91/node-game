$.getScript("constants.js");
$.getScript("map.js");
$.getScript("tile.js");

// a Player associated with a client socket id
var Player = {
    constructor: function f0 (socket_id, x, y, sprite_id, map) {
        this.socket_id = socket_id;
        this._x = x;
        this._y = y;
        this._sprite_id = sprite_id;
        this._current_map = map.get_tile_lookup();
        this._viewport_x = this._x - Math.floor(VIEW_WIDTH / 2);
        this._viewport_y = this._y - Math.floor(VIEW_HEIGHT / 2);
        this._current_tile = this._current_map[this._x.toString() + ", " + this._y.toString()];
    },
    move: function f1 (data) {
        
        var x_dir = 0;
        var y_dir = 0;
        
        switch(data.key_info) {
			// up
		    case 38:
				x_dir = 0;
				y_dir = -1;

				break;
			// down
			case 40:
				x_dir = 0;
				y_dir = 1;

				break;
			// left
			case 37:
				x_dir = -1;
				y_dir = 0;

				break;
			// right
			case 39:
				x_dir = 1;
				y_dir = 0;

				break;
		}
		
		var x_offset = x_dir * MOVE_OFFSET;
		var y_offset = y_dir * MOVE_OFFSET;
		
		var next_tile = this._current_map[(this._x + x_offset).toString() + ", " + (this._y + y_offset).toString()];
		
		if (next_tile.is_walkable()) {
		    
		    this._x += x_offset;
		    this._y += y_offset;
		    
		    this._viewport_x += x_offset;
		    this._viewport_y += y_offset;
		    
		    this._current_tile = next_tile;
		}
    },
    update: function f2 () {/* animation updates etc..*/},
    get_x: function f3 () {return this._x;},
    get_y: function f4 () {return this._y;},
    get_tile: function f5 () {return this._current_tile;},
    get_socket_id: function f6 () {return this._socket_id;}
};