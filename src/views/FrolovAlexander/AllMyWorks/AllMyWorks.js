import React from "react";
import AnimationHoc from "../../../components/FrolovAlexander/AnimationHoc";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AllMyWorks.css';
import WorkBlock from "../../../components/FrolovAlexander/WorkBlock/WorkBlock";
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
  return (
    <AnimationHoc>
    <div className="container-fluid my-works-container">
      <MainHeader />
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="">
              <div className="row">
                {renderWorks()}
              </div>
            </div>
          </div>
        </div>
    </div>
    </AnimationHoc>
  )
};

function mapStateToProps(state) {
  return {
    works: state.works.fWorks,
  }
}

export default connect(mapStateToProps)(MyWorks)