import React,{useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import WarningIcon from '@material-ui/icons/Warning';
import * as yup from 'yup';
import { Formik } from 'formik';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// import LoginImg from 'assets/images/LoginImg.jpg';
// import Logo from 'assets/images/goodi.png';
import './Login.css';

import LoginApi from 'api/loginApi';
import postData from 'hooks/postData';

function Login(props) {
    let history = useHistory();
    const [role, setRole] = useState('user'); // user là người dùng, lawyer là luật sư
    const [token, setToken] = useState();
    const [error, setError] = useState();
    const [checked, setChecked] = useState(true);
    const initialValues = {username:'', password:''};
    const validationSchema = yup.object().shape({
        username: yup.string().required('Hãy nhập tài khoản'),
        password: yup.string().required('Hãy nhập mật khẩu')
    })

    const handleChange = (event) => {
        setChecked(event.target.checked);
        
    };
    const handleChangeRole = (event) => {
        setRole(event.target.value);
    }

    const loginHandle = (values) => {
        if(role === 'user'){
            const login = (response) => {
                if(response){
                    localStorage.removeItem("accessToken");
                    localStorage.setItem("accessToken" , response);
                    const { from } = props.location.state;
                    history.push(from);
                }else{
                    setError('Đăng nhập không thành công !!!');
                }
            }

            postData(LoginApi.postLogin, setToken, values, login );
        }
        if(role === 'lawyer'){
            const login = (response) => {
                if(response){
                    localStorage.removeItem("accessToken");
                    localStorage.setItem("accessToken" , response);
                    history.push('/LuatSu');
                }else{
                    setError('Đăng nhập không thành công !!!');
                }
            }
            postData(LoginApi.postLoginLawyer, setToken, values, login );
        }
        
    }

    return (
        <div className="Login">
            <div className="L-FormLogin">
                <div className="L-title">
                    <p>Tư vấn luật</p>
                    <p>Đăng nhập</p>
                    <Formik
                        initialValues = {initialValues}
                        validationSchema = {validationSchema}
                        onSubmit={loginHandle}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            setFieldValue
                            /* and other goodies */
                        }) => (
                            <form className="L-formSubmit" onSubmit={handleSubmit}>
                                <TextField
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    id="outlined-password-input"
                                    label="Tài khoản"
                                    type="text"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    style={{margin:"8px 0 8px 0"}}
                                />
                                {errors["username"] && touched["username"] && <p className="error">{errors["username"]}</p>}
                                <TextField
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    id="outlined-password-input"
                                    label="Mật khẩu"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    style={{margin:"8px 0 8px 0"}}
                                />
                                {errors["password"] && touched["password"] && <p className="error">{errors["password"]}</p>}
                                {error && <div className="L-failed"><WarningIcon style={{color:"red"}}/><span className="error">{error}</span></div>}
                                <div className="L-handle">
                                    <div className="L-btn_checkbox">
                                        <div className="L-checkbox">
                                            <Checkbox
                                                checked={checked}
                                                onChange={handleChange}
                                                style={{color:"#214873"}}
                                            />
                                            <span>Nhớ mật khẩu</span>
                                        </div>
                                        <RadioGroup name="role" value={role} onChange={handleChangeRole} className="Radio_button">
                                            <FormControlLabel value="user" control={<Radio color="primary"/>} label="Người dùng" />
                                            <FormControlLabel value="lawyer" control={<Radio color="primary"/>} label="Luật sư" />
                                        </RadioGroup>
                                        <Button 
                                            type="submit"
                                            variant="contained"
                                            style={{backgroundColor:"#214873", color:"#fff"}}
                                        >Đăng nhập</Button>
                                    </div>
                                    <div className="grow"></div>
                                    <div className="L-links">
                                        <a href="#">Thay đổi mật khẩu</a>
                                        <a href="#">Quên mật khẩu</a>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    
}));

export default Login;
