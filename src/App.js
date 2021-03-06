import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {auth, handleUserProfile} from './firebase/utils';
// layouts
import MainLayout from './layouts/MainLayout';
import HomePageLayout from "./layouts/HomePageLayout";

//pages
import './default.scss';
import Homepage from './pages/Homepage/';
import Registeration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';

const initialState = {
  currentUser: null
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
     if (userAuth){
       const userRef = await handleUserProfile(userAuth);
       userRef.onSnapshot(snapshot => {
         this.setState({
           currentUser:{
             id: snapshot.id,
             ...snapshot.data()
           }
         })
       })
     }
    

      this.setState({
        ...initialState
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }
  render() {
    const { currentUser } = this.state; 

    return (
      <div className="App">
          <Switch>
          <Route exact path="/" render={() =>(
            <HomePageLayout currentUser = {currentUser}>
              <Homepage />
            </HomePageLayout>
          )} />
          <Route path="/registeration" render={() =>currentUser ? <Redirect to="/" />: (
            <MainLayout currentUser={currentUser}>
            <Registeration />
          </MainLayout>
          )} />
          <Route path="/login"
           render={() => currentUser ? <Redirect to="/" /> : (
            <MainLayout currentUser={currentUser}>
            <Login />
          </MainLayout>
          )} />
          <Route path="/recovery" render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )} />
          </Switch>
      </div>
    );
  }
  
} 
export default App







  


  