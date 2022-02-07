// jQuery Random Background

$(document).ready(function(){
   var images=['/images/bg-images/bg-1.jpg',
               '/images/bg-images/bg-2.jpg',
               '/images/bg-images/bg-3.jpg',
               '/images/bg-images/bg-4.jpg',
               '/images/bg-images/bg-5.png',
               '/images/bg-images/bg-6.jpg',
               '/images/bg-images/bg-7.jpg',
               '/images/bg-images/bg-8.jpg',
               '/images/bg-images/bg-9.jpg',
               '/images/bg-images/bg-10.jpg',
               '/images/bg-images/bg-11.jpg',
               '/images/bg-images/bg-12.jpg',
               '/images/bg-images/bg-13.jpg',
               
               '/images/bg-images/bg-15.jpg',
               '/images/bg-images/bg-16.jpg',
               '/images/bg-images/bg-17.jpg',];
   
   var randomNumber = Math.floor(Math.random() * images.length);
   var bgImg = 'url(' + images[randomNumber] + ')';
   
   $('body').css({'background':bgImg, 'background-size':'cover',  });
   
   });

// Menu Open Close
var i=0;
function expand(){
  if(i==0){
   document.getElementById("menu").style.transform = "scale(3)";
   document.getElementById("bars").style.transform = "scale(0)";
   document.getElementById("close").style.visibility = "visible";
   document.getElementById("close").style.transform = "scale(1)";
    i=1;
  }
  else{
    document.getElementById("menu").style.transform = "scale(0)";
    document.getElementById("close").style.transform = "scale(0)";
    document.getElementById("bars").style.visibility = "visible";
    document.getElementById("bars").style.transform = "scale(1)";
    i=0;
  }
}

// OPEN PREVIOUSE MESSAGE CONTAINER
let pContainer = document.getElementById("previous-messages-container");
let pm=0;
function preMessage() {
// MAY NEED TO ADD A SINGLE FUNCTION TO ANY CONTAINER WITH A CLOSE BUTTON TO CLOSE THEM OUT.
   if (pm==0) {
      // pContainer.style.opacity ="1";
      // pContainer.style.right ="0%";
      // pContainer.style.display ="block";
      pContainer.style.cssText = "opacity: 1; right: 0%"
      pm=1;
      console.log(pm);
   } else {
      // pContainer.style.opacity = "0";
      // pContainer.style.right = "50%"; 
      pContainer.style.cssText = "right: 20%;";
      setTimeout(function(){
         pContainer.style.cssText = "opacity: 0.3;";
     }, 3000); //wait for at least 3 seconds before console logging
      pm=0;
      console.log(pm);
   }
}

// OPEN CLOSE INPUT FORM
let m=0;
function viewForm() {
   
   if(m==0){
      document.getElementsByClassName("form-container")[0].style.opacity = "1";
      document.getElementsByClassName("form-container")[0].style.bottom = "0";
      m=1;
console.log(m);
   }
   else{
      document.getElementsByClassName("form-container")[0].style.opacity = "0";
      document.getElementsByClassName("form-container")[0].style.bottom = "-100%";
      m=0; 
      console.log(m);
   }
}

// Message Form  /////////////////////////////////////////////////////////

let forminput = document.getElementById('code-ele');

function messageInput() {
   let value = forminput.value;
   console.log(value);
   if (value == "Love" || value == 'love') {
      //console.log("1st if statement");
      //alert(value + ' Is what was entered. 1st statement');
      viewForm();
   }
      else if(value == 'Night' || value == 'night') {
      //console.log("2nd if statement");
      //alert(value + ' Is what was entered. 2nd statement');
      viewForm();
      }
      else if(value == 'Queen' || value == 'queen') {
         //console.log("3rd if statement");
         //alert(value + ' Is what was entered. 3rd statement');
         viewForm();
         }
         else if(value == 'King' || value == 'king') {
            //console.log("4th if statement");
            //alert(value + ' Is what was entered. 4th statement');
            viewForm();
            }
      else {
      //console.log('That code is not found');
      alert(value + ' is not in the data base.');
      forminput.value = ""; 
      }
}
   




// CLOSE MESSAGE CONTAINER
// document.addEventListener("click", (evt) => {
//    const pmContainer = document.getElementById("previous-messages-container");
//    const closeBtn = document.getElementById('close-btn');
//    let targetEl = evt.target; // clicked element 
//    let targetE2 = evt.target; // E2 is for the close-btn     
//    do {
//      if(targetEl == pmContainer) {
//        // This is a click inside, does nothing, just return.
//        //document.getElementById("flyout-debug").textContent = "Clicked inside!";
//        return;
//      }
//      if(targetE2 == closeBtn) {
//       // This is a click inside, does nothing, just return.
//       document.getElementById("previous-messages-container").style.cssText=
//    'right: 100%; opacity: 0;' 
//       return
//     }
//      // Go up the DOM
//      targetEl = targetEl.parentNode;
//      targetE2 = targetE2.parentNode;

//    } while (targetEl, targetE2);
//    // This is a click outside.
//    pmContainer.style.cssText=
//    'right: 100%; opacity: 1;';
//    setTimeout(function(){ ".pmContainer.style.cssText= display:none;"; }, 5000);
//    //document.getElementById("flyout-debug").textContent = "Clicked outside!";
//  });

// TRY AND USE CODE BELOW TO CLOSE PREm CONTAINER WITH CLOSE BTN
// document.addEventListener("click", (evt) => {
//    const pmContainer = document.getElementById("previous-messages-container");
//    const closeBtn = document.getElementById('close-btn');
//    let targetEl = evt.target; // clicked element 
//    let targetE2 = evt.target; // E2 is for the close-btn     
//    do {
//      if(targetEl == pmContainer) {
//        // This is a click inside, does nothing, just return.
//        //document.getElementById("flyout-debug").textContent = "Clicked inside!";
//        return;
//      }
//      if(targetE2 == closeBtn) {
//       // This is a click inside, does nothing, just return.
//       document.getElementById("previous-messages-container").style.cssText=
//    'right: 100%; opacity: 0;' 
//       return
//     }
//      // Go up the DOM
//      targetEl = targetEl.parentNode;
//      targetE2 = targetE2.parentNode;

//    } while (targetEl, targetE2);
//    // This is a click outside.
//    pmContainer.style.cssText=
//    'right: 100%; opacity: 1;';
//    setTimeout(function(){ ".pmContainer.style.cssText= display:none;"; }, 5000);
//    //document.getElementById("flyout-debug").textContent = "Clicked outside!";
//  });