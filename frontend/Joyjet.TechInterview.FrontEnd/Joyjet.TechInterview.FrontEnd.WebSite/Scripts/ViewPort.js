define('ViewPort', function () {
    var ViewPort = function (selector) {
        var that = this;
        this.selector = selector;
        this.container = document.querySelector(selector);
        window.addEventListener("resize", this.onResize.bind(this));
        this.onResize();
    }

    Object.readOnlyProperty(ViewPort, "viewPorts", {
        value: [
            { "class": "vp-extra-small", min: 0, max: 540 },
            { "class": "vp-small", min: 540, max: 720 },
            { "class": "vp-medium", min: 720, max: 960 },
            { "class": "vp-large", min: 960, max: 1140 },
            { "class": "vp-extra-large", min: 1140, max: Infinity }
        ]
    });

    Object.readOnlyProperty(ViewPort.prototype, "onResize", {
        value: function (event) {
            var viewPort = ViewPort.viewPorts.filter(function (viewPort) {
                return viewPort.min < window.outerWidth && viewPort.max > window.outerWidth;
            })[0];
            if (!this.currentClass) {
                this.currentClass = viewPort.class;
                this.container.classList.add(this.currentClass);
            } else if (this.currentClass != viewPort.class) {
                this.container.classList.remove(this.currentClass);
                this.currentClass = viewPort.class;
                this.container.classList.add(this.currentClass);
            }
        }
    });
    return ViewPort;
});