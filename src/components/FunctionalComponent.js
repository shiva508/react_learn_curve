
import React, { Fragment } from 'react';
import '../Styles/FunctionalComponent.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const  FunctionalComponent=(props)=>{
return(
<Fragment>
    <h1 onClick={props.onClickChangeState}>This is {props.subject} ,Score is {Math.floor(Math.random()*408)}</h1>
    <p>Child:{props.children}</p>
    <Form.Group className='' controlId="exampleForm.ControlInput1">
    <Form.Label>Subject:</Form.Label>
    <Form.Control type="text" placeholder="Please enter subject" 
      onChange={props.onChangeSubject}
      value={props.subject}/>
  </Form.Group>
  <Button onClick={props.deleteSubjects} variant="warning">Delete</Button>{' '}
</Fragment>
);

}; export default FunctionalComponent;