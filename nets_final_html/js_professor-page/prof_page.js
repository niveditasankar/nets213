function pull_info(){

	var prof_name = document.getElementById("search_id").value;
	
	var adjusted_prof_name = prof_name.split(" ");
	
	var final_prof_name;
	if (adjusted_prof_name.length ==2) {
		 var tmp = adjusted_prof_name[0].concat("%20");
		 final_prof_name = tmp.concat(adjusted_prof_name[1]);
		 
	}

	else if (adjusted_prof_name.length > 2) {
		//TODO: Throw error if prof name is of length 3 or greater
	}

	// var adjusted_prof_name; //figure out how to remove spaces and replace with %20	

	
	var prof_link = "https://penn-prof-review.firebaseio.com/Professor/" + final_prof_name;

	var prof_ref = new Firebase(prof_link);
		// .concat(final_prof_name));
	
	

	prof_ref.on("child_added", function(snapshot, prevChildKey) {
		var newPost = snapshot.val();
  		// console.log("Review: " + newPost.review_id;
  		window.alert(newPost.review_id);
	});

	window.alert("review");

// 	window.alert(final_prof_name);

// 	prof_ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
//   window.alert(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

// 	prof_ref.once("value", function(snapshot) {
//   // The callback function will only get called once since we return true
//   snapshot.forEach(function(childSnapshot) {
//     var key = childSnapshot.key();
//     // key === "fred"
//     return true;
//     window.alert(snapshot.val());
//   });
// });
// 	var num_reviews = 

// 	// if num_reviews == 0 or prof doesn't exist
// 		$(#outer-div-prof-info).show();


};