const ham2 = document.querySelector('.ham');
const menu2 = document.querySelector('.menu');
const icon2 = document.querySelector('.icon');

ham2.addEventListener('click', () => {
    menu2.classList.toggle('active');
    icon2.classList.toggle('active');
}); 