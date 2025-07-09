'use strict';

let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');
