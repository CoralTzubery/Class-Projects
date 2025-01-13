const userAge = Number(prompt("What is your age?"));
const userHeightInCm = Number(prompt("What is your height? (cm)"));

if (userAge >= 18) {
    alert("You can board the ride!");
} else if (userAge >= 8) {
    if (userHeightInCm >= 140) {
        alert("You can board the ride!");
    }
    } 
    else {
        alert("Go home");
    }

// Logic:
// Older than 8 y/o
// At least 140cm tall
// Or above 18 y/o

// Output: "You can board the ride!" or "Go home"
