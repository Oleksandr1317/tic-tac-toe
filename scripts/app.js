let editedPlayer = 0;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

const playerConfigOverlayElement = document.getElementById(`config-overlay`)
const backdropElement = document.getElementById(`backdrop`);
const formElement = document.querySelector(`form`)
const errorsElement = document.getElementById(`config-errors`)

const cancelConfigButtonElement = document.getElementById(`cancel-config-button`)

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");

editPlayer1BtnElement.addEventListener(`click`,openPlayerConfig);
editPlayer2BtnElement.addEventListener(`click`,openPlayerConfig);

cancelConfigButtonElement.addEventListener(`click`,closePlayerConfig);
backdropElement.addEventListener(`click`,closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig)