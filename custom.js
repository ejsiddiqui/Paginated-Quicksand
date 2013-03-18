// How to initialize the Paginated Quicksand 
// Project: Paginated Quicksand
// Version: [V0.1]
// Last change: [18/4/2013] [Start of project]
// Assigned to: [Gerben van Dijk / Gport] [NL] 

$(window).load(function() {
		  
	$("div.pagination").jPages({
	
		containerID: "caseholder",
		perPage: 4,
		previous: "previous",
		next: "next"		
	
	});
	  	
	// if body has class animated
	var quicksand_data = $('.cases').clone();

	$('.filter li a').on('click', function(e){

		e.preventDefault();
		
		//$("div.pagination").jPages("destroy");

		var filter_cat = $(this).data('cats');
		
		if(filter_cat == 'all'){ 
		
			filtered_data = quicksand_data.find('.item');
						
		} else {
		
			var data_new = quicksand_data.clone();
			$(data_new).find('.item').not('[data-cats~="' + filter_cat + '"]').remove();
			filtered_data = $(data_new).find('.item');
			
		}
		
		$('.cases').quicksand(filtered_data, { 
			
			duration: 700,
			easing: 'jswing'
						
		}, function(){

			$('.cases').find('.item').css("display","block");
			$('.cases').find('.item').css("opacity","1");			
			
			$("div.pagination").jPages({
			
				containerID: "caseholder",
				perPage: 4,
				previous: "previous",
				next: "next"		
			
			});			

		});
		
		return false;
				
	});
		    
});