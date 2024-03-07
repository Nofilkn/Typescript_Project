var guest = ['Nofil', 'Hina', 'Ahmed'];
console.log(guest[2] + " you can not make the dinner !\n\n");
//  ADDING A NEW MEMEBER 
guest[2] = 'ali';
console.log("\n\nINVITING WHOLE LIST ONE BY ONE ");
for (var i = 0; i < guest.length; i++) {
    console.log(guest[i] + " you are inviting for dinner make one dish that you want");
}
console.log(guest + " I am arramging more guest so we will enjoy i adding in my list ");
guest.push('Rayyan', 'Huzaiafa'); //adding in the end 
console.log(guest + " adding more guest at  the end");
//Adding members in the middle 
console.log("\n\n adding members in the middle ");
guest.splice(2, 0, 'hamza'); // 2 indiating the index where you have to add the new mwmber ,,|| 0 indicating that you dont want any string that to be replace 
console.log(guest + " adding guest in the middle ");
for (var i = 0; i < guest.length; i++) {
    console.log(guest[i] + " you are inviting for dinner make one dish that you want ");
}
// new for question 17 
console.log("\n\n deleting the whole list excepting two members");
for (var i = guest.length; i > 2; i--) {
    console.log(guest.pop() + " sorry ! you are not inviting for dinner .");
    console.log(guest);
}
console.log("\n\n INVITED GUEST TWO OF THEM ");
for (var i = 0; i < guest.length; i++) {
    console.log(guest[i] + ", you are invited for dinner ");
}
console.log("\n\n MAKING LIST EMPTY ");
for (var i = guest.length; i > 0; i--) {
    console.log(guest.pop());
}
console.log(guest);
