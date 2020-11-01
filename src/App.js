import React, { Component } from 'react';
import './App.css';
import MatchDashboard from './components/MatchDashboard';
import PredictionNavbar from './components/navbar/PredictionNavbar';
import BasicComponents from './components/Basic/BasicComponent';
import BasicComponentsConditional from './components/Basic/BasicComponentsConditional';
class App extends Component {
  
  render(){
    return (
      <div className="App">
         <PredictionNavbar/>
         <BasicComponentsConditional/>
         <MatchDashboard/>
        
      </div>
    );
  }
}

export default App;
