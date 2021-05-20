import React from 'react';
import Exercises from '../pages/Exercises';
import ExerciseNew from '../pages/ExerciseNew';
import NotFound from '../pages/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercises}/>
                <Route exact path="/exercise/new" component={ExerciseNew}/>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;