document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let p = document.getElementById('text')
    p.innerHTML = "This is really cool!"
  });
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );