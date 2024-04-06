import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const buttonEl = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const spanDaysEl = document.querySelector('[data-days]');
const spanHoursEl = document.querySelector('[data-hours]');
const spanMinutesEl = document.querySelector('[data-minutes]');
const spanSecondsEl = document.querySelector('[data-seconds]');

buttonEl.setAttribute('disabled', '');
let userSelectedDate = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const userData = selectedDates[0].getTime();
    const data = Date.now();
    if (userData > data) {
      buttonEl.removeAttribute('disabled');
      userSelectedDate = userData;
    } else {
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        message: 'Please choose a date in the future',
      });
      buttonEl.setAttribute('disabled', '');
    }
  },
};

flatpickr(inputEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

buttonEl.addEventListener('click', () => {
  buttonEl.setAttribute('disabled', '');
  inputEl.setAttribute('disabled', '');

  intervalId = setInterval(() => {
    const diff = userSelectedDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(diff);

    spanDaysEl.textContent = addLeadingZero(days);
    spanHoursEl.textContent = addLeadingZero(hours);
    spanMinutesEl.textContent = addLeadingZero(minutes);
    spanSecondsEl.textContent = addLeadingZero(seconds);

    if (diff < 1000) clearInterval(intervalId);
  }, 1000);
});