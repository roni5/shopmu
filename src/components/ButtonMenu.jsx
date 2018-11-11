import React, { Component } from "react";
import list from "./list.json";
export default class ButtonMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          Dropdown{" "}
        </button>
        <ul class="dropdown-menu">
          {list.map((item, index) => {
            return (
              <div key={index}>
                <ul class="dropdown-menu">{item.name}</ul>
                <a class="dropdown-item" href={item.link}>
                  {" "}
                  {item.icon}{" "}
                </a>
                {item.list.map((subitem, i) => {
                  return (
                    <ul class="dropdown-item">
                      <a class="dropdown-item" href={subitem.link}>
                        {" "}
                        {subitem.star} {subitem.icon}{" "}
                      </a>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
