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
    
    [].forEach.call(links, nav => nav.addEventListener("click", onNavigationClick));
        

    $('.carrousel').slick({
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        customPaging: function () {
            return '<div class="slick-dot"></div>';
        },
        prevArrow: '<div class="slick-prev slick-arrow"></div>',
        nextArrow: '<div class="slick-next slick-arrow"></div>',
        responsive: [
          {
              breakpoint: 960,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          },
          {
              breakpoint: 720,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 540,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
    });
});