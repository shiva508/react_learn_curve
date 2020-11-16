
import React,{Component, Fragment, useState} from 'react';
import FunctionalComponent from '../FunctionalComponent';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class BasicComponentsConditional extends Component{

    state={
        subjects:[
            {subjectName:'Maths',id:1,alias:'Calculus'},
            {subjectName:'Science',id:2,alias:'Gravitation'},
            {subjectName:'Programming',id:3,alias:'Java'}
          ],
        showSubjects:false
    };

     changeUserState=(newSubject,id)=>{
       var dynamicObje =this.state.subjects.map((subject)=>{
            if(subject.id===id){
                subject.subjectName=newSubject;
            }
        });
        console.log(dynamicObje);
        console.log(this.state.subjects);
        this.setState({
            subjects:[
                {subjectName:newSubject,id:1,alias:'Calculus'},
                {subjectName:'Science',id:2,alias:'Gravitation'},
                {subjectName:'Programming, Is the best',id:3,alias:'Java'}
              ]
        })
    }
     renameSubjectjhandler=(event)=>{
        this.setState({
            subjects:[
                {subjectName:'Maths',id:1,alias:'Calculus'},
                {subjectName:event.target.value,id:2,alias:'Gravitation'},
                {subjectName:'Programming, Is the best',id:3,alias:'Java'}
              ]  
        })
    }
     showSubjects=()=>{
        this.setState({
            showSubjects:true
        })
    }
    render(){
        let userSubjects=null;
        if(this.state.showSubjects){
            userSubjects=(
                <Fragment>
                {
                    this.state.subjects.map((subject)=>{
                        return(
                        <FunctionalComponent onChangeSubject={this.renameSubjectjhandler} onClickChangeState={this.changeUserState.bind(this,subject.alias,subject.id)} key={subject.id} subject={subject.subjectName}></FunctionalComponent> 
                        )      
                }) 
                }
                {''}
                <Button onClick={()=>this.changeUserState("OOPS",1)} variant="success">Change User State</Button>{' '}
        
                </Fragment> 
            ) 
        }else{
            userSubjects=(
            <Fragment>
            <Alert  variant='info'>
                Please click here to see data
            <div className="d-flex justify-content-end">
              <Button onClick={this.showSubjects} variant="outline-success">
                Show me data
              </Button>
            </div>
            </Alert>
        
            </Fragment>
            ) 
        }
        return(
            
        <Fragment>{userSubjects}</Fragment>
            
           
        );
    }
    
};export default BasicComponentsConditional;