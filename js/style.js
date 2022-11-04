var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 600,
		$back_to_top = $('.go-top');
        
$(window).scroll(function(){
	( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
	if( $(this).scrollTop() > offset_opacity ) { 
		$back_to_top.addClass('fade-out');
	}
});

// $back_to_top.on('click', function(event){
// 	event.preventDefault();
// 	$('body,html').animate({
// 		scrollTop: 0 ,
// 		}, scroll_top_duration
// 	);
// });


$('.hambuger-box').click(function() {
    $(this).toggleClass('active');
    $('.sub-nav').toggleClass('active');
});



$('.btn-open-modal').click(function() {
	var $goal = $(this).attr('modal');
	$('.modal-' + $goal).fadeIn();
	$(document.body).css('overflow-y','hidden');
});

$('.btn-close').click(function() {
	$('.modal').fadeOut();
	$(document.body).css('overflow-y','auto');
});

$(document).mouseup(function(e) {
    var _con = $('.modal-content');
    if(!_con.is(e.target) && _con.has(e.target).length === 0) {
		$('.modal').fadeOut();
        $(document.body).css('overflow-y','auto');
    }
});






