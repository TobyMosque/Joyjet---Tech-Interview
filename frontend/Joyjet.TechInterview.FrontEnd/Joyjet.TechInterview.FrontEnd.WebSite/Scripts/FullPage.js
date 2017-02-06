define('FullPage', function () {
    var FullPage = function (selector) {
        var that = this;
        this.selector = selector;
        this.container = document.querySelector(selector);
        this.panels = this.container.querySelectorAll("section.panel");
        this.panel = parseInt(this.container.dataset.panel);        

        var Swipe = require('Swipe');
        this.swipe = new Swipe(this.container, ["vertical"], this.swipeCallBack.bind(this));
        this.swipe.enable();

        this.container.addEventListener("transitionend", this.onTransitionEnd.bind(this));

        var css = [].reduce.call(this.panels, function (css, panel, index) {
            //uglify nao suporta interpolação.
            /*return `${css}
                ${that.selector}[data-panel='${index + 1}'] {
                    transform: translateY(${-100 * index}%);
                }
            `;*/
            return css + "\n\
                " + that.selector + "[data-panel='" + (index + 1) + "'] {\n\
                    transform: translateY(" + (-100 * index ) + "%);\n\
                }\n\
            ";
        }, "");

        var blob = new Blob([css], { type: 'text/css' });
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = URL.createObjectURL(blob);
        document.head.appendChild(link);
    }

    var readOnly = { configurable: false, enumerable: false, writable: false };
    Object.defineProperty(FullPage.prototype, "swipeCallBack", Object.assign({
        value: function (direction) {
            var increment = 0;
            if (direction == "up" && this.panel < this.panels.length) {
                increment = 1;
            }
            if (direction == "down" && this.panel > 1) {
                increment = -1
            }
            if (increment != 0) {
                this.panel += increment;
                this.swipe.disable();
                this.container.dataset.panel = this.panel;
                if (this.onPanelChange) {
                    this.onPanelChange(this.panel);
                }
            }
        }
    }, readOnly));

    Object.defineProperty(FullPage.prototype, "onTransitionEnd", Object.assign({
        value: function (event) {
            this.swipe.enable();
        }
    }, readOnly));

    Object.defineProperty(FullPage.prototype, "goToPanel", Object.assign({
        value: function (panel) {
            this.panel = panel;
            this.swipe.disable();
            this.container.dataset.panel = this.panel;
            if (this.onPanelChange) {
                this.onPanelChange(this.panel);
            }
        }
    }, readOnly));
    return FullPage;
});