var sum = 0;
var count = Number(prompt("Please enter how many number you want to choose:"));
for (var i = 0; i < count; i++) {
    var nextNumber = Number(prompt("Please enter the " + (i + 1) + "-nt number"));
    sum = sum + nextNumber;
}
var average = sum / count;
alert("The average is: " + average);
