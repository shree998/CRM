import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Welcome";

// import components
// import Navbar from "./components/navbar.component";
// import Sidebar from "./components/sidebar.component";
// import Dashboard from "./components/dashboard.component";
// import CreateTicket from "./components/create-ticket.component";
// import CreateUser from "./components/create-user.component";
// import ManageUsers from "./components/manage-users.component";
// import ManageProjects from "./components/manage-projects.component";
// import EditTicket from "./components/edit-ticket.component";

export default function App() {
  return (
    //<Login/>
    <Router>
      <Switch>
        <Route path="/Login"component={Login}/>
        <Route path="/Welcome"component={Welcome}/>
        <Route path="/Dashboard"component={Dashboard}/>
      </Switch>
    </Router>
  );
}

