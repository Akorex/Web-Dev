var orc = {
    hair: "green",
    age: 26,
    stomachFull: true,
    eat: function() {
        document.write("YUM YUM");
    }
};

delete orc.hair;
document.write(orc.hair);
document.write("hair" in orc);