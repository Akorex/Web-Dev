//js for loader
var load=setTimeout(loader, 3000);

function loader(){
    document.getElementById("loader").style.display="none";
    document.getElementById("text").style.display="block";
}


//js for progress bar
var width = 10;
var elem= document.getElementById("myBar");
var id= setInterval(frame, 1000);

function frame() {
    if (width>= 60){
        clearInterval(id);
    }
    else {
        width+=10;
        elem.style.width=width + "%";
        document.getElementById("label").innerHTML= width + "%";

    }

}
function clicker() {
    document.getElementById("mydropdown").classList.toggle("show");
}

/*hide the dropdown content if user clicks outside of it*/
window.onclick=function(event) {
    if(!event.target.matches('#button')){
        var dropdowns= document.getElementsByClassName("content");
        var i;
        for (i=0; i<dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}