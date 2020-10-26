import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

    Redirect
} from "react-router-dom";
import { Data } from '../components/Data';
import { Form } from '../components/Form';
import { NavBar } from '../components/NavBar';
import { useStyles } from '../styles/Style';

export const AppRouter = () => {

    const { offset, title } = useStyles();


    return (
        <div>

            <Router>
                <div>
                    <NavBar title={title} />
                    <div className={offset}>
                    </div>

                    <Switch>
                        <Route exact path="/" component={Form} />

                        <Route exact path="/data" component={Data} />

                        <Redirect to="/" />

                    </Switch>
                </div>
            </Router>

        </div>
    )
}
