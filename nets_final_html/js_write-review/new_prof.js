function add_review(){

	var ref = new Firebase("https://penn-prof-review.firebaseio.com");
	var authData = ref.getAuth();

	if (authData) {

		console.log("User " + authData.uid + " is logged in with " + authData.provider);

		var prof_name_value = document.getElementById("input-948407724571952700").value;
	  	var difficulty_rate;
	  	var helpfulness_rate;
	  	var engagement_rate;
	  	var overall_rate;
	  	var text_review = document.getElementById("input-416972758429615473").value;

	  	if(document.getElementById('radio-0-_difficulty').checked) {
	  		difficulty_rate = 1;
		} else if(document.getElementById('radio-1-_difficulty').checked) {
		  difficulty_rate = 2;
		} else if(document.getElementById('radio-2-_difficulty').checked) {
		  difficulty_rate = 3;
		} else if(document.getElementById('radio-3-_difficulty').checked) {
		  difficulty_rate = 4;
		} else if(document.getElementById('radio-4-_difficulty').checked) {
		  difficulty_rate = 5;
		}

		if(document.getElementById('radio-0-_helpfulness').checked) {
	  		helpfulness_rate = 1;
		} else if(document.getElementById('radio-1-_helpfulness').checked) {
		  helpfulness_rate = 2;
		} else if(document.getElementById('radio-2-_helpfulness').checked) {
		  helpfulness_rate = 3;
		} else if(document.getElementById('radio-3-_helpfulness').checked) {
		  helpfulness_rate = 4;
		} else if(document.getElementById('radio-4-_helpfulness').checked) {
		  helpfulness_rate = 5;
		}

		if(document.getElementById('radio-0-_engagement').checked) {
	  		engagement_rate = 1;
		} else if(document.getElementById('radio-1-_engagement').checked) {
		  engagement_rate = 2;
		} else if(document.getElementById('radio-2-_engagement').checked) {
		  engagement_rate = 3;
		} else if(document.getElementById('radio-3-_engagement').checked) {
		  engagement_rate = 4;
		} else if(document.getElementById('radio-4-_engagement').checked) {
		  engagement_rate = 5;
		}

		if(document.getElementById('radio-0_overall').checked) {
	  		overall_rate = 1;
		} else if(document.getElementById('radio-1_overall').checked) {
		  overall_rate = 2;
		} else if(document.getElementById('radio-2_overall').checked) {
		  overall_rate = 3;
		} else if(document.getElementById('radio-3_overall').checked) {
		  overall_rate = 4;
		} else if(document.getElementById('radio-4_overall').checked) {
		  overall_rate = 5;
		}

	  	

	  	var profRef = ref.child("Professor");  	
	  	var reviewRef = ref.child("Review");
	  	


		var newReviewRef = reviewRef.push({
			prof_name : prof_name_value,
			difficulty : difficulty_rate,
			helpfulness : helpfulness_rate,
			engagement : engagement_rate,
			review : text_review
		});

		window.alert("hi1");

		var postID = newReviewRef.key()

		window.alert("success!");


		
	} else {

		window.alert("Please log in before submitting a review.")

		console.log("User is logged out");
	}

  	

};