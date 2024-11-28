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


   /* sound code */
   // this function will add sound to our page
   function addSound(){
    var soundElem = document.createElement("audio");
    // nickname/shortcut to the play button
    var btnPlay = document.getElementById("btnPlay");
    // nickname/shortcut to the pause button
    var btnPause = document.getElementById("btnPause");


    // set up the id="audioSound" attribute on our audio element
    soundElem.setAttribute("id", "audioSound");

    // set up the src"us-lab-background.mp3"
    soundElem.setAttribute("src", "us-lab=background.mp3");

    // add the audio element that we just created to the HTML page
    document.body.appendChild(soundElem);


    // un-hide the play and pause buttons
    btnPlay.hidden = false;
    btnPause.hidden = false;
}
// set up the function to play the sound
function playSoound(){
    // set up a nickname/shortcut to the audio element that we created in the AddSound() function
    var audio = document.getElementById("audioSound");
    // start playing the audio
    audio.play();
    // log the playing started to the console because of sound issues on this computer
    console.log("sound player");
}

// set up the function to pause the playing of the sound
function pauseSound(){
    // set up a nickname/shortcut to the audio element that we created in the AddSound() function
    var audio = document.getElementById("audioSound");
    // pause the playing of the sound
    audio.pause();
    // log the playing paused to the console because of sound issues on this computer
    console.log("sound paused");
}