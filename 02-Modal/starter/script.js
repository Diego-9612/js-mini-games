'use strict';

const story = document.querySelector('.story');
const overlay = document.querySelector('.overlay');
const btnCloseStory = document.querySelector('.close-story');
const btnShowStory = document.querySelectorAll('.show-story')

console.log(btnShowStory);

const closeStory = function(){
    story.classList.add('hidden');
    overlay.classList.add('hidden')
}

const openStory = function(){
    story.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

for (let i = 0; i < btnShowStory.length; i++) {
    btnShowStory[i].addEventListener('click',openStory);
}

btnCloseStory.addEventListener('click', closeStory);
overlay.addEventListener('click', closeStory);

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !story.classList.contains('hidden')){
        closeStory();
    }
})