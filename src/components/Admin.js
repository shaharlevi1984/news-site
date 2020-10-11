import React from "react";
import User from "./User";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Add from "./Add";
import Del from "./Del";

function Admin() {
  return (
    <Router>
      <div style={{ marginTop: "1vw" }}>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/admin/add">add</Link>
            </li>

            <li>
              <Link to="/admin/del">Delete</Link>
            </li>
          </ul>
        </nav>
        <h1>Admin</h1>
        <User></User>
      </div>
      <Route path="/admin/add" component={Add}></Route>
      <Route path="/admin/del" component={Del}></Route>
    </Router>
  );
}

export default Admin;
