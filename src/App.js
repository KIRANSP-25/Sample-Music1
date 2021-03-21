import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Menu from './component/Menu';
import Music from './component/Music';

function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <Switch>
            <Route exact path="/" component={Music} />
            <Redirect path="**" to="/" />
        </Switch>
        
    </BrowserRouter>
  );
}

export default App;
