
import React,{Component, Fragment, useState} from 'react';
import FunctionalComponent from '../FunctionalComponent';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

const BasicComponents=()=>{
    
    const[userSubject,setUserSubject]=useState({
        subjects:[
            {subjectName:'Maths',id:1,alias:'Calculus'},
            {subjectName:'Science',id:2,alias:'Gravitation'},
            {subjectName:'Programming',id:3,alias:'Java'}
          ],
        showSubjects:false
    })

    const[dynamicStyle,setDynamicStyle]=useState('');
    const changeUserState=(newSubject,id)=>{
        const subjectIndex=userSubject.subjects.findIndex((subject)=>{
            return subject.id===id;
        })

        let modifiedObject={
            ...
            userSubject.subjects.find((subject)=>subject.id===id)
        }
        modifiedObject.subjectName=newSubject;
        let subjectsList=[...userSubject.subjects];
        subjectsList[subjectIndex]=modifiedObject;
        console.log(newSubject);
        setUserSubject({
            subjects:subjectsList,
            showSubjects:true 
        })
    }
    const renameSubjectjhandler=(event,id)=>{
        // Find Index
        const subjectIndex=userSubject.subjects.findIndex((subject)=>{
            return subject.id===id;
        })

        // Mutation
        let modifyObject={
            ...userSubject.subjects.find((subject)=>subject.id===id)
        };
        //Modify Property
        modifyObject.subjectName=event.target.value;
        // Mutation
        let subjectsList=[...userSubject.subjects];
        //Update object list on state
        subjectsList[subjectIndex]=modifyObject;
        setUserSubject({
            subjects:subjectsList,
            showSubjects:true 
        })
    }
    const showSubjects=()=>{
        setUserSubject({
            subjects:userSubject.subjects,
            showSubjects:true
        })
    }
    const deleteUserSubject=(id)=>{
        let  modifiedSubjects=[...userSubject.subjects];
        modifiedSubjects= modifiedSubjects.filter((subject)=>subject.id !==id);
        setUserSubject({
            subjects:modifiedSubjects,
            showSubjects:true 
        })
    }
    function dynamicStylePicher(subjects){
        let buttonStyleClass=[];
        if(subjects.length==3){
            buttonStyleClass.push('Nithya-Button')
        }
        if(subjects.length==2){
            buttonStyleClass.push('red')
        }  
        if(subjects.length==1) {
            buttonStyleClass.push('Nithya-Button-Danger')
        }
        return buttonStyleClass.join(' ');
    }
    return(
        <Fragment>
    { userSubject.showSubjects?
        <Fragment>
        {
            userSubject.subjects.map((subject)=>{
                return(
                <FunctionalComponent 
                deleteSubjects={deleteUserSubject.bind(this,subject.id)}
                onChangeSubject={(event)=>renameSubjectjhandler(event,subject.id)} 
                onClickChangeState={changeUserState.bind(this,subject.alias,subject.id)} 
                key={subject.id} 
                subject={subject.subjectName}>  
                </FunctionalComponent> 
                )      
        }) 
        }
        {''}
        <button onClick={()=>changeUserState("OOPS",1)} className={dynamicStylePicher(userSubject.subjects)} variant="success">Change User State</button>{' '}

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