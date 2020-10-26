import React, { useState } from 'react';

import { Box, Button, Grid, TextField } from '@material-ui/core';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import SendIcon from '@material-ui/icons/Send';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { AddData } from '../Redux/dataDuck';


export const Form = () => {

    const dispatch = useDispatch();

    const { register, errors, handleSubmit } = useForm();

    const [campo, setCampo] = useState([]);

    const onSubmit = (data, e) => {

        const { categoria, ...res } = data;
        const { variante, variante2, variante3, variante4, variante5 } = res;
        const categoriaArray = [categoria];
        let variantesArray = [variante, variante2, variante3, variante4, variante5]

        variantesArray = variantesArray.filter((filt => {
            return filt !== undefined
        }))

        data = { categoriaArray, variantesArray };
        setCampo([
            ...campo,
            data
        ])
        dispatch(AddData(data))
        e.target.reset();
        Swal.fire({
            title: 'Guardado con exito',
            icon: 'success',
            text: 'Ya puedes consutar la info'
        })

        setVariant([])

    }

    const [variant, setVariant] = useState([]);

    const [numVariant, setNumVariant] = useState(1);

    const handleAddVariant = () => {

        if (variant.length < 4) {
            setNumVariant(numVariant + 1)
            setVariant([...variant, numVariant + 1])
        } else {
            Swal.fire({
                title: 'Se pueden agregar maximo 5 variables',
                icon: 'error',
            });
        }
    }


    return (
        <>
            <div>
                <Grid container>
                    <Grid item xs={12} lg={12} md={12} xl={12}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box
                                m={5}
                                p={5}
                                align="center"
                                alignItems="center"
                                bgcolor="grey.200"
                                borderRadius={5}
                            >
                                <h1>Categoria</h1>
                                <Grid
                                    container
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        lg={12}
                                        md={12}
                                        xl={12}
                                    >
                                        <TextField
                                            name="categoria"
                                            fullWidth
                                            label="Categoria"
                                            variant="outlined"
                                            inputRef={
                                                register({
                                                    required: { value: true, message: 'Titulo Obligatorio' },
                                                    minLength: {
                                                        value: 2,
                                                        message: 'El campo debe tener mas de dos valores'
                                                    }
                                                })
                                            }
                                        />
                                        <span className="text-danger text-small d-block mb-2">
                                            {errors.categoria && errors.categoria.message}
                                        </span>

                                    </Grid>
                                </Grid>
                                <br />
                                <h1>Variantes</h1>
                                <Grid item
                                    xs={12}
                                    lg={12}
                                    md={12}
                                    xl={12}
                                >
                                    <TextField
                                        name="variante"
                                        fullWidth
                                        label={`Variante`}
                                        variant="outlined"
                                        inputRef={register({
                                            required: { value: true, message: 'El campo es requerido' },
                                            minLength: { value: 2, message: 'El campo debe tener dos caracteres' }
                                        })}
                                    />
                                    <span className="text-danger text-small d-block mb-2">
                                        {errors.variante && errors.variante.message}
                                    </span>
                                    <br />
                                    <br />
                                </Grid>

                                {
                                    variant.length !== 0
                                        ?
                                        variant.map((variante) => {
                                            return (
                                                <Grid key={variante} item
                                                    xs={12}
                                                    lg={12}
                                                    md={12}
                                                    xl={12}
                                                >
                                                    <TextField
                                                        name={`variante${variante}`}
                                                        fullWidth
                                                        label={`Variante ${variante}`}
                                                        variant="outlined"
                                                        inputRef={register({
                                                            required: { value: true, message: `El campo es requerido ` },
                                                            minLength: { value: 2, message: 'El campo debe tener dos caracteres' }
                                                        })}
                                                    />
                                                    <span className="text-danger text-small d-block mb-2">
                                                        {errors.variante2 && errors.variante2.message}
                                                    </span>
                                                    <br />
                                                    <br />
                                                </Grid>
                                            )
                                        })
                                        : <br />
                                }
                                <Grid container>
                                    <Grid item xs={12} >
                                        <Box mt={1} >
                                            <Button
                                                color="secondary"
                                                fullWidth
                                                endIcon={<AddToPhotosIcon />}
                                                variant="contained"
                                                onClick={handleAddVariant}
                                            >
                                                Agregar Variante
                                        </Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Box mt={1}  >
                                            <Button
                                                color="primary"
                                                fullWidth
                                                variant="contained"
                                                endIcon={<SendIcon />}
                                                type="submit"
                                            >
                                                Enviar
                                        </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
