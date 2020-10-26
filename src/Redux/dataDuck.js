import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';


//Types
const types = {
    AddData: '[Data] Add Data',
    EditData: '[Data] Edit Data',
    ChangeState: '[Data] Change State'
}

const initialState = []



//Reducer
export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AddData:

            const id = uuidv4()
            const data = {
                ...action.payload,
                id
            }



            return [...state, data];

        case types.EditData:

            return [...state]

        case types.ChangeState:



            const arrayData = [action.payload]
            arrayData.map(rest => {
                if (state) {
                    state.map(ste => {
                        if (rest.id === ste.id) {

                            ste.variantesArray = rest.data
                            return state

                        }
                        return state
                    })

                    return state;


                }
                rest = state;
                return state;

            })

            return [
                ...state
            ]





        default:
            return state;
    }
}


//Acciones


export const AddData = (data) => {
    return (dispatch, getState) => {


        try {
            dispatch({
                type: types.AddData,
                payload: data
            })
        } catch (error) {
            console.log('error')
        }

    }
}

export const ChangeState = (data) => {



    return (dispatch, getState) => {

        try {

            Swal.fire({
                title: 'Actualizando',
                text: 'Espere Porfavor',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                }
            });
            setTimeout(() => {


                dispatch({
                    type: types.ChangeState,
                    payload: data
                })
                Swal.close();
                Swal.fire({
                    title: 'Variable Actualizada',
                    icon: 'success'
                })

            }, 3000);

           



        } catch (error) {
            console.log(error)
        }
    }
}

