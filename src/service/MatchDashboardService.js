import React from 'react';
import axios from 'axios';

const MATCH_DASHBOARD_URL='http://localhost:8080/prediction-api/dashboard/alltimedata';

const MatchDashboardService=()=>{
    
    const getAllTimeData=()=>{

        return axios.get(MATCH_DASHBOARD_URL);

    }
};export default MatchDashboardService;