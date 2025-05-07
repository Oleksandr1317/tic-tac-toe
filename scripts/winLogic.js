const winningCombinations = [
  // Горизонтали
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  // Вертикали
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  // Диагонали
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

function checkForWin() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      gameData[a[0]][a[1]] !== 0 &&
      gameData[a[0]][a[1]] === gameData[b[0]][b[1]] &&
      gameData[a[0]][a[1]] === gameData[c[0]][c[1]]
    ) {
      return gameData[a[0]][a[1]]; // Возвращает номер игрока (1 или 2)
    }
  }
  return 0; // Нет победителя
}

function checkForDraw() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (gameData[row][col] === 0) {
        return false; // Есть пустое поле, не ничья
      }
    }
  }
  return true; // Все поля заполнены
}

function endGame(winner) {
  const gameOverElement = document.getElementById("game-over");
  const gameResultElement = document.getElementById("game-result");
  const winnerNameElement = document.getElementById("winner-name");

  gameOverElement.style.display = "block";

  if (winner > 0) {
    const winnerName = players[winner - 1].name;
    gameResultElement.textContent = `You WON, ${winnerName}!`;
    winnerNameElement.textContent = winnerName;
  } else {
    gameResultElement.textContent = "It's a Draw!";
    winnerNameElement.textContent = "";
  }

  // Отключаем клики по игровому полю
  document.getElementById("game-board").style.pointerEvents = "none";
}

function resetGame() {
  // Очищаем gameData
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      gameData[row][col] = 0;
    }
  }

  // Очищаем игровое поле
  const gameBoardItems = document.querySelectorAll("#game-board li");
  gameBoardItems.forEach((item) => {
    item.textContent = "";
    item.classList.remove("disabled");
  });

  // Скрываем секцию game-over
  document.getElementById("game-over").style.display = "none";

  // Восстанавливаем возможность кликов
  document.getElementById("game-board").style.pointerEvents = "auto";

  // Сбрасываем активного игрока
  activePlayer = 0;
  document.getElementById("active-player-name").textContent =
    players[activePlayer].name;
}
