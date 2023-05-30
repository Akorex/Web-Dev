var birth = new Date(27/12/2000);
var d = new Date();


function wish() {
    if (
        birth.getDate() == d.getDate() &&
       birth.getMonth() == d.getMonth()
    )   
    document.write("Happy birthday");
}
    

wish();