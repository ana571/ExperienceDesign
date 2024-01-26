const workshops = {
    1: ["portfolio/W1/Erasmus.png", "portfolio/W1/erasmussad.png", "portfolio/W1/luggage.png", "portfolio/W1/train.png"],
    2: ["portfolio/W2/j1.png", "portfolio/W2/j2.png", "portfolio/W2/j3.png", "portfolio/W2/j4.png", "portfolio/W2/j5.png", "portfolio/W2/j6final.png", "portfolio/W2/shop.png"],
    3: ["portfolio/W3/froggy.png", "portfolio/W3/frogs.png", "portfolio/W3/noise.png", "portfolio/W3/solution.png", "portfolio/W3/sol_ill.png"],
    4: ["portfolio/W4/patent.png", "portfolio/W4/active.png", "portfolio/W4/acti.png", "portfolio/W4/inroom.png"],
    5: ["portfolio/W5/karenine.png", "portfolio/W5/bench.png", "portfolio/W5/pho.png", "portfolio/W5/restbench.png"],
    6: ["portfolio/W6/galicienne.png", "portfolio/W6/chat.png", "portfolio/W6/collage.png", "portfolio/W6/galicienne.png", "portfolio/W6/inspo.png", "portfolio/W6/image.png"]
};
"portfolio/W6/galicienne.png"

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
