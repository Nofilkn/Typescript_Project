var myName = "Muhammad nofil !";
var a = myName.toLowerCase;
console.log(myName.toLowerCase()); //lower case
console.log(myName.toUpperCase()); // upper case 
console.log("Titlecase:", toTitleCase(myName)); // title case  if you want more help to under stand this title case go to readme
// Function to convert string to titlecase
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
