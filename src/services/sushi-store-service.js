import first from '../slides/first.jpg';
import second from '../slides/second.jpg';
import third from '../slides/third.jpg';
import fourth from '../slides/fourth.jpg';
import fifth from '../slides/fifth.jpg';

export default class SushistoreService {

  rools = [
    {
      type: 'rools',
      id: 'bonito',
      name: 'Bonito',
      ingredients: ['Яблоко', 'Авокадо', 'Груша', 'Нори'],
      weight: 240,
      price: 120,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
    {
      type: 'rools',
      id: 'ebi',
      name: 'Ebi',
      ingredients: ['Рис', 'Лук', 'Помидор', 'Изюм'],
      weight: 200,
      price: 100,
      image: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/80635474_211485859863716_3160750094794358784_o.jpg?_nc_cat=105&_nc_sid=84a396&_nc_ohc=FapPfRGvUzwAX9NlDAP&_nc_ht=scontent-frx5-1.xx&oh=7dc1a353f9d356143d47a5e3da780e35&oe=5E91565C'
    },
    {
      type: 'rools',
      id: 'avocado-gold',
      name: 'Avocado Gold',
      ingredients: ['Кокос', 'Пиво', 'Греча', 'Редис'],
      weight: 300,
      price: 310,
      image: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/78476540_205960817082887_6515414226381570048_o.jpg?_nc_cat=100&_nc_sid=84a396&_nc_ohc=jRacI3SjDQ8AX-Dlqlr&_nc_ht=scontent-frx5-1.xx&oh=a8a941139d30aa2845b3d3524e1b613a&oe=5E92C22E'
    },
    {
      type: 'rools',
      id: 'fila-delux',
      name: 'Fila Delux',
      ingredients: ['Ананас', 'Сыр', 'Угорь', 'Нори'],
      weight: 180,
      price: 350,
      image: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/67147827_181053132906989_4373458330140540928_n.jpg?_nc_cat=110&_nc_sid=84a396&_nc_ohc=iSuHmmrfXBEAX9P7zMg&_nc_ht=scontent-frx5-1.xx&oh=ab6fc2150b7e47468737c65ceb6c7c84&oe=5E928EF6'
    },
    {
      type: 'rools',
      id: 'redka-roll',
      name: 'Редька ролл',
      ingredients: ['Нори', 'Огурец', 'Редька', 'Соус'],
      weight: 240,
      price: 120,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/86875325_238020813876887_2313589811660718080_n.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=t0_pows5qj4AX_khy4p&_nc_ht=scontent-frt3-1.xx&oh=980878af0415cba325ba95e5e12030d4&oe=5E8E9D16'
    },
  ];

  sets = [
    {
      type: 'sets',
      id: 'maki-set',
      name: 'Maki Set',
      ingredients: [
        this.rools[0],
        this.rools[1],
        this.rools[2]        
      ],
      weight: 520,
      price: 240,
      image: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/p843x403/89197371_242970820048553_6116221360093003776_o.jpg?_nc_cat=109&_nc_sid=84a396&_nc_ohc=9BsZ2apY9zMAX_4aGCt&_nc_ht=scontent-frt3-2.xx&_nc_tp=6&oh=9ad19eff123f8eede3d88925c5d4718d&oe=5E980538'
    },
    {
      type: 'sets',
      id: 'phaladelphia-set',
      name: 'Philadelphia Set',
      ingredients: [
        this.rools[3],
        this.rools[4],
        this.rools[2]        
      ],
      weight: 750,
      price: 350,
      image: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/s960x960/84123519_224409221904713_3785324591165997056_o.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=I-_ttgq64sAAX_9H3gC&_nc_ht=scontent-frt3-1.xx&_nc_tp=7&oh=43f2ba83ef3a375d66700cb39fd278ba&oe=5E95A969'
    },
    {
      type: 'sets',
      id: 'phila-godzila-set',
      name: 'Phila-Godzila Set',
      ingredients: [
        this.rools[3],
        this.rools[0]        
      ],
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