function add_review(){

	var ref = new Firebase("https://penn-prof-review.firebaseio.com");
	
	var prof_name_value = document.getElementById("input-948407724571952700").value;
	
	var prof_lookup = ("https://penn-prof-review.firebaseio.com/Professor/").concat(prof_name_value);
	var ref_prof = new Firebase(prof_lookup);
	
	
	
	
	
	
	
	
	
	
	
}