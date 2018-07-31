function ScrollToTarget(menuName) {

    switch (menuName) {
        case "home":
            $('html, body').animate({
                scrollTop: $("#sm-slider").offset().top
            }, 800);
            break;

        case "about":
            $('html, body').animate({
                scrollTop: $("#sm-about-us").offset().top
            }, 800);
            break;

        case "menu":
            $('html, body').animate({
                scrollTop: $("#sm-restaurant-menu").offset().top
            }, 800);
            break;

        case "reservation":
            $('html, body').animate({
                scrollTop: $("#sm-reservation").offset().top
            }, 800);
            break;

        case "gallery":
            $('html, body').animate({
                scrollTop: $("#sm-gallery").offset().top
            }, 800);
            break;

        case "chefs":
            $('html, body').animate({
                scrollTop: $("#sm-chef").offset().top
            }, 800);
            break;

        case "contact":
            $('html, body').animate({
                scrollTop: $("#sm-contact").offset().top
            }, 800);
            break;

        default:
            alert("hi");
    }

};


$(function () {

	
	var form = $('#ajax-contact');

	
	var formMessages = $('#form-messages');

	
	$(form).submit(function(e) {
	
		e.preventDefault();

		
		var formData = $(form).serialize();

		
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			
			$(formMessages).text(response);

			
			$('#name').val('');
			$('#email').val('');
			$('#subject').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
