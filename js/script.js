$(document).ready(function() {

	function hideAll() {

		$('.park-img').next().hide();
}

hideAll();

$('#fenway').click(function() {
 $('#more').slideToggle();
});
$('#wrigley').click(function() {
 $('#more1').slideToggle();
})
$('#dodger').click(function() {
 $('#more2').slideToggle();
})
$('#angels').click(function() {
 $('#more3').slideToggle();
})
$('#oakland').click(function() {
 $('#more4').slideToggle();
})
$('#kauffman').click(function() {
 $('#more5').slideToggle();
})
$('#rogers').click(function() {
 $('#more6').slideToggle();
})
$('#tropicana').click(function() {
 $('#more7').slideToggle();
})
$('#rate').click(function() {
 $('#more8').slideToggle();
})
$('#oriole').click(function() {
 $('#more9').slideToggle();
})
$('#globe').click(function() {
 $('#more10').slideToggle();
})
$('#progressive').click(function() {
 $('#more11').slideToggle();
})
$('#coors').click(function() {
 $('#more12').slideToggle();
})
$('#chase').click(function() {
 $('#more13').slideToggle();
})
$('#safeco').click(function() {
 $('#more14').slideToggle();
})
$('#att').click(function() {
 $('#more15').slideToggle();
})
$('#comerica').click(function() {
 $('#more16').slideToggle();
})
$('#minute').click(function() {
 $('#more17').slideToggle();
})
$('#miller').click(function() {
 $('#more18').slideToggle();
})
$('#pnc').click(function() {
 $('#more19').slideToggle();
})
$('#great').click(function() {
 $('#more20').slideToggle();
})
$('#citizens').click(function() {
 $('#more21').slideToggle();
})
$('#petco').click(function() {
 $('#more22').slideToggle();
})
$('#busch').click(function() {
 $('#more23').slideToggle();
})
$('#nationals').click(function() {
 $('#more24').slideToggle();
})
$('#citi').click(function() {
 $('#more25').slideToggle();
})
$('#yankee').click(function() {
 $('#more26').slideToggle();
})
$('#target').click(function() {
 $('#more27').slideToggle();
})
$('#marlins').click(function() {
 $('#more28').slideToggle();
})
$('#suntrust').click(function() {
 $('#more29').slideToggle();
})



	var timelineStadiums = $('.mlb-timeline-stadium'),
		offset = 0.8;

	hideBlocks(timelineStadiums, offset);


	$(window).on('scroll', function(){
		(!window.requestAnimationFrame)
			? setTimeout(function(){ showBlocks(timelineStadiums, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineStadiums, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.mlb-timeline-img, .mlb-timeline-info').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.mlb-timeline-img').hasClass('is-hidden') ) && $(this).find('.mlb-timeline-img, .mlb-timeline-info').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});
