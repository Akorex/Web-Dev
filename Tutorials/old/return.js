function doSomething (a, b){
    return a*b;
}

var x = doSomething(5, 3);
document.write(x);

var user = prompt("what is your name?");
alert(user);

var result = confirm("Do you really want to leave this page?");
if (result == true) {
    alert("Thanks for visiting");
}
else {
    alert("Thanks for staying with us");
}

function test (number) {
    while (number < 5) {
        number++;
    }
    return number;
}

alert (test(2));