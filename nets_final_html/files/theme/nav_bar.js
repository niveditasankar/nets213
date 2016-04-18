document.addEventListener("DOMContentLoaded", function(event) { 
  	var ref = new Firebase("https://penn-prof-review.firebaseio.com");
	var authData = ref.getAuth();
	if (authData) {
	  document.getElementById("loginId").innerHTML="Logout";
	} else {
	  document.getElementById("loginId").innerHTML="Logout";
	}
});

// function authenticate() {
//     var ref = new Firebase("https://penn-prof-review.firebaseio.com");
// 	var authData = ref.getAuth();
// 	if (authData) {
// 	  document.getElementById("loginId").innerHTML="Logout";
// 	} else {
// 	  document.getElementById("loginId").innerHTML="Logout";
// 	}
// };

