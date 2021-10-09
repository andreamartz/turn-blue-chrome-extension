// Initialize button with user's preferred color
let changeColor = document.getElementById('changeColor');

// Change the color of the button to be the stored color
chrome.storage.sync.get('color', ({ color }) => {
  changeColor.style.backgroundColor = color;
});
