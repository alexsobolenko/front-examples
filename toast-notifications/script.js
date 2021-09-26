const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    createNotif();
});

createNotif = () => {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = 'New toast is here!'

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
};
