import React,{Suspense} from 'react';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';

import './App.css';

const Home = React.lazy(() => import('features/Home'));
const TuVan = React.lazy(() => import('features/TuVan'));
const Login = React.lazy(() => import('features/Login'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ="/TuVan" component={TuVan} />
            <Route path ="/Login" component={Login} />
          </Switch>
        </BrowserRouter>
      </Suspense>
      
    </div>
  );
}

export default App;
