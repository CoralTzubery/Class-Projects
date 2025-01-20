// 2. Read 10 numbers. Alert all the numbers in ascending order (one alert or multiple) (don't use array methods)

const numbers: number[] = [];

let userInput = prompt("Please enter a number:");

while (userInput !== null) {
    numbers[numbers.length] = Number(userInput);
    userInput = prompt("Please enter a number:");
}


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i+1]) {
        let number = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i+1] = number;
    }
}

for (let i = 0; i < numbers.length; i++) {
    alert(numbers[i]);
}



