// this function will validate the user input 
function validateForm(){
    // set up nickname/shortcut to our form values
    var FirstName = document.getElementtById("fName").value;
    var lastName = document.GetElementById("lName").value;
    var zip = document.getElementById("zip").value;

    // create a new string that concatenates first = " " + last name
    var FullName = firstName + " " + lastName;
   
    // see what values we are working with
   console.log("first name = " + firstName);
   console.log("last name = " + lastName);
   console.log("zipCode = " + zipCode);
   console.log("full name = " + fullName);

   // check to make sure the full name is 20 characters or fewer
   if (fullname.length > 20 || fullname.length == 1){
       document.getElementById("loginStatus").innerHTML = "please enter a valid name thatis less than 20 characters"
       alert("please enter a valid name thatis less than 20 characters");
   }
   else if(zipCode.length != 5){
       document.getElementById("loginStatus").innerHTML = "please enter a 5 digit zip code"
       // alert("please enter a 5 digit zip code");
   }
       else{
           document.getElementById("loginStatus").innerHTML = "Welcome, " + fullName + ". the secret word is validation.";
           alert("Welcome, " + fullName + ". the secret word is validation.");
       }
   // we don't want this page to submit to a server/another page, so prevent that from happening
   return false; 
   }