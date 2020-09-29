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
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
