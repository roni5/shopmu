import React, { Component, Fragment } from "react";

import PropTypes from 'prop-types'

const Search = ({ refine }) => (
  <div className="input-group">
    <input
      type="text"
      onChange={e => refine(e.target.value)}
      autoComplete="off"
      className="form-control"
      id="q"
    />
    <span className="input-group-btn">
      <button className="btn btn-primary btn-default">
        <i className="fa fa-search" />
      </button>
    </span>
  </div>
);

Search.propTypes = {
  refine: PropTypes.string
}

export default Search;

