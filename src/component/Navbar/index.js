import React from 'react';
import './index.css';
import {
  NavLink
} from "react-router-dom";
const Navbar=()=>{
    return (
        <ul type="none">
          <li><NavLink exact activeClassName="active_class" to="/">Open</NavLink></li>
          <li><NavLink exact activeClassName="active_class" to="/component/Closed">Closed</NavLink></li>
          <li><NavLink exact activeClassName="active_class" to="/component/Label">Label</NavLink></li>
          <li><NavLink exact activeClassName="active_class" to="/component/NewIssue">NewIssue</NavLink></li>
        </ul>

    );
}
export default Navbar;