var width=10;
var elem=document.getElementById("myBar");
var id = setInterval(frame, 500);
function frame() {
    if (width >= 50) {
        clearInterval(id);
    }
    else {
        width+=10;
        elem.style.width= width + "%";
        document.getElementById("label").innerHTML = width*1 + "%";
    }
}