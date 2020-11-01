import React, { Component } from 'react';
import './App.css';
import './Styles/BasicComponentsStyles.css';
import MatchDashboard from './components/MatchDashboard';
import PredictionNavbar from './components/navbar/PredictionNavbar';
import BasicComponents from './components/Basic/BasicComponent';
import BasicComponentsConditional from './components/Basic/BasicComponentsConditional';
import BasicComponentsStyles from './components/Basic/BasicComponentsStyles';
class App extends Component {
  
  render(){
    return (
      <div className="App">
         <PredictionNavbar/>
         <BasicComponentsStyles/>
         <MatchDashboard/>
        
      </div>
    );
  }
}

export default App;
