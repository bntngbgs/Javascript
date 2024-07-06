const forestToggler = document.getElementById("forest-button-toggler");
const oceanToggler = document.getElementById("ocean-button-toggler");
const cityToggler = document.getElementById("city-button-toggler");

const imageContainer = document.getElementById("image-container");
// Method 1
forestToggler.addEventListener("click", generateForestImage);
oceanToggler.addEventListener("click", generateOceanImage);
cityToggler.addEventListener("click", generateCityImage);

function generateForestImage() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  const imageTag = document.querySelector("img");
  imageTag.setAttribute("src", `resource/forest/image-${randomNumber}.jpg`);
  document.body.style.background =
    "linear-gradient(90deg, rgba(17,153,142,1) 0%, rgba(56,239,125,1) 94%)";
  imageContainer.appendChild(imageTag);
}
function generateOceanImage() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  const imageTag = document.querySelector("img");
  imageTag.setAttribute("src", `resource/ocean/image-${randomNumber}.jpg`);
  document.body.style.background =
    "linear-gradient(90deg, rgba(77,38,227,1) 0%, rgba(0,182,226,1) 94%)";
  imageContainer.appendChild(imageTag);
}
function generateCityImage() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  const imageTag = document.querySelector("img");
  imageTag.setAttribute("src", `resource/city/image-${randomNumber}.jpg`);
  document.body.style.background =
    "linear-gradient(90deg, rgba(117,127,154,1) 0%, rgba(215,221,232,1) 94%)";
  imageContainer.appendChild(imageTag);
}

// Method 2
// buttonToggler.addEventListener("click", function () {
//   const imageContainer = document.getElementById("image-container");
//   if (imageContainer.style.display === "none") {
//     imageContainer.style.display = "block";
//   } else {
//     imageContainer.style.display = "none";
//   }
// });

// Method 3
// buttonToggler.addEventListener("click", () => {
//   const imageContainer = document.getElementById("image-container");
//   if (imageContainer.style.display === "none") {
//     imageContainer.style.display = "block";
//   } else {
//     imageContainer.style.display = "none";
//   }
// });
