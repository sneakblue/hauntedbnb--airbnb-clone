import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
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
        </Switch>
    </>
  );
}

export default App;
