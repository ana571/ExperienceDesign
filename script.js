const workshops = {
    1: ["image1.jpg", "image2.jpg", "image3.jpg"],
    2: ["image4.jpg", "image5.jpg", "image6.jpg"],
    // Add images for other workshops similarly
};

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
