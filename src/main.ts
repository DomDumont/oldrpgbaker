import * as Phaser from "phaser";
let img_bunny:any = require("../data/images/bunny.png");
let game:any = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update });

function preload():void {
   game.load.image("bunny",img_bunny);
}

function create():void {
       let s:any = game.add.sprite(80, 80, "bunny");

    s.rotation = 0.14;
}

function update():void {
}