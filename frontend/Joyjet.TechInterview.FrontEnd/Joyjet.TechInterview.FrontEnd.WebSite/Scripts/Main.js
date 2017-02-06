define('Main', function () {
    var FullPage = require('FullPage');
    var fullPage = new FullPage("div.panels");
    
    var ViewPort = require('ViewPort');
    var viewPort = new ViewPort("body");

    var header = document.querySelector("header");
    fullPage.onPanelChange = function (panel) {
        header.classList.toggle("blue", panel != 1);
    }

    var nav = document.querySelector(".nav-wrapper");
    var links = nav.querySelectorAll("nav [data-panel]");
    var header = document.querySelector("header");
    var menu = header.querySelector("header #menu");

    var onNavigationClick = function (event) {
        event.preventDefault();
        nav.classList.remove("open");
        header.classList.remove("close");
        var panel = parseInt(event.target.dataset.panel);
        fullPage.goToPanel(panel);
    };
    menu.addEventListener("click", function () {
        var isClosed = !header.classList.contains("close");
        nav.classList.toggle("open", isClosed);
        header.classList.toggle("close", isClosed);
    });
    
    //uglify não suporta arrow functions.
    //[].forEach.call(links, nav => nav.addEventListener("click", onNavigationClick));
    [].forEach.call(links, function (nav) { nav.addEventListener("click", onNavigationClick) });
});