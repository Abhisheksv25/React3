import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import 'bootstrap/dist/css/bootstrap.min.css';






class App extends Component {
  constructor() {
    super();
    this.state = {
      showMessage1: false,
      showMessage2: false,
      showMessage3: false,
      basketball:[],
      baddy:[],
      swimming:[],
      
    };
  }
  method1=()=> {
  var parseString = require('xml2js').parseString;
  var xml = "<root>Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are singles (with one player per side) and doubles (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; formal games are played on a rectangular indoor court. Points are scored by striking the shuttlecock with the racquet and landing it within the opposing side's half of the court.</root>"
  parseString(xml, (err, result)=> {
    this.setState({
      baddy: result 
    });

    });
  
  }
 
  method2=()=> {
  var parseString = require('xml2js').parseString;
  var xml = "<root>Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court) while preventing the opposing team from shooting through their own hoop. A field goal is worth two points, unless made from behind the three-point line, when it is worth three. After a foul, timed play stops and the player fouled or designated to shoot a technical foul is given one or more one-point free throws. The team with the most points at the end of the game wins, but if regulation play expires with the score tied, an additional period of play (overtime) is mandated.</root>"
  parseString(xml, (err, result)=> {
    this.setState({
      basketball: result 
    });

    });
  
  }
  method3=()=> {
  var parseString = require('xml2js').parseString;
  var xml = "<root>Swimming is an individual or team racing sport that requires the use of one's entire body to move through water. The sport takes place in pools or open water (e.g., in a sea or lake). Competitive swimming is one of the most popular Olympic sports,[1] with varied distance events in butterfly, backstroke, breaststroke, freestyle, and individual medley. In addition to these individual events, four swimmers can take part in either a freestyle or medley relay. A medley relay consists of four swimmers who will each swim a different stroke, ordered as backstroke, breaststroke, butterfly and freestyle.</root>"
  parseString(xml, (err, result)=> {
    this.setState({
      swimming: result 
    });

    });
  
  }

  handleBadminton=(event) => {
  

   this.setState({
     showMessage1: true,
     showMessage2: false,
     showMessage3: false,
     });
     this.method1()
     
  }

  handleBasketball=(event) => {
  

   this.setState({
     showMessage2: true,
     showMessage1: false,
     showMessage3: false,
     });
     this.method2()
     
  }

  handleSwimming=(event) => {
  

   this.setState({
     showMessage3: true,
     showMessage1: false,
     showMessage2: false,
     });
     this.method3()
     
  }

  handleClear=(event) => {
  

   this.setState({
     showMessage3: false,
     showMessage1: false,
     showMessage2: false,
     });
     
  }



  render() {
    return (
      <div>
      <h1> Please Select one of the option to know about the sport </h1>
        <div id="button">
      <DropdownButton id="dropdown-button" title="Sports">
          <Dropdown.Item href="#/action-0" onClick={this.handleClear}>Select an option</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={this.handleBadminton}>Badminton</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={this.handleBasketball}>Basketball</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={this.handleSwimming}>Swimming</Dropdown.Item>
      </DropdownButton>
        </div>

      <div className="App" id="baddy">
      {this.state.showMessage1 && this.state.baddy.root }
      </div>

      <div className="App" id="basketball">
      {this.state.showMessage2 && this.state.basketball.root }
      </div>

      <div className="App" id="swimming">
      {this.state.showMessage3 && this.state.swimming.root }
      </div>


      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
