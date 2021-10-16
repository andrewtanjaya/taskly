import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './Register/Register';
import AuthContextProvider from './Context/AuthContext';
import Home from './Home/Home';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
      </Switch>
      
      </BrowserRouter>
    </div>
    </AuthContextProvider>
  );
}

export default App;
