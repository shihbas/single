class Lib {
  constructor() {
  }

  Q(selector) {
    return document.querySelector(selector);
  }

  QS(selector) {
    return document.querySelectorAll(selector);
  }

  onReady = (fn) => {
    document.addEventListener("DOMContentLoaded", fn);
  };
}

const lib = new Lib();
