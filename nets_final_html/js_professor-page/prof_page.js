function pull_info(){


	var prof_name = document.getElementById("search_form").value;
	
	var adjusted_prof_name = prof_name.split(" ");
	
	var final_prof_name;
	if (adjusted_prof_name.length ==2) {
		 var tmp = adjusted_prof_name[0].concat("%20");
		 final_prof_name = tmp.concat(adjusted_prof_name);
		 
	}
	else if (adjusted_prof_name.length > 2) {
		//TODO: Throw error if prof name is of length 3 or greater
	}

	var adjusted_prof_name; //figure out how to remove spaces and replace with %20	
	
	var prof_ref = new Firebase(("https://penn-prof-review.firebaseio.com/Professor/").concat(final_prof_name));

	var num_reviews = 

	// if num_reviews == 0 or prof doesn't exist
	// 	$(#outer-div-prof-info).show();


};