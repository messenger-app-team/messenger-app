// import logo from './logo.svg';
import './App.css';
import Signup from "./components/Signup";
import ChatApp from "./components/ChatApp/ChatApp";
// import ChatApp from './components/ChatApp/ChatApp';
import {AuthProvider} from './contexts/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    
      <>
      {/* <ChatApp /> */}
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chatapp" component={ChatApp} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </AuthProvider>
      </Router>
     
     </>
  );
}

export default App;
