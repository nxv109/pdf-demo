$(document).ready(function () {
  window.onload = myApp;

  const questionBoxEl = document.getElementById("question-box-id");

  function myApp() {
    for (var i = 0; i < 10; i++) {
      const questionBoxChildEl = document.createElement("div");

      questionBoxChildEl.classList.add("question-box");
      questionBoxChildEl.innerHTML = `
        <div class="question-box">
          <div class="question-box__question">Q.${
            i + 1
          } Dear developer, our mission is to serve all the best programming news you’ll ever need. Ready?</div>
          <div class="question-box__answers">
            <div class="question-box__answer">abc</div>
            <div class="question-box__answer">abc</div>
            <div class="question-box__answer">abc</div>
            <div class="question-box__answer">abc</div>
          </div>
        </div>
    `;
      questionBoxEl.append(questionBoxChildEl);
    }
  }
});
