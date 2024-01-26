console.log("Script loaded");

const workshops = {
    1: ["portfolio/W1/Erasmus.png", "portfolio/W1/erasmussad.png", "portfolio/W1/luggage.png", "portfolio/W1/train.png"],
    2: ["portfolio/W2/j1.png", "portfolio/W2/j2.png", "portfolio/W2/j3.png", "portfolio/W2/j4.png", "portfolio/W2/j5.png", "portfolio/W2/j6final.png", "portfolio/W2/shop.png"],
    3: ["portfolio/W3/froggy.png", "portfolio/W3/frogs.png", "portfolio/W3/noise.png", "portfolio/W3/solution.png", "portfolio/W3/sol_ill.png"],
    4: ["portfolio/W4/patent.png", "portfolio/W4/active.png", "portfolio/W4/acti.png", "portfolio/W4/inroom.png"],
    5: ["portfolio/W5/karenine.png", "portfolio/W5/bench.png", "portfolio/W5/pho.png", "portfolio/W5/restbench.png"],
    6: ["portfolio/W6/galicienne.png", "portfolio/W6/chat.png", "portfolio/W6/collage.png", "portfolio/W6/galicienne.png", "portfolio/W6/inspo.png", "portfolio/W6/image.png"]
};
let currentWorkshop = 1;
let currentImageIndex = 0;

function showWorkshop(workshopNumber) {
    currentWorkshop = workshopNumber;
    currentImageIndex = 0;
    displayImage();
}

function displayImage() {
    const imageContainer = document.getElementById("image-container");
    const images = workshops[currentWorkshop];

    // Clear existing images
    imageContainer.innerHTML = "";

    // Display the current image
    const imgElement = document.createElement("img");
    imgElement.src = images[currentImageIndex];
    imgElement.addEventListener("click", () => displayText("Some workshop text"));
    imageContainer.appendChild(imgElement);

    // Display navigation arrows
    const arrowLeft = document.createElement("div");
    arrowLeft.className = "arrow left";
    arrowLeft.addEventListener("click", navigateImage.bind(null, -1));
    imageContainer.appendChild(arrowLeft);

    const arrowRight = document.createElement("div");
    arrowRight.className = "arrow right";
    arrowRight.addEventListener("click", navigateImage.bind(null, 1));
    imageContainer.appendChild(arrowRight);
}

function navigateImage(direction) {
    const images = workshops[currentWorkshop];
    currentImageIndex += direction;

    // Wrap around if going beyond the boundaries
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    displayImage();
}

function displayText(text) {
    alert(text); // You can customize this to display the text in a more visually appealing way
}

const arrowLeft = document.createElement("div");
arrowLeft.className = "arrow left";
arrowLeft.addEventListener("click", navigateImage.bind(null, -1));
imageContainer.appendChild(arrowLeft);
console.log("Arrow Left created");

const arrowRight = document.createElement("div");
arrowRight.className = "arrow right";
arrowRight.addEventListener("click", navigateImage.bind(null, 1));
imageContainer.appendChild(arrowRight);
console.log("Arrow Right created");
