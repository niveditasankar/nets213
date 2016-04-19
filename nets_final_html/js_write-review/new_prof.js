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
	  	

		var prof_name_value = document.getElementById("input-948407724571952700").value;
	  	var difficulty_rate;
	  	var helpfulness_rate;
	  	var engagement_rate;
	  	var overall_rate;
	  	var text_review

	  	if (prof_name_value=="" || !difficulty_rate || !helpfulness_rate || !engagement_rate || !overall_rate || text_review == "") {
	  		window.alert("Please fill in all fields.");
	  	}

	  	else {
	  		var profRef = ref.child("Professor");  	
		  	var reviewRef = ref.child("Review");

			var newReviewRef = reviewRef.push({
				stats: {
					prof_name : prof_name_value,
					difficulty : difficulty_rate,
					helpfulness : helpfulness_rate,
					engagement : engagement_rate,
					overall : overall_rate,
					review : text_review,
					upvotes : 0,
					downvotes : 0
				}
			});

			var postID = newReviewRef.key()

			var prof_lookup = ("https://penn-prof-review.firebaseio.com/Professor/").concat(prof_name_value);
			var user_lookup = ("https://penn-prof-review.firebaseio.com/User/").concat(authData.uid);
			var review_lookup = ("https://penn-prof-review.firebaseio.com/Review/").concat(postID);
			var ref_prof = new Firebase(prof_lookup);
			var ref_user = new Firebase(user_lookup);
			var ref_review = new Firebase(review_lookup);

			// window.alert("Welp");

			ref_prof.once("value", function(snapshot) {
				//window.alert("1");
				if (snapshot.exists()) {
					// window.alert("2");
	 
	 			// if time, figure out how to remove reviews

					// var remove_review_text = ((((("https://penn-prof-review.firebaseio.com/Professor/").concat(prof_name_value)).concat("/")).concat(authData.uid)).concat("/review_id"));//.concat("review_id");
					// window.alert(remove_review_text);
					// var remove_review = new Firebase(remove_review_text);
					// window.alert("hi");

					// remove_review.once("value", function(snap) {
					// 	window.alert(snap.val());
					// 	(new Firebase(("https://penn-prof-review.firebaseio.com/Review/").concat(snap.val()))).remove();
					// 	window.alert("removed");
					// });


					ref_prof.child(authData.uid).set({
						review_id: postID
					});
					//window.alert("3");
					ref_user.child(prof_name_value).set({
						review_id: postID
					});
					// window.alert("ermagerd1");
				}
				else {
					//window.alert(prof_name_value);
					ref_prof.set({
						name: prof_name_value
					});
					// window.alert("7");
					ref_prof.child(authData.uid).set({
						review_id: postID
					});
					// window.alert("5");
					ref_user.child(prof_name_value).set({
						review_id: postID
					});
					// window.alert("ermagerd");
				}
			});

			window.alert("Thank you for your submission.");
			document.getElementById('form_new_prof').reset();

		}

	  	

	} else {

		window.alert("Please log in before submitting a review.")

		console.log("User is logged out");
	};

};
