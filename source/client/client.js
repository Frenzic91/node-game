        /* entire game is running on client side at this point,
        will be changed at a later date (server side authentication, interp) */
        
        //var canvas = document.getElementById("game_canvas");
        //var ctx = canvas.getContext("2d");
        
        var game = Object.create(Game);
        
        game.constructor();
        game.initialize();
        
        /*var img = document.getElementById("grass");
        for (var y = 0; y < 11; y++) {
            for (var x = 0; x < 15; x++) {
                ctx.drawImage(img, x * 64, y * 64);
            }
        } */
        // game loop, only renders graphics currently
        game.run();