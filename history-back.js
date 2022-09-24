const backSpace = document.querySelector("#backspace-btn");

function historyBack() {
  window.history.back();
}

backSpace.addEventListener("click", historyBack);
