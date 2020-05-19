import posh from "../../images/FA/jobs/posh-mobile.jpg";
import fullApollo from "../../images/FA/jobs/apollo-img.jpg";
import apollo from "../../images/FA/jobs/apollo-mobile.jpg";
import portfolio from "../../images/FA/jobs/portfolio-mobile.jpg";

const initialState = {
  fWorks: [
    {id: 1, title: 'Admin panel Evol', stack: 'React, PHP', image: posh, fullImage: fullApollo, url: ''},
    {id: 2, title: 'Evolpay', stack: 'Javascript, PHP (Laravel)', image: apollo, fullImage: fullApollo, url: ''},
    {id: 3, title: 'EvolDonate', stack: 'Vue.js, PHP (Laravel)', image: portfolio, fullImage: fullApollo, url: ''},
    {id: 4, title: 'React-Native Todo', stack: 'React Native', image: posh, fullImage: fullApollo, url: ''},
    {id: 5, title: 'Terminal for Evolpay (PWA)', stack: 'Vue.js, PHP (Laravel)', image: posh, fullImage: fullApollo, url: ''},
  ],
};

export default function worksReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}