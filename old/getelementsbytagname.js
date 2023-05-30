function changeStyle() {
var paragraph = document.getElementsByTagName("p");
for (var x = 0; x < paragraph.length; x++) {
    paragraph[x].style.color = "blue";
}
}