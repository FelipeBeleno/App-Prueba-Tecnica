import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ChangeState } from '../Redux/dataDuck';


export const LiContent = ({ content, id }) => {

    // disparch
    const dispatch = useDispatch();

    //Hooks
    const { register, handleSubmit } = useForm();



    const { variantesArray } = content;



    const [bandera, setBandera] = useState(true);

    const changeStatus = () => {
        setBandera(!bandera)
    }



    const onSubmit = (data) => {


        const { variante1, variante2, variante3, variante4, variante5 } = data;

        let arrayEdit = [variante1, variante2, variante3, variante4, variante5];

        arrayEdit = arrayEdit.filter(res => {
            return res !== undefined && res !== ""
        })

        data = { data: arrayEdit, id: id }

        dispatch(ChangeState(data))
        setTimeout(() => {
            setBandera(!bandera)

        }, 3000);


    }


    return (
        <>
            {
                variantesArray.map((va, i) => {
                    i = i + 1
                    return (
                        <li key={va + i} onDoubleClick={changeStatus} className="list-group-item text-center">
                            {
                                bandera
                                    ? va
                                    : <form onSubmit={handleSubmit(onSubmit)}>
                                        <input
                                            ref={register}
                                            placeholder={va}
                                            defaultValue={va}
                                            className="form-control"
                                            name={`variante${i}`}
                                        />
                                    </form>
                            }
                        </li>
                    )
                })
            }

        </>
    )
}
