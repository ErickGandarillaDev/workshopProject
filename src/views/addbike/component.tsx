import { useFormik } from "formik";
import { FC } from "react";
import { useSelector } from "react-redux";
import Input from "../../components/input/component";
import { User } from "../../models/user/types";
import { userTokenSelector } from "../../redux/user/selectors";
import { addbikeRequest } from "../../services/addbike/service";
import { initialValues, onSubmit, validationSchema } from "./form";
import "./styles.css";

const Addbike:FC = ()=> {

    const tokenUser = useSelector(userTokenSelector);
    const tok:Partial<User> = {
        token: tokenUser
    }

    const formik = useFormik({
        initialValues,
        onSubmit:(values)=>onSubmit(values,addbikeRequest,tok),
        validationSchema,
    });


    return (
        <div className="addbike-container">
            <div className="addbike-header">
            </div>
            <div className="addbike-init">
                <p> Initial Information</p>
                <Input 
                className="big-input"
                name="initialInfo"
                placeholder="First details given"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                />
                <p> Expected delivery date</p>
                <Input
                name="deliver_date"
                placeholder="Expected Date (AAAA-MM-DD)"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                />
            </div>

            <div className="addbike-client">
                <p> CLIENT </p>
                <Input
                name="name"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                />
                <Input
                name="phoneNumber"
                placeholder="Phone number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                />
            </div>

            <div className="addbike-motorcycle">
                <p> MOTORCYCLE </p>
                <Input
                name="brand"
                placeholder="Brand"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                />
                <Input
                name="line"
                placeholder="Line"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                />


            </div>

            <div className="addbike-buttons">
                <button type="button" className="button-red button-cancel">
                   Cancel
                </button>
                <button 
                type="button" 
                className="button-green button-submit"
                onClick={()=>formik.handleSubmit()}
                >
                   Submit
                </button>
            </div>
        </div>
    )
}

export default Addbike