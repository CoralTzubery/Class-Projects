//printing the second max number.

let max = Infinity;
let secondMax = -Infinity; 

for (let i = 0; i < 5; i++) {
    const nextNumber  = Number(prompt("number #" + (i + 2)));

    if (nextNumber > max) {
        secondMax = max;
        max = nextNumber;
    } else if(nextNumber >secondMax) {
        secondMax = nextNumber;
    }
}

alert(secondMax);
