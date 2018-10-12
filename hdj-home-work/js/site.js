document.addEventListener("DOMContentLoaded", function() {
  var bool;
  var form = document.forms['user-form'];
  form.name.addEventListener("keyup", valName);
  form.email.addEventListener("keyup", valEmail);
  form.phone.addEventListener("keyup", valPhone);

  function valName() {
  	if (form.name.value.length < 1) {
	  	form.name.nextElementSibling.textContent = "Please enter your name!";
	  	bool = false;
	} else {
	  	form.name.nextElementSibling.textContent = "";
	}
  }
  function valEmail() {
  	var emailCheck=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  	if (email.value.length < 1) {
	  	email.nextElementSibling.textContent = "Please enter your email!";
	  	bool = false;
	} else {
	  	if (!emailCheck.test(email.value)) {
			email.nextElementSibling.textContent = "Invalid email!";
		  	bool = false;
		} else {
			email.nextElementSibling.textContent = "";
		}
	}
  }
  function valPhone() {
  	if (phone.value.length < 1) {
	  	phone.nextElementSibling.textContent = "Please enter your phone!";
	  	bool = false;
	} else {
	  	phone.nextElementSibling.textContent = "";
	}
  }

  form.submitbtn.onclick = function() {
  	bool = true;
  	valName();
  	valEmail();
  	valPhone();
	if (bool) {
		alert("Name: " + form.name.value + "\nEmail: " + email.value + "\nPhone: " + phone.value);
	}
  }
});