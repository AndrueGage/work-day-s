const dateEl = $('#currentDay');
const saveBtn = $('.saveBtn')
const currentHour = dayjs().format('HH');


$(function () {

  function dateTimeDisplay() {
    let now = dayjs().format('MMMM DD, YYYY hh:mm:ss');
    dateEl.text(now);
  }
  setInterval(dateTimeDisplay, 500);

  saveBtn.on('click', function () {
    let timeBlock = $(this).parent().attr('id');
    let blockText = $(this).siblings('.description').val();
    localStorage.setItem(timeBlock, blockText);
  })

  function blockColor() {
    $('.time-block').each(function () {
      let inputString = $(this).attr('id');
      let number = parseInt(inputString.split('-')[1]);
      if (number < currentHour) {
        $(this).addClass('past');
      }
      if (number > currentHour) {
        $(this).addClass('future');
      }
      if (number === currentHour) {
        $(this).addClass('present');
      }
    })
  }
  blockColor();

  function loadTasks() {
    $('.description').each(function () {
      let timeBlock = $(this).parent().attr('id');
      let task = localStorage.getItem(timeBlock);
      $(this).val(task);

    })
  }
  loadTasks();
});




