import Game from './Game';


PIXI.loader
	//.add("assets/image.png")
	.load(init);

function init() {
	new Game();
}