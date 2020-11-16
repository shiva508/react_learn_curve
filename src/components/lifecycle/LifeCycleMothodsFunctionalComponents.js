import React,{Fragment, useState,useEffect, useRef} from 'react';
import FunctionalComponent from '../FunctionalComponent';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import PureClassBasedComponent from './PureClassBasedComponent';
import WrappingComponent from '../hoc/WrappingComponent';
import OauthContext from '../context/OauthContext';

const LifeCycleMothodsFunctionalComponents=(props)=>{

    const atomaticallyClickButtonref=useRef(null);

    // atomaticallyClickButton.current.click();

    const[userSubject,setUserSubject]=useState({
        subjects:[
            {subjectName:'Maths',id:1,alias:'Calculus',score:99},
            {subjectName:'Science',id:2,alias:'Gravitation',score:99},
            {subjectName:'Programming',id:3,alias:'Java',score:100}
          ],
        showSubjects:false,
        showSubjectsTest:true,
        isAthenticated:false
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
        if(subjects.length===3){
            buttonStyleClass.push('Nithya-Button')
        }
        if(subjects.length===2){
            buttonStyleClass.push('red')
        }  
        if(subjects.length===1) {
            buttonStyleClass.push('Nithya-Button-Danger')
        }
        return buttonStyleClass.join(' ');
    }
    useEffect(()=>{
        console.log('LifeCycleMothodsFunctionalComponents:useEffect');
    // const timer= setTimeout(()=>{
    //         alert('Hi')
    //     },1000);
    // atomaticallyClickButtonref.current.click()
        return()=>{
            // clearTimeout(timer);
            console.log('LifeCycleMothodsFunctionalComponents: Clean up work')
        }
    },[]);

    //[]--->use empty array when you do not have any dependancy,and load only once
    //[userSubject.subjects,userSubject.showSubjects]-->van pass as many dependencies as you want

    useEffect(()=>{
        console.log('LifeCycleMothodsFunctionalComponents:useEffect--->2');
    });

    const authenticate=()=>{
        let outhentcateObj={...userSubject}
        outhentcateObj.isAthenticated=true;
        setUserSubject(outhentcateObj)
    }

    return(
        
        <Fragment>
    { userSubject.showSubjects?
        <WrappingComponent>
        {
            userSubject.subjects.map((subject)=>{
                return(
                <PureClassBasedComponent 
                deleteSubjects={deleteUserSubject.bind(this,subject.id)}
                onChangeSubject={(event)=>renameSubjectjhandler(event,subject.id)} 
                onClickChangeState={changeUserState.bind(this,subject.alias,subject.id)} 
                key={subject.id} 
                logIn={userSubject.isAthenticated}
                subject={subject.subjectName}>  
                </PureClassBasedComponent> 
                )      
        }) 
        }
        {''}
        <button ref={atomaticallyClickButtonref} onClick={()=>changeUserState("OOPS",1)} className={dynamicStylePicher(userSubject.subjects)} variant="success">Change User State</button>{' '}
        <WrappingComponent>
            <button  onClick={()=>authenticate()} className={dynamicStylePicher(userSubject.subjects)} variant="success">Log In</button>{' '}</WrappingComponent>
        </WrappingComponent>
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

};export default LifeCycleMothodsFunctionalComponents;
// export default React.memo(LifeCycleMothodsFunctionalComponents)