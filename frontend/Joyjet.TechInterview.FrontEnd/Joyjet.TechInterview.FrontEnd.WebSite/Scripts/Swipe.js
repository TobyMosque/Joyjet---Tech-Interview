define('Swipe', function () {
    var Swipe = function (element, directions, callback) {
        this.element = element;
        this.directions = directions;
        this.touchStart = { horizontal: 0, vertical: 0 };
        this.touchEnd = { horizontal: 0, vertical: 0 };
        this.mouseDown = { horizontal: 0, vertical: 0 };
        this.mouseUp = { horizontal: 0, vertical: 0 };
        this.callback = callback;
        this.events = {
            touchStart: this.onTouchStart.bind(this),
            touchMove: this.onTouchMove.bind(this),
            touchEnd: this.onTouchEnd.bind(this),
            mouseWheel: this.onMouseWheel.bind(this),
            mouseDown: this.onMouseDown.bind(this),
            mouseUp: this.onMouseUp.bind(this)
        }
    }

    Object.readOnlyProperty(Swipe.prototype, "checkDirection", {
        value: function (diff) {
            var increment = {
                horizontal: diff.horizontal < -50 ? -1 : diff.horizontal > 50 ? 1 : 0,
                vertical: diff.vertical < -50 ? -1 : diff.vertical > 50 ? 1 : 0
            }
            if (increment.horizontal != 0 && this.directions.indexOf("horizontal") != -1) {
                var direction = increment.vertical == 1 ? "right" : "left";
                this.callback(direction);
            }
            if (increment.vertical != 0 && this.directions.indexOf("vertical") != -1) {                
                var direction = increment.vertical == 1 ? "up" : "down";
                this.callback(direction);
            }
        }
    });
    Object.readOnlyProperty(Swipe.prototype, "enable", {
        value: function () {
            this.element.addEventListener("touchstart", this.events.touchStart);
            this.element.addEventListener("touchmove", this.events.touchMove);
            this.element.addEventListener("touchend", this.events.touchEnd);
            this.element.addEventListener("mousewheel", this.events.mouseWheel);
            this.element.addEventListener("mousedown", this.events.mouseDown);
            this.element.addEventListener("mouseup", this.events.mouseUp);
        }
    });
    Object.readOnlyProperty(Swipe.prototype, "disable", {
        value: function () {
            this.element.removeEventListener("touchstart", this.events.touchStart);
            this.element.removeEventListener("touchmove", this.events.touchMove);
            this.element.removeEventListener("touchend", this.events.touchEnd);
            this.element.removeEventListener("mousewheel", this.events.mouseWheel);
            this.element.removeEventListener("mousedown", this.events.mouseDown);
            this.element.removeEventListener("mouseup", this.events.mouseUp);
        }
    });
    Object.readOnlyProperty(Swipe.prototype, "onTouchStart", {
        value: function (event) {
            this.touchStart = this.touchEnd = {
                horizontal: event.touches[0].clientX,
                vertical: event.touches[0].clientY
            }
        }
    });
    Object.readOnlyProperty(Swipe.prototype, "onTouchMove", {
        value: function (event) {
            this.touchEnd = {
                horizontal: event.touches[0].clientX,
                vertical: event.touches[0].clientY
            }
        }
    });
    Object.readOnlyProperty(Swipe.prototype, "onTouchEnd", {
        value: function (event) {
            var diff = {
                horizontal: this.touchStart.horizontal - this.touchEnd.horizontal,
                vertical: this.touchStart.vertical - this.touchEnd.vertical
            }
            console.log(diff);
            this.checkDirection(diff);
        }
    });
    Object.readOnlyProperty(Swipe.prototype, "onMouseWheel", {
        value: function (event) {
            var increment = event.wheelDelta < 0 ? 1 : event.wheelDelta > 0 ? -1 : 0;
            if (increment != 0 && this.directions.indexOf("vertical") != -1) {
                var direction = increment == 1 ? "up" : "down";
                this.callback(direction);
            }
        }
    });
    Object.readOnlyProperty(Swipe.prototype, "onMouseDown", {
        value: function (event) {
            this.mouseDown = {
                horizontal: event.clientX,
                vertical: event.clientY
            };
        }
    });
    Object.readOnlyProperty(Swipe.prototype, "onMouseUp", {
        value: function (event) {
            this.mouseUp = {
                horizontal: event.clientX,
                vertical: event.clientY
            };
            var diff = {
                horizontal: this.mouseDown.horizontal - this.mouseUp.horizontal,
                vertical: this.mouseDown.vertical - this.mouseUp.vertical
            };
            this.checkDirection(diff);
        }
    });
    return Swipe;
});