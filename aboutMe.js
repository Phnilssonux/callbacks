function displayMessage(message, delay, callback) {
    setTimeout(() => {
        console.log(message);
        if (callback) callback();
    }, delay);
}

function showName(callback) {
    displayMessage("My name is Philip Nilsson.", 1000, callback);
}

function showAge(callback) {
    displayMessage("I am 31 years old.", 1000, callback);
}

function showLocation(callback) {
    displayMessage("I was born in Charlottenberg and now live in Karlstad.", 1000, callback);
}

function showHobbies(callback) {
    displayMessage("I enjoy beers, music, and playing the guitar.", 1000, callback);
}

showName(() => {
    showAge(() => {
        showLocation(() => {
            showHobbies(() => {
                console.log("That's all about me!");
            });
        });
    });
});