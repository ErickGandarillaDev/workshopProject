import * as yup from 'yup';
import { addBikeResponse, DateResponse } from '../../models/bikes/types';
import { User } from '../../models/user/types';

export interface formValues {
    initialInfo: string,
    deliver_date: string,
    name: string,
    phoneNumber: string,
    brand: string,
    line: string,

}
export const initialValues: formValues = {
    initialInfo: "",
    deliver_date: "",
    name: "",
    phoneNumber: "",
    brand: "",
    line: "",

}
export const validationSchema = yup.object().shape({
    initialInfo: yup.string().required("Initial Info is required"),
    deliver_date: yup.string().required("Username is required"),
    name: yup.string().required("Name is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    brand: yup.string().required("Brand is required"),
    line: yup.string().required("Line is required"),


});


export const onSubmit = (values: formValues,
    addBike: (
        D: string,
        token: Partial<User>,
        initialInfo: string
    ) => Promise<Partial<addBikeResponse>>,
    token: Partial<User>
) => {
    const deliver_date: Partial<DateResponse> = {
        deliver_date: values.deliver_date
    }



    addBike(JSON.stringify(values), token, values.initialInfo);

}