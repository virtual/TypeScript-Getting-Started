"use strict";
function startGame() {
    // starting a new game
    var messagesElement = document.getElementById('messages');
    // Adding ! makes the assumption the element is not-null
    messagesElement.innerHTML = 'Welcome to MultiMath! Starting new game...';
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map