import React, {Component} from "react";
import WorkBlock from "../../../../components/FrolovAlexander/WorkBlock/WorkBlock";
import './Works.css';
import posh from "../../../../images/FA/jobs/posh-mobile.jpg";
import fullApollo from "../../../../images/FA/jobs/apollo-img.jpg";
import apollo from "../../../../images/FA/jobs/apollo-mobile.jpg";
import portfolio from "../../../../images/FA/jobs/portfolio-mobile.jpg";

class Works extends Component {
  state = {
    works: [
      {title: 'Admin panel Evol', stack: 'React, PHP', image: posh, fullImage: fullApollo, url: ''},
      {title: 'Admil', stack: 'Vue, PHP', image: apollo, fullImage: fullApollo, url: ''},
      {title: 'Client panel Evol', stack: 'Javascript, Laravel', image: portfolio, fullImage: fullApollo, url: ''},
    ]
  };
  
  renderWorks() {
    return this.state.works.map((el) => {
      return (
        <WorkBlock data={el} key={el.title}/>
      )
    })
  }
  
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className=" main-works text-center">
            <h3 className="block-title">Some of my super duper works</h3>
            
            <div className="main-works-block">
              {this.renderWorks()}
            </div>
            
            <div className="work-btn">
              <a>See all my super duper briliant fantastic works</a>
              <p className="work-btn-desc">*Perhaps not so brilliant, but definitely excellent</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default Works;