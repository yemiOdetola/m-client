import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Articles from './components/Articles';
import Signup from './components/Signup';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Landing}/>
      <Route path='/articles' component={Articles} />
      <Route path='/signup' component={Signup} />
      <Route path='**' component={Landing}/>
    </Switch>
  );
}

export default App;
