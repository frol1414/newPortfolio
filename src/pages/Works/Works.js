import React from "react";
import {connect} from "react-redux";
import './Works.css'
import WorkBlock from "../../components/WorkBlock/WorkBlock";

const Works = props => {
  const renderWorks = () => props.works.map((el) => (<WorkBlock data={el} key={el.id}/>))
  return (
    <div className="works">
      <p className="page__title">Works</p>

        <div className="works-wrapper">
          {renderWorks()}
        </div>
    </div>
  )};

const mapStateToProps = (state) => ({works: state.works})

export default connect(mapStateToProps)(Works)

