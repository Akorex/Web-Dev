var myVar;


function showPage() {
    document.getElementById("loader").style.display="none";
    document.getElementById("text").style.display="block";
}

function loader() {
    myVar = setTimeout(showPage, 3000);
}