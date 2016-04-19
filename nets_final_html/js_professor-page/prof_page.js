document.addEventListener("DOMContentLoaded", function(event) { 

  	var prof_Ref = new Firebase("https://penn-prof-review.firebaseio.com/Professor");

  	prof_Ref.once("value", function(allProfessorsSnapshot) {
  		allProfessorsSnapshot.forEach(function(professorSnapshot) {

  			var prof_name = professorSnapshot.child("name").val();
  			var option = document.createElement("option");
  			option.setAttribute("id", prof_name.concat("_id"));
  			option.setAttribute("value", prof_name);

  			var parent = document.getElementById("prof_dropdown_id");
  			parent.appendChild(option);
  			document.getElementById(prof_name.concat("_id")).innerHTML = prof_name;
  		});
  	});

});

function pullInfo() {
	var prof_Ref = new Firebase("https://penn-prof-review.firebaseio.com/Professor");
	var selected_prof = document.getElementById("prof_dropdown_id").value;

  	prof_Ref.once("value", function(allProfessorsSnapshot) {
  		allProfessorsSnapshot.forEach(function(professorSnapshot) {

  			var prof_name = professorSnapshot.child("name").val();
  			
  			if (prof_name == selected_prof) {

  				

  				document.getElementById("prof_title_id").innerHTML = prof_name;

				var adjusted_prof_name = prof_name.split(" ");
	
				var final_prof_name;
				if (adjusted_prof_name.length ==2) {
					 var tmp = adjusted_prof_name[0].concat("%20");
					 final_prof_name = tmp.concat(adjusted_prof_name[1]);
						 
				}

				//hi things

				var review_Ref = new Firebase("https://penn-prof-review.firebaseio.com/Professor/" + final_prof_name);

				total_diff = 0;
				total_eng = 0;
				total_help = 0;
				total_all = 0;
				total_reviews = 0;

			  	review_Ref.once("value", function(allReviewsSnapshot) {
			  		allReviewsSnapshot.forEach(function(reviewSnapshot) {

			  			var prof_name = reviewSnapshot.child("name").val();

			  			var r_id = reviewSnapshot.child("review_id").val();

						if (r_id) {
							var data_Ref = new Firebase("https://penn-prof-review.firebaseio.com/Review/" + r_id);
						  	data_Ref.once("value", function(allDataSnapshot) {
						  		allDataSnapshot.forEach(function(dataSnapshot) {

						  			var diff_score = dataSnapshot.child("difficulty").val();
						  			var eng_score = dataSnapshot.child("engagement").val();
						  			var help_score = dataSnapshot.child("helpfulness").val();
						  			var all_score = dataSnapshot.child("overall").val();
						  			var review_text = dataSnapshot.child("review").val();
						  			var upvote_score = dataSnapshot.child("upvotes").val();
						  			var downvote_score = dataSnapshot.child("downvotes").val();
						  			

						  			total_diff = total_diff + diff_score;
						  			total_eng += eng_score;
						  			total_help += help_score;
						  			total_all += all_score;
						  			total_reviews = total_reviews + 1;


						  			//appending review

						  			var out_div_review = document.createElement("div");
						  			out_div_review.setAttribute("class", "paragraph");
						  			out_div_review.setAttribute("style", "text-align:left;");
						  			out_div_review.setAttribute("id", r_id+"_rscore");
						  			out_div_review.innerHTML = "Review Score: ";
						  		
						  			var button_up = document.createElement("button");
						  			button_up.setAttribute("onclick", "upvote()");
						  			button_up.setAttribute("class", "vote_button");
						  			button_up.setAttribute("id", r_id+"_up_id");
						  			button_up.setAttribute("value", "Upvote");
						  			button_up.innerHTML = "Upvote";
						  
						  			//document.getElementById(r_id+"_up_id").innerHTML = "Upvote";
						  			var button_down = document.createElement("button");
						  			button_down.setAttribute("onclick", "downvote()");
						  			button_down.setAttribute("class", "vote_button");
						  			button_down.innerHTML = "Downvote";
						  			window.alert("check---");



						  			out_div_review.appendChild(button_up);
						  			out_div_review.appendChild(button_down);


						  			(document.getElementById("reviews-parent-id")).appendChild(out_div_review);

						  			//appending line

						  			var out_div_line = document.createElement("div");
						  			var in_div_line_1 = document.createElement("div");
						  			var hr_line = document.createElement("hr");
						  			in_div_line_1.setAttribute("style", "height: 20px; overflow: hidden; width: 100%;");
		
						  			hr_line.setAttribute("class", "styled-hr");
						  			hr_line.setAttribute("style", "width:100%;");
						  			window.alert("check2");
						  			var in_div_line_2 = document.createElement("div");
						  			in_div_line_2.setAttribute("style", "height: 20px; overflow: hidden; width: 100%;");
						  			out_div_line.appendChild(in_div_line_1);
						  			window.alert("check3");
						  			out_div_line.appendChild(hr_line);
						  			out_div_line.appendChild(in_div_line_2);

						  			(document.getElementById("reviews-parent-id")).appendChild(out_div_line);



						  		});
						  	});
						}			  			
			  		});

				

			  	});

				// window.alert(total_diff);
				// window.alert(total_eng);
				// window.alert(total_help);
				// window.alert(total_all);
				// window.alert(total_reviews);

				total_diff = total_diff/total_reviews;
				total_eng = total_eng/total_reviews;
				total_help = total_help/total_reviews;
				total_all = total_all/total_reviews;

				// window.alert(total_diff);
				// window.alert(total_eng);
				// window.alert(total_help);
				// window.alert(total_all);

				
				//window.alert("style change");
				document.getElementById("outer-div-prof-info").style.display="block!important";

  			}
  		});
  	});
};


function upvote() {
	var review_id;
	var ref_string = ("https://penn-prof-review.firebaseio.com/Review/").concat(review_id);

	var ref = new Firebase(ref_string);

	ref.on("value", function(snapshot) {
		var new_upvotes = ref.child("review_id") + 1;
		ref.update({
			"upvotes" : new_upvotes
		});
	
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});
};

function downvote() {

};