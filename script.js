const WEEK1_START = new Date('2026-10-19');

function currentWeek() {
  const diff = Math.floor((new Date() - WEEK1_START) / (7 * 24 * 3600 * 1000));
  return Math.abs(diff) % 2 === 0 ? 1 : 2;
}

function showWeek(n) {
  document.body.classList.toggle('theme2', n == 2);
  document.querySelectorAll('.week').forEach(function (w) {
    w.hidden = w.id !== 'week' + n;
  });
  document.querySelectorAll('.tabs button').forEach(function (b) {
    b.classList.toggle('active', b.dataset.week == n);
  });
}

document.querySelectorAll('.tabs button').forEach(function (b) {
  b.addEventListener('click', function () {
    showWeek(b.dataset.week);
  });
});

var week = currentWeek();
var today = document.querySelector(
  '#week' + week + ' .day[data-day="' + new Date().getDay() + '"]'
);
if (today) today.classList.add('today');

showWeek(week);
