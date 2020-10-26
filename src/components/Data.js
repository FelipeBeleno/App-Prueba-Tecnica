import { Box } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { LiContent } from './LiContent';
import { LiTitle } from './LiTitle';

export const Data = () => {


    const { data } = useSelector(store => store);

    console.log(data)


    return (


        <Box m={5}>
            {
                data.length === 0
                    ? <h1 className="text-center">Ingresa Algun  Valor en el formulario</h1>
                    : <div className="container row">

                        {

                            data.map(dat => {

                                return (

                                    <ul className="list-group col-md-5 ml-1 mr-1 mt-3 mb-3" key={dat.id}>

                                        <LiTitle categoria={dat} />
                                        <LiContent content={dat} id={dat.id} />

                                    </ul>

                                )
                            })

                        }

                    </div>

            }

        </Box>


    )
}
