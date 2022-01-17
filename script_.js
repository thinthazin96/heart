var count = 0;
var btn = document.getElementById("btn");
var disp = document.getElementById("display");

function changeHeart() {
  // func for heart icon
  var heartId = document.getElementById("btn");
  


  // initializing var heartId to 'heart' id in html file
  if (heartId.src.match("heart-regular.svg")) {
      // if src of heart img is regular then change to solid
      heartId.src = "heart-solid.svg";
      var count = 1;
      disp.innerHTML = count;
  } else {
      // change back to regular
      heartId.src = "heart-regular.svg";
      var count = 0;
      disp.innerHTML = count;
    }
}

