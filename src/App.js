import React,{Suspense} from 'react';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import './App.css';

const Home = React.lazy(() => import('features/Home'));
const TuVan = React.lazy(() => import('features/TuVan'));
const Login = React.lazy(() => import('features/Login'));
const TinNhan = React.lazy(() => import('features/TinNhan'));
const LuatSu = React.lazy(() => import('features/LuatSu'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={Home}/>
            {/* <Route exact path="/" component={Home}/> */}
            <PrivateRoute path ="/TuVan" component={TuVan} />
            <PrivateRoute path ="/TinNhan" component={TinNhan} />
            <PrivateRoute path="/LuatSu" component={LuatSu}/>
            <Route path ="/Login" component={Login} />
          </Switch>
        </BrowserRouter>
      </Suspense>
      
    </div>
  );
}

export default App;
