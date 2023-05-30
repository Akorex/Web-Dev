function click() {
    document.getElementById("dropd").classList.toggle("show");
}

//close the dropdown menu if user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.button')){
        var dropdowns= document.getElementsByClassName("content");
        var i;
        for (i=0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}