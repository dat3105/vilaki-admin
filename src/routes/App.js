import React, { Component } from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import LoginPage from '../views/Pages/LoginPage';
import Dash from '../containers/Dash/Dash'
import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'

 class App extends Component {
    renderRoute= () => {
        if(this.props.role==="admin"){
            return(
                <PrivateRoute authed={this.props.auth} exact path="/dashboard" component={Dash}/>
            )
        }
        if(this.props.role==="thongKe"){
            return(
                <PrivateRoute authed={this.props.auth} exact path="/dashboard" component={Dash}/>
            )
        }
        if(this.props.role==="trucTonDai"){
            return(
                <PrivateRoute authed={this.props.auth} exact path="/dashboard" component={Dash}/>
            )
        }
    }

    render() {
      
        return (
            <BrowserRouter>
            <Switch>
              
                    <Route exact path="/" component={LoginPage}/>
                  
                  {this.renderRoute()}
    
                   
                  
                 
               
            </Switch>
        </BrowserRouter>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        role: state.role,
        token: state.token,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(App)

