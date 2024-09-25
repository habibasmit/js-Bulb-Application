const bulb = document.getElementById('bulb');
const onBtn = document.getElementById('onBtn');
const offBtn = document.getElementById('offBtn');

onBtn.addEventListener('click', () => {
    bulb.src = './image/On Img.png'; // On img
});

offBtn.addEventListener('click', () => {
    bulb.src = './image/Off Img.png'; // Off img
});
