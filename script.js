document.addEventListener('DOMContentLoaded', () => {
    const mainMenu = document.getElementById('mainMenu');
    const scoreBoard = document.getElementById('scoreBoard');

    function showMainMenu() {
        mainMenu.style.display = 'flex';
        scoreBoard.style.display = 'none';
    }

    function hideMainMenu() {
        mainMenu.style.display = 'none';
        scoreBoard.style.display = 'block';
    }

    document.getElementById('startButton').addEventListener('click', () => {
        hideMainMenu();
        // ...existing code to start the game...
    });

    document.getElementById('optionsButton').addEventListener('click', () => {
        alert('Options clicked');
        // ...code to show options...
    });

    document.getElementById('highScoresButton').addEventListener('click', () => {
        alert('High Scores clicked');
        // ...code to show high scores...
    });

    document.getElementById('instructionsButton').addEventListener('click', () => {
        alert('Instructions clicked');
        // ...code to show instructions...
    });

    showMainMenu();
});
