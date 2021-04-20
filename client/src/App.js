import Signup from './components/Signup';
import Login from './components/Login';
import ChatApp from './components/ChatApp/ChatApp';
import { AuthProvider } from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      {/* <ChatApp /> */}
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={ChatApp} />
            <Route path='/signup' component={Signup} />
            <Route path='/Login' component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
