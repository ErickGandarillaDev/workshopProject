import { sha512 } from 'js-sha512';
import * as yup from 'yup';
import { User } from '../../models/user/types';

export interface formValues {
    username: string;
    password: string;
    email: string;
    register: boolean;
}

export const initialValues: formValues = {
    username: "",
    password: "",
    email: "",
    register: false

}

export const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
        .string()
        .min(4, "Type more than four characters")
        .max(18, "Type less than 18 characters")
        .required("Password is required"),
    email: yup.string().required("Email is required"),
    register: yup.boolean()

});



export const onSubmit = (values: formValues,
    login: (user: Partial<User>) => void,
    signin: (user: Partial<User>) => void) => {

    const possibleUser: Partial<User> = {
        username: values.username,
        password: sha512(values.password),
        email: values.email
        //poner el email
    };

    if (!values.register) {
        login(possibleUser);

    } else {
        signin(possibleUser);

    }



}

