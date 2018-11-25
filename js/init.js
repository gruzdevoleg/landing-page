$(function() {
	$(".tabs").tabs();
    $(".portfolio-tabs").tabs();
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        items:1
    })
});

// google-map
(function openMapClickHandler() {
	
	const showHideMap = () => {
		document.querySelector('.map-cover').classList.toggle('hide');
		document.querySelector('.hideMap-btn').classList.toggle('hide');
	};

	document.querySelector('.map-cover__content').addEventListener('click', showHideMap);
	document.querySelector('.hideMap-btn').addEventListener('click', showHideMap);

})();

// mobile menu
(function burgerClickHandler() {

	const showHideMobileMenu = () => {
		document.querySelector('.burger').classList.toggle('active');
		document.querySelector('.header-nav').classList.toggle('active');
	};
	
	document.querySelector('.burger').addEventListener('click', showHideMobileMenu);
	/*window.addEventListener('resize', windowResizeHandler);*/
})();

