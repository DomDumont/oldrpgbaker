import * as Phaser from "phaser";
let img_bunny:any = require("../data/images/bunny.png");
let game:any = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update,render:render });

let s:any;

function preload():void {
   game.load.image("bunny",img_bunny);
   game.time.advancedTiming = true;
}

function create():void {
    game.stage.backgroundColor = "#4488AA";
    s = game.add.sprite(80, 80, "bunny");
    s.anchor.setTo(0.5, 0.5);
    s.rotation = 0.14;
}

function update():void {
    s.rotation += 0.01;
}

function render():void {
    game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");   
}

