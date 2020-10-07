const initialState = {
  photos: [
    {img: '/images/photo/1.jpg', class: "blue"},
    {img: '/images/photo/2.jpg', class: "pink"},
    {img: '/images/photo/3.jpg', class: "yellow"},
    {img: '/images/photo/4.jpg', class: "yellow"},
    {img: '/images/photo/5.jpg', class: "pink"},
    {img: '/images/photo/6.jpg', class: "blue"},
  ],
  facts: [
    {title: 'I love to code ... if I do not write, then I am dreaming', desc: "or eating or traveling", class: 'blue'},
    {title: 'I am constantly reading or watching to learn new things', desc: "especially food recipes", class: 'pink'},
    {title: 'I\'m a smart guy', desc: "well my mom says so", class: 'yellow'},
    {title: 'I am listening to music, anytime, anywhere', desc: "well, at least I'm not dancing", class: 'blue'},
    {title: 'I have no bad habits', desc: "well, except for computer games", class: 'pink'},
    {title: 'Never let me play Factorio or Stellaris', desc: "combinators, galaxies, oh.", class: 'yellow'},
  ]
}
//frontfas.com/frontfas.dev/frontfa.com/frontfa.dev/fullstacker.ru/fafront.dev

export default function skillsReducer(state = initialState, action) {
  return state
}