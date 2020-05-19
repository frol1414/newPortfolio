import posh from "../../images/FA/jobs/posh-mobile.jpg";
import fullApollo from "../../images/FA/jobs/apollo-img.jpg";
import apollo from "../../images/FA/jobs/apollo-mobile.jpg";
import portfolio from "../../images/FA/jobs/portfolio-mobile.jpg";

const initialState = {
  fWorks: [
    {id: 1, title: 'Admin panel Evol', stack: 'React, PHP', image: posh, fullImage: fullApollo, url: ''},
    {id: 2, title: 'Admil', stack: 'Vue, PHP', image: apollo, fullImage: fullApollo, url: ''},
    {id: 3, title: 'Client panel Evol', stack: 'Javascript, Laravel', image: portfolio, fullImage: fullApollo, url: ''},
    {id: 4, title: 'Nuthdioc', stack: 'Vue, Laravel', image: posh, fullImage: fullApollo, url: ''},
    {id: 5, title: 'Admin panel Evol', stack: 'Vue, Python', image: apollo, fullImage: fullApollo, url: ''},
    {id: 6, title: 'Admin panel Evol', stack: 'javascript', image: portfolio, fullImage: fullApollo, url: ''},
    {id: 7, title: 'Nuthdioc', stack: 'Vue, Laravel', image: posh, fullImage: fullApollo, url: ''},
    {id: 8, title: 'Admin panel Evol', stack: 'Vue, Python', image: apollo, fullImage: fullApollo, url: ''},
  ],
};

export default function worksReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}