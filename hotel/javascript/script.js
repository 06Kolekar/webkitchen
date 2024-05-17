

//menu

function mview() {
    var menu = document.querySelector('.dniv');
    menu.style.display = 'flex'; // Show the menu with flex display
    document.querySelector('.m').style.display = 'none'; // Hide the open menu button
    document.querySelector('.c').style.display = 'flex'; // Show the close menu button
}
  
function cview() {
    var menu = document.querySelector('.dniv');
    menu.style.display = 'none'; // Hide the menu
    document.querySelector('.m').style.display = 'flex'; // Show the open menu button
    document.querySelector('.c').style.display = 'none'; // Hide the close menu button
}


const text = "Welcome to Delicious Food.";
const typingSpeed = 100; // Adjust the speed (milliseconds per character)
const delayBetweenLoops = 3000; // 3 seconds

function typeText() {
    let i = 0;
    const typingInterval = setInterval(() => {
    document.getElementById("typing-text").textContent += text[i];
    i++;
    if (i >= text.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
            document.getElementById("typing-text").textContent = ""; // Clear the text
            typeText(); // Start typing again
            }, delayBetweenLoops);
        }
    }, typingSpeed);
}

// Start the initial typing
typeText();

//scroll
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

