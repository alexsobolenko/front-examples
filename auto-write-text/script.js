const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, assumenda?';

let index = 0;

const writeText = () => {
    document.body.innerHTML = text.slice(0, index);
    index += 1;

    if (index > text.length) index = 0;
};

setInterval(writeText, 111);
