import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Banner from 'components/Banner/Banner';
import HomePage from './pages/HomePage/HomePage';

function Home() {
    const match = useRouteMatch();

    return(
        <React.Fragment>
            <Header />
            <Banner />
            <Switch>
                <Route exact path={match.url} component={HomePage} /> 
            </Switch>
            <Footer />
        </React.Fragment>
    )
}

export default Home;