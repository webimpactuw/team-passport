import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QuizzesPage } from './src/pages/QuizzesPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/quiz">
                    <QuizzesPage/>
                </Route>
            </Switch>
        </Router>
    )
}