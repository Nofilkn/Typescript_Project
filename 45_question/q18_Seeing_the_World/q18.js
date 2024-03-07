var places = ['Hunza', 'Eaglenest', 'kumrat', 'rattigali', 'Taobat'];
console.log("unordered list " + places);
console.log("\n ordered list alphabatically  ignoring case " + places.sort());
//FOR CASE SESITIVITY 
// Sort the array alphabetically, ignoring case
places.sort(function (a, b) {
    var lowerA = a.toLowerCase();
    var lowerB = b.toLowerCase();
    if (lowerA < lowerB)
        return -1;
    if (lowerA > lowerB)
        return 1;
    return 0;
});
console.log(places);
//REVESE ORDER 
places.reverse();
console.log("\nReverse order " + JSON.stringify(places));
