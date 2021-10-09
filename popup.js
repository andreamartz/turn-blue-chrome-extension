// Initialize button with user's preferred color
let changeColor = document.getElementById('changeColor');

// Change the color of the button to be the stored color
chrome.storage.sync.get('color', ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get('color', ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
