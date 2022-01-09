import { images } from "../assets/images";

export const particlesConfig = {
  particles: {
    number: {
      value: 80,
    },
    color: {
      value: "#fff",
    },
    opacity: {
      random: {
        enable: true,
      },
      value: {
        min: 0,
        max: 1,
      },
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0,
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 2,
        max: 4,
      },
      animation: {
        speed: 4,
        minimumValue: 0.3,
      },
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 600,
        },
      },
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: true,
      speed: 1,
    },
  },
};

export const cardInfoBlocks = [
  {
    title: "Достоверно",
    content:
      "Карты создаются на основе визуализации астрономических данных из каталога NASA, на которых точно изображены все небесные тела.",
    margin: "750px 0 0 -755px",
  },
  {
    title: "Быстро",
    content: "Нам нужен 1 день и ваша звездная карта готова к отправке.",
    margin: "550px 0 0 -755px",
  },
  {
    title: "Качественно",
    content: "Печать на матовой фотобумаге премиум-класса.",
    margin: "350px 0 0 -755px",
  },
  {
    title: "Все включено",
    content:
      "Мы напечатаем, вставим в рамку, а вам останется только вручить подарок!",
    margin: "350px 0 0 755px",
  },
  {
    title: "Хороший подарок",
    content: "Это оригинальный, романтичный и очень красивый подарок.",
    margin: "550px 0 0 755px",
  },
  {
    title: "Память",
    content:
      "Карта позволит вам сохранить самые важные моменты жизни надолго. Трогательный подарок, который скажет «‎Я помню, Я люблю»‎.",
    margin: "750px 0 0 760px",
  },
];

export const mockFeedback = [
  {
    avatar: images.Client1,
    info: "Иван, Москва",
    content:
      "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Рот последний на берегу послушавшись, подзаголовок! Грамматики живет власти текст дорогу.",
  },
  {
    avatar: images.Client2,
    info: "Светлана, Екатеринбург",
    content:
      "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Рот последний на берегу послушавшись, подзаголовок! Грамматики живет власти текст дорогу.",
  },
  {
    avatar: images.Client3,
    info: "Александр, Ярославль",
    content:
      "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Рот последний на берегу послушавшись, подзаголовок! Грамматики живет власти текст дорогу.",
  },
];

export const ExampleBgs = [
  {
    id: 0,
    url: images.Bg0,
  },
  {
    id: 1,
    url: images.Bg1,
  },
  {
    id: 2,
    url: images.Bg2,
  },
  {
    id: 3,
    url: images.Bg3,
  },
  {
    id: 4,
    url: images.Bg4,
  },
];
