import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Loader from "../../../components/FrolovAlexander/UI/Loader/Loader";
import './AllMyWorks.css';
import WorkBlock from "../../../components/FrolovAlexander/WorkBlock/WorkBlock";
import Footer from "./Footer/Footer";
import MainHeader from "../../../components/FrolovAlexander/MainHeader/MainHeader";
import {connect} from "react-redux";

const MyWorks = (props) => {
  
  
  function renderWorks() {
    return props.works.map((el) => {
      return (
        <WorkBlock data={el} key={el.id}/>
      )
    })
  }
  
  // componentDidMount() {
  //   this.setState({
  //     loading: false
  //   });
  //
  // }
  
    return (
      <div className="container-fluid my-works-container">
        <MainHeader />
        
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="">
                {
                  // this.state.loading
                  //   ? <div className="loader"><Loader/></div>
                  //   :
                    <React.Fragment>
                    
                      <div className="row">
                        {renderWorks()}
                      </div>
          
                      <Footer/>
                    </React.Fragment>
                }
              </div>
            </div>
          </div>
        
      </div>
    )
  
};

function mapStateToProps(state) {
  return {
    works: state.works.fWorks,
  }
}

export default connect(mapStateToProps)(MyWorks)