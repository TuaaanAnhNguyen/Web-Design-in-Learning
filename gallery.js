function upDate(previewPic) {
    // Display an initial log to ensure event is triggered
    console.log("Mouseover or focus event triggered");

    // Log the alt and source attributes of the previewPic
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // Change the text of the element with id 'image'
    document.getElementById("image").innerHTML = previewPic.alt;

    // Change the background image of the element with id 'image'
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    // Reset the background image
    document.getElementById("image").style.backgroundImage = "url('')";

    // Reset the text
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
    // Display an initial log to ensure event is triggered
    console.log("Page loaded - setting tabindex");

    // Get all the images in the gallery
    var images = document.querySelectorAll(".gallery img");

    // Loop through each image and add tabindex attributes
    images.forEach(function(img, index) {
        img.setAttribute("tabindex", "0");
    });
}

// Ensure the function runs when the page is fully loaded
window.onload = addTabFocus;
