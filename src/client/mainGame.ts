import * as Phaser from "phaser";
let img_bunny:any = require("../../data/client/images/bunny.png");
let img_players:any = require("../../data/client/images/characters.png");

let game:any = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update,render:render });

let s:any;
let player:any;
let cursors:any;

function preload():void 
{
   game.load.image("bunny",img_bunny);
   game.load.spritesheet('characters', img_players, 32, 48);
   game.time.advancedTiming = true;
}

function create():void {
    game.stage.backgroundColor = "#4488AA";
    s = game.add.sprite(80, 80, "bunny");
    s.anchor.setTo(0.5, 0.5);
    s.rotation = 0.14;

     //  Player
    player = game.add.sprite(120, 120, 'characters', 1);    
    player.animations.add('left', [12,13,14], 6, true);
    player.animations.add('right', [24,25,26], 6, true);
    player.animations.add('up', [36,37,38], 6, true);
    player.animations.add('down', [0,1,2], 6, true);

    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.setSize(10, 14, 2, 1);

     game.camera.follow(player);

     cursors = game.input.keyboard.createCursorKeys();
}

function update():void {
    s.rotation += 0.01;

  player.body.velocity.set(0);

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -100;
        player.play('left');
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 100;
        player.play('right');
    }
    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -100;
        player.play('up');
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 100;
        player.play('down');
    }
    else
    {
        player.animations.stop();
    }
    
}

function render():void {
    game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");   
}

