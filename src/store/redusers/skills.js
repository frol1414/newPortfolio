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
      {id: 1, title: 'Vue / Vuex'},
      {id: 2, title: 'React / Redux / MobX'},
      {id: 3, title: 'React Native'},
      {id: 4, title: 'Bootstrap / Materialize'},
      {id: 5, title: 'jQuery'},
    ]
  },
  softSkillsList: {
    title: 'Soft skills',
    desc: 'The most important skills at work! Really, the most important. No way without them.',
    focus: true,
    list: [
      {id: 1, title: 'Communicative'},
      {id: 2, title: 'Team worker'},
      {id: 3, title: 'Adaptive'},
      {id: 4, title: 'Time management skills'},
      {id: 5, title: 'Multitasking'},
      {id: 6, title: 'Listening skills'}
    ]
  },
  otherList: {
    title: 'other',
    desc: 'I do not know what to write here...',
    focus: false,
    list: [
      {id: 1, title: 'Javascript'},
      {id: 2, title: 'Typescript'},
      {id: 3, title: 'Linux'},
      {id: 4, title: 'Github'},
      {id: 5, title: 'Webpack'},
      {id: 6, title: 'PostgreSQL'},
    ]
  }
}
export default function skillsReducer(state = initialState, action) {
  return state
}