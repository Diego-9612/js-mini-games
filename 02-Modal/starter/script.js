'use strict';

const story = document.querySelector('.story');
const overlay = document.querySelector('.overlay');
const btnCloseStory = document.querySelector('.close-story');
const btnShowStory = document.querySelectorAll('.show-story')

console.log(btnShowStory);

for (let i = 0; i < btnShowStory.length; i++) {
    btnShowStory[i].addEventListener('click', function () {

        console.log('Button Clicked');
        story.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}