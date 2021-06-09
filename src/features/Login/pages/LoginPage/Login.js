import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import * as yup from 'yup';
import { Formik } from 'formik';

// import LoginImg from 'assets/images/LoginImg.jpg';
// import Logo from 'assets/images/goodi.png';
import './Login.css';

import LoginApi from 'api/loginApi';
import postData from 'hooks/postData';

function Login() {
    const classes = useStyles();
    const [temp, setTemp] = useState();

    const [checked, setChecked] = useState(true);
    const initialValues = {username:'', password:''};
    const validationSchema = yup.object().shape({
        username: yup.string().required('Hãy nhập tài khoản'),
        password: yup.string().required('Hãy nhập mật khẩu')
    })

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const loginHandle = (values) => {
        postData(LoginApi.postLogin, setTemp, values );
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
