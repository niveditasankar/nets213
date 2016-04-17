$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");

});

$('.register_button').click(function(){
  if !((document.getElementById("register_email").value).includes("upenn.edu")) {
  	console.log("This email is not a upenn.edu email address.")

  }
  else {
  	var ref = new Firebase("https://penn-prof-review.firebaseio.com");
	ref.createUser({
	  email    : document.getElementById("register_email").value,
	  password : document.getElementById("register_password").value
	  username : document.getElementById("register_username").value
	}, function(error, userData) {
	  if (error) {
	    console.log("Error creating user:", error);
	  } else {
	    console.log("Successfully created user account with id:", userData.uid);
	  }
	});
  }
   
});

$('.login_button').click(function(){
   
});