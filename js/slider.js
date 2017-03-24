
//jQuery time
// var current_fs, next_fs, previous_fs; fieldsets
// var left, opacity, scale; fieldset properties which we will animate
// var animating; flag to prevent quick multi-click glitches

// $(".next").click(function(){
// 	if(animating) return false;
// 	animating = true;
	
// 	current_fs = $(this).parent();
// 	next_fs = $(this).parent().next();
	
// 	//activate next step on progressbar using the index of next_fs
// 	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
// 	//show the next fieldset
// 	next_fs.show(); 
// 	//hide the current fieldset with style
// 	current_fs.animate({opacity: 0}, {
// 		step: function(now, mx) {
// 			//as the opacity of current_fs reduces to 0 - stored in "now"
// 			//1. scale current_fs down to 80%
// 			scale = 1 - (1 - now) * 0.2;
// 			//2. bring next_fs from the right(50%)
// 			left = (now * 50)+"%";
// 			//3. increase opacity of next_fs to 1 as it moves in
// 			opacity = 1 - now;
// 			current_fs.css({
//         'transform': 'scale('+scale+')',
//         'position': 'absolute'
//       });
// 			next_fs.css({'left': left, 'opacity': opacity});
// 		}, 
// 		duration: 800, 
// 		complete: function(){
// 			current_fs.hide();
// 			animating = false;
// 		}, 
// 		//this comes from the custom easing plugin
// 		easing: 'easeInOutBack'
// 	});
// });

// $(".previous").click(function(){
// 	if(animating) return false;
// 	animating = true;
	
// 	current_fs = $(this).parent();
// 	previous_fs = $(this).parent().prev();
	
// 	//de-activate current step on progressbar
// 	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
// 	//show the previous fieldset
// 	previous_fs.show(); 
// 	//hide the current fieldset with style
// 	current_fs.animate({opacity: 0}, {
// 		step: function(now, mx) {
// 			//as the opacity of current_fs reduces to 0 - stored in "now"
// 			//1. scale previous_fs from 80% to 100%
// 			scale = 0.8 + (1 - now) * 0.2;
// 			//2. take current_fs to the right(50%) - from 0%
// 			left = ((1-now) * 50)+"%";
// 			//3. increase opacity of previous_fs to 1 as it moves in
// 			opacity = 1 - now;
// 			current_fs.css({'left': left});
// 			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
// 		}, 
// 		duration: 800, 
// 		complete: function(){
// 			current_fs.hide();
// 			animating = false;
// 		}, 
// 		//this comes from the custom easing plugin
// 		easing: 'easeInOutBack'
// 	});
// });

// $(".submit").click(function(){
// 	return false;
// })
$(document).ready(function() {
	$('#step-one-btn').click( function() {

		var username = $('#username').val();
		if (username == '' || username == null) {
			$('.form-group span.alert-text').show('slow');
			return false;
		}
		$('#step-one').slideUp('slow');
		$('#step-two').slideDown('slow');

		$('.proxy-box').click(function() {
			$('.proxy-box.active').removeClass('active');
			$(this).addClass('active');
		})

		next_page();

	});

	$('#step-two-btn').click( function() {

		$('#step-two').slideUp('slow');
		$('#step-three').slideDown('slow');

		next_page();

	});

	$('#step-three-btn').click( function() {

		var coins = $('#coins').val();
		if (coins == '' || coins == null) {
			$('.form-group span.alert-coins').show('slow');
			return false;
		}


		$('#step-three').slideUp('slow');
		$('#step-four').slideDown('slow');
		next_page();

		$element = $('#progressBar_line');
		var t = $("#loading-msg");
		var progress_text = [
			"Connecting <strong>" + "</strong> Servers with <strong>" + "</strong>..",
			"Searching <strong>" + "</strong> In EA Data Base.",
			'Sending <img src="i.imgur.com/JH22Q51.png" width="15px" height="15px"/> <strong>' + "</strong> Coins.",
			'Sending <img src="i.imgur.com/Ydk3f0B.png" width="15px" height="15px"/> <strong>' + "</strong> Money.",
			"Confirm The User Acc..."
		];

		$element.find('div').animate(
        {
            'width': 100 + '%',
        }, 5000,function(){
			$element.find('div').width(0 + 'px');
			t.html(progress_text[1]);
		}).animate(
        {
            'width': 100 + '%',
        }, 3000,function(){
			$element.find('div').width(0 + 'px');
			t.html(progress_text[2]);
		}).animate(
        {
            'width': 100 + '%',
        }, 2000,function(){
			$element.find('div').width(0 + 'px');
			t.html(progress_text[3]);
		}).animate(
        {
            'width': 100 + '%',
        }, 2000,function(){
			$element.find('div').width(0 + 'px');
			t.html(progress_text[4]);
		}).animate(
        {
            'width': 100 + '%',
        }, 2000,function(){
			$element.find('div').width(0 + 'px');
			$('#step-four').slideUp('slow');
			$('#step-verify').slideDown('slow');
		});

	});
	function next_page() {
		$('#progressbar li.active').addClass('pass');
		$('#progressbar li.active').removeClass('active');
		$('#progressbar li.pass').next().addClass('active');
		$('#progressbar li.pass').removeClass('pass');
	}
});