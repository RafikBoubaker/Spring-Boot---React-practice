
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



function App() {
  return (
    
    <div className="App">
      <Provider store={store}>
      <Router>

        <Header/>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addProject" component={AddProject} />
        <Route exact path="/updateProject/:id" component={UpdateProject} />
        <Route exact path="/projectBoard/:id" component={ProjectBoard} />
        <Route exact path="/addProjectTask/:id" component={AddProjectTask} />
          
        </Router>
        </Provider>
    </div>
  );
}

export default App;
