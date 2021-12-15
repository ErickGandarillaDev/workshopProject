import { FormikErrors, FormikTouched } from "formik";


export const useShowError =
    ( touched:FormikTouched<any>,error:FormikErrors<any>) =>(key: string) => 
         <p className="String-error">{(touched[key] && error[key] )?error[key]:null}</p>;

