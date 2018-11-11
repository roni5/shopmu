import React from "react";
import json from "./languages.json";
const DropdownList = ({ code, lang }) => {
  return (
    <div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div
          class="dropdown-menu"
          code={json.code}
          aria-labelledby="dropdownMenuButton"
        >
          <a class="dropdown-item" code={json.code} href="#">
            lang=
            {json.lang}
          </a>
          <a class="dropdown-item" code={json.code} href="#">
            Another action
          </a>
          <a class="dropdown-item" code={json.code} href="#">
            else here
          </a>
        </div>
      </div>
    </div>
  );
};

export default DropdownList;
