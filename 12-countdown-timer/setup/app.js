const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getUTCDate();

const getDate = new Date(tempYear,tempMonth,tempDay + 10, 11,30,0);
const year = getDate.getFullYear();
const hours = getDate.getHours();
const minutes = getDate.getMinutes();

let month = getDate.getMonth();
month = months[month]
const date = getDate.getDate();
const weekDay = weekdays[getDate.getDay()];



giveaway.textContent = `giveaway ends on ${weekDay},${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = getDate.getTime();

function getRemainingTime() {
   const today = new Date().getTime();
  const t = futureTime - today;
  
  //1s = 1000ms
  //1m =  60s
  //1h = 60min
  //1d = 24h

  //1s = 1000ms
  //1m = 60.000ms
  //1h = 3.600.000ms
  //24h = 86.400.000ms
  
  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let days = Math.floor(t / oneDay); 
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">has expired<h4>`
  }
};

let countdown = setInterval(getRemainingTime, 1000);


getRemainingTime();