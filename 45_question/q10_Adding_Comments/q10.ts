let myName = "Muhammad nofil !"
let a = myName.toLowerCase
console.log(myName.toLowerCase())       //lower case
console.log(myName.toUpperCase())       // upper case 

console.log("Titlecase:", toTitleCase(myName));  // title case  if you want more help to under stand this title case go to readme
// Function to convert string to titlecase
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt: string): string {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}