
import React,{Component, Fragment, useState} from 'react';
import FunctionalComponent from '../FunctionalComponent';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const BasicComponents=()=>{
    const[userSubject,setUserSubject]=useState({
        subjects:[
            {subjectName:'Maths',id:1,alias:'Calculus'},
            {subjectName:'Science',id:2,alias:'Gravitation'},
            {subjectName:'Programming',id:3,alias:'Java'}
          ],
        showSubjects:false
    })

    const changeUserState=(newSubject,id)=>{
       var dynamicObje =userSubject.subjects.map((subject)=>{
            if(subject.id==id){
                subject.subjectName=newSubject;
            }
        });
        console.log(dynamicObje);
        console.log(userSubject);
        setUserSubject({
            subjects:[
                {subjectName:newSubject,id:1,alias:'Calculus'},
                {subjectName:'Science',id:2,alias:'Gravitation'},
                {subjectName:'Programming, Is the best',id:3,alias:'Java'}
              ]
        })
    }
    const renameSubjectjhandler=(event)=>{
        setUserSubject({
            subjects:[
                {subjectName:'Maths',id:1,alias:'Calculus'},
                {subjectName:event.target.value,id:2,alias:'Gravitation'},
                {subjectName:'Programming, Is the best',id:3,alias:'Java'}
              ]  
        })
    }
    const showSubjects=()=>{
        setUserSubject({
            subjects:userSubject.subjects,
            showSubjects:true
        })
    }
    return(
        <Fragment>
    { userSubject.showSubjects?
        <Fragment>
        {
            userSubject.subjects.map((subject)=>{
                return(
                <FunctionalComponent onChangeSubject={renameSubjectjhandler} onClickChangeState={changeUserState.bind(this,subject.alias,subject.id)} key={subject.id} subject={subject.subjectName}></FunctionalComponent> 
                )      
        }) 
        }
        {''}
        <Button onClick={()=>changeUserState("OOPS",1)} variant="success">Change User State</Button>{' '}

        </Fragment>
        :
        <Alert  variant='info'>
            Please click here to see data
        <div className="d-flex justify-content-end">
          <Button onClick={showSubjects} variant="outline-success">
            Show me data
          </Button>
        </div>
        </Alert>
    }
        </Fragment>
       
    );

};export default BasicComponents;