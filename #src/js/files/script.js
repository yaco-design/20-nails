$("input[type=phone]").mask("+7 (999) 999-9999");
$("input[type=tel]").mask("+7 (999) 999-9999");

// tabs script
$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function (e) {
	e.preventDefault();
	let $this = $(this),
		tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
		others = $this.closest('li').siblings().children('a'),
		target = $this.attr('href');
	others.removeClass('active');
	$this.addClass('active');
	$(tabgroup).children('div').hide();
	$(target).show();
});

// staff slider

$('.staff-box-body').slick({
	dots: false,
	arrows: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


// gallery slider

$('.gallery-box-body').slick({
	dots: false,
	arrows: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
	]
});


// reviews slider

$('.reviews-box-slider').slick({
	dots: false,
	arrows: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
});