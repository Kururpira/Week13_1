const messageDate = document.querySelector('#messageDate');
const result = document.querySelector('#result');
function calculateBirthday() {
const messageDatestr = messageDate.value;
const messageTimestamp = Date.parse(messageDatestr);
const currentTimestamp = Date.now();
const timeDifference = messageTimestamp - currentTimestamp;
const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
if (messageDatestr === NaN || messageDatestr === undefined || messageDatestr === '' || messageDatestr === false) {
result.textContent = `Введите правильную дату!`;
result.style.color = 'red';
}
else {
    result.textContent = `Осталось дней до дня рождения: ${daysPassed}`;
    result.style.color = 'black';
}
}