import React, { useState,useEffect } from 'react';

const  WithListLoading=(Component)=>{
    return function WihLoadingComponent({isLoading,...props}){
            if(!isLoading)return <Component {...props}/>
            return(
            <p style={{ textAlign: 'center', fontSize: '30px' }}>
                Hold on, fetching data may take some time :)
            </p>
            );
    }
};export default WithListLoading;