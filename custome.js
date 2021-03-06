// Isotope plugin code
// init Isotope
var $grid = $(".portfolio_item").isotope({
  // options
});
// filter items on button click
$(".portfolio_menu").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({
    filter: filterValue,
  });
});

// Slick plugin Code

$("document").ready(function () {
  $(".logo-area").slick({
    slidesToShow: 6,
    slidesToScrool: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});