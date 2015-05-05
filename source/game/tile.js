// tile width/height stored in tile:namespace

var Tile = {
    constructor: function f0 (uid, x, y, collision, sprite_id) {
        // data member initialization
        this._uid = uid;
        this._x = x;
        this._y = y;
        this._collision = collision;
        this._sprite_id = sprite_id;
        // an event associated with the tile
        this._event = null;
    },
    // getters and setters
    get_sprite_id: function f1 () {return this._sprite_id;},
    get_x: function f2 () {return this._x;},
    get_y: function f3 () {return this._y;},
    is_walkable: function f4 () {return this._collision;}
};