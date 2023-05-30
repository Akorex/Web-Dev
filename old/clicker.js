/*define the clicker() function to show the dropdown content when button is clicked*/
function clicker(){
    document.getElementById("mydropdown").classList.toggle("show");
}

/*hide the dropdown content if user clicks outside of it*/
window.onclick=function(event) {
    if(!event.target.matches('.button')){
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