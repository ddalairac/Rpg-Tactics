
export default class Game {
	public static readonly width: number = 1280;
	public static readonly height: number = 720;

	private engine: PIXI.Application;

	constructor () {
		this.engine = new PIXI.Application(Game.width, Game.height, {antialias: true, backgroundColor: 0x0});
		document.body.appendChild(this.engine.view);


		this.engine.ticker.add(this.onUpdate.bind(this));
	}

	private onUpdate(delta: number) {
	}

}
