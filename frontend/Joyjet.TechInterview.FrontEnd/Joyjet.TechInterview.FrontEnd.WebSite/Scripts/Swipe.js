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

    var readOnly = { configurable: false, enumerable: false, writable: false };
    Object.defineProperty(Swipe.prototype, "checkDirection", Object.assign({
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
    }, readOnly));
    Object.defineProperty(Swipe.prototype, "enable", Object.assign({
        value: function () {
            this.element.addEventListener("touchstart", this.events.touchStart);
            this.element.addEventListener("touchmove", this.events.touchMove);
            this.element.addEventListener("touchend", this.events.touchEnd);
            this.element.addEventListener("mousewheel", this.events.mouseWheel);
            this.element.addEventListener("mousedown", this.events.mouseDown);
            this.element.addEventListener("mouseup", this.events.mouseUp);
        }
    }, readOnly));
    Object.defineProperty(Swipe.prototype, "disable", Object.assign({
        value: function () {
            this.element.removeEventListener("touchstart", this.events.touchStart);
            this.element.removeEventListener("touchmove", this.events.touchMove);
            this.element.removeEventListener("touchend", this.events.touchEnd);
            this.element.removeEventListener("mousewheel", this.events.mouseWheel);
            this.element.removeEventListener("mousedown", this.events.mouseDown);
            this.element.removeEventListener("mouseup", this.events.mouseUp);
        }
    }, readOnly));
    Object.defineProperty(Swipe.prototype, "onTouchStart", Object.assign({
        value: function (event) {
            this.touchStart = this.touchEnd = {
                horizontal: event.touches[0].clientX,
                vertical: event.touches[0].clientY
            }
        }
    }, readOnly));
    Object.defineProperty(Swipe.prototype, "onTouchMove", Object.assign({
        value: function (event) {
            this.touchEnd = {
                horizontal: event.touches[0].clientX,
                vertical: event.touches[0].clientY
            }
        }
    }, readOnly));
    Object.defineProperty(Swipe.prototype, "onTouchEnd", Object.assign({
        value: function (event) {
            var diff = {
                horizontal: this.touchStart.horizontal - this.touchEnd.horizontal,
                vertical: this.touchStart.vertical - this.touchEnd.vertical
            }
            console.log(diff);
            this.checkDirection(diff);
        }
    }, readOnly));
    Object.defineProperty(Swipe.prototype, "onMouseWheel", Object.assign({
        value: function (event) {
            var increment = event.wheelDelta < 0 ? 1 : event.wheelDelta > 0 ? -1 : 0;
            if (increment != 0 && this.directions.indexOf("vertical") != -1) {
                var direction = increment == 1 ? "up" : "down";
                this.callback(direction);
            }
        }
    }, readOnly));
    Object.defineProperty(Swipe.prototype, "onMouseDown", Object.assign({
        value: function (event) {
            this.mouseDown = {
                horizontal: event.clientX,
                vertical: event.clientY
            };
        }
    }, readOnly));
    Object.defineProperty(Swipe.prototype, "onMouseUp", Object.assign({
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
    }, readOnly));
    return Swipe;
});