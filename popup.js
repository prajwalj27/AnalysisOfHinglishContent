chrome.tabs.executeScript(
  {
    code: 'window.getSelection().toString();',
  },
  function (selection) {
    document.querySelector('#inputText').innerHTML = selection[0];
  }
);

let translateButton = document.querySelector('button');
let inputText = document.querySelector('#inputText');

translateButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('button clicked');

  let url = 'http://localhost:5000/translate?text=' + inputText.textContent;
  fetch(url)
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      // Display result
      document.querySelector('#outTitle').innerHTML = 'Output -';
      document.querySelector('#devanagari').innerHTML = json.hindi_text;
      document.querySelector('#english').innerHTML = json.eng_text;
    });
});
