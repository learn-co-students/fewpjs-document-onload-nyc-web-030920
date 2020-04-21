// Your code goes here

let texts= document.getElementById("text");
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    changeText();
  });

  function changeText(){
     
    const text= "This is really cool!";
    console.log(text);
    texts.innerHTML=text;
  }