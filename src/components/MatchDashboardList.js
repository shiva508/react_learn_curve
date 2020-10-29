import React from 'react';
import DashboardTable from '../components/DashboardTable'
const MatchDashboardList=(props)=>{
    //console.log(props.repos)
    //const {dashboarddata}=props;
    //console.log(dashboarddata);
    if(!props.repos|| props.repos.length===.0) return <p>No Data found</p>
    return(
       <DashboardTable arrayData={props.repos}></DashboardTable>
    );
};export default MatchDashboardList;