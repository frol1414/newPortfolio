const url = '/images/works/'
const initialState = [
  {
    id: 1,
    title: 'Tips',
    desc: `Service for providing the ability to accept tips in a contactless way (by QR-code, nfc, following the link)`,
    myWork: [
      'I Worked out the architecture of the project frontend',
      'I Completely wrote the Frontend part for this project for API back-end developers',
      'I Created a constructor that allows you to create your own unique business card. A lot of fields, pictures, colors, inscriptions are configured, with the provision of a preview in real time',
      'I wrote various components that were later used in other projects',
      'Developed a database architecture with back-end developers',
      'I wrote a service in an adaptive format',
    ],
    stack: ['Javascript', 'Vue.js / Vuex', 'PHP (Laravel)', 'PostgreSQL'],
    mainTech: 'Vue.js',
    images: [`${url}tips/1.webp`, `${url}tips/2.webp`, `${url}tips/3.webp`, `${url}tips/4.webp`,
      `${url}tips/5.webp`, `${url}tips/6.webp`, `${url}tips/7.webp`, `${url}tips/8.webp`,
      `${url}tips/9.webp`, `${url}tips/10.webp`, `${url}tips/11.webp`, `${url}tips/12.webp`],
    mainImage: `${url}tips/main.webp`,
    mainImage2: `${url}tips/main2.webp`,
    imagesWidth: '90%',
    github: null,
    url: 'http://evolpay.ru/tips',
    main: true,
    class: 'blue'
  },
  {
    id: 2,
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
    images: [`${url}evolpay/1.webp`, `${url}evolpay/2.webp`, `${url}evolpay/3.webp`, `${url}evolpay/4.webp`,
      `${url}evolpay/5.webp`, `${url}evolpay/6.webp`, `${url}evolpay/7.webp`, `${url}evolpay/8.webp`,
      `${url}evolpay/9.webp`, `${url}evolpay/10.webp`],
    mainImage: `${url}evolpay/main.webp`,
    mainImage2: `${url}evolpay/main2.webp`,
    imagesWidth: '90%',
    github: null,
    url: 'http://evolpay.ru',
    main: true,
    class: 'yellow'
  },
  {
    id: 3,
    title: 'Terminal',
    mainTech: 'Vue.js',
    desc: `An application for couriers and retail outlets to display a QR-code for payment to customers. The
            application contains statistics on operations, history of operations, the choice of various organizations and units.`,
    myWork: [
      "I wrote a service in an adaptive format",
      "Created like PWA"
    ],
    stack: ['Javascript', 'Vue.js / Vuex', 'PHP (Laravel)', 'PostgreSQL'],
    images: [`${url}terminal/1.webp`, `${url}terminal/2.webp`, `${url}terminal/3.webp`, `${url}terminal/4.webp`,
      `${url}terminal/5.webp`, `${url}terminal/6.webp`, `${url}terminal/7.webp`, `${url}terminal/8.webp`],
    mainImage: `${url}terminal/main.webp`,
    mainImage2: `${url}terminal/main2.webp`,
    imagesWidth: '50%',
    github: null,
    url: null,
    main: true,
    class: 'blue'
  },
  {
    id: 4,
    title: 'Evoldonate',
    mainTech: 'Vue.js',
    desc: ``,
    myWork: [
      'Worked out the architecture of the project frontend',
      'Completely wrote the Frontend part for this project for API back-end developers',
      'Introduced multi-graphics into the project',
      "Created like PWA"
    ],
    stack: ['Javascript', 'Vue.js / Vuex', 'PHP (Laravel)', 'PostgreSQL', "Bootstrap 4"],
    images: [`${url}evoldonate/1.webp`, `${url}evoldonate/2.webp`, `${url}evoldonate/3.webp`, `${url}evoldonate/4.webp`,
      `${url}evoldonate/5.webp`, `${url}evoldonate/6.webp`, `${url}evoldonate/7.webp`, `${url}evoldonate/8.webp`,
      `${url}evoldonate/9.webp`, `${url}evoldonate/10.webp`, `${url}evoldonate/11.webp`, `${url}evoldonate/12.webp`],
    mainImage: `${url}evoldonate/main.webp`,
    mainImage2: `${url}evoldonate/main2.webp`,
    imagesWidth: '90%',
    github: null,
    url: 'http://evolpay.ru',
    main: true,
    class: 'pink'
  },
  {
    id: 5,
    title: 'Shopping List',
    mainTech: 'Vue.js',
    desc: `Service of shopping lists that can be edited by several users. Lists can be sent to other users. In
    addition to the lists, you can scan the discount card with your phone camera and add it to the list on your
    phone, to be displayed in the store from your phone. Cards can be shared.`,
    myWork: [
      'Worked out the architecture of the project frontend',
      'Completely wrote the Frontend part for this project for API back-end developers',
      "I wrote a service in an adaptive format",
      "Created like PWA"
    ],
    stack: ['Javascript', 'Vue.js / Vuex', 'PHP (Laravel)', 'PostgreSQL'],
    images: [`${url}shopping-list/1.webp`, `${url}shopping-list/2.webp`, `${url}shopping-list/3.webp`, `${url}shopping-list/4.webp`,
      `${url}shopping-list/5.webp`, `${url}shopping-list/6.webp`, `${url}shopping-list/7.webp`, `${url}shopping-list/8.webp`,],
    mainImage: `${url}shopping-list/main.webp`,
    mainImage2: `${url}shopping-list/main2.webp`,
    imagesWidth: '40%',
    github: null,
    url: null,
    main: true,
    class: 'blue'
  },
  {
    id: 6,
    title: 'Evolpay-Admin',
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
    images: [`${url}evolpay-admin/1.webp`, `${url}evolpay-admin/2.webp`, `${url}evolpay-admin/3.webp`],
    mainImage: `${url}evolpay-admin/main.webp`,
    mainImage2: `${url}evolpay-admin/main2.webp`,
    imagesWidth: '90%',
    github: null,
    url: null,
    main: false,
    class: 'pink'
  },
  {
    id: 7,
    title: 'Posts',
    mainTech: 'React Native',
    shortDesc: 'Small training project on React Native.',
    desc: `This is a small React Native application that helped me understand a lot of React Native techniques and
      methods. The application contains native components, store, navigation etc.`,
    myWork: [
      'Completely wrote the Frontend and Backend part for this project.',
    ],
    stack: ['Javascript', 'React Native', 'Redux', 'Bootstrap.css'],
    images: [`${url}rn-posts/1.webp`, `${url}rn-posts/2.webp`, `${url}rn-posts/3.webp`,
      `${url}rn-posts/4.webp`, `${url}rn-posts/5.webp`, `${url}rn-posts/6.webp`, `${url}rn-posts/7.webp`],
    mainImage: `${url}rn-posts/Main.webp`,
    mainImage2: `${url}rn-posts/main2.webp`,
    imagesWidth: '50%',
    github: 'https://github.com/frol1414/rn-posts',
    url: null,
    main: true,
    class: 'yellow'
  },
  {
    id: 8,
    title: 'Home wallet',
    mainTech: 'Vue.js',
    desc: `Small home wallet training project.`,
    myWork: [
      'Completely wrote the Frontend and Backend part for this project.',
    ],
    stack: ['Javascript', 'Vue.js', 'Vuex', 'Materialize.css', 'Firebase'],
    images: [`${url}home-wallet/1.webp`, `${url}home-wallet/2.webp`, `${url}home-wallet/3.webp`,
      `${url}home-wallet/4.webp`, `${url}home-wallet/5.webp`],
    mainImage: `${url}home-wallet/Main.webp`,
    mainImage2: `${url}home-wallet/main2.webp`,
    imagesWidth: '90%',
    github: 'https://github.com/frol1414/home-wallet',
    url: null,
    main: false,
    class: 'yellow'
  },
]

export default function worksReducer(state = initialState, action) {
  return state
}
