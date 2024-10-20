function upDate(previewPic) {
    // Display an initial log to ensure event is triggered
    console.log("Mouseover event triggered");

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
