const svg = d3.select('svg').attr('class', 'board');

class Pong {
	constructor () {
		this.player1 = new Player('1', 'l');
		this.player2 = new Player('2', 'r');
	}
}

var game = new Pong();

