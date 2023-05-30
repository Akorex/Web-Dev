var load;

function getContent() {
    document.getElementById("loader").style.display="none";
    document.getElementById("text").style.display="block";
}

function loader() {
    load = setTimeout(getContent, 3000);
}