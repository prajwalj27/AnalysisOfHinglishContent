chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  document.querySelector("textarea").innerHTML = selection[0];
});