
function isDarkMode() {
  const mode = localStorage.getItem("darkmode");

  if (mode) {
    return mode === "on" ? true : false;
  }

  const darkQuery = "(prefers-color-scheme: dark)";

  if (window.matchMedia && window.matchMedia(darkQuery).matches) {
    return true;
  }

  return false;
};

function setClass() {
  var body = lib.Q("body")
  var dark_icon = lib.Q("#dark-icon")
  var bright_icon = lib.Q("#bright-icon")
  if (isDarkMode()) {
    body.classList.add("dark")
    dark_icon.classList.add("hide")
    bright_icon.classList.remove("hide")
  } else {
    body.classList.remove("dark")
    dark_icon.classList.remove("hide")
    bright_icon.classList.add("hide")
  }
};

function changeMode() {
  localStorage.setItem("darkmode", isDarkMode() ? "off" : "on");
  setClass();
};

function addClickEventToButton() {
  var btn = lib.Q(".dark-mode");
  btn.addEventListener('click', changeMode);
  setClass();
}

lib.onReady(addClickEventToButton)
setClass();
