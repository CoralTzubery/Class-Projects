// * superGreet - Get first name and last name, print a greeting with the names capitalized
// * greetFullname - Get the full name of the user, print a greeting with first name and last name capitalized
// * divide - Get 2 numbers, print their ratio (/) - handle division by 0
function ratio(number1, number2) {
    if (!isNaN(number1) && !isNaN(number2) && number2 !== 0) {
        alert("The ratio is: " + number1 / number2);
    }
    else {
        alert("You didn't chose valid values.");
    }
}
// * capitalize - Get a string, return the same string with the first character as a capital letter
function capitalize(input) {
    alert(input.slice(0, 1).toUpperCase() + input.slice(1));
}
capitalize("coral");
