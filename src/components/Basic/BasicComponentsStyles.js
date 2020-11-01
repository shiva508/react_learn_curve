import React,{Component, Fragment, useState} from 'react';
import FunctionalComponent from '../FunctionalComponent';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
class BasicComponentsStyles extends Component{

    state={
        subjects:[
            {subjectName:'Maths',id:1,alias:'Calculus'},
            {subjectName:'Science',id:2,alias:'Gravitation'},
            {subjectName:'Programming',id:3,alias:'Java'}
          ],
        showSubjects:false
    }

     changeUserState=(newSubject,id)=>{
        const subjectIndex=this.state.subjects.findIndex((subject)=>{
            return subject.id===id;
        })

        let modifiedObject={
            ...
            this.state.subjects.find((subject)=>subject.id===id)
        }
        modifiedObject.subjectName=newSubject;
        let subjectsList=[...this.state.subjects];
        subjectsList[subjectIndex]=modifiedObject;
        console.log(newSubject);
        this.setState({
            subjects:subjectsList,
            showSubjects:true 
        })
    }
     renameSubjectjhandler=(event,id)=>{
        // Find Index
        const subjectIndex=this.state.subjects.findIndex((subject)=>{
            return subject.id===id;
        })

        // Mutation
        let modifyObject={
            ...this.state.subjects.find((subject)=>subject.id===id)
        };
        //Modify Property
        modifyObject.subjectName=event.target.value;
        // Mutation
        let subjectsList=[...this.state.subjects];
        //Update object list on state
        subjectsList[subjectIndex]=modifyObject;
        this.setState({
            subjects:subjectsList,
            showSubjects:true 
        })
    }
    showSubjects=()=>{
        this.setState({
            subjects:this.state.subjects,
            showSubjects:true
        })
    }
    deleteUserSubject=(id)=>{
        let  modifiedSubjects=[...this.state.subjects];
        modifiedSubjects= modifiedSubjects.filter((subject)=>subject.id !==id);
        this.setState({
            subjects:modifiedSubjects,
            showSubjects:true 
        })
        if(this.state.subjects.length<=2){

        }
    }
    
render(){
    let styleClasses=['red','bold'].join(' ');
    let buttonStyleClass=[];

    if(this.state.subjects.length==3){
        buttonStyleClass.push('Nithya-Button');
    }
    if(this.state.subjects.length==2){
        buttonStyleClass.push('red');
    }  
    if(this.state.subjects.length==1) {
        buttonStyleClass.push('Nithya-Button-Danger');
    }
    const styles={
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px'
    }
    let userSubjects=null;
    if(this.state.showSubjects){
        userSubjects=(
        <Fragment>
        {
            this.state.subjects.map((subject)=>{
                return(
                <FunctionalComponent 
                deleteSubjects={this.deleteUserSubject.bind(this,subject.id)}
                onChangeSubject={(event)=>this.renameSubjectjhandler(event,subject.id)} 
                onClickChangeState={this.changeUserState.bind(this,subject.alias,subject.id)} 
                key={subject.id} 
                subject={subject.subjectName}>  
                </FunctionalComponent> 
                )      
        }) 
        }
        {''}
        <button className={buttonStyleClass.join(' ')} onClick={()=>this.changeUserState("OOPS",1)} variant="success">Change User State</button>{' '}
        </Fragment>
        )
        styles.backgroundColor='red'
    }else{
        userSubjects=(
        <Alert  variant='info' className={styleClasses}>
            Please click here to see data
        <div className="d-flex justify-content-end">
          <button  style={styles} onClick={this.showSubjects} variant="outline-success">
            Show me data
          </button>
        </div>
        </Alert>
        ) 
    }
    
    return(
        <Fragment>
            {userSubjects}
        </Fragment>
       
    );
}
};export default BasicComponentsStyles;