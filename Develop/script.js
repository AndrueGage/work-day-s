// Global Variables
const dateEl = $('#currentDay');
const saveBtn = $('.saveBtn')
const currentHour = dayjs().format('HH');

// This function displays the current date and time
$(function () {

  function dateTimeDisplay() {
    let now = dayjs().format('MMMM DD, YYYY hh:mm:ss');
    dateEl.text(now);
  }
  setInterval(dateTimeDisplay, 500);
// On click event function that saves your data in the block text to local storage.
  saveBtn.on('click', function () {
    let timeBlock = $(this).parent().attr('id');
    let blockText = $(this).siblings('.description').val();
    localStorage.setItem(timeBlock, blockText);
  })
// This function takes each element that has the .time-block class and gets each id and compares it to the current hour. It also adds past,present,or future classes to the time blocks.
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
      if (number == currentHour) {
        $(this).addClass('present');
      }
    })
  }
  blockColor();
// For each element with the class .description we use its parents id to look up data in local storage then set that data to the text area element.
  function loadTasks() {
    $('.description').each(function () {
      let timeBlock = $(this).parent().attr('id');
      let task = localStorage.getItem(timeBlock);
      $(this).val(task);

    })
  }
  loadTasks();
});




