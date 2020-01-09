import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';
import axios from 'axios'
import Card from 'components/Card/Card.jsx';
import {connect} from 'react-redux'
import Button from 'elements/CustomButton/CustomButton.jsx';


class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            cardHidden: true,
            email:"",
            password:""
        }
    }
    componentDidMount(){
        setTimeout(function() { this.setState({cardHidden: false}); }.bind(this), 700);
    }
    handleChange = (event) => {
        const state = {...this.state};
        const name = event.currentTarget.name;
        state[name] = event.currentTarget.value;
        this.setState(state);
      };

    handleSubmit = async() => {
      let data={
          'email':this.state.email,
          'password': this.state.password
      }
      let response=[];
      await axios.post('https://vilakipay.herokuapp.com/api/users/signIn',data)
      .then(res=>{
       
        response=res.data;
      })
      console.log(response)
      if(!response.errors){
        
          this.props.setAuth()
          this.props.setToken(response.token)
          if(response.role==="admin"){
              this.props.setAdmin()
          }
          if(response.role==="thongKe"){
              this.props.setAccountant()
          }
          if(response.role==="trucTongDai"){
              this.props.setDefault()
          }
        this.props.history.push("/dashboard");
        this.setState({email:'',password:''})
      }
   
       
   
    }
    render(){
        return (
            <Grid>
                <Row>
                    <Col md={4} sm={6} mdOffset={4} smOffset={3}>
                        <form>
                            <Card
                                hidden={this.state.cardHidden}
                                textCenter
                                title="Login"
                                content={
                                    <div>
                                        <FormGroup>
                                            <ControlLabel>
                                                Email address
                                            </ControlLabel>
                                            <FormControl
                                                placeholder="Enter email"
                                                type="email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>
                                                Password
                                            </ControlLabel>
                                            <FormControl                                        
                                                name="password"                                               
                                                placeholder="Password"
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                       
                                    </div>
                                }
                                legend={
                                    <Button bsStyle="info" fill wd onClick={()=>this.handleSubmit()}>
                                        Login
                                    </Button>
                                }
                                ftTextCenter
                            />
                        </form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setToken: (token) => {
            dispatch({type:"SET_TOKEN",token})
        },
        setAdmin:() => {
            dispatch({type:"CHANGE_ADMIN"})
        },
        setAccountant:() => {
            dispatch({type:"CHANGE_ACCOUNTANT"})
        },
        setDefault:()=>{
            dispatch({type:"CHANGE_DEFAULT"})
        },
        setAuth: ()=> {
            dispatch({type:"CHANGE_AUTHED_TRUE"})
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

