function register(){

	var email_val = document.getElementById("register_email_id").value;
  	var pw_val = document.getElementById("register_password_id").value;
  	var un_val = document.getElementById("register_username_id").value;
  
	if (!email_val.includes('upenn.edu')) {
  		window.alert("This email is not a upenn.edu email address.");
  		console.log("This email is not a upenn.edu email address.")
	}
	else {
	  	var ref = new Firebase("https://penn-prof-review.firebaseio.com");
	  	//window.alert("meh!");
	    ref.createUser({
			email    : email_val,
			password : pw_val
		}, function(error, userData) {
		  if (error) {
		  	//window.alert("fail :(");
		    console.log("Error creating user:", error);
		    window.alert("Registration failed!");
		  } else {
		  	var usersRef = ref.child("User");
			usersRef.child(userData.uid).set({
				username: un_val,
				email : email_val
			});
			window.alert("You've successfully registered. Please log in to continue!");
		    console.log("Successfully created user account with id:", userData.uid);
		  }
		});
	}
   
};

function login(){
	var email_val = document.getElementById("email_id").value;
  	var pw_val = document.getElementById("password_id").value;

	var ref = new Firebase("https://penn-prof-review.firebaseio.com");

	ref.authWithPassword({
	  email    : email_val,
	  password : pw_val
	}, function(error, authData) {
		//window.alert("yo!");
	  if (error) {
	  	//window.alert("fail :(");
	    console.log("Login Failed!", error);
	    window.alert("Login Failed!");
	  } else {
	  	window.alert("Successful login!");
	  	document.getElementById("loginId").innerHTML="Logout";

	    console.log("Authenticated successfully with payload:", authData);
	  }
	});

};