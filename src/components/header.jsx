import React, { Component, Fragment } from 'react';

const Header = (props) => (
  <Fragment class="header">
    <nav>
      <a ClassName="input-group bg-success" href="/">Home</a>
      <a ClassName="input-group" href="/profile">Me</a>
      <a ClassName="input-group" href="/profile/john">News</a>
    </nav>
    {props.children}
  </Fragment >
);

export default Header;