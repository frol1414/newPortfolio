import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "../UI/Loader/Loader";
import './AllMyWorks.css';
import posh from "../../../images/FA/jobs/posh-mobile.jpg";
import fullApollo from "../../../images/FA/jobs/apollo-img.jpg";
import apollo from "../../../images/FA/jobs/apollo-mobile.jpg";
import portfolio from "../../../images/FA/jobs/portfolio-mobile.jpg";
import WorkBlock from "../UI/WorkBlock/WorkBlock";
import Footer from "./Footer/Footer";

export default class MyWorks extends Component {
  
  state = {
    works: [
      {title: 'Admin panel Evol', stack: 'React, PHP', image: posh, fullImage: fullApollo, url: ''},
      {title: 'Admil', stack: 'Vue, PHP', image: apollo, fullImage: fullApollo, url: ''},
      {title: 'Client panel Evol', stack: 'Javascript, Laravel', image: portfolio, fullImage: fullApollo, url: ''},
      {title: 'Nuthdioc', stack: 'Vue, Laravel', image: posh, fullImage: fullApollo, url: ''},
      {title: 'Admin panel Evol', stack: 'Vue, Python', image: apollo, fullImage: fullApollo, url: ''},
      {title: 'Admin panel Evol', stack: 'javascript', image: portfolio, fullImage: fullApollo, url: ''},
      {title: 'Nuthdioc', stack: 'Vue, Laravel', image: posh, fullImage: fullApollo, url: ''},
      {title: 'Admin panel Evol', stack: 'Vue, Python', image: apollo, fullImage: fullApollo, url: ''},
      {title: 'Admin panel Evol', stack: 'javascript', image: portfolio, fullImage: fullApollo, url: ''},
    ],
    loading: true,
  };
  
  renderWorks() {
    return this.state.works.map((el) => {
      return (
        <WorkBlock data={el} key={el.title}/>
      )
    })
  }
  
  componentDidMount() {
    this.setState({
      loading: false
    });
    
  }
  
  render () {
    return (
      <div className="my-works">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="">
              {
                this.state.loading
                  ? <div className="loader"><Loader/></div>
                  : <React.Fragment>
                    {/*<h2 className="my-works-title">My works</h2>*/}
                    <div className="row">
                      {this.renderWorks()}
                    </div>
        
                    <Footer/>
                  </React.Fragment>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
  
};
