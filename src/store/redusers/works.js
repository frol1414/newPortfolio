const url = '/images/works/'
const initialState =  [
    {
      id: 1,
      title: 'React Native Posts',
      mainTech: 'React Native',
      shortDesc: 'Small training project on React Native.',
      desc: `This is a small React Native application that helped me understand a lot of React Native techniques and
      methods. The application contains native components, store, navigation etc.`,
      myWork: [
        'Completely wrote the Frontend and Backend part for this project.',
      ],
      stack: ['Javascript', 'React Native', 'Redux', 'Bootstrap.css'],
      images: [`${url}rn-posts/1.png`, `${url}rn-posts/2.png`, `${url}rn-posts/3.png`,
        `${url}rn-posts/4.png`, `${url}rn-posts/5.png`, `${url}rn-posts/6.png`, `${url}rn-posts/7.png`],
      mainImage: `${url}rn-posts/Main.png`,
      imagesWidth: '50%',
      github: 'https://github.com/frol1414/rn-posts',
      url: null,
      main: true,
      class: 'yellow'
    },
    // {
    //   id: 2,
    //   title: 'Terminal for Evolpay (PWA)',
    //   mainTech: 'Vue.js',
    //   shortDesc: 'Admin panel fo Evolpay.',
    //   desc: `An application for couriers and retail outlets to display a QR-code for payment to customers. The
    //         application contains statistics on operations, history of operations, the choice of various organizations and units.`,
    //   myWork: [
    //     'Completely wrote the Frontend and Backend part for this project.',
    //   ],
    //   stack: ['Javascript', 'Vue.js', 'Vuex', 'PHP (Laravel)', 'PostgreSQL'],
    //   images: ['/images/works/trm.evolpay/1.jpg', '/images/works/trm.evolpay/2.jpg', '/images/works/trm.evolpay/3.jpg',
    //     '/images/works/trm.evolpay/4.jpg', '/images/works/trm.evolpay/5.jpg', '/images/works/trm.evolpay/6.jpg'],
    //   mainImage: '/images/works/trm.evolpay/1.jpg',
    //   github: null,
    //   url: null,
    //   main: true,
    //   class: 'blue'
    // },
    {
      id: 3,
      title: 'Evolpay (Admin panel)',
      desc: `Admin panel for the Evolpay project with viewing all statistics on any project entities,
      the ability to administer and adjust some entities`,
      myWork: [
         'Проработал архитектуру фронтенда проекта',
         'Completely wrote the Frontend part for this project.',
         'Создал единый настраиваемый компонент для всех таблиц в проекте',
         'Внедрил мультиграфики в проект',
         '',
      ],
      stack: ['Javascript', 'Vue.js / Vuex', 'PHP (Laravel)', 'PostgreSQL'],
      mainTech: 'Vue.js',
      images: ['/images/works/evolpay-admin/1.png', '/images/works/evolpay-admin/2.png', '/images/works/evolpay-admin/3.png'],
      mainImage: '/images/works/evolpay-admin/main.png',
      imagesWidth: '90%',
      github: null,
      url: null,
      main: true,
      class: 'blue'
    },
  {
    id: 7,
    title: 'Tips',
    desc: `Сервис по предоставлению возможности принимать чаевые безконтактным способом (по qr коду, nfc, переход по ссылке)`,
    myWork: [
       'Проработал архитектуру фронтенда проекта',
       'Completely wrote the Frontend part for this project.',
       'Создал конструктор позволяющий создать свою уникальную визитку. Настраивается множество полей, картинок, цветов,  надписей, с предоставлениемпревью в режиме реального времени.',
       'Написал разные компоненты, которые в последствие применялись в других проектах.',
       '',
    ],
    stack: ['Javascript', 'Vue.js / Vuex', 'PHP (Laravel)', 'PostgreSQL'],
    mainTech: 'Vue.js',
    images: [],
    mainImage: '/images/works/tips/main.jpg',
    github: null,
    url: null,
    main: true,
    class: 'blue'
  },
    {
      id: 4,
      title: 'Evolpay',
      mainTech: 'Javascript',
      shortDesc: 'Service for receiving funds for any field of activity without equipment costs.',
      desc: `A service for receiving funds for any field of activity without the cost of equipment using QR-codes.
             The project is aimed at merchant acquiring, Internet acquiring, couriers, self-service machines, etc`,
      myWork: [
        'Написал адаптивный лендинг данного сервиса',
        'Created the main site according to the layout of the designer.',
        'Created about 90% of the Frontend of the client side.',
        'Created the CRUD system for most of the client-side entities on the Backend.',
      ],
      stack: ['Javascript', 'jQuery', 'PHP (Laravel)', 'Bootstrap 4', 'PostgreSQL'],
      images: ['/images/works/evolpay/1.png', '/images/works/evolpay/2.png', '/images/works/evolpay/3.png', '/images/works/evolpay/4.png',
        '/images/works/evolpay/5.png', '/images/works/evolpay/6.png', '/images/works/evolpay/7.png', '/images/works/evolpay/8.png'],
      mainImage: '/images/works/evolpay/main.png',
      imagesWidth: '90%',
      github: null,
      url: 'http://evolpay.ru',
      main: true,
      class: 'yellow'
    },
  {
    id: 8,
    title: 'Evoldonate',
    mainTech: 'Javascript',
    shortDesc: 'Service for receiving funds for any field of activity without equipment costs.',
    desc: `A service for receiving funds for any field of activity without the cost of equipment using QR-codes.
             The project is aimed at merchant acquiring, Internet acquiring, couriers, self-service machines, etc`,
    myWork: [
      'Написал адаптивный лендинг данного сервиса',
      'Created the main site according to the layout of the designer.',
      'Created about 90% of the Frontend of the client side.',
      'Created the CRUD system for most of the client-side entities on the Backend.',
    ],
    stack: ['Javascript', 'jQuery', 'PHP (Laravel)', 'Bootstrap 4', 'PostgreSQL'],
    images: ['/images/works/evoldonate/1.png', '/images/works/evoldonate/2.png', '/images/works/evoldonate/3.png',
      '/images/works/evoldonate/4.png', '/images/works/evoldonate/5.png', '/images/works/evoldonate/6.png',
      '/images/works/evoldonate/7.png', '/images/works/evoldonate/8.png', '/images/works/evoldonate/9.png',
      '/images/works/evoldonate/10.png', '/images/works/evoldonate/11.png', '/images/works/evoldonate/12.png'],
    mainImage: '/images/works/evoldonate/main.png',
    imagesWidth: '90%',
    github: null,
    url: 'http://evolpay.ru',
    main: true,
    class: 'pink'
  },
    {
      id: 5,
      title: 'Home wallet',
      shortDesc: 'Small home wallet training project.',
      desc: `Small home wallet training project.`,
      myWork: [
        'Completely wrote the Frontend and Backend part for this project.',
      ],
      stack: ['Javascript', 'Vue.js', 'Vuex', 'Materialize.css', 'Firebase'],
      images: ['/images/works/home-wallet/1.jpg', '/images/works/home-wallet/2.jpg', '/images/works/home-wallet/3.jpg',
        '/images/works/home-wallet/4.jpg', '/images/works/home-wallet/5.jpg'],
      mainImage: '/images/works/home-wallet/Main.png',
      imagesWidth: '90%',
      github: 'https://github.com/frol1414/home-wallet',
      url: null,
      main: true,
      class: 'yellow'
    },

  ]


export default function worksReducer(state = initialState, action) {
   return state
}