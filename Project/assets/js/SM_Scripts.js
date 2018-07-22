
function ScrollToTarget(menuName){



switch(menuName){
	case "home":
	$('html, body').animate({
    scrollTop: $("#sm_home").offset().top}, 800);
	break;

	case "about":
	$('html, body').animate({
    scrollTop: $("#sm_about").offset().top}, 800);
	break;

	case "menu":
	$('html, body').animate({
    scrollTop: $("#sm_menu").offset().top}, 800);
	break;

	case "reservation":
	$('html, body').animate({
    scrollTop: $("#sm_reservation").offset().top}, 800);
	break;

	case "gallery":
	$('html, body').animate({
    scrollTop: $("#sm_gallery").offset().top}, 800);
	break;

	case "chefs":
	$('html, body').animate({
    scrollTop: $("#sm_chef").offset().top}, 800);
	break;

	case "contact":
	$('html, body').animate({
    scrollTop: $("#sm_contact").offset().top}, 800);
	break;

	default:
		alert("hi");
}

}


jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 300) {
        jQuery('.scrollToTop').fadeIn();
      } else {
        jQuery('.scrollToTop').fadeOut();
      }
    });
     