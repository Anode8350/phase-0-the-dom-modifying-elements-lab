// Remove the main#main element
const main = document.getElementById("main");
main.remove();

// Create a new <h1> element and assign it to newHeader
const newHeader = document.createElement("h1");

// Set an ID on the new header
newHeader.id = "victory";

// Set the inner HTML/textContent to show your name as the champion
newHeader.textContent = "YOUR-NAME is the champion"; // <- replace YOUR-NAME with your actual name
