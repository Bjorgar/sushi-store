import first from '../images/slides/first.jpg';
import second from '../images/slides/second.jpg';
import third from '../images/slides/third.jpg';
import fourth from '../images/slides/fourth.jpg';
import fifth from '../images/slides/fifth.jpg';

// Rools images

import cesar from '../images/rools/cesar.jpg';
import bonito from '../images/rools/bonito.jpg';
import ebi from '../images/rools/ebi.jpg';
import philadelphiaKrevetka from '../images/rools/philadelphia-krevetka.jpg';
import avocadoGold from '../images/rools/avocado-gold.jpg';
import avocadoKrevetka from '../images/rools/avocado-krevetka.jpg';
import futomakUgor from '../images/rools/futomak-ugor.jpg';
import mixRoll from '../images/rools/mix-roll.jpg';
import philadelphiaTunec from '../images/rools/philadelphia-tunec.jpg';
import philadelphiaDeLuxTunec from '../images/rools/philadelphia-de-lux-tunec.jpg';
import philadelphiaZharenyiLosos from '../images/rools/philadelphia-zharenyi-losos.jpg';
import philadelphiaDeLux from '../images/rools/philadelphia-de-lux.jpg';
import eskolarWhite from '../images/rools/eskolar-white.jpg';
import okunUnagi from '../images/rools/okun-unagi.jpg';
import veganDaicon from '../images/rools/vegan-daicon.jpg';
import veganRoll from '../images/rools/vegan-roll.jpg';
import futomakKrevetka from '../images/rools/futomak-krevetka.jpg';
import katanaKopchjonyiLosos from '../images/rools/katana-kopchjonyi-losos.jpg';
import katanaUgor from '../images/rools/katana-ugor.jpg';
import philadelphia from '../images/rools/philadelphia.jpg';
import katanaLosos from '../images/rools/katana-losos.jpg';
import makiAvocado from '../images/rools/maki-avocado.jpg';
import makiKrevetka from '../images/rools/maki-krevetka.jpg';
import makiOgurec from '../images/rools/maki-ogurec.jpg';
import makilosos from '../images/rools/maki-losos.jpg';
import makiUgor from '../images/rools/maki-ugor.jpg';
import philadelphiaUgor from '../images/rools/philadelphia-ugor.jpg';
import philadelphiaKopchjonyiLosos from '../images/rools/philadelphia-kopchjonyi-losos.jpg';
import kaliforniaKopchjonyiLosos from '../images/rools/kalifornia-kopchjonyi-losos.jpg';
import kaliforniaLosos from '../images/rools/kalifornia-losos.jpg';
import kaliforniaUnagi from '../images/rools/kalifornia-unagi.jpg';
import kaliforniaKrevetka from '../images/rools/kalifornia-krevetka.jpg';

import futomakSet from '../images/sets/futomak-set.jpg';
import kaliforniaSet from '../images/sets/kalifornia-set.jpg';
import makiSet from '../images/sets/maki-set.jpg';
import philadelphiaSet from '../images/sets/philadelphia-set.jpg';
import philaGodzillaSet from '../images/sets/phila-godzilla-set.jpg';

import udonMoreprodukty from '../images/noodles/udon-moreprodukty.jpg';
import udonKurica from '../images/noodles/udon-kurica.jpg';
import risovaiaMoreprodukty from '../images/noodles/risovaia-moreprodukty.jpg';
import risovaiaKurica from '../images/noodles/risovaia-kurica.jpg';
import udonOvoshchi from '../images/noodles/udon-ovoshchi.jpg';
import risovaiaOvoshchi from '../images/noodles/risovaia-ovoshchi.jpg';

import salatTaiskii from '../images/salads/salat-taiskii.jpg';
import salatHiiashiVakame from '../images/salads/salat-hiiashi-vakame.jpg';
import salatKrevetka from '../images/salads/salat-krevetka.jpg';

export default class SushistoreService {

  rools = [
    {
      type: 'rools',
      id: 'cesar',
      name: 'Цезарь',
      ingredients: ['Рис', 'Нори', 'Сыр Филадельфия', 'Копчёная курица', 'Огурец', 'Японский майонез'],
      weight: 240,
      price: 98,
      image: cesar
    },
    {
      type: 'rools',
      id: 'bonito',
      name: 'Бонито',
      ingredients: ['Рис', 'Нори', 'Лосось', 'Икра Тобико', 'Салат Айсберг', 'Сыр Филадельфия', 'Авокадо', 'Морской гребешок в остром соусе', 'Стружка тунца'],
      weight: 250,
      price: 130,
      image: bonito
    },
    {
      type: 'rools',
      id: 'ebi',
      name: 'Эби',
      ingredients: ['Рис', 'Нори', 'Салат Айсберг', 'Сыр Филадельфия', 'Авокадо', 'Японский майонез', 'Криветка', 'Кунжут'],
      weight: 250,
      price: 135,
      image: ebi
    },
    {
      type: 'rools',
      id: 'philadelphia-krevetka',
      name: 'Филадельфия Креветка',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Сыр Филадельфия', 'Икра Тобико', 'Креветка Тигровая'],
      weight: 240,
      price: 116,
      image: philadelphiaKrevetka
    },
    {
      type: 'rools',
      id: 'avocado-gold',
      name: 'Авокадо Голд',
      ingredients: ['Авокадо', 'Лосось', 'Икра красная', 'Рис', 'Нори', 'Угорь', 'Сыр Филадельфия'],
      weight: 240,
      price: 150,
      image: avocadoGold
    },
    {
      type: 'rools',
      id: 'avocado-krevetka',
      name: 'Авокадо-креветка',
      ingredients: ['Рис', 'Нори', 'Креветка', 'Авокадо', 'Огурец', 'Икра Тобико', 'Салат Айсберг', 'Сыр Филадельфия'],
      weight: 240,
      price: 128,
      image: avocadoKrevetka
    },
    {
      type: 'rools',
      id: 'futomak-ugor',
      name: 'Футомак-угорь',
      ingredients: ['Угорь копченый', 'Салат Айсберг', 'Огурец', 'Нори', 'Рис', 'Сыр Филадельфия', 'Кимчи', 'Соус Унаги'],
      weight: 250,
      price: 105,
      image: futomakUgor
    },
    {
      type: 'rools',
      id: 'mix-roll',
      name: 'Микс-ролл',
      ingredients: ['Креветка', 'Тунец', 'Лосось', 'Угорь', 'Икра красная', 'Сыр сливочный', 'Икра Тобико', 'Рис', 'Нори'],
      weight: 250,
      price: 148,
      image: mixRoll
    },
    {
      type: 'rools',
      id: 'philadelphia-tunec',
      name: 'Филадельфия тунец',
      ingredients: ['Тунец', 'Сыр сливочный', 'Нори', 'Рис', 'Огурец', 'Авокадо'],
      weight: 240,
      price: 128,
      image: philadelphiaTunec
    },
    {
      type: 'rools',
      id: 'philadelphia-de-lux-tunec',
      name: 'Филадельфия "де-Люкс Тунец"',
      ingredients: ['Тунец', 'Лосось', 'Креветка', 'Рис', 'Нори', 'Сыр сливочный', 'Огурец', 'Икра красная'],
      weight: 240,
      price: 140,
      image: philadelphiaDeLuxTunec
    },
    {
      type: 'rools',
      id: 'philadelphia-zharenyi-losos',
      name: 'Филадельфия "Жареный лосось"',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Авокадо', 'Жареный лосось', 'Сыр Филадельфия', 'Соус Спайси'],
      weight: 240,
      price: 110,
      image: philadelphiaZharenyiLosos
    },
    {
      type: 'rools',
      id: 'philadelphia-de-lux',
      name: 'Филадельфия "де-Люкс"',
      ingredients: ['Угорь', 'Лосось', 'Креветка', 'Икра красная', 'Рис', 'Нори', 'Огурец', 'Авокадо', 'Сыр сливочный', 'Кунжут', 'Соус Унаги'],
      weight: 240,
      price: 140,
      image: philadelphiaDeLux
    },
    {
      type: 'rools',
      id: 'eskolar-white',
      name: 'Эсколар White',
      ingredients: ['Рис', 'Сыр сливочный', 'Авокадо', 'Огурец', 'Соус Унаги', 'Кунжут', 'Эсколар'],
      weight: 240,
      price: 123,
      image: eskolarWhite
    },
    {
      type: 'rools',
      id: 'okun-unagi',
      name: 'Окунь-Унаги',
      ingredients: ['Моской окунь копчёный', 'Рис', 'Нори', 'Огурец', 'Авокадо', 'Соус Спайси'],
      weight: 220,
      price: 103,
      image: okunUnagi
    },
    {
      type: 'rools',
      id: 'vegan-daicon',
      name: 'Веган-Дайкон',
      ingredients: ['Рис', 'Нори', 'Авокадо', 'Дайкон'],
      weight: 210,
      price: 83,
      image: veganDaicon
    },
    {
      type: 'rools',
      id: 'vegan-roll',
      name: 'Веган Ролл',
      ingredients: ['Нори', 'Рис', 'Огурец', 'Авокадо', 'Хияши'],
      weight: 210,
      price: 80,
      image: veganRoll
    },
    {
      type: 'rools',
      id: 'futomak-krevetka',
      name: 'Футомак с креветкой',
      ingredients: ['Нори', 'Рис', 'Креветка тигровая', 'Огурец', 'Сыр сливочный', 'Икра Тобико', 'Авокадо'],
      weight: 230,
      price: 93,
      image: futomakKrevetka
    },
    {
      type: 'rools',
      id: 'katana-kopchjonyi-losos',
      name: 'Катана Копчёный лосось',
      ingredients: ['Рис', 'Нори', 'Сыр Филадельфия', 'Огурец', 'Авокадо', 'Копчёный лосось', 'Икра Тобика', 'Соус Спайси'],
      weight: 235,
      price: 125,
      image: katanaKopchjonyiLosos
    },
    {
      type: 'rools',
      id: 'katana-ugor',
      name: 'Катана Угорь',
      ingredients: ['Рис', 'Нори', 'Сыр Филадельфия', 'Угорь', 'Огурец', 'Авокадо', 'Икра Тобико', 'Соус Спайси'],
      weight: 275,
      price: 128,
      image: katanaUgor
    },
    {
      type: 'rools',
      id: 'philadelphia',
      name: 'Филадельфия',
      ingredients: ['Рис', 'Нори', 'Лосось', 'Огурец', 'Сыр сливочный'],
      weight: 240,
      price: 112,
      image: philadelphia
    },
    {
      type: 'rools',
      id: 'katana-losos',
      name: 'Катана Лосось',
      ingredients: ['Рис', 'Нори', 'Креветка', 'Огурец', 'Лосось', 'Икра Тобико', 'Соус Спайси'],
      weight: 235,
      price: 119,
      image: katanaLosos
    },
    {
      type: 'rools',
      id: 'maki-avocado',
      name: 'Маки Авокадо',
      ingredients: ['Рис', 'Нори', 'Авокадо'],
      weight: 130,
      price: 49,
      image: makiAvocado
    },
    {
      type: 'rools',
      id: 'maki-krevetka',
      name: 'Маки Креветка',
      ingredients: ['Рис', 'Нори', 'Креветка'],
      weight: 130,
      price: 68,
      image: makiKrevetka
    },
    {
      type: 'rools',
      id: 'maki-ogurec',
      name: 'Маки Огурец',
      ingredients: ['Рис', 'Нори', 'Огурец'],
      weight: 130,
      price: 45,
      image: makiOgurec
    },
    {
      type: 'rools',
      id: 'maki-losos',
      name: 'Маки Лосось',
      ingredients: ['Рис', 'Нори', 'Лосось'],
      weight: 130,
      price: 68,
      image: makilosos
    },
    {
      type: 'rools',
      id: 'maki-ugor',
      name: 'Маки Угорь',
      ingredients: ['Рис', 'Нори', 'Угорь'],
      weight: 130,
      price: 84,
      image: makiUgor
    },
    {
      type: 'rools',
      id: 'philadelphia-ugor',
      name: 'Филадельфия угорь',
      ingredients: ['Рис', 'Нори', 'Угорь', 'Огурец', 'Кунжут', 'Соус Унаги', 'Сыр сливочный'],
      weight: 240,
      price: 128,
      image: philadelphiaUgor
    },
    {
      type: 'rools',
      id: 'philadelphia-kopchjonyi-losos',
      name: 'Филадельфия Копчёный лосось',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Копчёный лосось', 'Сыр сливочный'],
      weight: 130,
      price: 84,
      image: philadelphiaKopchjonyiLosos
    },
    {
      type: 'rools',
      id: 'kalifornia-kopchjonyi-losos',
      name: 'Калифорния Копчёный лосось',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Копчёный лосось', 'Японский майонез', 'Соус Кимчи', 'Авокадо'],
      weight: 210,
      price: 109,
      image: kaliforniaKopchjonyiLosos
    },
    {
      type: 'rools',
      id: 'kalifornia-losos',
      name: 'Калифорния Лосось',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Лосось', 'Японский майонез', 'Соус Кимчи', 'Авокадо', 'Икра Тобико', 'Лук зелёный'],
      weight: 210,
      price: 98,
      image: kaliforniaLosos
    },
    {
      type: 'rools',
      id: 'kalifornia-unagi',
      name: 'Калифорния Унаги',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Угорь', 'Японский майонез', 'Соус Унаги', 'Авокадо', 'Икра Тобико', 'Кунжут'],
      weight: 210,
      price: 119,
      image: kaliforniaUnagi
    },
    {
      type: 'rools',
      id: 'kalifornia-krevetka',
      name: 'Калифорния Креветка',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Креветка королевская', 'Соус Кимчи', 'Авокадо', 'Икра Тобико'],
      weight: 240,
      price: 98,
      image: kaliforniaKrevetka
    },
  ];

  creatingListFromRoolsForSets = (...roolsId) => {
    const set = [];
    roolsId.forEach((rollId) => {
      const rollForSet = this.rools.find((roll) => roll.id === rollId);
      set.push(rollForSet);
    })
    return set;
  };

  sets = [
    {
      type: 'sets',
      id: 'maki-set',
      name: 'Маки сет',
      ingredients: this.creatingListFromRoolsForSets('maki-krevetka', 'maki-losos', 'maki-ugor', 'maki-ogurec'),
      weight: 520,
      price: 240,
      image: makiSet
    },
    {
      type: 'sets',
      id: 'futomak-set',
      name: 'Футомак сет',
      ingredients: this.creatingListFromRoolsForSets('futomak-ugor', 'futomak-krevetka', 'maki-losos', 'maki-krevetka'),
      weight: 1250,
      price: 490,
      image: futomakSet
    },
    {
      type: 'sets',
      id: 'philadelphia-set',
      name: 'Филадельфия сет',
      ingredients: this.creatingListFromRoolsForSets('philadelphia', 'philadelphia-ugor', 'philadelphia-kopchjonyi-losos'),
      weight: 1300,
      price: 530,
      image: philadelphiaSet
    },
    {
      type: 'sets',
      id: 'kalifornia-set',
      name: 'Калифорния сет',
      ingredients: this.creatingListFromRoolsForSets('kalifornia-kopchjonyi-losos', 'kalifornia-losos', 'kalifornia-unagi', 'kalifornia-krevetka'),
      weight: 1300,
      price: 530,
      image: kaliforniaSet
    },
    {
      type: 'sets',
      id: 'phila-godzilla-set',
      name: 'Фила-Годзилла сет',
      ingredients: this.creatingListFromRoolsForSets('philadelphia', 'philadelphia-ugor', 'philadelphia-kopchjonyi-losos', 'kalifornia-krevetka', 'eskolar-white'),
      weight: 1300,
      price: 530,
      image: philaGodzillaSet
    }
  ];

  noodles = [
    {
      type: 'noodles',
      id: 'udon-moreprodukty',
      name: 'Лапша Удон с морепродуктами',
      ingredients: ['Лапша Удон', 'Мидии', 'Креветки', 'Кальмары', 'Броколи', 'Морковь', 'Стручковая фасоль', 'Зеленый лук', 'Соус Устричный', 'Соус Торикацу'],
      weight: 370,
      price: 103,
      image: udonMoreprodukty
    },
    {
      type: 'noodles',
      id: 'udon-kurica',
      name: 'Лапша Удон с курицей',
      ingredients: ['Лапша Удон', 'Куриное филе', 'Броколи', 'Морковь', 'Перец болгарский', 'Репчатый лук', 'Соус Устричный'],
      weight: 365,
      price: 85,
      image: udonKurica
    },
    {
      type: 'noodles',
      id: 'risovaia-moreprodukty',
      name: 'Лапша рисовая с морепродуктами',
      ingredients: ['Лапша рисовая', 'Мидии', 'Креветки', 'Кальмары', 'Броколи', 'Морковь', 'Стручковая фасоль', 'Зеленый лук', 'Соус Шрирача', 'Соус к рисовой лапше'],
      weight: 375,
      price: 105,
      image: risovaiaMoreprodukty
    },
    {
      type: 'noodles',
      id: 'risovaia-kurica',
      name: 'Лапша рисовая с курицей',
      ingredients: ['Лапша рисовая', 'Куриное филе', 'Грибы шиитаке', 'Морковь', 'Перец болгарский', 'Репчатый лук', 'Соус Устричный', 'Зеленый лук'],
      weight: 330,
      price: 90,
      image: risovaiaKurica
    },
    {
      type: 'noodles',
      id: 'udon-ovoshchi',
      name: 'Лапша Удон с овощами',
      ingredients: ['Лапша Удон', 'Морковь', 'Броколи', 'Перец болгарский', 'Репчатый лук', 'Соус Устричный', 'Чеснок'],
      weight: 250,
      price: 65,
      image: udonOvoshchi
    },
    {
      type: 'noodles',
      id: 'risovaia-ovoshchi',
      name: 'Лапша рисовая с овощами',
      ingredients: ['Лапша рисовая', 'Морковь', 'Имбирь', 'Перец болгарский', 'Репчатый лук', 'Соус Устричный', 'Чеснок', 'Кунжут', 'Зеленый лук'],
      weight: 250,
      price: 60,
      image: risovaiaOvoshchi
    },
  ];

  salads = [
    {
      type: 'salads',
      id: 'salat-taiskii',
      name: 'Салат Тайский',
      ingredients: ['Салат Айсберг', 'Салат Лоло Роса', 'Куриное филе', 'Помидоры', 'Сухари панко', 'Медово-горчичный соус'],
      weight: 160,
      price: 73,
      image: salatTaiskii
    },
    {
      type: 'salads',
      id: 'salat-hiiashi-vakame',
      name: 'Салат Хияши Вакамэ',
      ingredients: ['Водоросли Хияши Вакамэ', 'Жаренный кунжут', 'Соус ореховый'],
      weight: 130,
      price: 58,
      image: salatHiiashiVakame
    },
    {
      type: 'salads',
      id: 'salat-krevetka',
      name: 'Салат с креветкой',
      ingredients: ['Салат Айсберг', 'Лолло Бионда', 'Фризе', 'Креветка', 'Соус ореховый', 'Соус Унаги'],
      weight: 140,
      price: 85,
      image: salatKrevetka
    },
  ];

  slides = [
    {
      id: 1,
      src: first
    },
    {
      id: 2,
      src: second
    },
    {
      id: 3,
      src: third
    },
    {
      id: 4,
      src: fourth
    },
    {
      id: 5,
      src: fifth
    },
  ];

  getRools = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.rools)
      }, 700);
    });
  };

  getSets = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.sets)
      }, 700);
    });
  };

  getNoodles = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.noodles)
      }, 700);
    });
  };

  getSalads = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.salads)
      }, 700);
    });
  };

  getSlides = () => {
    return this.slides;
  };

  getAllItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.sets, ...this.rools, ...this.noodles, ...this.salads])
      }, 700);
    });
  };
  
};