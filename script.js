const workshops = {
    1: ["portfolio/W1/Erasmus.png", "portfolio/W1/erasmussad.png", "portfolio/W1/luggage.png", "portfolio/W1/train.png"],
    2: ["portfolio/W2/j1.png", "portfolio/W2/j2.png", "portfolio/W2/j3.png", "portfolio/W2/j4.png", "portfolio/W2/j5.png", "portfolio/W2/j6final.png", "portfolio/W2/shop.png"],
    3: ["image4.jpg", "image5.jpg", "image6.jpg"],
    4: ["image4.jpg", "image5.jpg", "image6.jpg"],
    5: ["image4.jpg", "image5.jpg", "image6.jpg"],
    6: ["image4.jpg", "image5.jpg", "image6.jpg"]
};
"portfolio/W2/j1.png"

function showWorkshop(workshopNumber) {
    const imageContainer = document.getElementById("image-container");
    const images = workshops[workshopNumber];

    // Clear existing images
    imageContainer.innerHTML = "";

    // Display images
    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.addEventListener("click", () => displayText("Some workshop text"));
        imageContainer.appendChild(imgElement);
    });
}

function displayText(text) {
    alert(text); // You can customize this to display the text in a more visually appealing way
}
