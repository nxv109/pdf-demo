$(document).ready(function () {
  window.onload = myApp;

  function myApp() {
    for (var i = 0; i < 10; i++) {
      $("#question-box-id").append(`
        <div class="question-box">
          <div class="question-box__question">Dear developer, our mission is to serve all the best programming news you’ll ever need. Ready?</div>
          <div class="question-box__answers">
            <div class="question-box__answer">abc</div>
            <div class="question-box__answer">abc</div>
            <div class="question-box__answer">abc</div>
            <div class="question-box__answer">abc</div>
          </div>
        </div>
    `);
    }
  }
});
