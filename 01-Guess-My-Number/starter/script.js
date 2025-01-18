'use strict';

// Definimos dos variables globales secretNumber para generar un número aleatorio y score para iniciar nuestro contador de oportunidades
let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 10;
let highscore = 0;

// Selección de elementos en el HTML para evitar repetir `document.querySelector` cada vez
const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const guessInput = document.querySelector('.guess');
const bodyElement = document.querySelector('body');
const highscoreElement = document.querySelector('.highscore');
const btnElement = document.querySelector('.btn')

const messageError = function (message) {
    messageElement.textContent = message;
};

// Iniciar juego imput y check
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(guessInput.value);

    // Verificar si el número está dentro del rango permitido
    if (guess <= 0 || guess > 30) {
        messageError('⛔ Ingresa un número entre 1 y 30');
    }
    // Si el número es correcto
    else if (guess === secretNumber) {
        messageError('🌟 El Número Es Correcto');
        numberElement.textContent = secretNumber;

        // Actualizar el estilo para indicar acierto
        bodyElement.style.backgroundColor = '#60b347';
        numberElement.style.width = '30rem';
        bodyElement.style.color = '#FFFFFF';
        btnElement.style.backgroundColor = '#FFFFFF';
        btnElement.style.color = '#222';

        // Actualizar el puntaje máximo si es mayor al actual
        if (score > highscore) {
            highscore = score;
            highscoreElement.textContent = highscore;
        }
    }
    // Si el número es incorrecto (demasiado alto o bajo)
    else if (guess !== secretNumber) {
        messageError(guess > secretNumber ? '😢 El Número es muy alto' : '😢 El Número es muy bajo');
        score--;
        scoreElement.textContent = score;

        // Verificar si el puntaje es menor a 1 para finalizar el juego
        if (score < 1) {
            messageError('🤯 Game Over 🤦‍♂️');
            scoreElement.textContent = 0;
            bodyElement.style.backgroundColor = '#b34747';
            numberElement.style.width = '30rem';
            bodyElement.style.color = '#FFFFFF';
            btnElement.style.backgroundColor = '#FFFFFF';
            btnElement.style.color = '#222';
        }
    }
});

// Reiniciar Juego
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 30) + 1;
    score = 10;

    // Restablecer los elementos de la interfaz
    messageError('Empieza a adivinar...');
    scoreElement.textContent = score;
    guessInput.value = '';  // Limpiar el campo de entrada
    numberElement.textContent = '?';

    // Restablecer el estilo visual de la página
    bodyElement.style.backgroundColor = '#222';
    numberElement.style.width = '15rem';
    bodyElement.style.color = '#12cf25';
});
