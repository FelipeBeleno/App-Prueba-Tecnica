import React from 'react';


import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';

import { theme } from './styles/Style';
import { AppRouter } from './routers/AppRouter';
import { store } from './Redux/store';



export const App = () => {

    return (
        <div>
            <Provider store={store}>
                <ThemeProvider theme={theme}>

                    <AppRouter />
                  
                </ThemeProvider>
                </Provider>
        </div>
    )
}
