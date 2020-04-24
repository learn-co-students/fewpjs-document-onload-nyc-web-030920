document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('text').textContent='This is really cool!'
    console.log('The DOM has loaded');
})
console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );