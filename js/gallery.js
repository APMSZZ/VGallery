window.onload = function() {
    console.log("Page loaded: adding tabindex to all images");

    let previews = document.querySelectorAll(".preview");
    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute("tabindex", "0"); 
    }
}

function upDate(previewPic) {
    console.log("Event triggered:", previewPic.alt);

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage = 
        "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("Event ended");

    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML = 
        "Hover over or focus on an image below to display here.";
}
