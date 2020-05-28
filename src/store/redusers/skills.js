const initialState = {
  fSkills: {
    backEndList: {
      title: 'backEnd',
      desc: 'I don’t like to wait for backend developers, so sometimes I write backутв myself',
      focus: false,
      list: [
        {id: 1, title: 'Php / Laravel'},
        {id: 2, title: 'Node.js'},
        {id: 3, title: 'PostgreSQL'}
      ]
    },
    frontEndList: {
      title: 'frontEnd',
      desc: 'I like to create',
      focus: true,
      list: [
        {id: 1, title: 'Javascript / ES6++'},
        {id: 2, title: 'React / Redux'},
        {id: 3, title: 'React Native'},
        {id: 4, title: 'Vue / Vuex'},
        {id: 5, title: 'jQuery'},
      ]
    },
    importantList: {
      title: 'important',
      desc: 'The most important skills at work! Really, the most important. No way without them.',
      focus: true,
      list: [
        {id: 1, title: 'Rcvbcbdfbdfb'},
        {id: 2, title: 'I sing... very bad'},
        {id: 3, title: 'Rgfbgfgcsd'}
      ]
    },
    otherList: {
      title: 'other',
      desc: 'I do not know what to write here...',
      focus: false,
      list: [
        {id: 1, title: 'Linux'},
        {id: 2, title: 'Github'},
        {id: 3, title: 'Webpack'},
        {id: 4, title: 'WebSockets'},
      ]
    },
  },
  
  fFacts: [
    {id: 1, title: "I love to cook and travel by car.", desc: "Currently visited 17 countries."},
    {id: 2, title: "My mom says I'm a very smart boy.", desc: "And grandma also says."},
    {id: 3, title: "I do not snore - I will not interfere with colleagues.", desc: "Seriously, no one has complained yet"},
    {id: 4, title: "I listen to music, always, everywhere.", desc: "Any genres, any music, in the mood"},
    {id: 5, title: "My grandmother says I'm a handsome guy.", desc: "That's just friends say the opposite )"},
    {id: 6, title: "I do not drink alcohol and do not smoke cigarettes.", desc: "Healthy lifestyle"},
  ],
  
};

export default function skillsReducer(state = initialState, action) {
  return state
}