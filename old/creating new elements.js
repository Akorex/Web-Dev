function newParagraph() {
    var element = document.createElement("p");
    var main = document.getElementById("main");
    
    main.appendChild(element);
    var text = document.createTextNode("I am learning how to trade stocks");

    element.appendChild(text);

}