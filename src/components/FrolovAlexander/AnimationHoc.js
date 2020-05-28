import React, {useState, useEffect} from "react";

const AnimationHoc = (props) => {
  let [animation, setAnimation] = useState(false)
  useEffect(() => {
    setAnimation(true)
  }, [animation]);
  
  const animationWrapper = ['animation-wrapper'];
  if(animation) {
    animationWrapper.push(' animation')
  }
  
  return (
    <div className={animationWrapper.join('')}>
      {props.children}
    </div>
  )};

export default AnimationHoc;