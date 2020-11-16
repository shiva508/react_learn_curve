import React from 'react'

const WithClassOtherForm=(WrappedComponent,className)=>{
    return props=>(
        <div className={className}>
            <WrappedComponent/>

        </div>
    );
}