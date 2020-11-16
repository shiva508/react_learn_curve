import React,{PureComponent} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import WithClass from '../hoc/WithClass';
import PropTypes  from 'prop-types';
import OauthContext from '../context/OauthContext';

class PureClassBasedComponent extends PureComponent{

    constructor(props){
        super(props);
        this.state={};
        this.CurrentInputRef=React.createRef();
    }

    //CAN NOT USE IT ANY MORE
    // componentWillReceiveProps(props){
    //     console.log('ClassComponent: componentWillReceiveProps',props)
    // }

    static getDerivedStateFromProps(props,state){
        console.log('ClassComponent: getDerivedStateFromProps')
        return state;
    }

    //Changing when some thing is changed,prevent un necessory rnndering
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('ClassComponent: shouldComponentUpdate')
    //     if(nextProps.subject !== this.props.subject                   || 
    //     nextProps.onClickChangeState !==this.props.onClickChangeState ||
    //     nextProps.onChangeSubject !==this.props.onChangeSubject){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(precProps,prevState){
        console.log('ClassComponent: getSnapshotBeforeUpdate');
        return null;
    }

    
//    componentWillUpdate(){

//    }

    componentDidMount(){
        // document.querySelector('CurrentInput').focus();
        // this.CurrentInput.focus();
        this.CurrentInputRef.current.focus();
    }
   
    componentWillUnmount(){
       
        console.log('ClassComponent:  componentWillUnmount---->CLEAN UP WORK')
    }
    componentDidUpdate(){
        console.log('ClassComponent: componentDidUpdate')
    }
    render(){
        console.log('ClassComponent:render');
        return(
            <WithClass classes='Nithya'>
                { this.props.logIn?<p>Authenticated</p>:<p>Please Autheticate</p>}
                <h1 onClick={this.props.onClickChangeState}>This is {this.props.subject} ,Score is {Math.floor(Math.random()*408)}</h1>
                <Form.Group className='' controlId="exampleForm.ControlInput1">
                <Form.Label>Subject:</Form.Label>
                <input type="text" placeholder="Please enter subject" 
                // ref={(inputEl)=>{this.CurrentInput=inputEl}}
                ref={this.CurrentInputRef}
                onChange={this.props.onChangeSubject}
                value={this.props.subject}/>
            </Form.Group>
            <Button onClick={this.props.deleteSubjects} variant="warning">Delete</Button>{' '}
            </WithClass>
        )
    }
    
};
PureClassBasedComponent.propTypes={
    onClickChangeState:PropTypes.func,
    subject:PropTypes.string
};

export default PureClassBasedComponent;