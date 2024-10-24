function upDate(previewPic) {
    console.log("Mouseover or focus event triggered");

    const imageContainer = document.getElementById("image");

    // Clear any existing content
    imageContainer.innerHTML = "";

    // Create a new img element
    const img = document.createElement("img");

    // Set the src and alt attributes from the preview image
    img.src = previewPic.src;
    img.alt = previewPic.alt;

    // Insert the img element into the image container
    imageContainer.appendChild(img);

    // Optionally display alt text as caption (can be styled further)
    const caption = document.createElement("div");
    caption.innerHTML = previewPic.alt;
    caption.style.position = "absolute";
    caption.style.bottom = "10px";
    caption.style.left = "10px";
    caption.style.color = "white";
    caption.style.fontSize = "16px";
    imageContainer.appendChild(caption);
}

function undo() {
    // Reset the display by clearing the image container
    const imageContainer = document.getElementById("image");
    imageContainer.innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
    console.log("Page loaded - setting tabindex");

    // Get all the images in the gallery
    var images = document.querySelectorAll(".gallery img");

    // Loop through each image and add tabindex attributes
    images.forEach(function(img) {
        img.setAttribute("tabindex", "0");
    });
}

window.onload = addTabFocus;
