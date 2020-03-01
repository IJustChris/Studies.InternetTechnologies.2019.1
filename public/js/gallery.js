function LoadPhotos() {
    $.getJSON("http://finenance.pl/API/Images", null, function (data, status, jqXHR) { InsertDataIntoHTML(data); });
}
function InsertDataIntoHTML(images) {
    var mainConteiner = document.getElementById("ImagesContainer");
    images.forEach(function (x) {
        var imageContainer = document.createElement("div");
        var header = document.createElement("h2");
        var image = document.createElement("img");
        var background = document.createElement("div");
        header.textContent = x.Description;
        image.src = x.ImageUrl;
        image.id = "image_" + x._id;
        image.setAttribute("onmouseover", "opacityOn(this)");
        image.setAttribute("onmouseout", "opacityOff(this)");
        background.appendChild(header);
        background.classList.add("img-background");
        imageContainer.classList.add("content-gallery");
        imageContainer.appendChild(image);
        imageContainer.appendChild(background);
        mainConteiner.appendChild(imageContainer);
    });
}
function opacityOn(x) {
    x.style.opacity = "0.5";
    x.style.transition = " opacity 0.5s ease-in-out";
    x.parentElement.style.color = "#ffffff";
    x.nextElementSibling.style.backgroundColor = "#000000";
}
function opacityOff(x) {
    x.style.opacity = "1";
    x.parentElement.style.color = "red";
    x.parentElement.style.color = "#000000";
    x.nextElementSibling.style.backgroundColor = "#ffffff";
}
function onPageLoad() {
    LoadPhotos();
}
$(document).ready(onPageLoad);
