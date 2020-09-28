
/*
1. Evolpay - client
2. Evolpay - admin
3. Evoldonate
4. EvolTerminal
5.
 */
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
      images: ['/images/works/rn-posts/1.png', '/images/works/rn-posts/2.png', '/images/works/rn-posts/3.png',
        '/images/works/rn-posts/4.png', '/images/works/rn-posts/5.png', '/images/works/rn-posts/6.png', '/images/works/rn-posts/7.png'],
      mainImage: '/images/works/rn-posts/111.JPG',
      github: 'https://github.com/frol1414/rn-posts',
      url: null,
      main: true,
      class: 'yellow'
    },
    {
      id: 2,
      title: 'Terminal for Evolpay (PWA)',
      mainTech: 'Vue.js',
      shortDesc: 'Admin panel fo Evolpay.',
      desc: `An application for couriers and retail outlets to display a QR-code for payment to customers. The
            application contains statistics on operations, history of operations, the choice of various organizations and units.`,
      myWork: [
        'Completely wrote the Frontend and Backend part for this project.',
      ],
      stack: ['Javascript', 'Vue.js', 'Vuex', 'PHP (Laravel)', 'PostgreSQL'],
      images: ['/images/works/trm.evolpay/1.jpg', '/images/works/trm.evolpay/2.jpg', '/images/works/trm.evolpay/3.jpg',
        '/images/works/trm.evolpay/4.jpg', '/images/works/trm.evolpay/5.jpg', '/images/works/trm.evolpay/6.jpg'],
      mainImage: '/images/works/trm.evolpay/1.jpg',
      github: null,
      url: null,
      main: true,
      class: 'blue'
    },
    {
      id: 3,
      title: 'Evolpay (Admin panel)',
      mainTech: 'Vue.js',
      shortDesc: 'Admin panel fo Evolpay.',
      desc: `Admin panel for the Evolpay project with viewing all statistics on any project entities,
      the ability to administer and adjust some entities`,
      myWork: [
        'Completely wrote the Frontend and Backend part for this project.',
      ],
      stack: ['Javascript', 'Vue.js', 'Vuex', 'PHP (Laravel)', 'Materialize.css', 'PostgreSQL'],
      images: ['/images/works/trm.evolpay/trm.jpg'],
      mainImage: '/images/works/trm.evolpay/trm.jpg',
      github: null,
      url: null,
      main: true,
      class: 'pink'
    },
    {
      id: 4,
      title: 'Evolpay',
      mainTech: 'Javascript',
      shortDesc: 'Service for receiving funds for any field of activity without equipment costs.',
      desc: `A service for receiving funds for any field of activity without the cost of equipment using QR-codes.
             The project is aimed at merchant acquiring, Internet acquiring, couriers, self-service machines, etc`,
      myWork: [
        'Created the main site according to the layout of the designer.',
        'Created about 90% of the Frontend of the client side.',
        'Created the CRUD system for most of the client-side entities on the Backend.',
      ],
      stack: ['Javascript', 'jQuery', 'PHP (Laravel)', 'Bootstrap 4', 'PostgreSQL'],
      images: ['/images/1.JPG', '/images/2.JPG', '/images/3.JPG'],
      mainImage: '/images/works/trm.evolpay/3.jpg',
      github: null,
      url: 'http://evolpay.ru',
      main: true,
      class: 'yellow'
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
      mainImage: '/images/works/home-wallet/1.jpg',
      github: 'https://github.com/frol1414/home-wallet',
      url: null,
      main: false,
      class: 'yellow'
    },
    
    
    
  ]


export default function worksReducer(state = initialState, action) {
   return state
}