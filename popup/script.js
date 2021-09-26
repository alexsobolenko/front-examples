const btn = document.getElementById('btn');
const container = document.getElementById('container');
const close = document.getElementById('close');

btn.addEventListener('click', () => {
    container.classList.add('active');
});

close.addEventListener('click', () => {
    container.classList.remove('active');
});
