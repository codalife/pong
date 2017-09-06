var Ball = function() {
	this.position = {
		x: 200,
		y: 200
	}
}

Ball.prototype.move = function (direction) {
	var direction = direction ||  {
		xAxis: Math.floor(Math.random() * 5 + 1),
		yAxis: Math.floor(Math.random() * 5),
	}

	this.position = {
		x: this.position.x + direction.xAxis,
		y: this.position.y + direction.yAxis,
	}

	setTimeout(() => {
		this.move(direction);
	}, 10);
}

module.exports.ball = Ball;