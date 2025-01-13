let sum = 0;
const count = Number(prompt("Please enter how many number you want to choose:"));


for (let i = 0; i < count; i++ ) {
    let nextNumber = Number(prompt("Please enter the " + (i + 1) + "-nt number"));
    sum = sum + nextNumber; 
}

const average = sum / count; 
alert("The average is: " + average);
