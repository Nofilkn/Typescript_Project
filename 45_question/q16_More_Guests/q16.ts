let guest : string[] = ['Nofil','Hina', 'Ahmed']
console.log(guest[2]+ " you can not make the dinner !\n\n")
guest[2] = 'ali'
for(let i = 0 ; i < guest.length ; i++){

    console.log(guest[i]+" you are inviting for dinner make one dish that you want")
}


console.log(guest+" I am arramging more guest so we will enjoy i adding in my list\n\n ")
guest.push('Rayyan','Huzaiafa') //adding in the end 
console.log(guest + " adding more guest at  the end\n ")

//Adding members in the middle 

guest.splice(2,0,'hamza')  // 2 indiating the index where you have to add the new mwmber ,,|| 0 indicating that you dont want any string that to be replace 
console.log(guest + " adding guest in the middle ")

for(let i = 0 ; i < guest.length ; i++){

    console.log(guest[i]+" you are inviting for dinner make one dish that you want \n")
}

