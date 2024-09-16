// Pull markdown and render.
const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
  document.getElementById("blogContent").innerHTML = marked.parse(
    this.responseText,
  );
};
xhttp.open("GET", "blog.md");
xhttp.send();
