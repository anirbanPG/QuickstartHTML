$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "-------"
* Template Name : picasso | One Page Personal Portfolio HTML Template
* Version       : 1.0
==================================== */




        /*=========== TABLE OF CONTENTS ===========
1. 
2. 
4. 
5. 
6. 
7. 
======================================*/
    
    
	 // =====Scroll To Top=====
    $(window).on('scroll',function () {
        if ($(this).scrollTop() > 600) {
            $('.return-to-top').fadeIn();
        } else {
            $('.return-to-top').fadeOut();
        }
    });
    $('.return-to-top').on('click',function(){
            $('html, body').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
	
	
	// =====owl carousel active=====
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        dots:false,
        mouseDrag:false,
        nav: true,
        smartSpeed: 1000,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
    });
	

	// =====wow js active=====
	new WOW().init();
});