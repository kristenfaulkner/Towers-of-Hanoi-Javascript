(function (root) {
  var Timer = root.Timer = (root.Timer || {});

  var Clock = Timer.Clock = function() {
  };


  Clock.prototype.updateTime = function () {
    this.sec += 5;
    if (this.sec > 60) {
      this.min++;
      this.sec -= 60;
    }  
    if (this.min > 60) {
      this.hour++;
      this.min -= 60;
    }
    this.hour = this.hour % 24;
  }

  Clock.prototype.getTime = function () {
    return [this.hour, this.min, this.sec].join(":");
  }

  Clock.prototype.run = function(date) {
    this.hour = date.getHours();
    this.min = date.getMinutes();
    this.sec = date.getSeconds();
    var that = this;
    console.log(that.getTime());
    root.setInterval(function () {
        that.updateTime();
        console.log(that.getTime());
    }, 5000)
  }

})(this);

var c = new this.Timer.Clock();
c.run(new Date());


