document.addEventListener('DOMContentLoaded', function() {
    const flame = document.getElementById('flame');

    flame.addEventListener('click', function() {
        flame.classList.toggle('extinguished');
    });
});

function updateCountdown() {
    const endDate = new Date('2024-08-28T00:00:00');
    const now = new Date();
    const timeDifference = endDate - now;

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const redirectButton = document.getElementById('redirectButton');

    if (timeDifference <= 0) {
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        redirectButton.style.display = 'block';
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');

    if (timeDifference <= 10000) { // 10 seconds in milliseconds
        daysElement.style.color = 'red';
        hoursElement.style.color = 'red';
        minutesElement.style.color = 'red';
        secondsElement.style.color = 'red';

        daysElement.classList.add('text-3xl');
        hoursElement.classList.add('text-3xl');
        minutesElement.classList.add('text-3xl');
        secondsElement.classList.add('text-3xl');
    } else {
        daysElement.style.color = ''; // Reset to default
        hoursElement.style.color = '';
        minutesElement.style.color = '';
        secondsElement.style.color = '';

        daysElement.classList.remove('text-3xl');
        hoursElement.classList.remove('text-3xl');
        minutesElement.classList.remove('text-3xl');
        secondsElement.classList.remove('text-3xl');
    }
}

setInterval(updateCountdown, 1000);


