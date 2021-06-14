import React, {useState, useEffect} from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';

import loginApi from 'api/loginApi';
import fetchData from 'hooks/fetchData';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [isAuth, setIsAuth] = useState();
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    useEffect(() => {
        console.log("hehe");
        const loaded = () => {
            setLoading(true);
        }
        fetchData(loginApi.getAuth, setIsAuth, loaded);
    }, []);
    
    return (
        <React.Fragment>
            {
                !loading ? null : 
                <Route {...rest} render={props => (
                    isAuth 
                    ? <Component {...props} />
                    : <Redirect to={{ 
                        pathname: '/login', 
                        state: { from: props.location } 
                    }} />
                )} /> 
            }
        </React.Fragment>
        
    )
}

export default PrivateRoute;