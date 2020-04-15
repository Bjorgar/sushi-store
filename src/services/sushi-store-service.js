import first from '../slides/first.jpg';
import second from '../slides/second.jpg';
import third from '../slides/third.jpg';
import fourth from '../slides/fourth.jpg';
import fifth from '../slides/fifth.jpg';

export default class SushistoreService {

  rools = [
    {
      type: 'rools',
      id: 'cesar',
      name: 'Цезарь',
      ingredients: ['Рис', 'Нори', 'Сыр Филадельфия', 'Копчёная курица', 'Огурец', 'Японский майонез'],
      weight: 240,
      price: 98,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'bonito',
      name: 'Бонито',
      ingredients: ['Рис', 'Нори', 'Лосось', 'Икра Тобико', 'Салат Айсберг', 'Сыр Филадельфия', 'Авокадо', 'Морской гребешок в остром соусе', 'Стружка тунца'],
      weight: 250,
      price: 130,
      image: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/80635474_211485859863716_3160750094794358784_o.jpg?_nc_cat=105&_nc_sid=84a396&_nc_ohc=FapPfRGvUzwAX9NlDAP&_nc_ht=scontent-frx5-1.xx&oh=7dc1a353f9d356143d47a5e3da780e35&oe=5E91565C'
    },
    {
      type: 'rools',
      id: 'ebi',
      name: 'Эби',
      ingredients: ['Рис', 'Нори', 'Салат Айсберг', 'Сыр Филадельфия', 'Авокадо', 'Японский майонез', 'Криветка', 'Кунжут'],
      weight: 250,
      price: 135,
      image: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/78476540_205960817082887_6515414226381570048_o.jpg?_nc_cat=100&_nc_sid=84a396&_nc_ohc=jRacI3SjDQ8AX-Dlqlr&_nc_ht=scontent-frx5-1.xx&oh=a8a941139d30aa2845b3d3524e1b613a&oe=5E92C22E'
    },
    {
      type: 'rools',
      id: 'philadelphia-tiger',
      name: 'Филадельфия Тигр',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Сыр Филадельфия', 'Икра Тобико', 'Креветка Тигровая'],
      weight: 240,
      price: 116,
      image: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/67147827_181053132906989_4373458330140540928_n.jpg?_nc_cat=110&_nc_sid=84a396&_nc_ohc=iSuHmmrfXBEAX9P7zMg&_nc_ht=scontent-frx5-1.xx&oh=ab6fc2150b7e47468737c65ceb6c7c84&oe=5E928EF6'
    },
    {
      type: 'rools',
      id: 'avocado-gold',
      name: 'Авокадо Голд',
      ingredients: ['Авокадо', 'Лосось', 'Икра красная', 'Рис', 'Нори', 'Угорь', 'Сыр Филадельфия'],
      weight: 240,
      price: 150,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'avocado-krevetka',
      name: 'Авокадо-креветка',
      ingredients: ['Рис', 'Нори', 'Креветка', 'Авокадо', 'Огурец', 'Икра Тобико', 'Салат Айсберг', 'Сыр Филадельфия'],
      weight: 240,
      price: 128,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'futomak-ugor',
      name: 'Футомак-угорь',
      ingredients: ['Угорь копченый', 'Салат Айсберг', 'Огурец', 'Нори', 'Рис', 'Сыр Филадельфия', 'Кимчи', 'Соус Унаги'],
      weight: 250,
      price: 105,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'mix-roll',
      name: 'Микс-ролл',
      ingredients: ['Креветка', 'Тунец', 'Лосось', 'Угорь', 'Икра красная', 'Сыр сливочный', 'Икра Тобико', 'Рис', 'Нори'],
      weight: 250,
      price: 148,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'philadelphia-tunec',
      name: 'Филадельфия тунец',
      ingredients: ['Тунец', 'Сыр сливочный', 'Нори', 'Рис', 'Огурец', 'Авокадо'],
      weight: 240,
      price: 128,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'philadelphia-de-lux-tunec',
      name: 'Филадельфия "де-Люкс Тунец"',
      ingredients: ['Тунец', 'Лосось', 'Креветка', 'Рис', 'Нори', 'Сыр сливочный', 'Огурец', 'Икра красная'],
      weight: 240,
      price: 140,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'phila-zharenyi-losos',
      name: 'Фила "Жареный лосось"',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Авокадо', 'Жареный лосось', 'Сыр Филадельфия', 'Соус Спайси'],
      weight: 240,
      price: 110,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'philadelphia-de-lux',
      name: 'Филадельфия "де-Люкс"',
      ingredients: ['Угорь', 'Лосось', 'Креветка', 'Икра красная', 'Рис', 'Нори', 'Огурец', 'Авокадо', 'Сыр сливочный', 'Кунжут', 'Соус Унаги'],
      weight: 240,
      price: 140,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'eskolar-white',
      name: 'Эсколар White',
      ingredients: ['Рис', 'Сыр сливочный', 'Авокадо', 'Огурец', 'Соус Унаги', 'Кунжут', 'Эсколар'],
      weight: 240,
      price: 123,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'okun-unagi',
      name: 'Окунь-Унаги',
      ingredients: ['Моской окунь копчёный', 'Рис', 'Нори', 'Огурец', 'Авокадо', 'Соус Спайси'],
      weight: 220,
      price: 103,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'vegan-daicon',
      name: 'Веган-Дайкон',
      ingredients: ['Рис', 'Нори', 'Авокадо', 'Дайкон'],
      weight: 210,
      price: 83,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'vegan-roll',
      name: 'Веган Ролл',
      ingredients: ['Нори', 'Рис', 'Огурец', 'Авокадо', 'Хияши'],
      weight: 210,
      price: 80,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'futomak-s-krevetcoi',
      name: 'Футомак с креветкой',
      ingredients: ['Нори', 'Рис', 'Креветка тигровая', 'Огурец', 'Сыр сливочный', 'Икра Тобико', 'Авокадо'],
      weight: 230,
      price: 93,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'katana-kopchjonyi-losos',
      name: 'Катана Копчёный лосось',
      ingredients: ['Рис', 'Нори', 'Сыр Филадельфия', 'Огурец', 'Авокадо', 'Копчёный лосось', 'Икра Тобика', 'Соус Спайси'],
      weight: 235,
      price: 125,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'katana-ugor',
      name: 'Катана Угорь',
      ingredients: ['Рис', 'Нори', 'Сыр Филадельфия', 'Угорь', 'Огурец', 'Авокадо', 'Икра Тобико', 'Соус Спайси'],
      weight: 275,
      price: 128,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'philadelphia',
      name: 'Филадельфия',
      ingredients: ['Рис', 'Нори', 'Лосось', 'Огурец', 'Сыр сливочный'],
      weight: 240,
      price: 112,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'katana-losos',
      name: 'Катана Лосось',
      ingredients: ['Рис', 'Нори', 'Креветка', 'Огурец', 'Лосось', 'Икра Тобико', 'Соус Спайси'],
      weight: 235,
      price: 119,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'maki-avocado',
      name: 'Маки Авокадо',
      ingredients: ['Рис', 'Нори', 'Авокадо'],
      weight: 130,
      price: 49,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'maki-krevetka',
      name: 'Маки Креветка',
      ingredients: ['Рис', 'Нори', 'Креветка'],
      weight: 130,
      price: 68,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'maki-ogurec',
      name: 'Маки Огурец',
      ingredients: ['Рис', 'Нори', 'Огурец'],
      weight: 130,
      price: 45,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'maki-losos',
      name: 'Маки Лосось',
      ingredients: ['Рис', 'Нори', 'Лосось'],
      weight: 130,
      price: 68,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'maki-ugor',
      name: 'Маки Угорь',
      ingredients: ['Рис', 'Нори', 'Угорь'],
      weight: 130,
      price: 84,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'philadelphia-ugor',
      name: 'Филадельфия угорь',
      ingredients: ['Рис', 'Нори', 'Угорь', 'Огурец', 'Кунжут', 'Соус Унаги', 'Сыр сливочный'],
      weight: 240,
      price: 128,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'philadelphia-kopchenyi-losos',
      name: 'Филадельфия Копчёный лосось',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Копчёный лосось', 'Сыр сливочный'],
      weight: 130,
      price: 84,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'kalifornia-kopchenyi-losos',
      name: 'Калифорния Копчёный лосось',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Копчёный лосось', 'Японский майонез', 'Соус Кимчи', 'Авокадо'],
      weight: 210,
      price: 109,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'kalifornia-losos',
      name: 'Калифорния Лосось',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Лосось', 'Японский майонез', 'Соус Кимчи', 'Авокадо', 'Икра Тобико', 'Лук зелёный'],
      weight: 210,
      price: 98,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'kalifornia-unagi',
      name: 'Калифорния Унаги',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Угорь', 'Японский майонез', 'Соус Унаги', 'Авокадо', 'Икра Тобико', 'Кунжут'],
      weight: 210,
      price: 119,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'kalifornia-krevetka',
      name: 'Калифорния Креветка',
      ingredients: ['Рис', 'Нори', 'Огурец', 'Креветка королевская', 'Соус Кимчи', 'Авокадо', 'Икра Тобико'],
      weight: 240,
      price: 98,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
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
      image: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/p843x403/89197371_242970820048553_6116221360093003776_o.jpg?_nc_cat=109&_nc_sid=84a396&_nc_ohc=9BsZ2apY9zMAX_4aGCt&_nc_ht=scontent-frt3-2.xx&_nc_tp=6&oh=9ad19eff123f8eede3d88925c5d4718d&oe=5E980538'
    },
    {
      type: 'sets',
      id: 'futomak-set',
      name: 'Футомак сет',
      ingredients: this.creatingListFromRoolsForSets('futomak-ugor', 'futomak-s-krevetcoi', 'maki-losos', 'maki-krevetka'),
      weight: 1250,
      price: 490,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/s960x960/84123519_224409221904713_3785324591165997056_o.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=I-_ttgq64sAAX_9H3gC&_nc_ht=scontent-frt3-1.xx&_nc_tp=7&oh=43f2ba83ef3a375d66700cb39fd278ba&oe=5E95A969'
    },
    {
      type: 'sets',
      id: 'philadelphia-set',
      name: 'Филадельфия сет',
      ingredients: this.creatingListFromRoolsForSets('philadelphia', 'philadelphia-ugor', 'philadelphia-kopchenyi-losos'),
      weight: 1300,
      price: 530,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/p843x403/62087441_172508870428082_2877267890887720960_n.jpg?_nc_cat=108&_nc_sid=84a396&_nc_ohc=wR8vGvpNYy0AX-Mzjjc&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=adac8c72284d03f0c718db37962d7c29&oe=5E99249B'
    },
    {
      type: 'sets',
      id: 'kalifornia-set',
      name: 'Калифорния сет',
      ingredients: this.creatingListFromRoolsForSets('kalifornia-kopchenyi-losos', 'kalifornia-losos', 'kalifornia-unagi', 'kalifornia-krevetka'),
      weight: 1300,
      price: 530,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/p843x403/62087441_172508870428082_2877267890887720960_n.jpg?_nc_cat=108&_nc_sid=84a396&_nc_ohc=wR8vGvpNYy0AX-Mzjjc&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=adac8c72284d03f0c718db37962d7c29&oe=5E99249B'
    },
    {
      type: 'sets',
      id: 'phila-godzilla-set',
      name: 'Фила-Годзилла сет',
      ingredients: this.creatingListFromRoolsForSets('philadelphia', 'philadelphia-ugor', 'philadelphia-kopchenyi-losos', 'kalifornia-krevetka', 'eskolar-white'),
      weight: 1300,
      price: 530,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/p843x403/62087441_172508870428082_2877267890887720960_n.jpg?_nc_cat=108&_nc_sid=84a396&_nc_ohc=wR8vGvpNYy0AX-Mzjjc&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=adac8c72284d03f0c718db37962d7c29&oe=5E99249B'
    }
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

  getSlides = () => {
    return this.slides;
  };

  getAllItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.sets, ...this.rools])
      }, 700);
    });
  };
  
};