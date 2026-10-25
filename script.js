index.html
// Поставь сюда дату ПОНЕДЕЛЬНИКА любой недели, которая у тебя 1-я
const WEEK1_START = new Date('2026-10-19');

function currentWeek() {
  const diff = Math.floor((new Date() - WEEK1_START) / (7 * 24 * 3600 * 1000));
  return Math.abs(diff) % 2 === 0 ? 1 : 2;
}

function showWeek(n) {
  document.querySelectorAll('.week').forEach(w => {
    w.hidden = w.id !== 'week' + n;
  });
  document.querySelectorAll('.tabs button').forEach(b => {
    b.classList.toggle('active', b.dataset.week == n);
  });
}

document.querySelectorAll('.tabs button').forEach(b => {
  b.addEventListener('click', () => showWeek(b.dataset.week));
});

// выделяем сегодняшний день в текущей неделе
const week = currentWeek();
const today = document.querySelector(
  '#week' + week + ' .day[data-day="' + new Date().getDay() + '"]'
);
if (today) today.classList.add('today');

showWeek(week);
