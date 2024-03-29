const btnHide = document.querySelector('.button-hide');
const btnShow = document.querySelector('.button-next');
const Block1Text = document.querySelector('.main-block__text');
btnShow.addEventListener('click', function (event){ 
    event.preventDefault();
    btnShow.classList.add('diactive-btn');
    btnHide.classList.add('active-btn');
    Block1Text.classList.add('class-overflowVisible');
});

btnHide.addEventListener('click', function (event){ 
    event.preventDefault();
    btnShow.classList.remove('diactive-btn');
    btnHide.classList.remove('active-btn');
    Block1Text.classList.remove('class-overflowVisible');
});