(function($){
    $(window).load(function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
				    offset:200,
				    highlightClass:"left-nav-el-active"
				});
				console.log('hii');
    });
 })(jQuery);

$(document).ready(function(){


	//calc
	$('.calc-get').click(function(){
		var price = $('.calc-price').val()*1;  // Цена биткоина

		var numbBit = (($('.calc-count').val()*1) / ($('.calc-price').val()*1))/100 * 99; // Сколько купил
		 $('.calculator__total--numbBit span').html(numbBit);


		var numbSale = ((numbBit/100 * 99)); // сколько буду продавать
		 $('.calculator__total--item span').html(numbSale);

		//var countSale = $('.calc-count').val()*1 + (($('.calc-count').val()*1) - (numbSale*price));
		var countSale =($('.calc-count').val()*1) / numbSale;
		 $('.calculator__total--sale span').html(countSale); // Минимальная цена перепродажи


		var delta =(numbSale*($('.calc-sale').val()*1)) -  $('.calc-count').val()*1; // Прибыль

		 $('.calculator__total--get span').html(delta);
		 //$('.calculator__total--get span').html(getVal);

	});
	//calc-end
	//smooth scroll
	$(document).on('click', 'a[href^="#"]', function (event) {
			event.preventDefault();
			$('html, body').animate({
					scrollTop: $($.attr(this, 'href')).offset().top - 50
			}, 1500);
	});
	//smooth scroll===end

	//range slider
  $(".calc-range").ionRangeSlider({
 		values: [
 			"400 кв.м.",
 			"600 кв.м.",
 			"800 кв.м.",
 			"1000 кв.м.",
 			"1400 кв.м.",
 			"1600 кв.м.",
 			"2000 кв.м."
 		],
 		grid: true,
 		onChange: function (data) {
 				if(data.from_value == "0 кв.м."){
 					$('.calc-range-numb').text('0');
 				}
 				if(data.from_value == "400 кв.м."){
 					$('.calc-range-numb').text('14 000 ');
 				}
 				if(data.from_value == "800 кв.м."){
 					$('.calc-range-numb').text('14 000 ');
 				}
 				if(data.from_value == "1000 кв.м."){
 					$('.calc-range-numb').text('15 000 ');
 				}
 				if(data.from_value == "1400 кв.м."){
 					$('.calc-range-numb').text('20 000 ');
 				}
 				if(data.from_value == "2000 кв.м."){
 					$('.calc-text--attansion').show();
 				} else {
 					$('.calc-text--attansion').hide();
 				}
    }
 	});
	//range slider===end

	//range slider
  $(".calc-range--topograf").ionRangeSlider({
 		values: [
 			"600 кв.м.",
 			"800 кв.м.",
 			"1000 кв.м.",
 			"1400 кв.м.",
 			"1600 кв.м.",
 			"2000 кв.м."
 		],
 		grid: true,
 		onChange: function (data) {
 				if(data.from_value == "0 кв.м."){
 					$('.calc-range-numb').text('0');
 				}
 				if(data.from_value == "600 кв.м."){
 					$('.calc-range-numb').text('10 000 ');
 				}
 				if(data.from_value == "800 кв.м."){
 					$('.calc-range-numb').text('10 000 ');
 				}
 				if(data.from_value == "1000 кв.м."){
 					$('.calc-range-numb').text('15 000 ');
 				}
 				if(data.from_value == "1400 кв.м."){
 					$('.calc-range-numb').text('15 000 ');
 				}
 				if(data.from_value == "2000 кв.м."){
 					$('.calc-text--attansion').show();
 				} else {
 					$('.calc-text--attansion').hide();
 				}
    }
 	});
	//range slider===end

	//drop menu
	var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.nav-toggle','.menu-wrap');
	//drop menu===end

	//new WOW().init();



	//modals
	$('.modal-content').click(function(event){
		event.stopPropagation();
	});
	var scrollPos = 0;

	var openModal = function () {
	if(!$('.modal-layer').hasClass('modal-layer-show')){
		$('.modal-layer').addClass('modal-layer-show');
	}
	 scrollPos = $(window).scrollTop();
		$('body').css({
			overflow: 'hidden',
			position: 'fixed',
			overflowY: 'scroll',
			top : -scrollPos,
			width:'100%'
		});
		return scrollPos;
	};

	var closeModal = function () {
		console.log("scrollPos",scrollPos);
  	$('.modal-layer').removeClass('modal-layer-show');
  	$("body").removeClass("modal-fix");
  	$('body').css({
			overflow: '',
			position: '',
			top: ''
		})
    $(window).scrollTop(scrollPos);
    $('.modal').removeClass('modal__show');
		$('.enter').removeClass('enter--open');
		$('.basket').removeClass('basket--open');
	};

	var initModal = function(el){
		openModal();
		$('.enter').removeClass('enter--open');
		$('.basket').removeClass('basket--open');
		$('.modal').each(function () {
			if ($(this).data('modal')===el){
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $(window).height();
		$('.modal-filter').height(modalHeightCont);
		$('.modal-wrap').css('height',modalHeightCont );
		$('.modal-wrap').css('minHeight',modalHeightCont );
	}

	$('.modal-get').click(function (){
		var currentModal = $(this).data("modal");
		initModal(currentModal);
	});

	$('.modal-layer , .modal-close').click(function (){
		closeModal();
	});
	//modals ===end

	//validate
	$('.validate-form').each(function() {
		var curentForm = $(this);
    $(this).validate({
    			highlight: function(element) { //даем родителю класс если есть ошибка
							$(element).parent().addClass("field-error");
					},
					unhighlight: function(element) {
							$(element).parent().removeClass("field-error");
					},
		    	rules:{ //правила для полей
						name:{
							required:true,
						},
						phone:{
							required:true,
							minlength:5,
							number:true
						},
						comment:{
							required:true,
							minlength:5,
						},
						agree: {
							required: true
						}
					},
					messages:{
						name:{
							required: 'Обязательное поле',
						},
						phone:{
							required: 'Обязательное поле',
							number:'Введите правильный номер',
							minlength:'Номер должен быть длиннее',
						},
						comment:{
							required: 'Обязательное поле',
							minlength:'Сообщение должно быть длиннее',
						},
						agree:{
							required: false,
						}
					},
					submitHandler : function(form){
						$.ajax({ //отправка ajax
						            type: "POST",
						            url: "/wp-content/themes/AAK/sender.php",
						            data: $(form).serialize(),
						            timeout: 3000,
						          });
							closeModal();
							initModal("next");
							setTimeout(function(){
										closeModal();
										$(':input','.validate-form') //очитска формы от данных
										  .not(':button, :submit, :reset, :hidden')
										  .val('')
										  .removeAttr('checked')
										  .removeAttr('selected')
							},2500)

				}
		    });
		});
	//validate===end


	//fancy-box
	$(".fancybox").fancybox();
	//fancy-box === end

	//scroll top
	var scrollTop = 750;
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= scrollTop ) {
				//var heightHeader=$('.header-main-wrap').height();
				$('.scroll-up').addClass('scroll-up--show');
			}
			else {
					$('.scroll-up').removeClass('scroll-up--show');
			}
	});

	$('.scroll-up').click(function() {
    $('html, body').animate({scrollTop: 0},800);
    return false;
  });
	//scroll top ===end



	//animate top menu
	var shrinkHeader = 250;
	var heightHeader=$('.header').height();
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= shrinkHeader ) {
				$('.header').addClass('shrink');
				$('body').css('paddingTop',heightHeader);
			}
			else {
					$('.header').removeClass('shrink');
					$('body').css('paddingTop',0);
			}
	});

	$(window).resize(function(){
		heightHeader=$('.header').height();
	});
	//animate top menu === end


	function detectIE() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}

	console.log(detectIE());
	if (detectIE() <= 10 && detectIE()) {
		$('body').empty();
		$('body').prepend('' +
		 '<div class="old-browser">' +
			'<div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br>' +
			'<div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br>' +
		'</div>');
	}

	//for init SVG
	//svg4everybody();
	// ==== clear storage =====
	 localStorage.clear();
	 sessionStorage.clear();
	 $(window).unload(function(){
		 localStorage.clear();
	 });
	// ==== clear storage end =====


	/* ###### For SlideToggle Elements  ######*/
	/*var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.icon-bars','.top-menu_link');*/

})

//cash SVG
$(window).load(function () {
	//slider el
	$(".slider-certificate").owlCarousel({
	 items : 3,
		responsive : {
				0:{
					items : 4
				},
				768:{
					items : 3
				},
				960:{
					items : 3
				},

			},
	 margin:20,
	 autoHeight : true,
	 dots: false,
	 autoplay : false,
	 singleItem:true,
	 nav:true,
	 navText:[
			'<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>',
			'<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>'
	 ]
	 }
	);

	$(".slider-customer").owlCarousel({
	 items : 5,
		responsive : {
				0:{
					items : 4
				},
				768:{
					items : 3
				},
				960:{
					items : 5
				},

			},
	 margin:20,
	 autoHeight : true,
	 dots: false,
	 autoplay : false,
	 singleItem:true,
	 loop:true,
	 nav:true,
	 navText:[
			'<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>',
			'<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>'
	 ]
	 }
	);

	$(".slider-header-baner").owlCarousel({
		 items : 1,
		 margin:20,
		 autoHeight : true,
		 dots: false,
		 autoplay : false,
		 singleItem:true,
		 loop:true,
		 //animateOut: 'fadeOut',
		 nav:true,
		 navText:[
				'<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>',
				'<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>'
		 ]
	 }
	);
	$(".questions-slider").owlCarousel({
		 items : 1,
		 margin:20,
		 autoHeight : true,
		 dots: true,
		 autoplay : false,
		 singleItem:true,
		 loop:true,
		 //animateOut: 'fadeOut',
	 }
	);
	//slider el === end
})
;( function( window, document )
{
	'use strict';

	//var file  = '/wp-content/themes/CGIKU/img/pack.html',
	var file  = 'img/pack.html',
		revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
		request,
		data,
		insertIT = function()
		{
			document.body.insertAdjacentHTML( 'afterbegin', data );
		},
		insert = function()
		{
			if( document.body ) insertIT();
			else document.addEventListener( 'DOMContentLoaded', insertIT );
		};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );