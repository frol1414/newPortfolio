import React, {Component} from "react";
import './Main.css';
// import SocialLinks from "../../UI/SocialLinks/SocialLinks";
// import background from "../../../../images/FA/1.jpg";

class Main extends Component {
  
  componentDidMount() {
    consoleText(['Vue.js / Vuex', 'React / Redux', 'Laravel', 'Node.js'], '' +
      'text',
      ['black','black','black', 'black']);

    function consoleText(words, id, colors) {
      if (colors === undefined) colors = ['#fff'];
      let visible = true;
      const con = document.getElementById('console');
      let letterCount = 1;
      let x = 1;
      let waiting = false;
      const target = document.getElementById(id)
      target.setAttribute('style', 'color:' + colors[0])
      window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount)
          window.setTimeout(function() {
            let usedColor = colors.shift();
            colors.push(usedColor);
            let usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0])
            letterCount += x;
            waiting = false;
          }, 500)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function() {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount)
          letterCount += x;
        }
      }, 120)
      window.setInterval(function() {
        if (visible === true) {
          con.className = 'console-underscore hidden'
          visible = false;

        } else {
          con.className = 'console-underscore'

          visible = true;
        }
      }, 400)
    }
  }
  
  render() {
    return (
      <div className="main-card">
        <div className="main-title-block">
          <p className="main-title"><div></div>FRONT-END <span>DEVELOPER</span></p>
          
          <div className='main-desc-skills'>
            <span id='text'></span>
            <div className='console-underscore' id='console'>&#95;</div>
          </div>
  
          <a aria-label='word' className='main-content-btn ' data-text='Download CV' href='#'>
            <span>T</span>
            <span>h</span>
            <span>a</span>
            <span>n</span>
            <span>k</span>
            <span>s</span>
          </a>
          
        </div>
      </div>
    )
  }
};

export default Main;