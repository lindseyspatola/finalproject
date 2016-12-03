jQuery(document).ready(function($){
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
