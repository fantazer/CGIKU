$(document).ready(function(){function e(){var e=window.navigator.userAgent,o=e.indexOf("MSIE ");if(o>0)return parseInt(e.substring(o+5,e.indexOf(".",o)),10);var t=e.indexOf("Trident/");if(t>0){var r=e.indexOf("rv:");return parseInt(e.substring(r+3,e.indexOf(".",r)),10)}var n=e.indexOf("Edge/");return n>0&&parseInt(e.substring(n+5,e.indexOf(".",n)),10)}$(document).on("click",'a[href^="#"]',function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top-50},1500)}),$(".calc-range").ionRangeSlider({values:[50,100,200,300,400],grid:!0,postfix:" кв.м",onChange:function(e){50==e.from_value&&$(".calc-range-numb").text("10 000 "),100==e.from_value&&$(".calc-range-numb").text("14 000 "),200==e.from_value&&$(".calc-range-numb").text("20 000 "),300==e.from_value&&$(".calc-range-numb").text("25 000 "),400==e.from_value&&$(".calc-range-numb").text("30 000 ")}});var o=function(e,o){$(e).click(function(e){e.stopPropagation(),$(o).slideToggle("fast")}),$(document).on("click",function(){$(o).hide()})};o(".nav-toggle",".menu-wrap"),$(".modal-content").click(function(e){e.stopPropagation()});var t=0,r=function(){return $(".modal-layer").hasClass("modal-layer-show")||$(".modal-layer").addClass("modal-layer-show"),t=$(window).scrollTop(),$("body").css({overflow:"hidden",position:"fixed",overflowY:"scroll",top:-t,width:"100%"}),t},n=function(){console.log("scrollPos",t),$(".modal-layer").removeClass("modal-layer-show"),$("body").removeClass("modal-fix"),$("body").css({overflow:"",position:"",top:""}),$(window).scrollTop(t),$(".modal").removeClass("modal__show"),$(".enter").removeClass("enter--open"),$(".basket").removeClass("basket--open")},a=function(e){r(),$(".enter").removeClass("enter--open"),$(".basket").removeClass("basket--open"),$(".modal").each(function(){$(this).data("modal")===e?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var o=$(window).height();$(".modal-filter").height(o),$(".modal-wrap").css("height",o),$(".modal-wrap").css("minHeight",o)};$(".modal-get").click(function(){var e=$(this).data("modal");a(e)}),$(".modal-layer , .modal-close").click(function(){n()}),$(".validate-form").each(function(){$(this);$(this).validate({highlight:function(e){$(e).parent().addClass("field-error")},unhighlight:function(e){$(e).parent().removeClass("field-error")},rules:{name:{required:!0},phone:{required:!0,minlength:5,number:!0},comment:{required:!0,minlength:5},agree:{required:!0}},messages:{name:{required:"Обязательное поле"},phone:{required:"Обязательное поле",number:"Введите правильный номер",minlength:"Номер должен быть длиннее"},comment:{required:"Обязательное поле",minlength:"Сообщение должно быть длиннее"},agree:{required:!1}},submitHandler:function(e){$.ajax({type:"POST",url:"/wp-content/themes/AAK/sender.php",data:$(e).serialize(),timeout:3e3}),n(),a("next"),setTimeout(function(){n(),$(":input",".validate-form").not(":button, :submit, :reset, :hidden").val("").removeAttr("checked").removeAttr("selected")},2500)}})}),$(".fancybox").fancybox();var s=750;$(window).scroll(function(){var e=$(this).scrollTop();e>=s?$(".scroll-up").addClass("scroll-up--show"):$(".scroll-up").removeClass("scroll-up--show")}),$(".scroll-up").click(function(){return $("html, body").animate({scrollTop:0},800),!1});var l=250,i=$(".header").height();$(window).scroll(function(){var e=$(this).scrollTop();e>=l?($(".header").addClass("shrink"),$("body").css("paddingTop",i)):($(".header").removeClass("shrink"),$("body").css("paddingTop",0))}),$(window).resize(function(){i=$(".header").height()}),console.log(e()),e()<=14&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br><div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br></div>')),svg4everybody(),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()})}),$(window).load(function(){$(".slider-certificate").owlCarousel({items:3,responsive:{0:{items:4},768:{items:3},960:{items:3}},margin:20,autoHeight:!0,dots:!1,autoplay:!1,singleItem:!0,nav:!0,navText:['<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>','<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>']}),$(".slider-customer").owlCarousel({items:5,responsive:{0:{items:4},768:{items:3},960:{items:5}},margin:20,autoHeight:!0,dots:!1,autoplay:!1,singleItem:!0,loop:!0,nav:!0,navText:['<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>','<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>']}),$(".slider-header-baner").owlCarousel({items:1,margin:20,autoHeight:!0,dots:!1,autoplay:!1,singleItem:!0,loop:!0,nav:!0,navText:['<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>','<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>']})}),function(e,o){"use strict";var t="img/pack.html",r=1;if(!o.createElementNS||!o.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var n,a,s="localStorage"in e&&null!==e.localStorage,l=function(){o.body.insertAdjacentHTML("afterbegin",a)},i=function(){o.body?l():o.addEventListener("DOMContentLoaded",l)};if(s&&localStorage.getItem("inlineSVGrev")==r&&(a=localStorage.getItem("inlineSVGdata")))return i(),!0;try{n=new XMLHttpRequest,n.open("GET",t,!0),n.onload=function(){n.status>=200&&n.status<400&&(a=n.responseText,i(),s&&(localStorage.setItem("inlineSVGdata",a),localStorage.setItem("inlineSVGrev",r)))},n.send()}catch(d){}}(window,document);