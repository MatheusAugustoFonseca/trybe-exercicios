const countBtn = document.getElementById('first-btn');
const countingText = document.querySelector('#counting');
let clickCount = 0;

countBtn.addEventListener('click', () => countingText.innerHTML = clickCount += 1);
