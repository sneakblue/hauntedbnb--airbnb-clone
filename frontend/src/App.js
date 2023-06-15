import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import HomePage from './components/HomePage';
import HauntPage from './components/HauntPage';
import CreateHaunt from './components/CreateHaunt';
import Landing from './components/Landing';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
      dispatch(sessionActions.restoreUser()).then(() => setLoaded(true));
  }, [dispatch])
  return isLoaded && (
    <>
        <Navigation isLoaded ={isLoaded} />
        <Switch>
            <Route path='/login'>
                <LoginFormPage />
            </Route>
            <Route path='/signup'>
                <SignupFormPage />
            </Route>
            <Route exact path='/'>
                <Landing />
            </Route>
            <Route exact path='/haunts'>
                <HomePage />
            </Route>
            <Route exact path='/haunts/create'>
                <CreateHaunt />
            </Route>
            <Route exact path='/haunts/:id'>
                <HauntPage />
            </Route>
            <Route>
                <Redirect to="/haunts" />
            </Route>
        </Switch>
    </>
  );
}

export default App;
