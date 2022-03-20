window.onload = function () {
  const ONE_TEXT = document.getElementById("one-text");

  ONE_TEXT.addEventListener("focus", handleFocusFunc);
  ONE_TEXT.addEventListener("focusout", handleFocusOutFunc);

  function handleFocusFunc() {
    this.style.border = "1px solid #03c75a";
  }

  function handleFocusOutFunc() {
    this.style.border = "1px solid #c6c6c6";
  }
};
