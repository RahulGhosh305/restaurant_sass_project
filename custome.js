// Isotope plugin
// init Isotope
var $grid = $('.portfolio_item').isotope({
    // options
});
// filter items on button click
$('.portfolio_menu').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});