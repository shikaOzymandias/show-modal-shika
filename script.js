'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const showBtn = document.querySelectorAll('.show-modal');

const showModal = function (){
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');

};
for (let i = 0 ; i < showBtn.length ; i++)
    showBtn[i].addEventListener('click' ,showModal);
// we could use both of ways . using closeModal as a func is cleaner.
const closeModal = function (){
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
}

closeBtn.addEventListener('click', function (){
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
});
overLay.addEventListener('click' , closeModal);

document.addEventListener('keydown' , function (x){
    if (x.key === 'Escape' && !modal.classList.contains('hidden') ){
        closeModal();
    }
});





