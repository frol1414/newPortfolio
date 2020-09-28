const initialState = {
  backEndList: {
    title: 'backEnd',
    desc: 'I don’t like to wait for backend developers, so sometimes I write backутв myself',
    focus: false,
    list: [
      {id: 1, title: 'Php'},
      {id: 2, title: 'Laravel'},
      {id: 3, title: 'Node.js'},
    ]
  },
  frontEndList: {
    title: 'frontEnd',
    desc: 'I like to create',
    focus: true,
    list: [
      {id: 1, title: 'Javascript / ES6++'},
      {id: 2, title: 'React / Redux / MobX'},
      {id: 3, title: 'Vue / Vuex'},
      {id: 4, title: 'React Native'},
      {id: 5, title: 'Typescript'},
    ]
  },
  softSkillsList: {
    title: 'Softskills',
    desc: 'The most important skills at work! Really, the most important. No way without them.',
    focus: true,
    list: [
      {id: 1, title: 'Communication'},
      {id: 2, title: 'Teamwork'},
      {id: 3, title: 'Adaptability'},
      {id: 4, title: 'Time management'},
      {id: 5, title: 'Multitasking'},
      {id: 6, title: 'Argumentation'},
      {id: 7, title: 'Listening skills'}
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
      {id: 5, title: 'PostgreSQL'},
    ]
  },
}

export default function skillsReducer(state = initialState, action) {
  return state
}