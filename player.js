var Player = class {
  constructor(username, side) {
    this.username = username;
    this.score = 0;
    this.width = 10;
    this.length = 160; // length of the bar
    this.x = side === 'l' ? 10 : 748; // some value far left or far right of board
    this.position = 10;  // top position of the bar
                        //   bottom will be this.position + this.length
    this.bar = svg.append('rect')
                    .attr('class', `${this.username} bar`)
                    .attr('x', this.x)
                    .attr('y', this.position)
                    .attr('width', this.width)
                    .attr('height', this.length);

    // setup mouse event handler
    svg.on({
      'mousemove': function() {
        var p = d3.mouse(this);
        d3.select(`rect`)
          .attr('y', p[1]-80);
      },
      // 'mouseover': function(d) {
      //   d3.select(this).style("cursor", "none"); 
      // },
      // 'mouseout': function(d) {
      //   d3.select(this).style("cursor", "default"); 
      // }
    });
  }
}