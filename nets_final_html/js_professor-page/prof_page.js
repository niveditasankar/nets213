function pull_info(){


	var prof_name = document.getElementById("search_form").value;

	var adjusted prof_name; //figure out how to remove spaces and replace with %20	
	
	var prof_ref = new Firebase(("https://penn-prof-review.firebaseio.com/Professor/").concat(adjusted_prof_name));

	var num_reviews = 

	// if num_reviews == 0 or prof doesn't exist
	// 	$(#outer-div-prof-info).show();


};