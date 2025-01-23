// Text based adventure game
// Locations and navigation - show description of current location and available options
// End game states - get to certain state/goal to win, or run into "trouble" and loose
// Inventory - track items in the user's possession and their state, allow using and dropping items, (limit invnetory size?)
playGame();
function playGame() {
    // loop while still playing
    // call current room
    // save next room
}
function firstRoom() {
    // show room description
    alert("The Ancient Library\n" +
        "You enter a room filled with dark wooden shelves, laden with ancient books.\n" +
        "A faint scent of old paper fills the air. An oil lamp burns softly in the corner, casting a gentle glow on a writing desk cluttered with scrolls.\n" +
        "A mysterious map hangs on the wall, and a hidden door is barely visible behind it.\n" +
        "Will you find the key to continue your journey among the dusty pages?");
    // get player action
    var action = prompt("You stand before the shelves of ancient books. What would you like to do?\n" +
        "1 - Search for books on ancient magic: You might find information that will help you on your journey.\n" +
        "2 - Examine the mysterious map: The map may lead you to a new location.\n" +
        "3 - Open the hidden door: The door might lead to an interesting place, but it could also be dangerous.");
    // return second/third/fourth room
    switch (action) {
        case "1":
            //
            break;
        case "2":
            //
            break;
        case "3":
            //
            break;
        case null:
            //
            break;
    }
    return secondRoom;
}
function secondRoom() {
    alert("The Enchanted Laboratory\n" +
        "The door opens to a laboratory illuminated by a greenish hue.\n" +
        "Bubbling vials sit on tables, and strange instruments are scattered about.\n" +
        "Complex formulas are written on a chalkboard, and a portrait of an alchemist gazes at you with penetrating eyes.\n" +
        "The room is filled with the aroma of herbs and spices. In the center, a large cauldron emits steam.\n" +
        "Can you decipher the secret formula to proceed?");
    var action = prompt("The laboratory is filled with strange instruments and mysterious substances. What would you like to do?\n" +
        "1 - Examine the formulas on the chalkboard: You might find a useful formula.\n" +
        "2 - Inspect the bubbling vials: They might contain important substances.\n" +
        "3 - Speak with the alchemist's portrait: It might provide you with valuable clues.");
    switch (action) {
        case "1":
            //
            break;
        case "2":
            //
            break;
        case "3":
            //
            break;
        case null:
            //
            break;
    }
    return thirdRoom;
}
function thirdRoom() {
    alert("The Hall of Knights\n" +
        "You find yourself in a vast hall with high ceilings and stone arches.\n" +
        "Suites of armor stand at the sides, as if awaiting orders.\n" +
        "A red carpet leads to an ornate throne, behind which stained glass windows depict tales of valor.\n" +
        "A grand chandelier hangs from the ceiling, casting flickering shadows.\n" +
        "Faint echoes of footsteps are heard from afar.\n" +
        "Will you find the way out before the guards return?");
    var action = prompt("The hall is filled with standing suits of armor. What would you like to do?\n" +
        "1 - Inspect the suits of armor: You might find weapons or useful items.\n" +
        "2 - Speak with the knights' figures: They might provide you with important information.\n" +
        "3 - Examine the stained glass windows: They might contain clues or secrets.");
    switch (action) {
        case "1":
            //
            break;
        case "2":
            //
            break;
        case "3":
            //
            break;
        case null:
            //
            break;
    }
    return secondRoom;
}
