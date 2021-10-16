import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import { BrowserRouter, Route, Switch , Redirect, useLocation} from 'react-router-dom';
import Register from './Register/Register';
import AuthContextProvider, { useAuth } from './Context/AuthContext';
import Home from './Home/Home';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
      <BrowserRouter>
      <Switch>
      <ProtectedRoute exact path="/">
          <Home/>
        </ProtectedRoute>
        <ProtectedRoute exact path="/login">
          <Login/>
        </ProtectedRoute>
        <ProtectedRoute exact path="/register">
          <Register/>
        </ProtectedRoute>
      </Switch>
      
      </BrowserRouter>
    </div>
    </AuthContextProvider>
  );
}

function ProtectedRoute(props){
  const {currentUser} = useAuth()
  const location = useLocation()
  const {path} = props

  if(path === '/login' || path === '/register'){
    return currentUser ? <Redirect to={location.state?.from ?? '/'} /> : <Route {...props}/>
  }

  return currentUser ? <Route {...props} /> : <Redirect to={{
    pathname: '/login',
    state: {from: path},
  }}/>

}

export default App;
