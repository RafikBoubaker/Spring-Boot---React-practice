
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProject from './components/Project/AddProject';
import { Provider } from 'react-redux'
import store from './store';
import UpdateProject from './components/Project/UpdateProject';
import ProjectBoard from './components/projectBoard/ProjectBoard';
import AddProjectTask from './components/projectBoard/ProjectTasks/AddProjectTask';
import UpdateProjectTask from './components/projectBoard/ProjectTasks/UpdateProjectTask';
import Landing from './components/Layout/Landing';
import Register from './components/UserManagement/Register';
import Login from './components/UserManagement/Login';
import jwt_decode from 'jwt-decode'
import setJWTToken from "./SecurityUtils/setJWTToken";
import { SET_CURRENT_USER } from './actions/types';
import { logout } from './actions/secutrityAction';
import SecuredRoute from "./SecurityUtils/SecureRoute";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });


 const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}


function App() {
  return (
    
    <div className="App">
      <Provider store={store}>
      <Router>

        <Header/>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          
          {//private routes
          }
          <Switch>
        <SecuredRoute exact path="/dashboard" component={Dashboard} />
        <SecuredRoute exact path="/addProject" component={AddProject} />
        <SecuredRoute exact path="/updateProject/:id" component={UpdateProject} />
        <SecuredRoute exact path="/projectBoard/:id" component={ProjectBoard} />
        <SecuredRoute exact path="/addProjectTask/:id" component={AddProjectTask} />
        <SecuredRoute exact path="/updateProjectTask/:backlog_id/:pt_id" component={UpdateProjectTask} />
           </Switch>
        </Router>
        </Provider>
    </div>
  );
}

export default App;
