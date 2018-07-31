
jQuery(function($){

  
  
    jQuery('.sm-top-slider').slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,     
      autoplay: true,
      fade: true,
        cssEase: 'linear'
        
    });

 
  $('.sm-imglink').magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
    gallery:{
      enabled:true
    }
  });

    jQuery('#datepicker').datepicker();

 
    jQuery('.sm-chef-nav').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

  
    jQuery('.sm-testimonial-slider').slick({
      dots: true,      
      infinite: true,
      arrows: false,
      autoplay: true,
      speed: 500,      
      cssEase: 'linear'
    });       

       
    $('#sm-map').click(function () {
        $('#sm-map iframe').css("pointer-events", "auto");
    });
    
    $("#sm-map").mouseleave(function() {
      $('#sm-map iframe').css("pointer-events", "none"); 
    });
    

	
	
  
    jQuery('ul.nav li.dropdown').hover(function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

    
  
    jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 300) {
        jQuery('.scrollToTop').fadeIn();
      } else {
        jQuery('.scrollToTop').fadeOut();
      }
    });
     
    jQuery('.scrollToTop').click(function(){
      jQuery('html, body').animate({scrollTop : 0},800);
      return false;
    });
  
  
    $('.sm-reservation-btn').on('click',function (e) {
          e.preventDefault();
          var target = this.hash,
          $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top
          }, 1000, 'swing', function () {
              window.location.hash = target;
      });
  });
  
});

