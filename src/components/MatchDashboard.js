import React, { Component,useState,useEffect } from 'react';
import WithListLoading from '../components/WithListLoading';
import MatchDashboardList from '../components/MatchDashboardList';

const MatchDashboard=()=>{
    const ListLoading=WithListLoading(MatchDashboardList);
    const [matchinfo,setMatchinfo]=useState({
        loading:false,
        respos:null
    });

    useEffect(()=>{
        setMatchinfo({loading:true});
        const MATCH_DASHBOARD_URL='http://localhost:8080/prediction-api/dashboard/alltimedata';
        fetch(MATCH_DASHBOARD_URL)
                    .then((res)=>res.json())
                    .then((respos)=>{
                        console.log(respos)
                        setMatchinfo({
                            loading:false,
                            respos:respos  
                            
                        })
                    });
    },[setMatchinfo]);
    return(
    <div className='App'>
      <div className='container'>
        <h1>Dash Board</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={matchinfo.loading} repos={matchinfo.respos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Shiva
        </div>
      </footer>
    </div>
    );
    
};export default MatchDashboard;