console.log("script.js loaded");
https://api.giphy.com/v1/gifs/search?api_key=8jQKgqbdWUZCb4v6BrFoCddidOSw1dau&q=cat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
https://api.giphy.com/v1/gifs/search?api_key=8jQKgqbdWUZCb4v6BrFoCddidOSw1dau&q=anime&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips

let images = [];
const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
async function getGifs() {
  const apiKey = "8jQKgqbdWUZCb4v6BrFoCddidOSw1dau"; 
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cat&limit=8`
  );
  const data = await response.json();
  images = data.data.map(gif => gif.images.original.url);

  console.log(images);
}
button.addEventListener("click", async function () {
  gifContainer.innerHTML = ""; 
  await getGifs();
  images.forEach(url => {
    gifContainer.innerHTML += `
      <img src="${url}" class="col-3 mb-3">
    `;
  });
});