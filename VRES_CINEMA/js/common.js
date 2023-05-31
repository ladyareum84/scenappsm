// mobile check
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

// Login Layer
$(document).on('click', '.personal-info', function(){
	$('.personal-info').toggleClass('state-login');
	$('.layer_personal-info').toggleClass('on');
});

//jQuery to Leave menu bar fixed on top when scrolled
var num = 50; //number of pixels before modifying styles
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.sub-menu').addClass('fixed');
    } else {
        $('.sub-menu').removeClass('fixed');
    }
});

//Nav SearchBar
$('.search-btn').click(function(){
	$('.search-bar_area').addClass('search-display');
});

$('.close-btn').click(function(){
	$('.search-bar_area').removeClass('search-display');
});


//Slider
var slideIndex = 1;
var slideTimer = null;
var slideInterval = 2000;

function plusSlides(n) {
	clearTimeout(slideTimer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
	clearTimeout(slideTimer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  else if (n < 1) {slideIndex = slides.length}
  else {slideIndex = n}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  
  if (slides.length <= 0) {return;}
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  slideTimer = setTimeout(function () { 
	  slideIndex++;
	  showSlides(slideIndex); 
  }, slideInterval); // Change image every 2
};

// Like Button
$(function() {
    $( ".btn-like" ).click(function() {
      $( ".btn-like" ).toggleClass( "on",1000);
    });
  });

//Tabs
$('.tab-container .tab-content, .curation-container .curation-content').not(':first').hide(); 
$('.tabs.tabs-nav li, .tabs.curation-nav li').click(function(){
	$('.tabs.tabs-nav li, .tabs.curation-nav li').removeClass('active'); 
	$(this).addClass('active');					 
	var tab_id = $(this).attr('rel');
	$('.tab-container .tab-content, .curation-container .curation-content').hide(); 
	$('#'+tab_id).show();
});

//Accordion
$(document).ready(function(){	
	$(".acc-item:eq(0) .acc-head").addClass("active");//첫번째 항목만 active 클래스를 적용
	$(".acc-item:eq(0) .acc-head i").removeClass("fa-angle-down").addClass("fa-angle-up"); //active일때 해당 아이콘으로 클래스 적용
	$(".acc-contents:not(:first)").hide(); //첫번째 항목 이외의 content를 숨김

	$(".acc-item > .acc-head").on("click", function(){
		if($(this).hasClass('active')){
		  $(this).removeClass("active");
		  $(this).siblings('.acc-contents').slideUp(200);
		  //$(".acc-item > .acc-head i").removeClass("fa-angle-up").addClass("fa-angle-down");
		}else{
		  //$(".acc-item > .acc-head i").removeClass("fa-angle-up").addClass("fa-angle-down"); 
		  //$(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
		  $(".acc-item > .acc-head").removeClass("active");
		  $(this).addClass("active");
		  $('.acc-contents').slideUp(200);
		  $(this).siblings('.acc-contents').slideDown(200);
		    }   
	});
});

// a 링크 클릭 방지 (# 대체)
$('a[href="#"]').click(function(e) {
	e.preventDefault();
});

