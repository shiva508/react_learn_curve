
import React,{Component, Fragment} from 'react';
import FunctionalComponent from '../FunctionalComponent';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ClassComponent from './ClassComponent';


class LifeCycleMothodsComponent extends Component{
    //1st one to ne called 
    constructor(props){
        super(props)
        console.log('Constructor')
        this.state={
            subjects:[
                {subjectName:'Maths',id:1,alias:'Calculus'},
                {subjectName:'Science',id:2,alias:'Gravitation'},
                {subjectName:'Programming',id:3,alias:'Java'}
              ],
            showSubjects:false,
            counter:0
        }
    }
    
    //On change state
        static getDerivedStateFromProps(props,state){
            console.log('LifeCycleMothodsComponent:getDerivedStateFromProps',props)
            return state;
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
            showSubjects:true ,
            counter:0
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
        this.setState((prevState,props)=>{
          return{
            subjects:subjectsList,
            showSubjects:true ,
            counter:prevState.counter+1
          } 
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
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('LifeCycleMothodsComponent : shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleMothodsComponent : getSnapshotBeforeUpdate')
        return {message:'Snapshot '};
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('LifeCycleMothodsComponent : componentDidUpdate') 
        console.log(snapshot);
    }

    componentDidMount(){
        console.log('LifeCycleMothodsComponent: componentDidMount')
    }

    // componentWillMount(){
    //  console.log('componentDidMount')
    //  }

    //  getSnapshotBeforeUpdate(prevProps,prevState){
    //  console.log('LifeCycleMothodsComponent:getSnapshotBeforeUpdate');
    //   return true;
    // }
    
   
render(){
    console.log('LifeCycleMothodsComponent:Render:')
    let styleClasses=['red','bold'].join(' ');
    let buttonStyleClass=[];

    if(this.state.subjects.length===3){
        buttonStyleClass.push('Nithya-Button');
    }
    if(this.state.subjects.length===2){
        buttonStyleClass.push('red');
    }  
    if(this.state.subjects.length===1) {
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
                <ClassComponent 
                deleteSubjects={this.deleteUserSubject.bind(this,subject.id)}
                onChangeSubject={(event)=>this.renameSubjectjhandler(event,subject.id)} 
                onClickChangeState={this.changeUserState.bind(this,subject.alias,subject.id)} 
                key={subject.id} 
                subject={subject.subjectName}>  
                </ClassComponent> 
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
};export default LifeCycleMothodsComponent;