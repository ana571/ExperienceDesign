const workshops = {
    1: {
        images: ["portfolio/W1/Erasmus.png", "portfolio/W1/erasmussad.png", "portfolio/W1/luggage.png", "portfolio/W1/train.png"],
        texts: ["Portrait of dark-haired erasmus danish student arriving in Lausanne train Station ",
         "dark-haired 25 year old student attempting to enter the bus under the rain with three big suitcases.The street is crowded he looks sad, he struggles and people yell at him for blocking the way",
         "automated airport cart that brings luggage of a passenger from one train to another, it can fit up to 4 suitcases, show the suitcases", 
         "a futuristic Swiss train, the luggage storage system is in the the floor of the coach, the coach are much more comfortable, the passengers sit in comfy couches, they can observe the machinery in the floor."]
    },
    2: {
        images: ["portfolio/W2/j1.png", "portfolio/W2/j2.png", "portfolio/W2/j3.png", "portfolio/W2/j4.png", "portfolio/W2/j5.png", "portfolio/W2/j6final.png", "portfolio/W2/shop.png"],
        texts: ["/a student who likes buying second hand clothes::0.1 wearing and flexing::0.5 a jacket, patchworked::0.5 colorful jacket::0.9 made of used clothes::0.5 and old knitted sweaters::0.5, making the person feel proud::0.5",
         "a student who likes buying second hand clothes::1.7 wearing and flexing::2 a jacket, patchworked::1.5 colorful jacket::2 made of used clothes::1.3 and old knitted sweaters::0.1, making the person feel proud::2", 
         "a student who likes buying second hand clothes::0.7 wearing and flexing::0.1 a jacket, patchworked::1.7 colorful jacket::0.5 made of used clothes::1.1 and old knitted sweaters::0.3, making the person feel proud::0.9", 
         "a student who likes buying second hand clothes::0.3 wearing and flexing::1.1 a jacket, patchworked::2.0 colorful jacket::1.7 made of used clothes::1.5 and old knitted sweaters::0.7, making the person feel proud::1.5", 
         "a student who likes buying second hand clothes::0.9 wearing and flexing::0.7 a jacket, patchworked::1.3 colorful jacket::1.1 made of used clothes::1.9 and old knitted sweaters::0.9, making the person feel proud::1.3", 
         "a student who likes buying second hand clothes::1.7 wearing and flexing::2.0 a jacket, patchworked::1.5 colorful jacket::2.0 made of used clothes::1.3 and old knitted sweaters::0.1, making the person feel proud::2.0", 
         "customers inside an artisan patchwork jacket shop, zoomed out"]
    },
    3: {
        images: ["portfolio/W3/froggy.png", "portfolio/W3/frogs.png", "portfolio/W3/noise.png", "portfolio/W3/solution.png", "portfolio/W3/sol_ill.png"],
        texts: ["Frog with noise-cancelling lungs (not generated by Midjourney)",
         "loud frogs in pond ", 
         "people talking in coworking space ", 
         "device to cancel noise on a desk, emitting invisible sound waves",
         "device to cancel noise on a desk, emitting invisible sound waves, person happily working on table with a laptop"]
    },
    4: {
        images: ["portfolio/W4/patent.png", "portfolio/W4/active.png", "portfolio/W4/acti.png", "portfolio/W4/inroom.png"],
        texts: ["Patent the clothes are inspired of", 
         "stylish sport outfit with mesh", 
         "a patch of textile on the shoulder of a person in a mesh that is made of fiber and electrical material. In the style of woven homemade wool. The rest of the closing is normal",
         "a photograph of a female athlete resting in a cozy room wearing elbow mesh"]
    },
    5: {
        images: ["portfolio/W5/karenine.png", "portfolio/W5/bench.png", "portfolio/W5/pho.png", "portfolio/W5/restbench.png"],
        texts: ["a black and white stray dog in istanbul, medium size, coarse hair",
         "bus bench near the blue mosque of istanbul",
         "Photo by Ara Güler",
         "Blend of two images from two prompts : a bench with a structure on top to collect water and small water trough near bench"]
    },
    6: {
        images: ["portfolio/W6/galicienne.jpg", "portfolio/W6/chat.png", "portfolio/W6/collage.png", "portfolio/W6/inspo.png", "portfolio/W6/image.png"],
        texts: ["Picture of La Galicienne from Google",
         "Picture reworked with ChatGPT",
         "Collage of inspiration images",
         "Image from a blend of an inspiration image and the ChatGPT reworked image",
         "Final image"]
    },
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
    const workshop = workshops[currentWorkshop];
    const images = workshop.images;

    // Clear existing content
    imageContainer.innerHTML = "";

    // Display the current image
    const imgElement = document.createElement("img");
    imgElement.id = "current-image";
    imgElement.src = images[currentImageIndex];
    imageContainer.appendChild(imgElement);

    // Attach click event listener only once
    if (!imgElement.hasAttribute("data-clicked")) {
        imgElement.setAttribute("data-clicked", "true");
        imgElement.addEventListener("click", () => displayText(workshop.texts[currentImageIndex]));
    }

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
    const images = workshops[currentWorkshop].images;
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