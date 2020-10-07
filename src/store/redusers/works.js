const url = '/images/works/'
const initialState =  [
    {
      id: 1,
      title: 'Posts',
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
    //   title: 'Terminal (PWA)',
    //   mainTech: 'Vue.js',
    //   desc: `An application for couriers and retail outlets to display a QR-code for payment to customers. The
    //         application contains statistics on operations, history of operations, the choice of various organizations and units.`,
    //   myWork: [
    //    "I wrote a service in an adaptive format"
    //   ],
    //   stack: ['Javascript', 'Vue.js / Vuex', 'PHP (Laravel)', 'PostgreSQL'],
    //   images: ['/images/works/trm.evolpay/1.jpg', '/images/works/trm.evolpay/2.jpg', '/images/works/trm.evolpay/3.jpg',
    //     '/images/works/trm.evolpay/4.jpg', '/images/works/trm.evolpay/5.jpg', '/images/works/trm.evolpay/6.jpg'],
    //   mainImage: '/images/works/trm.evolpay/1.jpg',
    // imagesWidth: '50%',
    //   github: null,
    //   url: null,
    //   main: true,
    //   class: 'blue'
    // },
    {
      id: 3,
      title: 'Evolpay (Admin)',
      desc: `Admin panel for the Evolpay project with viewing all statistics on any project entities,
      the ability to administer and adjust some entities`,
      myWork: [
         'Worked out the architecture of the project frontend',
         'Completely wrote the Frontend part for this project for API back-end developers',
         'Created a single custom component for all tables in the project',
         'Introduced multi-graphics into the project',
         'Developed a database architecture with back-end developers',
      ],
      stack: ['Javascript', 'Vue.js / Vuex', 'PHP (Laravel)', 'PostgreSQL'],
      mainTech: 'Vue.js',
      images: [`${url}evolpay-admin/1.png`, `${url}evolpay-admin/2.png`, `${url}evolpay-admin/3.png`],
      mainImage: `${url}evolpay-admin/main.png`,
      imagesWidth: '90%',
      github: null,
      url: null,
      main: true,
      class: 'blue'
    },
  // {
  //   id: 7,
  //   title: 'Tips',
  //   desc: `Service for providing the ability to accept tips in a contactless way (by QR-code, nfc, following the link)`,
  //   myWork: [
  //      'I Worked out the architecture of the project frontend',
  //      'I Completely wrote the Frontend part for this project for API back-end developers',
  //      'I Created a constructor that allows you to create your own unique business card. A lot of fields, pictures, colors, inscriptions are configured, with the provision of a preview in real time',
  //      'I wrote various components that were later used in other projects',
    //    'Developed a database architecture with back-end developers',
    //    'I wrote a service in an adaptive format',
  //   ],
  //   stack: ['Javascript', 'Vue.js / Vuex', 'PHP (Laravel)', 'PostgreSQL'],
  //   mainTech: 'Vue.js',
  //   images: [],
  //   mainImage: `${url}tips/main.jpg`,
  //   github: null,
  //   url: 'http://evolpay.ru/tips',
  //   main: true,
  //   class: 'blue'
  // },
    {
      id: 4,
      title: 'Evolpay',
      mainTech: 'Javascript',
      desc: `A service for receiving funds for any field of activity without the cost of equipment using QR-codes.
             The project is aimed at merchant acquiring, Internet acquiring, couriers, self-service machines, etc`,
      myWork: [
        'Created the main site according to the layout of the designer',
        'Created about 90% of the Frontend of the client side',
        'Created the CRUD system for most of the client-side entities on the Backend',
        'Developed a database architecture with back-end developer',
      ],
      stack: ['Javascript', 'jQuery', 'PHP (Laravel)', 'PostgreSQL', 'Bootstrap 4',],
      images: [`${url}evolpay/1.png`, `${url}evolpay/2.png`, `${url}evolpay/3.png`, `${url}evolpay/4.png`,
        `${url}evolpay/5.png`, `${url}evolpay/6.png`, `${url}evolpay/7.png`, `${url}evolpay/8.png`],
      mainImage: `${url}evolpay/main.png`,
      imagesWidth: '90%',
      github: null,
      url: 'http://evolpay.ru',
      main: true,
      class: 'yellow'
    },
  {
    id: 8,
    title: 'Evoldonate (PWA)',
    mainTech: 'Vue.js',
    desc: ``,
    myWork: [
      'Worked out the architecture of the project frontend',
      'Completely wrote the Frontend part for this project for API back-end developers',
      'Introduced multi-graphics into the project',
    ],
    stack: ['Javascript', 'Vue.js / Vuex', 'PHP (Laravel)', 'PostgreSQL', "Bootstrap 4"],
    images: [`${url}evoldonate/1.png`, `${url}evoldonate/2.png`, `${url}evoldonate/3.png`, `${url}evoldonate/4.png`,
      `${url}evoldonate/5.png`, `${url}evoldonate/6.png`, `${url}evoldonate/7.png`, `${url}evoldonate/8.png`,
      `${url}evoldonate/9.png`, `${url}evoldonate/10.png`, `${url}evoldonate/11.png`, `${url}evoldonate/12.png`],
    mainImage: `${url}evoldonate/main.png`,
    imagesWidth: '90%',
    github: null,
    url: 'http://evolpay.ru',
    main: true,
    class: 'pink'
  },
    {
      id: 5,
      title: 'Home wallet',
      mainTech: 'Vue.js',
      desc: `Small home wallet training project.`,
      myWork: [
        'Completely wrote the Frontend and Backend part for this project.',
      ],
      stack: ['Javascript', 'Vue.js', 'Vuex', 'Materialize.css', 'Firebase'],
      images: [`${url}home-wallet/1.jpg`, `${url}home-wallet/2.jpg`, `${url}home-wallet/3.jpg`,
        `${url}home-wallet/4.jpg`, `${url}home-wallet/5.jpg`],
      mainImage: `${url}home-wallet/Main.png`,
      imagesWidth: '90%',
      github: 'https://github.com/frol1414/home-wallet',
      url: null,
      main: true,
      class: 'yellow'
    },
  // {
  //   id: 5,
  //   title: 'Shopping List',
    // mainTech: 'Vue.js',
  //   desc: `Service of shopping lists that can be edited by several users. Lists can be sent to other users. In
  //   addition to the lists, you can scan the discount card with your phone camera and add it to the list on your
  //   phone, to be displayed in the store from your phone. Cards can be shared.`,
  //   myWork: [
  //     'Worked out the architecture of the project frontend',
  //       'Completely wrote the Frontend part for this project for API back-end developers',
    // "I wrote a service in an adaptive format"
  //   ],
  //   stack: ['Javascript', 'Vue.js / Vuex', 'PHP (Laravel)', 'PostgreSQL', "Bootstrap 4"],
  //   images: [`${url}home-wallet/1.jpg`, `${url}home-wallet/2.jpg`, `${url}home-wallet/3.jpg`,
  //     `${url}home-wallet/4.jpg`, `${url}home-wallet/5.jpg`],
  //   mainImage: `${url}home-wallet/Main.png`,
  //   imagesWidth: '90%',
  //   github: null,
  //   url: null,
  //   main: true,
  //   class: 'yellow'
  // },
  // {
  //   id: 5,
  //   title: 'My portfolio',
    // mainTech: 'React.js',
  //   desc: `Portfolio with a short description of me and a list of my works`,
  //   myWork: [
  //     'Completely wrote the Frontend and Backend part for this project.',
  //      "I wrote a service in an adaptive format"
  //   ],
  //   stack: ['React.js', 'Redux'],
  //   images: [`${url}home-wallet/1.jpg`, `${url}home-wallet/2.jpg`, `${url}home-wallet/3.jpg`,
  //     `${url}home-wallet/4.jpg`, `${url}home-wallet/5.jpg`],
  //   mainImage: `${url}home-wallet/Main.png`,
  //   imagesWidth: '50%',
  //   github: null,
  //   url: null,
  //   main: true,
  //   class: 'yellow'
  // },

  ]


export default function worksReducer(state = initialState, action) {
   return state
}