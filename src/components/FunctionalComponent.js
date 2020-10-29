
import React, { Fragment } from 'react';

const  FunctionalComponent=(props)=>{
return(
<Fragment>
    <h1>This is {props.subject} ,Score is {Math.floor(Math.random()*408)}</h1>
    <p>Child:{props.children}</p>
</Fragment>
);

}; export default FunctionalComponent;