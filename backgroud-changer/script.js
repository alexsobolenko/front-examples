const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const a = Math.random() * 360;
    const b = Math.random() * 100;
    const c = Math.random() * 50;
    document.body.style.backgroundColor = `hsl(${a}, ${b}%, ${c}%)`;
});
