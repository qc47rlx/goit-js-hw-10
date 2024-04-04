"use strict";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const calendar = document.querySelector("input#datetime-picker");
const btn = document.querySelector(".start-btn");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateChoose(selectedDates);
  },
};

let userSelectedDate;

function dateChoose(selectedDates) {
  userSelectedDate = selectedDates[0];
  if (userSelectedDate <= new Date()) {
    btn.disabled = true;
    calendar.disabled = true;
    showErrorMessage("Error");
  } else {
    btn.disabled = false;
    calendar.disabled = false;
  }
}

let intervalId;

function timer() {
  clearInterval(intervalId);
  const currentDate = new Date();
  const userSelectedDate = new Date(calendar.value);
  let ms = userSelectedDate - currentDate;
  updateTimerDisplay(ms);

  intervalId = setInterval(() => {
    updateTimerDisplay(ms);

    if (ms <= 0) {
      clearInterval(intervalId);
      showSuccessMessage('Success!');
      btn.disabled = true;
      calendar.disabled = true;
    }

    ms -= 1000;
  }, 1000);
}

function showSuccessMessage(message) {
  iziToast.success({
    title: 'Success',
    message: message,
  });
}

function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

function updateElement(selector, value) {
  document.querySelector(selector).textContent = value >= 0 ? addLeadingZero(value) : '00';
}

function updateTimerDisplay(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);
  updateElement("[data-days]", days);
  updateElement("[data-hours]", hours);
  updateElement("[data-minutes]", minutes);
  updateElement("[data-seconds]", seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

btn.addEventListener("click", timer);
document.addEventListener('DOMContentLoaded', () => { btn.disabled = true; });
