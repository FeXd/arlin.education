let html = "";

// Try to get object out of data so it can be displayed

// Functions are fine - dont alter too much right now!!!!
function fetchJSON(url, callback) {
  // This randomizes the quote being diaplyed on the screen
  // The API gives us back 5 quotes that we can filter through
  const random = Math.floor(Math.random() * 9 + 1);
  // Fetches data from quote API - We had to generate an authorization key in order to use this as well.
  fetch(`https://api.paperquotes.com/apiv1/quotes/?tags=motivation&random=${random}`, {
    headers: {
      Authorization: "Token 06c446dfd2ab6605cba53a1ca7d52c789681ad55"
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.results) {
        callback(data.results[random].quote);
      } else {
        callback("Failed to load quote. Please try again later.")
      }
    })
    .catch(error => {
      callback("Failed to load quote. Please try again later.")
      console.error('Error:', error)
    })
}

function displayQuote(individualQuote) {
  let html = "";
  html += `<p>${individualQuote}</p>`
  const quoteArea = document.getElementById("quoteArea");
  quoteArea.innerHTML = html;
  console.log(individualQuote);
}

function updateQuote() {
  fetchJSON('https://api.paperquotes.com/apiv1/quotes/?tags=motivation', displayQuote);
}
document.addEventListener("DOMContentLoaded", () => {
  updateQuote();
})

//this function will be used to get access to the unsplash image API
const numItemsToGenerate = 1;
function renderItem() {
  // change to loading
  document.getElementById("changeBackground").innerHTML = "Loading...";
  fetch(`https://source.unsplash.com/1900x1100/?minimal`, {
    headers: {
      Authorization: "Client-ID 3dG7ZdUYykMRP-stnsf0e6smaF9HO9VmYIWBAdbqXuM"
    }
  })
    .
    then((response) => {
      let background = document.getElementById("background");
      let src = `(${response.url}`;
      let image = new Image();
      image.addEventListener('load', function () {
        background.style.backgroundImage = `url(${src})`;
        // change back to normal
      });
      document.getElementById("changeBackground").innerHTML = "Change Background";
      image.src = src;

      background.style.backgroundImage = `url(${response.url})`;
    })
    .catch(error => {
      document.getElementById("changeBackground").innerHTML = "Change Background";
      console.error('Error:', error)
    })
}

// This function swaps our style sheets by injecting the opposite stylehseet into the id of swapStyle when the checkbox is checked/unchecked
function swapStyleSheet() {
  document.getElementById("background").style.backgroundImage = "";
  if (document.getElementById("swapStyle").checked) {
    document.getElementById("pageStyle").setAttribute('href', 'styles/b.css');
  } else {
    document.getElementById("pageStyle").setAttribute('href', "styles/a.css");
  }
}

function defaultFont() {
  document.getElementById("title").style.fontFamily = "como";
}

function fontChange1() {
  document.getElementById("title").style.fontFamily = "blenny";
}

function fontChange2() {
  document.getElementById("title").style.fontFamily = "broadacre-hairline-4";
}

function fontChange3() {
  document.getElementById("title").style.fontFamily = "juniper-std";
}
