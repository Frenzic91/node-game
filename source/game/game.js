// putting it all together

$.getScript("map.js");
$.getScript("tile.js");
$.getScript("graphics.js");
$.getScript("constants.js");

var Game = {
    constructor: function f0 () {
        // create required game assets
        this._map = Object.create(Map);
        this._map.constructor();
        
        this._gfx = Object.create(Graphics);
        this._gfx.constructor();
        
        // game not yet initialized
        this._initialized = false;
        // game not yet running
        this._running = false;
    },
    initialize: function f1 () {
        // initialize the map
        this._map.initialize();
        this._gfx.initialize();
        // map initialized, so game is initialized
        this._initialized = true;
    },
    run: function f2 () {
        // run called, game is running
        this._running = true;
        // while game is running, draw the map
        //while (this._running) {
            this._gfx.render_map(this._map);
        //}
    }
};