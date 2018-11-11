import React, { Component } from "react";
import data from "./data.json";

// products.forEach((product) => {
//   product.sizes.forEach((size) => {
//     console.log(size);
//   });
// });

export const Mydropdown = props => {
  //const Mysub = data.sub;
  //let  Mysub = JSON.parse(data.sub);
  return (
    <div className="dropdown">
      {data.map((item, index) => (
        <li key={index}>
          <a class="dropdown-item" href={item.link}>
            {" "}
            {item.icon}{" "}
          </a>
        </li>
      ))}
    </div>
  );
};

// export const Mydropdown = data.map((movie) => {
//   return (
//     <li key={data.id}> {movie.sub}
//        <a class="dropdown-item" href={movie.link}  > {movie.icon} </a>

//     </li>
//   );
// });

export default function NewMovie(props) {
  const selectButton = (
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      >
        Dropdown{" "}
      </button>
      <ul class="dropdown-menu">
        {data.map(movie => (
          <li key={data.id}>
            {" "}
            {movie.name}
            <a class="dropdown-item" href={movie.link}>
              {" "}
              {movie.icon}{" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  const content = data.map(movie => (
    <ul key={movie.id}>
      <li>{movie.name}</li>
      <a class="dropdown-item" href={movie.link}>
        {movie.icon}{" "}
      </a>
      <li>{movie.name}</li>
      <a class="dropdown-item" href={movie.link}>
        {movie.icon}{" "}
      </a>
    </ul>
  ));
  return (
    <div>
      <hr />

      {selectButton}
      {Mydropdown}
    </div>
  );
}
