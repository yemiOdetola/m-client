import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Articles from './components/Articles';
import Register from './components/Register';
import Article from './components/Article';
import Login from './components/Login';
import Profile from './components/Profile';
import EditUser from './components/EditUser';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Landing}/>
      <Route path='/article/:id' component={Article} />
      <Route path='/articles' component={Articles} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/edit-user/:id' component={EditUser} />
      <Route path='/user/:id' component={Profile} />
      <Route path='**' component={Landing}/>
    </Switch>
  );
}

export default App;
