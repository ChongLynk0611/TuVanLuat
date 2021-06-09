import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

// import Banner from 'components/Banner/Banner';
import LoginPage from './pages/LoginPage/Login';

function Login() {
    const match = useRouteMatch();

    return(
        <React.Fragment>
            <Switch>
                <Route exact path={match.url} component={LoginPage} /> 
            </Switch>
        </React.Fragment>
    )
}

export default Login;