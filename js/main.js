$(function(){
    // Image slider
    $('.promo__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="promo__slider_btn btn__prev"><img src="images/btn_slider_left.svg" /></button>',
        nextArrow: '<button type="button" class="promo__slider_btn btn__next"><img src="images/btn_slider_right.svg" /></button>'
    });
    // Image slider

    // Tabs
    $('.tabs__panel_item').on('click', function(e) {
        e.preventDefault();

        $(this).siblings('.tabs__panel_item').removeClass('active');

        $(this).addClass('active');

        $(this).closest('.tabs__panel').siblings('.tabs__data').find('.tabs__data_item').hide();

        $($(this).attr('href')).show();
    });

    $('.tabs__panel').each(function() {
        $(this).find('.tabs__panel_item').first().trigger('click');
    });
    // Tabs

    // Wishlist button
    $('.product__item_wishlist').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('active');
    });
    // Wishlist button

    // Add to cart button
    $('.product__item_cart').on('click', function(e) {
        e.preventDefault();
    });
    // Add to cart button

    $('.products__slider').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="product__slider_btn btn__prev"><img src="images/btn_slider_left_black.svg" /></button>',
        nextArrow: '<button type="button" class="product__slider_btn btn__next"><img src="images/btn_slider_right_black.svg" /></button>'
    });
});