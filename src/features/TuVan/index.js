import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Banner from 'components/Banner/Banner';
import TuVanPage from './pages/TuVan/TuVan';

function TuVan() {
    const match = useRouteMatch();

    return(
        <React.Fragment>
            <Header />
            <Banner />
            <Switch>
                <Route path={`${match.url}/:id`} component={TuVanPage} /> 
            </Switch>
            <Footer />
        </React.Fragment>
    )
}

export default TuVan;