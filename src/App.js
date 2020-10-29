import React, { Component } from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import './App.css';
import MatchDashboardService from './service/MatchDashboardService';
import MatchDashboard from './components/MatchDashboard';
import PredictionNavbar from './components/navbar/PredictionNavbar';

class App extends Component {
  state={
    subjects:[
      {subjectName:'Maths'},
      {subjectName:'Science'},
      {subjectName:'Programming'}
    ]
  };

  changesSubjectHandler=()=>{
    this.setState({
      subjects:[
        {subjectName:'Statistics'},
        {subjectName:'Science'},
        {subjectName:'Programming'}
      ]
    })
  }

  render(){
    return (
      <div className="App">
         <PredictionNavbar/>
         <MatchDashboard/>
        
      </div>
    );
  }
}

export default App;
