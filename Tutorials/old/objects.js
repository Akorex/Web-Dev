var person = {
    name: "john",
    age: 42,
    favColor: "green"
};

var x = person.name;
document.write(x);

var orc = {
    color: "green",
    height: 5,
    weight: 180,
    yell: function() {
        document.write("\n")
        document.write("Orcs are the best")
    }
};

var y = orc.color;
//document.write(y);
orc.yell();