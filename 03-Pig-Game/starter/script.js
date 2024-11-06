'use strict';

// Seleccionar Elementos 
const playerElement0 = document.querySelector('.player--0')
const playerElement1 = document.querySelector('.player--1')
const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.getElementById('score--1');
const currentElement0 = document.getElementById('current--0');
const currentElement1 = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, active;

function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    active = true;

    scoreElement0.textContent = 0;
    scoreElement1.textContent = 0;
    currentElement0.textContent = 0;
    currentElement1.textContent = 0;

    playerElement0.classList.remove('player--winner');
    playerElement1.classList.remove('player--winner');
    playerElement0.classList.add('player--active');
    playerElement1.classList.remove('player--active');
    diceElement.classList.add('hidden');
}

init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerElement0.classList.toggle('player--active');
    playerElement1.classList.toggle('player--active');
}

//Girar y mostrar los dados 

btnRoll.addEventListener('click', function () {
    if (active) {
        //Generar un valor de 1 a 6. 
        const dice = Math.trunc(Math.random() * 6) + 1;
        //Mostrar el resultado
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${dice}.png`;
        //Verificar si el resultado es 1: Si es asi cambiar al otro jugador 
        if (dice !== 1) {
            //Actualizar el puntaje del jugador
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            //Cambiar al otro Jugador
            switchPlayer();
        };
    };
});

btnHold.addEventListener('click', function () {
    if (active) {
        //agregar el puntaje al jugador 
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //Verificar si es mayor a 100 
        if (scores[activePlayer] >= 10) {
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            active = false;
            diceElement.classList.add('hidden');
        } else {
            // cambiar al otro jugador 
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);


