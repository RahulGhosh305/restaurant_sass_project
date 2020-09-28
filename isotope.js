// $('.portfolio_item').isotope({
//     // options
//     // itemSelector: '.photos_item',
//     // layoutMode: 'fitRows'
// });
// $('.portfolio_menu').click('li', function () {
//     // $('.portfolio_menu ul li').removeClass('active');
//     // $(this).addClass('active');

//     var selector = $(this).attr('data-filter');
//     $('.portfolio_item').isotope({
//         filter: selector
//     });
//     return false;
// });
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