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
	ref.createUser({
	  email    : email_val,
	  password : pw_val,
	  username : un_val
	}, function(error, userData) {
	  if (error) {
	    console.log("Error creating user:", error);
	    window.alert("fail :(");
	  } else {
	  	window.alert("success!");
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
	  if (error) {
	    console.log("Login Failed!", error);
	    window.alert("fail :(");
	  } else {
	  	window.alert("success!");
	    console.log("Authenticated successfully with payload:", authData);
	  }
	});

};