const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');

let index = 0;

const run = () => {
    index += 1;

    if (index >= img.length) index = 0;

    imgs.style.transform = `translateX(${index * (-800)}px)`;

    setTimeout(run, 2000);
};

run();
