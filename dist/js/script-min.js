$(document).ready(function(){function e(){var e=window.navigator.userAgent,o=e.indexOf("MSIE ");if(o>0)return parseInt(e.substring(o+5,e.indexOf(".",o)),10);var s=e.indexOf("Trident/");if(s>0){var r=e.indexOf("rv:");return parseInt(e.substring(r+3,e.indexOf(".",r)),10)}var t=e.indexOf("Edge/");return t>0&&parseInt(e.substring(t+5,e.indexOf(".",t)),10)}var o=function(e,o){$(e).click(function(e){e.stopPropagation(),$(o).slideToggle("fast")}),$(document).on("click",function(){$(o).hide()})};o(".nav-toggle",".menu-wrap"),$(".validate-form").each(function(){$(this);$(this).validate({highlight:function(e){$(e).parent().addClass("field-error")},unhighlight:function(e){$(e).parent().removeClass("field-error")},rules:{name:{required:!0},phone:{required:!0,minlength:5,number:!0},comment:{required:!0,minlength:5},agree:{required:!0}},messages:{name:{required:"Обязательное поле"},phone:{required:"Обязательное поле",number:"Введите правильный номер",minlength:"Номер должен быть длиннее"},comment:{required:"Обязательное поле",minlength:"Сообщение должно быть длиннее"},agree:{required:!1}},submitHandler:function(e){$.ajax({type:"POST",url:"/wp-content/themes/AAK/sender.php",data:$(e).serialize(),timeout:3e3}),$(".modal-close").click(),setTimeout(function(){$(".modal-true").bPopup({closeClass:"modal-close",position:["auto","auto"],follow:[!0,!0],autoClose:2e3}),$(":input",".validate-form").not(":button, :submit, :reset, :hidden").val("").removeAttr("checked").removeAttr("selected")},2e3)}})}),$(".modal-content").click(function(e){e.stopPropagation()});var s=0,r=function(){return $(".modal-layer").hasClass("modal-layer-show")||$(".modal-layer").addClass("modal-layer-show"),s=$(window).scrollTop(),console.log(s),$("body").css({overflow:"hidden",position:"fixed",overflowY:"scroll",top:-s,width:"100%"}),s},t=function(){console.log("scrollPos",s),$(".modal-layer").removeClass("modal-layer-show"),$("body").removeClass("modal-fix"),$("body").css({overflow:"",position:"",top:""}),$(window).scrollTop(s),$(".modal").removeClass("modal__show"),$(".enter").removeClass("enter--open"),$(".basket").removeClass("basket--open")};$(".modal-get").click(function(){r(),$(".enter").removeClass("enter--open"),$(".basket").removeClass("basket--open");var e=$(this).data("modal");$(".modal").each(function(){$(this).data("modal")===e?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var o=$(".modal.modal__show").height();$(".modal-filter").height(o+60),$(".modal-wrap").css("minHeight",o+60)}),$(".modal-layer , .modal-close").click(function(){t(),console.log("cloose")}),$(".fancybox").fancybox();var l=750;$(window).scroll(function(){var e=$(this).scrollTop();e>=l?$(".scroll-up").addClass("scroll-up--show"):$(".scroll-up").removeClass("scroll-up--show")}),$(".scroll-up").click(function(){return $("html, body").animate({scrollTop:0},800),!1}),$(".slider-certificate").owlCarousel({items:3,responsive:{0:{items:4},768:{items:3},960:{items:3}},margin:20,autoHeight:!0,dots:!1,autoplay:!1,singleItem:!0,loop:!0,nav:!0,navText:['<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>','<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>']}),$(".slider-customer").owlCarousel({items:5,responsive:{0:{items:4},768:{items:3},960:{items:5}},margin:20,autoHeight:!0,dots:!1,autoplay:!1,singleItem:!0,loop:!0,nav:!0,navText:['<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>','<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>']}),$(".slider-header-baner").owlCarousel({items:1,margin:20,autoHeight:!0,dots:!1,autoplay:!0,singleItem:!0,loop:!0,nav:!0,navText:['<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>','<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>']});var a=250,n=$(".header").height();$(window).scroll(function(){var e=$(this).scrollTop();e>=a?($(".header").addClass("shrink"),$("body").css("paddingTop",n)):($(".header").removeClass("shrink"),$("body").css("paddingTop",0))}),$(window).resize(function(){n=$(".header").height()}),console.log(e()),e()<=14&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br><div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br></div>')),svg4everybody(),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()})}),function(e,o){"use strict";var s="img/pack.html",r=1;if(!o.createElementNS||!o.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var t,l,a="localStorage"in e&&null!==e.localStorage,n=function(){o.body.insertAdjacentHTML("afterbegin",l)},i=function(){o.body?n():o.addEventListener("DOMContentLoaded",n)};if(a&&localStorage.getItem("inlineSVGrev")==r&&(l=localStorage.getItem("inlineSVGdata")))return i(),!0;try{t=new XMLHttpRequest,t.open("GET",s,!0),t.onload=function(){t.status>=200&&t.status<400&&(l=t.responseText,i(),a&&(localStorage.setItem("inlineSVGdata",l),localStorage.setItem("inlineSVGrev",r)))},t.send()}catch(d){}}(window,document);