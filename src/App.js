import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Articles from './components/Articles';
import Register from './components/Register';
import Article from './components/Article';
import Login from './components/Login';
import Profile from './components/Profile';
import EditUser from './components/EditUser';
import EditArticle from './components/EditArticle';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Landing}/>
      <Route path='/create-article' component={EditArticle} />
      <Route path='/edit-article/:id' component={EditArticle} />
      <Route path='/article/:id' component={Article} />
      <Route path='/articles' component={Articles} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/edit-profile/:id' component={EditUser} />
      <Route path='/user/:id' component={Profile} />
      <Route path='**' component={Landing}/>
    </Switch>
  );
}

export default App;
