//initialize the count to 0.
var count = 0;
//store display id in disp variable
var disp = document.getElementById("display");

function changeHeart() {
  // func for heart icon
  var heartId = document.getElementById("btn");
  


  // initializing var heartId to 'heart' id in html file
  if (heartId.src.match("heart-regular.svg")) {
      // if src of heart img is regular then change to solid
      heartId.src = "heart-solid.svg";
      //set the count to one and print when the heart change to solid
      var count = 1;
      disp.innerHTML = count;
  } else {
      // change back to regular
      heartId.src = "heart-regular.svg";
      //set the count to 0 and print when the heart change to regular
      var count = 0;
      disp.innerHTML = count;
    }
}

