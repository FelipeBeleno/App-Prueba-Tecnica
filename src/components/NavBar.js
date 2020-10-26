import React from 'react';

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';



export const NavBar = ({ title }) => {


    const history = useHistory();


    const handleData = () => {
        history.push('./data')
    }


    const handleForm = () => {
        history.push('./')
    }



    return (
        <AppBar >
            <Toolbar>

                <Typography variant="h6" className={title}>
                    Prueba Tecnica
                    </Typography>
                <Button onClick={handleData} color="inherit">Datos</Button>
                <Button onClick={handleForm} color="inherit">Formulario</Button>

            </Toolbar>
        </AppBar>
    )
}
