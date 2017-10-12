$(document).ready(function(){

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

	//slider el
	$(".slider").owlCarousel({
	 items : 4,
		responsive : {
				0:{
					items : 2
				},
				768:{
					items : 3
				},
				960:{
					items : 4
				},

			},
	 margin:50,
	 autoHeight : true,
	 dots: false,
	 autoplay : true,
	 singleItem:true,
	 nav:true,
	 navText:[
			'<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>',
			'<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>'
	 ]
	 }
	);
	//slider el === end

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

	//var bodyExtend =$('.head-container').height();
	//$('body').css('paddingTop',bodyExtend);
	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

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
	if (detectIE() <= 14 && detectIE()) {
		$('body').empty();
		$('body').prepend('' +
		 '<div class="old-browser">' +
			'<div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br>' +
			'<div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br>' +
		'</div>');
	}

	//for init SVG 
	svg4everybody();
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

;( function( window, document )
{
	'use strict';

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