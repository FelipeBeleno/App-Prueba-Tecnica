import { useState } from "react";



export const useForm = (initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState);


    const reset = () => {
        setFormValues('');
    }

    const cambioForm = ({ target }) => {
        setFormValues(

            {
                ...formValues,
                [target.name]: target.value

            }
        
        );
    }


    return [formValues, cambioForm, setFormValues, reset];

}