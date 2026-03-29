console.log("script.js loaded");
# https://api.giphy.com/v1/gifs/search?api_key=8jQKgqbdWUZCb4v6BrFoCddidOSw1dau&q=cat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
# https://api.giphy.com/v1/gifs/search?api_key=8jQKgqbdWUZCb4v6BrFoCddidOSw1dau&q=anime&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips

document.addEventListener("DOMContentLoaded", () => {
  let images = [];

  const gifContainer = document.querySelector("#gif-container");
  const button = document.querySelector("#fetch-gif-btn");
  const searchInput = document.querySelector("#search-input");

  console.log(button);

  async function getGifs(query = "cat") {
    const apiKey = "8jQKgqbdWUZCb4v6BrFoCddidOSw1dau";

    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=8`
      );
      const data = await response.json();
      images = data.data.map(gif => gif.images.fixed_height.url); // smaller & consistent size
      console.log(images);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
      images = [];
    }
  }

  button.addEventListener("click", async function () {
    console.log("BUTTON CLICKED");

    gifContainer.innerHTML = ""; // clear previous gifs

    const query = searchInput.value.trim() || "cat";
    await getGifs(query);

    images.forEach(url => {
      const col = document.createElement("div");
      col.className = "col-md-3 mb-3"; // proper Bootstrap column
      const img = document.createElement("img");
      img.src = url;
      img.alt = "GIF";
      img.className = "img-fluid rounded"; // responsive & nice styling
      col.appendChild(img);
      gifContainer.appendChild(col);
    });
  });
});
