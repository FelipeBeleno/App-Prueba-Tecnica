import React from 'react';
import { useSelector } from 'react-redux';

// Funcion 
import { funcionArray } from '../helpers/arreglosbidimiencionales';


export const InfoTabla = () => {

    const { data } = useSelector(state => state);



    const dataChange = data.map(rest => {
        return rest.variantesArray
    })


    const funt = funcionArray(dataChange, 0, 0, []);



    console.log(funt)

    return (
        <div className="my-2 mx-5">

            <table className="table">
                <thead>
                    <tr>
                        {
                            funt.map((resp, i) => {
                                return <th key={resp + i}>Prueba {i+1}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        {funt.map((resp, i) => {
                            return <td key={resp + i}>{resp}</td>
                        })}

                    </tr>
                </tbody>
            </table>
        </div>
    )
}
