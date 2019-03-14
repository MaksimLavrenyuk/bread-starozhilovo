$(document).ready(function() {
	$(function() {
		if ($(window).width() < 1200){
			$('<div>', { class: 'mobile-menu__header'}).appendTo('.mobile-menu');

			$('.header .navbar-toggler').clone().appendTo('.mobile-menu__header');
			$('.header .logo').clone().appendTo('.mobile-menu__header');

			$('<div>', { class: 'mobile-menu__content'}).appendTo('.mobile-menu');
			$('<div>', { class: 'mobile-menu__nav'}).appendTo('.mobile-menu__content');
			
			
			$('.header-navbar .header-navbar__link').each(function(index) {
				$(this).clone().appendTo('.mobile-menu__nav').removeClass('header-navbar__link').addClass('mobile-menu__link');
			});

		};

	 	$('.navbar-toggler').click(function(e) {
	 		e.preventDefault();
	 		if ($('.navbar-toggler').hasClass('open')) {
	 			closeMenu();
	    	} else {
	    		openMenu();
	    	};
	 	});

	 	function openMenu() {
			$('body').addClass('body_menu-open');
	 		$('.mobile-menu').addClass('open');
	 		$('.navbar-toggler').addClass('open');
 			createBodyOverlay();
		};

		function closeMenu() {
			$('body').removeClass('body_menu-open');
	 		$('.mobile-menu').removeClass('open');
	 		$('.navbar-toggler').removeClass('open');
	    	removeBodyOverlay();
		};

		function createBodyOverlay() {
			$('body').prepend('<div id="body-overlay" class="body-overlay"></div>');
			setTimeout(function () {
				$('#body-overlay').addClass('body-overlay_done');
			}, 500); 
			$('#body-overlay').click(function(e) {
	 			closeMenu();
	 		});
		};

		function removeBodyOverlay() {
			$('#body-overlay').removeClass('body-overlay_done');
	    	setTimeout(function () {
				$('#body-overlay').remove();
			}, 500); 
		};

		/*
			функция переноса объекта в контейнер.
			box - селектор объекта, который нужно перенести.
			container - cелектор объекта, куда нужно перенести.
			В параметры передавать строки
		*/

		function transfer(box, container) {
			$(container).append($(box));
		};
		/*
			функция переноса детей объекта в контейнер.
			box - селектор объекта, детей которого нужно перенести.
			container - cелектор объекта, куда нужно перенести.
			В параметры передавать строки.

		*/
		function transferChild(box, container) {
			$(container).append($(box).children());
		};
	
	});

});
