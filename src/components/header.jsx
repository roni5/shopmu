import React, { Component, Fragment } from 'react';
import Search from './Search';
const Header = (props) => (
  <Fragment >
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a id="brand" className="navbar-brand bg-success text-primary" href="#">New brand</a>
    <ul className="navbar-nav mr-auto mt-2 mt-sm-0 d-sm-flex">
      <li className="nav-item active">
        <a className="nav-link bg-primary text-white" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item bg-primary text-white">
        <a className="nav-link bg-primary text-white" href="#">Link</a>
      </li>
      <li className="nav-item bg-primary text-white">
        <a className="nav-link bg-primary text-white" href="#">News</a>
      </li>
    </ul>
      </div>
      <Search />
    </nav>
    {props.children}
    </Fragment>
);

export default Header;