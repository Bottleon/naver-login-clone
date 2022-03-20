window.onload = function () {
  const USER_NAME = document.getElementById("username_inp");
  const PASSWORD = document.getElementById("password_inp");
  const IP_SWITCH = document.getElementById("ip_switch");

  USER_NAME.addEventListener("focus", handleFocusFunc);
  PASSWORD.addEventListener("focus", handleFocusFunc);
  USER_NAME.addEventListener("focusout", handleFocusOutFunc);
  PASSWORD.addEventListener("focusout", handleFocusOutFunc);
  IP_SWITCH.addEventListener("click", handleSwitchClickFunc);

  function handleFocusFunc() {
    this.parentNode.style.border = "1px solid #03c75a";
  }

  function handleFocusOutFunc() {
    this.parentNode.style.border = "1px solid #c6c6c6";
  }

  function handleSwitchClickFunc() {
    const first_click = document.getElementsByClassName("on");
    const switch_toggle = this.childNodes[1];
    if (first_click.length === 0) {
      switch_toggle.classList.remove("off");
      switch_toggle.classList.add("on");
      this.style.backgroundColor = "#03c75a";
    } else {
      switch_toggle.classList.remove("on");
      switch_toggle.classList.add("off");
      this.style.backgroundColor = "";
    }
  }
};
