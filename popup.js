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

const loader = document.querySelector("#loading");

// showing loading
function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 23000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}

translateButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('button clicked');
  displayLoading();

  let url = 'http://localhost:5000/translate?text=' + inputText.textContent;
  fetch(url)
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      hideLoading();

      // Display result
      document.querySelector('#outTitle').innerHTML = 'Output -';
      document.querySelector('#devanagari').innerHTML = json.hindi_text;
      document.querySelector('#english').innerHTML = json.eng_text;
    });
});
