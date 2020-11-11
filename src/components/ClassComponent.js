import React,{Component} from 'react';
import '../Styles/FunctionalComponent.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class ClassComponent extends Component{

    constructor(props){
        super(props);
        this.state={};
    }

    //CAN NOT USE IT ANY MORE
    // componentWillReceiveProps(props){
    //     console.log('ClassComponent: componentWillReceiveProps',props)
    // }

    static getDerivedStateFromProps(props,state){
        console.log('ClassComponent: getDerivedStateFromProps')
        return state;
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('ClassComponent: shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(precProps,prevState){
        console.log('ClassComponent: getSnapshotBeforeUpdate');
        return null;
    }

    
//    componentWillUpdate(){

//    }

    componentDidUpdate(){
        console.log('ClassComponent: componentDidUpdate')
    }
   

    render(){
        console.log('ClassComponent:render');
        return(
            <div className='Nithya'>
                <h1 onClick={this.props.onClickChangeState}>This is {this.props.subject} ,Score is {Math.floor(Math.random()*408)}</h1>
                <Form.Group className='' controlId="exampleForm.ControlInput1">
                <Form.Label>Subject:</Form.Label>
                <Form.Control type="text" placeholder="Please enter subject" 
                onChange={this.props.onChangeSubject}
                value={this.props.subject}/>
            </Form.Group>
            <Button onClick={this.props.deleteSubjects} variant="warning">Delete</Button>{' '}
            </div>
        )
    }

};export default ClassComponent;