import { useFormik } from "formik";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/component";
import { User } from "../../models/user/types";
import { loginRequested, sigInRequested } from "../../redux/user/actions";
import { useShowError } from "../../utils/ui/stringError";
import "../login/styles.css";
import { initialValues, onSubmit, validationSchema } from './form';




const Login:FC =() => {

    const dispatch = useDispatch();
    const navigate= useNavigate();


    const checkUser = (user:Partial<User>) =>{
            dispatch(loginRequested({...user}));
    }
    const regUser= (user:Partial<User>) =>{
            dispatch(sigInRequested({...user}));
    }
    
    
    const formik = useFormik({
        initialValues,
        onSubmit:(values)=>onSubmit(values, checkUser,regUser),
        validationSchema,
    });

    const errors = useShowError(formik.touched,formik.errors);


    return (
        <div className="login-grid">
                        <div className="login-image"></div>

        <div className="login-container">
            <div className="login-form">
                <h1 className="login-title"> ENROUTE WORKSHOP</h1>
                <div>
                    <label>Are you new around here?</label>
                    <input 
                    type="checkbox" 
                    name="register" 
                    placeholder="Register"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    />
                    
                </div>
                <Input 
                ErrorComponent={errors("username")}
                name="username" 
                className="login-inputs"  
                placeholder="Username" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                value={formik.values.username}
                />
                
                <Input 
                ErrorComponent={errors("email")}
                name="email" 
                className="login-inputs"  
                placeholder="Email" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                value={formik.values.email}
                />


                <Input 
                ErrorComponent={errors("password")}
                name="password" 
                className="login-inputs"  
                placeholder="Password" 
                type="password" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                />

                <button type="button" className="button-black" onClick={()=>formik.handleSubmit()
                      }>
                    Enter
                </button>
            </div>
        </div>
        </div>


    );
};

export default Login