      
	   /**********************************************
		*			Amarilda Celhaka     			 *
	    * Project 2 							  	 *
		* October 14, 2018 							 *
		* Adding user validation on the text field   *
		**********************************************/





		
	
	/* Validating UserName      *
	 * Length between 6 and 50  */

 function validateUsername(){
    var username = document.forms["form"]["Username"].value;
	var pUser = document.getElementById("valUser");
	
	if(username == "")
	{
		
		pUser.innerHTML =
		"Username is required";
		pUser.classList.remove("valid");
		pUser.classList.add("invalid");
		return false;
		
	}
	else if( username.length < 6 || username.length > 50 )
	{
    	
		pUser.innerHTML =
		"Username length must be between 6 and 50 characters";
		pUser.classList.remove("valid");
		pUser.classList.add("invalid");
		return false;
		
	}
	else
	{
		
		pUser.innerHTML =
		"Valid Username";
		pUser.classList.remove("invalid");
		pUser.classList.add("valid");
		return true;
	}

	 
}
	 
	
	
	
	
	
	
	
	/*  Validating Password 	 				*
	 *  Required								*
	 *  Length greater  less than 8 			*
	 *  Format: Must contain one uppercase		*
	 *  One lower-case, one digit and at least  *
	 *  One special character					*
	 *  Must match the other password			*/
	 
	
function validatePass(){
	
	var pass = document.getElementById("password").value;
	var pPass = document.getElementById("valPass");
	
	if (pass.length < 8 || pass.length > 50)
	{
    	pPass.innerHTML =
		"Password length must be between 8 and 50 characters";
		pPass.classList.remove("valid");
		pPass.classList.add("invalid");
	
		return false;
	}
	 else if(pass.search(/[a-z]/) < 0)
	{
		pPass.innerHTML = 
		"Password must contain a lowercase letter";
		pPass.classList.remove("valid");
		pPass.classList.add("invalid");
		return false;
	}
	 else if(pass.search(/[A-Z]/) < 0)
	{
		pPass.innerHTML =
		"Password must contain an uppercase letter";
		pPass.classList.remove("valid");
		pPass.classList.add("invalid");
		return false;
	}
	else if(pass.search(/[0-9]/) < 0)
	{
		pPass.innerHTML =
		"Password must contain a digit";
		pPass.classList.remove("valid");
		pPass.classList.add("invalid");
		return  false;
	}
	
	else if(pass.search(/[!#$%&? "]/) < 0)
	{
		pPass.innerHTML =
		"Password must contain a special character";
		pPass.classList.remove("valid");
		pPass.classList.add("invalid");
		return false;
	}
	else 
	{
	
		pPass.innerHTML =
		"Valid Password";
		pPass.classList.remove("invalid");
		pPass.classList.add("valid");
		return true;
	}
 }
	
	
	
	
	
	
	/*  Validating Password 	 				*
	 *  Required								*
	 *  Length greater  less than 8 			*
	 *  Format: Must contain one uppercase		*
	 *  One lower-case, one digit and at least  *
	 *  One special character					*/
	 
	 
	 
	 
function validateRepPass(){
	
	var pass = document.getElementById("password").value;
	var repPass = document.forms["form"]["RepPassword"].value;
	var pRepPass = document.getElementById("valRepPass");
	
	if(repPass == "")
	{
		
		pRepPass.innerHTML =
		"Repeat Password is required";
		pRepPass.classList.remove("valid");
		pRepPass.classList.add("invalid");
		return false;
		
	}	
	 else if(repPass != pass)
	{
		
		pRepPass.innerHTML =
		"Passwords should match";
		pRepPass.classList.remove("valid");
		pRepPass.classList.add("invalid");
		return false;
		
	}
	else 
	{
	
		pRepPass.innerHTML =
		"Passwords match";
		pRepPass.classList.remove("invalid");
		pRepPass.classList.add("valid");
		return true;
	
	}
	
}
	
	
	
	
	
	
	
	/*  Validating Username 			 */
	/*  Required						 */
	/*  Length less than 50   			 */
	
	
function validateFirst(){
	
	var fName = document.forms["form"]["Firstname"].value;
	var pFname = document.getElementById("valFname");
	
	if(fName == "")
	{
		pFname.innerHTML = 
		"Firstname is required";
		pFname.classList.remove("valid");
		pFname.classList.add("invalid");
		return false;
	}
	else if(fName.length > 50)
	{
		pFname.innerHTML = 
		"Firstname cannot be longer than 50 characters";
		pFname.classList.remove("valid");
		pFname.classList.add("invalid");
		return false;
	}
	else 
	{
		pFname.innerHTML = 
		"Valid Firstname";
		pFname.classList.remove("invalid");
		pFname.classList.add("valid");
		return true;
	}
	
}	
		
	

	
	
	
	


	
	/* Validating Lastanme			 */
	/* Required						 */
	/* Length less than 50			 */
	

function validateLast(){

	
	var lName = document.forms["form"]["Lastname"].value;
	var pLname = document.getElementById("valLname");
	
	if (lName == "")
	{
		pLname.innerHTML = 
		"Lastname is required";
		pLname.classList.remove("valid");
		pLname.classList.add("invalid");
		return false;
	}	
	else if(lName.length > 50)
	{
		pLname.innerHTML = 
		"Lastname cannot be longer than 50 characters";
		pLname.classList.remove("valid");
		pLname.classList.add("invalid");
		return false;
	}
	else 
	{
		pLname.innerHTML = 
		"Valid Lastname";
		pLname.classList.remove("invalid");
		pLname.classList.add("valid");
		return true;
	}
	
}	
		
		
		
		
		
		
	/*  Validating Adress1	  			*/
	/*  Required			  			*/	
	/*  Length less than 100  			*/

	
function validateAddress1(){
	
	
	var address1 = document.forms["form"]["Address1"].value;
	var paddr1 = document.getElementById("valAdd1");
	
	
	if (address1 == "")
	{
		paddr1.innerHTML = 
		"Address Line 1 is required";
		paddr1.classList.remove("valid");
		paddr1.classList.add("invalid");
		return false;
	}
	else if (address1.length > 100)
	{
		paddr1.innerHTML = 
		"Adress cannot be longer than 100 characters";
		paddr1.classList.remove("valid");
		paddr1.classList.add("invalid");
		return false;
	}
	else 
	{
		paddr1.innerHTML = 
		"Valid address";
		paddr1.classList.remove("invalid");
		paddr1.classList.add("valid");
		return true;
	}
		
}
	
	
	
	
	
	
	
	
	/*  Validating Adress2	  */
	/*  Not required		  */
	/*  Length less than 100  */

function validateAddress2(){
	
	
	var address2 = document.forms["form"]["Address2"].value;
	var paddr2 = document.getElementById("valAdd2");
	
	if (address2.length > 100)
	{
		paddr2.innerHTML = 
		"Adress cannot be longer than 100 characters";
		paddr2.classList.add("invalid");
		return false;
	}
	else 
	{
		paddr2.innerHTML = 
		"Valid address";
		paddr2.classList.remove("invalid");
		paddr2.classList.add("valid");
		return true;
	}
	
}	
	
	
	
	
	
	
	/*  Validating City  	*/
	/*  Required			*/
	/*  Length less than 50 */	

	
function validateCity(){
	
	
	var city = document.forms["form"]["City"].value;
	var pCity = document.getElementById("valCity");
	
	if (city == "")
	{
		pCity.innerHTML = 
		"City text field cannot contain more than 50 characters";
		pCity.classList.remove("valid");
		pCity.classList.add("invalid");
		return false;
	}
	
	else if(city.length > 50)
	{
		pCity.innerHTML = 
		"City text field cannot contain more than 50 characters";
		pCity.classList.remove("valid");
		pCity.classList.add("invalid");
		return false;
	}
	
	else 
	{
		pCity.innerHTML = 
		"Valid City";
		pCity.classList.remove("invalid");
		pCity.classList.add("valid");
		return true;
	}
	
	
}
	
	
	
	
	
	/*  Validating ZipCode  				*/
	/*  Required							*/
	/*  Length greater than 5, less than 10 */
	/*  Format "00000" or "00000-0000"		*/
	
	
function validateZipCode(){

	var zip = document.getElementById("zipcode");
	var pZip = document.getElementById("valZip");
	
	if (zip.value == "")
	{
		pZip.innerHTML = 
		"Zipcode is required";
		pZip.classList.remove("valid");
		pZip.classList.add("invalid");
		return false;
	}
	
	else if (zip.value.length < 5 || zip.value.length > 10)
	{
		 
		pZip.innerHTML = 
		"Zipcode must be 5-10 characters";
		pZip.classList.remove("valid");
		pZip.classList.add("invalid");
		return false;
	}
	
	else 
	{
		if(zip.value.length == 5)
		{
			zip.value = zip.value.concat("-");
		}
		pZip.innerHTML = 
		"Valid ZipCode";
		pZip.classList.remove("invalid");
		pZip.classList.add("valid");
		return true;
	}
	
	
}

	
	
	
	
	/*  Validating Phone Number  				*/
	/*  Required								*/
	/*  Length greater  less than 12			*/
	/*  Format "000-000-0000"					*/
	
	
	
function validatePhone(){

	var phone = document.getElementById("phoneNum");
	var pPhone = document.getElementById("valPhone");
	
	
	if(phone.value == "")
	{
		
		pPhone.innerHTML = 
		"Phone Number is required";
		pPhone.classList.remove("valid");
		pPhone.classList.add("invalid");
		return false;
		
	}
	else if (phone.value.length > 12)
	{
		
		pPhone.innerHTML = 
		"Phone number cannot be longer than 12";
		pPhone.classList.remove("valid");
		pPhone.classList.add("invalid");
		return false;
		
	}
	
	else 
	{
		 if(phone.value.length == 3 || phone.value.length == 7)
		{
			phone.value = phone.value.concat("-");
		}
		pPhone.innerHTML = 
		"Valid Phone Number";
		pPhone.classList.remove("invalid");
		pPhone.classList.add("valid");
		return true;
	}
	
	
} 
	 
	 
	 
	 
	 
	 
	 
	 
	/*  Validating Email						*/
	/*  Required								*/
	/*  Format "x@x.x"							*/
	   
	
function validateEmail(){
	
	var email = document.forms["form"]["Email"].value;
	var pEmail = document.getElementById("valEmail");
	
	
	if (email.match(/\w+@\w+\.\w+/) == null)
	{
		pEmail.innerHTML = 
		"Email should look like acp8d@umsl.edu";
		pEmail.classList.remove("valid");
		pEmail.classList.add("invalid");
		return false;
	}
	else 
	{
		pEmail.innerHTML = 
		"Valid Email Adress";
		pEmail.classList.remove("invalid");
		pEmail.classList.add("valid");
		return true;
	}
	

}



/*****************************************************************
* 					function validateForm()						 *
* will check if all the above function returns to true			 *
* if yes, the form will be submitted, if no form returns false	 *
* and will not be submitted until the user fills all the 		 *
* required text fiels											 *
******************************************************************/

 function validateForm() {
	if((validateUsername()) && (validatePass()) && (validateRepPass()) && (validateAddress1())&& (validateAddress2()) && (validateZipCode() == true) && (validateCity()) && (validateLast()) && (validateFirst())&& (validatePhone()) && (validateEmail())) 
	{
		return true;
	}
	else
	{
		return false;
	}
}





/************************************************************
* 				function resetForm()						*
* I am using a regular button instead of reset button		*
* in order to set every string that displays a valid 		*
* or invalid message to be set to nothing once the user		*
* hits reset. Maybe I could have done this with a reset		*
* button, but I did not know how to							*
*************************************************************/

function resetForm(){
	var reset = document.getElementById("myForm").reset();
	
	 var pUser = document.getElementById("valUser");
	 pUser.innerHTML = "";
	 var pPass = document.getElementById("valPass");
	 pPass.innerHTML = "";
	 var pRepPass = document.getElementById("valRepPass");
	 pRepPass.innerHTML = "";
	 var pFname = document.getElementById("valFname");
	 pFname.innerHTML = "";
	 var pLname = document.getElementById("valLname");
	 pLname.innerHTML = "";
	 var paddr1 = document.getElementById("valAdd1");
	 paddr1.innerHTML = "";
	 var paddr2 = document.getElementById("valAdd2");
	 paddr2.innerHTML = "";
	 var pCity = document.getElementById("valCity");
	 pCity.innerHTML = "";
	 var pPhone = document.getElementById("valPhone");
	 pPhone.innerHTML = "";
	 var pZip = document.getElementById("valZip");
	 pZip.innerHTML = "";
	 var pEmail = document.getElementById("valEmail");
	 pEmail.innerHTML = "";
}