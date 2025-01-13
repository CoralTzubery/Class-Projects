// alert("hello world");
// alert("my name is Omer");
// alert("I'm 34 years old");
// alert("🥳🙏🔎");
// alert(50);
// alert(0.35);
// alert("12");
/* hello
this is a comment
with multiple lines */
// alert(5 + 2);
// alert(5 - 2);
// alert(5 * 2);
// alert(5 / 2);
// alert(1 + 2 * 3 - 4);
// alert("1" + "2");
// alert("12");
// alert("5" + 3);
// alert(5 + "3");
// alert("Your number is: " + 3);
// alert("5" - 3);
// Values - has types
// Types: string, number
// Operators: +, -, *, /
// + - can be either addition or concatenation (depends on the operands)
// const userName = prompt("What is your name?");
// // const userName = "Omer";
// alert("Hello " + userName);
// // Exercise #1
// // Input: "pizza"
// // Output: "wow! pizza is my favorite to!"
// const favoriteFood = prompt("What is your favorite food?");
// alert("Wow! " + favoriteFood + " is my favorite to!");
// Exercise #2
// Input 1: 5
// Input 2: 10
// Output: 15
// const firstNumber = Number(prompt("Enter first number"));
// const secondNumber = Number(prompt("Enter second number"));
// alert(firstNumber + secondNumber);
// 1. Change the class exercises to TypeScript - done!
// 2. Write a program that accepts 2 numbers and returns their ratio (8 / 2 = 4)
// const num1 = Number(prompt("Enter first number:"));
// const num2 = Number(prompt("Enter second number:"));
// alert(num1 / num2); 
// 3. Write a program that accepts 2 numbers. Each number represents a length of an edge of a right angle triangle. Return the length of the hypotenous.
// const side1 = Number(prompt("Enter the length of the first side of the right triangle:"));
// const side2 = Number(prompt("Enter the length of the second side of the right triangle:"));
// function calculateHypotenuse(side1: number, side2: number): number {
//     return Math.sqrt(side1 * side1 + side2 * side2);
// }
// const hypotenuse = calculateHypotenuse(side1, side2);
// alert("The length of the hyptenuse is: " + hypotenuse);
// 4. Write a program that accepts 2 number. The first is the lenght of the hypotenous, the second is another edge on the same triangle. Return the length of the missing edge.
var hypotenuse = Number(prompt("Enter the length of the hypotenuse:"));
var sideA = Number(prompt("Enter the length of side A:"));
function calculateSide(hypotenuse, side) {
    return Math.sqrt(hypotenuse * hypotenuse - side * side);
}
var sideB = calculateSide(hypotenuse, sideA);
alert("The length of side B is: " + sideB);
