import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import TinNhanPage from './pages/Messenger/index';

function TinNhan() {
    const match = useRouteMatch();

    return(
        <React.Fragment>
            <Switch>
                <Route exact path={match.url} component={TinNhanPage} /> 
            </Switch>
        </React.Fragment>
    )
}

export default TinNhan;