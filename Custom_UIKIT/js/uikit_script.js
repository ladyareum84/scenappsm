// Back To Top
jQuery(document).ready(function() {
  var offset = 220;
  var duration = 500;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });
  jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  })
});

// navigation menu active
$(document).ready(function(){
	  $('ul li a').click(function(){
	    $('li a').removeClass("active");
	    $(this).addClass("active");
	});
});

//Tabs
$(document).ready(function(){
	$('.tab-container-side .tab-content-side').not(':first').hide(); /* 첫번째  .tab-content 빼고 모두 숨기기*/
	$('.tabs-left li').click(function(){
		$('.tabs-left li').removeClass('active2'); 
		$(this).addClass('active2'); /* .tabs li acive한것만 보여주고 나머진 숨기기 */						 
		var tab_id = $(this).attr('rel');
		$('.tab-container-side .tab-content-side').hide(); 
		$('#'+tab_id).show();
	});	
});


//Tabs Scrolling
$(document).ready(function(){
	$('.tab-scroll-container .tab-content').not(':first').hide();  /*첫번째  .tab-content 빼고 모두 숨기기*/
	$('.tabs-nav-scroll li').click(function(){
		$('.tabs-nav-scroll li').removeClass('active3'); 
		$(this).addClass('active3');  /*.tabs li acive한것만 보여주고 나머진 숨기기*/ 						 
		var tab_id = $(this).attr('rel');
		$('.tab-scroll-container .tab-content').hide(); 
		$('#'+tab_id).show();		
	});	
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
		  $(".acc-item > .acc-head i").removeClass("fa-angle-up").addClass("fa-angle-down");
		}else{
		  $(".acc-item > .acc-head i").removeClass("fa-angle-up").addClass("fa-angle-down"); 
		  $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
		  $(".acc-item > .acc-head").removeClass("active");
		  $(this).addClass("active");
		  $('.acc-contents').slideUp(200);
		  $(this).siblings('.acc-contents').slideDown(200);
		    }   
	});
});


// list-sortable
$(document).ready(function(){
	$( "#sortable" ).sortable();
	$( "#sortable" ).disableSelection();
});


//Make equal height columns
/*$(document).ready( function(){
	var heightArray = $(".video-items.video-grid li").map( function(){
	    return  $(this).height();
	}).get();
	var maxHeight = Math.max.apply( Math, heightArray);
	$(".video-items.video-grid li").height(maxHeight);
})
*/

// Pagination
$("ul.pagination").on("click", "a", function() {
	  // listen for click on pagination link
	  if ($(this).hasClass("active")) return false;
	  var active_elm = $("ul.pagination a.active");
	  if (this.id == "next") {
	    var _next = active_elm
	      .parent()
	      .next()
	      .children("a");
	    if ($(_next).attr("id") == "next") {
	      // appending next button if reach end
	      var num = parseInt($("a.active").text()) + 1;
	      active_elm.removeClass("active");
	      $('<li><a class="active" href="#Pagination">' + num + "</a></li>").insertBefore(
	        $("#next").parent()
	      );

	      $("#prev")
	        .parent()
	        .next()
	        .remove();
	      return;
	    }
	    _next.addClass("active");
	  } else if (this.id == "prev") {
	    var _prev = active_elm
	      .parent()
	      .prev()
	      .children("a");

	    if ($(_prev).attr("id") == "prev") {
	      var num = parseInt($("a.currente").text()) - 1;
	      active_elm.removeClass("active");
	      _prev = $(
	        '<li><a class="currente" href="#">' + num + "</a></li>"
	      ).insertAfter($("#prev").parent());

	      $("#next")
	        .parent()
	        .prev()
	        .remove();
	    }
	    _prev.addClass("active");
	  } else {
	    $(this).addClass("active");
	  }
	  active_elm.removeClass("active");
	});



