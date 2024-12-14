$(window).on("scroll", function() {
    if($(window).scrollTop() > 600) {
        $(".header").addClass("active");
    } else {
       $(".header").removeClass("active");
    }
});
/* */
$(".newsletter__submit").on("click", function(event) {
	event.preventDefault();
	let str = $('input[type="email"]').val();
	const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
	if (regex.test(str)){
		if(str.length % 2 === 0){
			console.log(str.length);
		}
		else{
			console.log(str.length);
		}
		$(".newsletter-message-box").html('<div class="message-newsletter"><div class="message-newsletter-ok"><span>la cantidad de caracteres del mail ingresado es: '+((str.length % 2 === 0) ? '<b>par</b>':'<b>inpar</b>')+'</span></div></div>');
	}
	else{
		$(".newsletter-message-box").html('<div class="message-newsletter"><div class="message-newsletter-error"><span>Email no valido</span></div></div>');
	}

	console.log($('input[type="email"]').val());

	});

(function($) {
	$(function() {
			var $posts = $('.post');
			$posts.each(function() {
				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img'),
					x;
					$image.css('background-image', 'url(' + $img.attr('src') + ')');
					if (x = $img.data('position'))
						$image.css('background-position', x);
			});
	});

})(jQuery);