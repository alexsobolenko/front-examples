const createHeart = () => {
    const  duration = Math.random() * 2 + 3;
    const heart = document.createElement('div');
    heart.innerText = '💜';
    heart.classList.add('heart');
    heart.style.left = (Math.random() * 101 - 2) + 'vw';
    heart.style.animationDuration = (duration <= 0.5 ? 4 : duration) + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
};

setInterval(createHeart, 222);
