// Zufällige Zahl generieren
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Event Listener für den Button
document.getElementById('submit-button').addEventListener('click', () => {
    // Eingabewert holen
    const userGuess = parseInt(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');

    // Validierung der Eingabe
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultDiv.textContent = 'Bitte gib eine gültige Zahl zwischen 1 und 100 ein!';
        return;
    }

    // Logik für das Zahlenspiel
    if (userGuess < randomNumber) {
        resultDiv.textContent = 'Zu niedrig! Versuch es erneut.';
    } else if (userGuess > randomNumber) {
        resultDiv.textContent = 'Zu hoch! Versuch es erneut.';
    } else {
        resultDiv.textContent = 'Richtig geraten! Ein neues Spiel wurde gestartet.';
        // Neue Zufallszahl für das nächste Spiel
        randomNumber = Math.floor(Math.random() * 100) + 1;
    }
});