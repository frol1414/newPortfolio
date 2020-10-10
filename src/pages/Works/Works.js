import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import './Works.css'
import WorkBlock from "../../components/WorkBlock/WorkBlock";
import alex from "../../images/Alex.svg";
import {NavLink} from "react-router-dom";

const Works = props => {
  const renderWorks = () => props.works.map((el) => (<WorkBlock data={el} key={el.id}/>))
  const [loading, setLoading] = useState(true)
  useEffect(() => setLoading(false), [])
  return (
    !loading ? (
      <div className="works">
    
        <div className="logo">
          <NavLink to="/" className="logo__title">Alexander Frolov</NavLink>
          <img src={alex} alt='Frolov Alexander'/>
        </div>
    
        <p className="page__title">Works</p>
    
        <div className="works-wrapper">
          {renderWorks()}
        </div>
      </div>
      ) : null
    
  )};

const mapStateToProps = (state) => ({works: state.works})

export default connect(mapStateToProps)(Works)

