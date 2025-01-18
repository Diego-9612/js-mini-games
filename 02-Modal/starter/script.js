'use strict';

const story = document.querySelector('.story');
const overlay = document.querySelector('.overlay');
const btnCloseStory = document.querySelector('.close-story');
const btnShowStory = document.querySelectorAll('.show-story')


const toggleVisibility = function (show) {
    story.classList.toggle('hidden', !show);
    overlay.classList.toggle('hidden', !show);
};

const openStory = () => toggleVisibility(true);
const closeStory = () => toggleVisibility(false);

document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('show-story')) {
        openStory();
    }
});

btnCloseStory.addEventListener('click', closeStory);
overlay.addEventListener('click', closeStory);

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !story.classList.contains('hidden')){
        closeStory();
    }
})