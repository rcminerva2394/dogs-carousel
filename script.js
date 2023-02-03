'use strict';

const carousel = document.querySelector('.carousel');
carousel.style.overflow = 'hidden';

const memes = document.querySelectorAll('.meme');

let currMeme = 0;
const maxMeme = memes.length;

const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');

const goNextMeme = function (meme) {
    memes.forEach((m, i) => {
        m.style.transform = `translateX(${100 * (i - meme)}%)`;
    });
};
goNextMeme(0);

// Next Meme
const nextMeme = function () {
    if (currMeme === maxMeme - 1) {
        currMeme = 0;
    } else {
        currMeme++;
    }
    goNextMeme(currMeme);
};

const prevMeme = function () {
    if (currMeme === 0) {
        currMeme = maxMeme - 1;
    } else {
        currMeme--;
    }
    goNextMeme(currMeme);
};

btnRight.addEventListener('click', nextMeme);
btnLeft.addEventListener('click', prevMeme);
