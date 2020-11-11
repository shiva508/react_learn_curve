import { wait } from '@testing-library/react';
import React, {useEffect, useState} from 'react';
import API from '../API'

const AxiosatchDashboardService=()=>{
 const[matchInfo,setMatchInfo]=useState({
     loading:false,
     matchData:null
 }) 
 const getMatchData=async()=>{
    let matchData= await API.get('dashboard/alltimedata').then(({data})=>data).catch(err=>{

    });
    setMatchInfo({
        loading:false,
        matchData:matchData
    })
    console.log(matchData);
 }

 
 return(<h1>HI</h1>)
};export default AxiosatchDashboardService;