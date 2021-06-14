import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import LuatSuPage from './pages/Messenger/index';

function LuatSu() {
    const match = useRouteMatch();

    return(
        <React.Fragment>
            <Switch>
                <Route exact path={match.url} component={LuatSuPage} /> 
            </Switch>
        </React.Fragment>
    )
}

export default LuatSu;