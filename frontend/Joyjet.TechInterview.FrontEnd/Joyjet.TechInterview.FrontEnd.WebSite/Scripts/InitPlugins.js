define('InitPlugins', function () {
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