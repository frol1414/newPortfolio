import React, {Component} from "react";
import './Header.css';

class Header extends Component {
  
  componentDidMount() {
    consoleText(['Vue.js / Vuex', 'React / Redux', 'Laravel', 'Node.js'], '' +
      'text',
      ['black','black','black', 'black']);
  
    function consoleText(words, id, colors) {
      if (colors === undefined) colors = ['#fff'];
      var visible = true;
      var con = document.getElementById('console');
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id)
      target.setAttribute('style', 'color:' + colors[0])
      window.setInterval(function() {
      
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount)
          window.setTimeout(function() {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0])
            letterCount += x;
            waiting = false;
          }, 1000)
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
        <div className="header">
          <div className="header-desc">
            <div className='header-desc-skills'>
              <span id='text'></span>
              <div className='console-underscore' id='console'>&#95;</div>
            </div>
            <h1 className="header-title">Alexander <span>Frolov</span></h1>
            <p className="header-sub-title">FRONT-END DEVELOPER</p>
          </div>
        </div>
      );
    }
};

export default Header;