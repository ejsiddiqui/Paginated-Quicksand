// Custom JS rules
// Project: [Gport Framework]
// Version: [V2.0]
// Last change: [12/5/2011] [Start of project]
// Assigned to: [Gerben van Dijk / Gport] [NL] 

$(window).load(function() {
	
	// Initilazing jPages onload	  
	$("div.pagination").jPages({
	
		containerID: "caseholder",
		perPage: 4,
		previous: "previous",
		next: "next"		
	
	});
	  	
	// Cloning the filterable element
	var quicksand_data = $('.cases').clone();
	
	// Declaring the current category as global variable
	var current_cat;
	
	// Firing the filter funtionality on click
	$('.filter li a').on('click', function(e){

		// Stop the page from jumping because of an empty href
		e.preventDefault();
		
		// Getting the clicked category (data-cats attribute of the clicked link)
		var filter_cat = $(this).data('cats');
		
		// If the clicked category is all, then show the original list
		if(filter_cat == 'all'){ 
		
			filtered_data = quicksand_data.find('.item');
						
		} 
		// If the clicked category is different to all, then filter the results
		else {
		
			// Cloning the original elements
			var data_new = quicksand_data.clone();
			
			// Removing all the elements that don't have the correct attribute
			$(data_new).find('.item').not('[data-cats~="' + filter_cat + '"]').remove();
			
			// Finding all elements that have to be showed after filtering
			filtered_data = $(data_new).find('.item');
			
		}
		
		// If the clicked category is different as the active one, then filter with QuickSand
		if(current_cat != filter_cat) {
			
			$('.cases').quicksand(filtered_data, { 
				
				duration: 700,
				easing: 'jswing'
							
			}, function(){
	
				// Overriding the injected styles from jPages
				$('.cases').find('.item').css("display","block");
				$('.cases').find('.item').css("opacity","1");			
				
				// Updating the pagination
				$("div.pagination").jPages({
				
					containerID: "caseholder",
					perPage: 4,
					previous: "previous",
					next: "next"		
				
				});			
	
			});
			
		}

		// Setting the current category
		current_cat = filter_cat;
		
		return false;
				
	});
		    
});