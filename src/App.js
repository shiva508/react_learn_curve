import React, { Component } from 'react';
import './App.css';
import './Styles/BasicComponentsStyles.css';
import './Styles/BasicComponents.css';
import './Styles/LifeCycleMothodsFunctionalComponents.css';
import PredictionNavbar from './components/navbar/PredictionNavbar';
import BasicComponents from './components/Basic/BasicComponent';
import BasicComponentsConditional from './components/Basic/BasicComponentsConditional';
import BasicComponentsStyles from './components/Basic/BasicComponentsStyles';
import LifeCycleMothodsComponent from './components/lifecycle/LifeCycleMothodsComponent';
import AxiosatchDashboardService from './service/Match/AxiosatchDashboardService';
import MatchDashboard from './components/MatchDashboard';
import LifeCycleMothodsFunctionalComponents from './components/lifecycle/LifeCycleMothodsFunctionalComponents';

class App extends Component {
  
  render(){
    return (
      <div className="App">
         <PredictionNavbar/>
         <LifeCycleMothodsFunctionalComponents/>
         <MatchDashboard/>
      </div>
    );
  }
}

export default App;
