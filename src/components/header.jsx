import React, { Component, Fragment } from 'react';
import Search from './Search';
const Header = (props) => (
  <Fragment >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a id="brand" class="navbar-brand bg-success text-primary" href="#">New brand</a>
    <ul class="navbar-nav mr-auto mt-2 mt-sm-0 d-sm-flex">
      <li class="nav-item active">
        <a class="nav-link bg-primary text-white" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item bg-primary text-white">
        <a class="nav-link bg-primary text-white" href="#">Link</a>
      </li>
      <li class="nav-item bg-primary text-white">
        <a class="nav-link bg-primary text-white" href="#">News</a>
      </li>
    </ul>
      </div>
      <Search />
    </nav>

    {props.children}

    </Fragment>
);

export default Header;