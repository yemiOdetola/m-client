import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Articles from './components/Articles';
import Register from './components/Register';
import Article from './components/Article';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Landing}/>
      <Route path='/article/:id' component={Article} />
      <Route path='/articles' component={Articles} />
      <Route path='/register' component={Register} />
      <Route path='**' component={Landing}/>
    </Switch>
  );
}

export default App;
