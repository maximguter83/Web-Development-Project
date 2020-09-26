$(function() {
// header_scroll v ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 30) {
			$('.header').addClass('header_scroll');
		} else {
			$('.header').removeClass('header_scroll');
		}
	});
// header_scroll ^ ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// burger v ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	$('.burger').click(function() {
		$('.page, .nav__menu, .burger, .search').toggleClass('burger-active');
	});
// burger ^ ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// search v ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	function search() {
		var editableEl = $('.header, .logo, .nav, .nav__menu, .burger, .search, .search__input, .search__reset, .search__submit, .search__img');
		var search = $('.search');
		var searchInput = $('.search__input');
		var searchReset = $('.search__reset');
		var searchImg = $('.search__img');

		searchImg.click(function() {
			editableEl.addClass('search-active');
			searchInput.focus();
		});

		$(document).click(function(e) {
			if (!search.is(e.target) && search.has(e.target).length === 0) {
				editableEl.removeClass('search-active');
			}
		});

		searchReset.click(function() {
			searchInput.focus();
			if (!searchInput.val()) {
				editableEl.removeClass('search-active');
			}
		});
	};
	search();
// search ^ ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// btn-down v ||||||||||||||||||||||||||||||||||||||||||||||||
	$('.btn-down').click(function() {
		$('html').animate({scrollTop: $('.section-main + .section').offset().top + 'px'}, 1000);
	});
// btn-down ^ ||||||||||||||||||||||||||||||||||||||||||||||||

// tariff_offer v ||||||||||||||||||||||||||||||||||||||||||||||||
	$('.tariff_offer .btn').removeClass('btn_alt');
// tariff_offer ^ ||||||||||||||||||||||||||||||||||||||||||||||||

// slider v ||||||||||||||||||||||||||||||||||||||||||||||||
	var slideShow = $('.slider__viewport');
	var track = $('.slider__track');
	var slide = $('.slider__slide');
	var pager = $('.slider__pager');

	var slidesCount = slide.length;
	var slidesCountVisible;
	var slidesCountPrev = 0;
	var stepSlidesForPager;

	var pagerDotsCount;
	var pagerDot = $('.slider__pager-dot');

	var slideWidth;
	var slideMarginPercentage ;
	var slideMarginPixel;

	function calcSlider() {
		if (window.innerWidth <= 600) {
			slidesCountVisible = 1;
			stepSlidesForPager = 1;
			slideMarginPercentage = 0;
		} else {
			slidesCountVisible = 3;
			stepSlidesForPager = 3;
			slideMarginPercentage = 2.45;
		}

		slideMarginPixel = (slideShow.width() / 100) * slideMarginPercentage;
		slideWidth = (slideShow.width() / slidesCountVisible) - slideMarginPixel / (slidesCountVisible / --slidesCountVisible);
		slide.css({
			'min-width': slideWidth,
			'margin-right': slideMarginPixel,
		});

		pagerDotsCount = Math.ceil(slidesCount / stepSlidesForPager);
		pagerDot.remove();
		for (var i = 0; i < pagerDotsCount; i++) {
			pager.prepend('<div class="slider__pager-dot"></div>');
		};
		pagerDot = $('.slider__pager-dot');

		pagerDot.click(function() {
			slidesCountPrev = stepSlidesForPager * $(this).index();
			moveSlides();
			chekBtn();
		});
	};
	calcSlider ();



	function chekBtn() {
		pagerDot.removeClass('active');
		var indexActiveDotPager = Math.ceil(slidesCountPrev / stepSlidesForPager);
		pagerDot.eq(indexActiveDotPager > (pagerDotsCount - 1) ? (pagerDotsCount - 1) : indexActiveDotPager).addClass('active');
	};
	chekBtn();



	function moveSlides() {
		track.css({
			transform: 'translateX(' + (-(slidesCountPrev * (slideWidth + slideMarginPixel))) + 'px)'
		});
	};
	moveSlides();



	$(window).resize(function () {
		calcSlider ();
		moveSlides();
		chekBtn();
	});
// slider ^ ||||||||||||||||||||||||||||||||||||||||||||||||
});// END ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||