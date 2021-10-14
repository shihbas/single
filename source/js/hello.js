function hello() {
  const hellos = [
    { lang: "en", word: "Hello", dir: "rtl" },
    { lang: "zh", word: "你好", dir: "ltr" },
    { lang: "fr", word: "Bonjour", dir: "rtl" },
    { lang: "ja", word: "こんにちは", dir: "ltr" },
    { lang: "de", word: "Hallo", dir: "rtl" },
    { lang: "ru", word: "Привет", dir: "ltr" },
    { lang: "es", word: "Hola", dir: "rtl" },
    { lang: "ar", word: "اللغة الفارسية", dir: "ltr" },
  ];

  let current = 0;

  const createElement = (hello) => {
    return `<h3 class="hebrew" lang="${hello.lang}"  dir="${hello.dir}">${hello.word}</h3>`;
  };
  const showNext = () => {
    if (current >= hellos.length) {
      current = 0;
    }

    const greeting = lib.Q(".typewriter .greetings");
    greeting.innerHTML = createElement(hellos[current]);
    current += 1;
  };

  setTimeout(() => {
    showNext();
    setInterval(showNext, 3500);
  }, 500);
};

lib.onReady(hello)
