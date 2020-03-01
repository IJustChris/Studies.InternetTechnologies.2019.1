function LoadArticles(pageNumber) {
    if (pageNumber <= 0) {
        pageNumber = 1;
    }
    if (pageNumber >= 3) {
        pageNumber = 2;
    }
    $.getJSON("http://finenance.pl/API/Article?page=" + pageNumber, null, function (data, status, jqXHR) { InsertDataIntoHTML(data); });
    var label = document.getElementById("PageNumberLabel");
    label.innerHTML = pageNumber;
}
function LoadNextPage() {
    var label = document.getElementById("PageNumberLabel");
    LoadArticles(Number(label.innerHTML) + 1);
}
function LoadPreviousePage() {
    var label = document.getElementById("PageNumberLabel");
    LoadArticles(Number(label.innerHTML) - 1);
}
function InsertDataIntoHTML(articles) {
    var mainContainer = document.getElementById("BlogMainContainer");
    mainContainer.innerHTML = "";
    articles.forEach(function (article) {
        var postContainer = document.createElement("div");
        postContainer.classList.add("blog-post-container");
        var image = document.createElement("img");
        image.classList.add("blog-post-image");
        image.src = article.ImageUrl;
        var content = document.createElement("div");
        content.classList.add("blog-post-text");
        content.innerHTML = "<h3>" + article.Title + "</h3>" + article.Content;
        postContainer.appendChild(image);
        postContainer.appendChild(content);
        mainContainer.appendChild(postContainer);
    });
}
function onPageLoad() {
    LoadArticles(1);
    var prev = document.getElementById("PreviousPageButton");
    var next = document.getElementById("NextPageButton");
    prev.onclick = LoadPreviousePage;
    next.onclick = LoadNextPage;
}
$(document).ready(onPageLoad);
