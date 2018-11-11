import React, { Component } from "react";
import data from "./data.json";
//import languges from './languages.json';
const movie = data.map(movie => (
  <div class="dropdown">
    <button
      class="btn btn-primary dropdown-toggle"
      type="button"
      data-toggle="dropdown"
    >
      Dropdown{" "}
    </button>
    <ul
      class="dropdown-menu"
      key={movie.id}
      aria-labelledby="dropdownMenuButton"
    >
      <li>{movie.name} ></li>
      <a href={movie.link}> {movie.icon}</a>
      {movie}
    </ul>
  </div>
));

export default movie;
