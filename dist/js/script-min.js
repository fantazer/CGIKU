!function(e){e(window).load(function(){e("a[rel='m_PageScroll2id']").mPageScroll2id({offset:200,highlightClass:"left-nav-el-active"}),console.log("hii")})}(jQuery),$(document).ready(function(){function e(){var e=window.navigator.userAgent,o=e.indexOf("MSIE ");if(o>0)return parseInt(e.substring(o+5,e.indexOf(".",o)),10);var t=e.indexOf("Trident/");if(t>0){var a=e.indexOf("rv:");return parseInt(e.substring(a+3,e.indexOf(".",a)),10)}var l=e.indexOf("Edge/");return l>0&&parseInt(e.substring(l+5,e.indexOf(".",l)),10)}$(".calc-get").click(function(){var e=(1*$(".calc-price").val(),1*$(".calc-count").val()/(1*$(".calc-price").val())/100*99);$(".calculator__total--numbBit span").html(e);var o=e/100*99;$(".calculator__total--item span").html(o);var t=1*$(".calc-count").val()/o;$(".calculator__total--sale span").html(t);var a=o*(1*$(".calc-sale").val())-1*$(".calc-count").val();$(".calculator__total--get span").html(a)}),$(document).on("click",'a[href^="#"]',function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top-50},1500)}),$(".calc-range").ionRangeSlider({values:["400 кв.м.","600 кв.м.","800 кв.м.","1000 кв.м.","1400 кв.м.","1600 кв.м.","2000 кв.м."],grid:!0,onChange:function(e){"0 кв.м."==e.from_value&&$(".calc-range-numb").text("0"),"400 кв.м."==e.from_value&&$(".calc-range-numb").text("14 000 "),"800 кв.м."==e.from_value&&$(".calc-range-numb").text("14 000 "),"1000 кв.м."==e.from_value&&$(".calc-range-numb").text("15 000 "),"1400 кв.м."==e.from_value&&$(".calc-range-numb").text("20 000 "),"2000 кв.м."==e.from_value?$(".calc-text--attansion").show():$(".calc-text--attansion").hide()}});var o=function(e,o){$(e).click(function(e){e.stopPropagation(),$(o).slideToggle("fast")}),$(document).on("click",function(){$(o).hide()})};o(".nav-toggle",".menu-wrap"),$(".modal-content").click(function(e){e.stopPropagation()});var t=0,a=function(){return $(".modal-layer").hasClass("modal-layer-show")||$(".modal-layer").addClass("modal-layer-show"),t=$(window).scrollTop(),$("body").css({overflow:"hidden",position:"fixed",overflowY:"scroll",top:-t,width:"100%"}),t},l=function(){console.log("scrollPos",t),$(".modal-layer").removeClass("modal-layer-show"),$("body").removeClass("modal-fix"),$("body").css({overflow:"",position:"",top:""}),$(window).scrollTop(t),$(".modal").removeClass("modal__show"),$(".enter").removeClass("enter--open"),$(".basket").removeClass("basket--open")},r=function(e){a(),$(".enter").removeClass("enter--open"),$(".basket").removeClass("basket--open"),$(".modal").each(function(){$(this).data("modal")===e?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var o=$(window).height();$(".modal-filter").height(o),$(".modal-wrap").css("height",o),$(".modal-wrap").css("minHeight",o)};$(".modal-get").click(function(){var e=$(this).data("modal");r(e)}),$(".modal-layer , .modal-close").click(function(){l()}),$(".validate-form").each(function(){$(this);$(this).validate({highlight:function(e){$(e).parent().addClass("field-error")},unhighlight:function(e){$(e).parent().removeClass("field-error")},rules:{name:{required:!0},phone:{required:!0,minlength:5,number:!0},comment:{required:!0,minlength:5},agree:{required:!0}},messages:{name:{required:"Обязательное поле"},phone:{required:"Обязательное поле",number:"Введите правильный номер",minlength:"Номер должен быть длиннее"},comment:{required:"Обязательное поле",minlength:"Сообщение должно быть длиннее"},agree:{required:!1}},submitHandler:function(e){$.ajax({type:"POST",url:"/wp-content/themes/AAK/sender.php",data:$(e).serialize(),timeout:3e3}),l(),r("next"),setTimeout(function(){l(),$(":input",".validate-form").not(":button, :submit, :reset, :hidden").val("").removeAttr("checked").removeAttr("selected")},2500)}})}),$(".fancybox").fancybox();var n=750;$(window).scroll(function(){var e=$(this).scrollTop();e>=n?$(".scroll-up").addClass("scroll-up--show"):$(".scroll-up").removeClass("scroll-up--show")}),$(".scroll-up").click(function(){return $("html, body").animate({scrollTop:0},800),!1});var s=250,i=$(".header").height();$(window).scroll(function(){var e=$(this).scrollTop();e>=s?($(".header").addClass("shrink"),$("body").css("paddingTop",i)):($(".header").removeClass("shrink"),$("body").css("paddingTop",0))}),$(window).resize(function(){i=$(".header").height()}),console.log(e()),e()<=14&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br><div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br></div>')),svg4everybody(),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()})}),$(window).load(function(){$(".slider-certificate").owlCarousel({items:3,responsive:{0:{items:4},768:{items:3},960:{items:3}},margin:20,autoHeight:!0,dots:!1,autoplay:!1,singleItem:!0,nav:!0,navText:['<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>','<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>']}),$(".slider-customer").owlCarousel({items:5,responsive:{0:{items:4},768:{items:3},960:{items:5}},margin:20,autoHeight:!0,dots:!1,autoplay:!1,singleItem:!0,loop:!0,nav:!0,navText:['<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>','<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>']}),$(".slider-header-baner").owlCarousel({items:1,margin:20,autoHeight:!0,dots:!1,autoplay:!1,singleItem:!0,loop:!0,nav:!0,navText:['<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>','<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>']}),$(".questions-slider").owlCarousel({items:1,margin:20,autoHeight:!0,dots:!0,autoplay:!1,singleItem:!0,loop:!0})}),function(e,o){"use strict";var t="img/pack.html",a=1;if(!o.createElementNS||!o.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var l,r,n="localStorage"in e&&null!==e.localStorage,s=function(){o.body.insertAdjacentHTML("afterbegin",r)},i=function(){o.body?s():o.addEventListener("DOMContentLoaded",s)};if(n&&localStorage.getItem("inlineSVGrev")==a&&(r=localStorage.getItem("inlineSVGdata")))return i(),!0;try{l=new XMLHttpRequest,l.open("GET",t,!0),l.onload=function(){l.status>=200&&l.status<400&&(r=l.responseText,i(),n&&(localStorage.setItem("inlineSVGdata",r),localStorage.setItem("inlineSVGrev",a)))},l.send()}catch(c){}}(window,document);