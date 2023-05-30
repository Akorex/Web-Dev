var pos = 0;
var box = document.getElementById("box");
var t = setInterval(move, 10);
var right = true;

function move() {
    if (pos >=150){
        right = false;
    }
    else if (pos <= 0) {
        right = true;
    }

    if (!right){
        pos -=1;
        box.style.left = pos + "px";
    }
    else{
        pos++;
        box.style.left = pos + "px";
    }
   
}