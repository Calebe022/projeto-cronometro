// Selecionando os elementos do DOM
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// Variáveis para controle do tempo
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let interval;
let isRunning = false;

// Função para atualizar o cronômetro
function updateTimer() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    // Atualizar os valores no display
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
    millisecondsElement.textContent = String(Math.floor(milliseconds / 10)).padStart(2, '0');
}

// Função para iniciar o cronômetro
function startTimer() {
    if (!isRunning) {
        interval = setInterval(updateTimer, 10);
        isRunning = true;
    }
}

// Função para pausar o cronômetro
function pauseTimer() {
    clearInterval(interval);
    isRunning = false;
}

// Função para reiniciar o cronômetro
function resetTimer() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    isRunning = false;

    // Atualizar o display para 00:00:00:00
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    millisecondsElement.textContent = '00';
}

// Eventos dos botões
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);