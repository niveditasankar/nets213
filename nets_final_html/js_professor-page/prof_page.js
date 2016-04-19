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
	//window.alert("hi");

  	prof_Ref.once("value", function(allProfessorsSnapshot) {
  		allProfessorsSnapshot.forEach(function(professorSnapshot) {

  			var prof_name = professorSnapshot.child("name").val();
  			
  			if (prof_name == selected_prof) {
				//window.alert("hi");

				var adjusted_prof_name = prof_name.split(" ");
	
				var final_prof_name;
				if (adjusted_prof_name.length ==2) {
					 var tmp = adjusted_prof_name[0].concat("%20");
					 final_prof_name = tmp.concat(adjusted_prof_name[1]);
						 
				}

				//hi things

				var review_Ref = new Firebase("https://penn-prof-review.firebaseio.com/Professor/" + final_prof_name);

			  	review_Ref.once("value", function(allReviewsSnapshot) {
			  		allReviewsSnapshot.forEach(function(reviewSnapshot) {

			  			var prof_name = reviewSnapshot.child("name").val();

			  			var r_id = reviewSnapshot.child("review_id").val();
						window.alert(r_id);

						if (r_id) {
							var data_Ref = new Firebase("https://penn-prof-review.firebaseio.com/Review/" + r_id);
							window.alert("https://penn-prof-review.firebaseio.com/Review/" + r_id);
						  	data_Ref.once("value", function(allDataSnapshot) {
						  		allDataSnapshot.forEach(function(dataSnapshot) {

						  			var diff_score = dataSnapshot.child("difficulty").val();
						  			window.alert("hi welp");
									window.alert(dataSnapshot.key());
									window.alert(diff_score);
						  			
						  		});
						  	});


						}
			  			
			  			
			  		});
			  	});
  			}

  		});
  	});

};

// function pull_info(){

// 	var prof_name = document.getElementById("search_id").value;
	
// 	var adjusted_prof_name = prof_name.split(" ");
	
// 	var final_prof_name;
// 	if (adjusted_prof_name.length ==2) {
// 		 var tmp = adjusted_prof_name[0].concat("%20");
// 		 final_prof_name = tmp.concat(adjusted_prof_name[1]);
		 
// 	}

// 	else if (adjusted_prof_name.length > 2) {
// 		//TODO: Throw error if prof name is of length 3 or greater
// 	}

// 	// var adjusted_prof_name; //figure out how to remove spaces and replace with %20	

	
// 	var prof_link = "https://penn-prof-review.firebaseio.com/Professor/" + final_prof_name;

// 	window.alert("hi"); 
// 	var prof_Ref = new Firebase(prof_link);

// 	prof_Ref.once("value", function(allReviewsSnapshot) {

// 	  	allReviewsSnapshot.forEach(function(reviewSnapshot) {
// 	  		window.alert("waaaa");
// 		    var key = reviewSnapshot.key(); 
// 		    var rid = reviewSnapshot.child("review_id").val();

// 		    window.alert("welp");

// 		    if (rid) {
// 		    	window.alert("hi2");
		    	
// 		    	var review_link = 'https://penn-prof-review.firebaseio.com/Review/' + rid;
// 		    	var review_Ref = new Firebase(review_link);

// 		    	window.alert("hi1");

// 		  //   	review_Ref.once("value", function(allDataSnapshot) {

// 			 //    	allDataSnapshot.forEach(function(dataSnapshot) {
// 			 //    		window.alert("hi2");
// 				// 		var key_data = dataSnapshot.key(); 
// 				// 		var val_data = dataSnapshot.child("difficulty").val();

// 				// 		window.alert("welp");
// 				// 		window.alert(val_data);

					   
// 				// 	});

// 				// });

// 		    };

	   
// 	  	});
// 	});



// 	//var prof = prof_ref.child();
// 	//window.alert(prof); 
// 	// var profreview = prof_ref.child('review_id'); 

// 	// var path = profreview.toString(); 

// 	// var data = profreview.exportVal(); 
// 	// window.alert(path);

// 	// profreview.once("value", function(snapshot) {
// 	// 	  var data = snapshot.val();
// 	// 	  // data equals { "name": { "first": "Fred", "last": "Flintstone" }, "age": 53 }
// 	// 	  window.alert(data);  // "Fred"
// 	// 	  // console.log(data.age);  // 53
// 	// 	};

	

// 	// prof_ref.on("child_added", function(snapshot, prevChildKey) {
// 	// 	var newPost = snapshot.val();
//  //  		// console.log("Review: " + newPost.review_id;
//  //  		window.alert(newPost.review_id);
// 	// });

	

// // 	window.alert(final_prof_name);

// // 	prof_ref.on("value", function(snapshot) {
// //   console.log(snapshot.val());
// //   // window.alert(snapshot.val());
// //   DataSnapshot data = new DataSnapshot(prof_ref, )
// //   window.alert(snapshot.name());
// // }, function (errorObject) {
// //   console.log("The read failed: " + errorObject.code);
// // });

// // 	window.alert("review");

// // 	prof_ref.once("value", function(snapshot) {
// //   // The callback function will only get called once since we return true
// //   snapshot.forEach(function(childSnapshot) {
// //     var key = childSnapshot.key();
// //     // key === "fred"
// //     return true;
// //     window.alert(snapshot.val());
// //   });
// // });
// // 	var num_reviews = 

// // 	// if num_reviews == 0 or prof doesn't exist
// // 		$(#outer-div-prof-info).show();


// };


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