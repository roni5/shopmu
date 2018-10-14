import React from "react";
import ReactDOM from "react-dom";
import { createContext } from "react";
import { UserConsumer } from "../App.js";

export const UserDetails = () => (
  <div>
    <UserConsumer>
      {({ state, actions }) => {
        return (
          <div>
            <div>
              <p>Userame: {state.username}</p>
              <p>First Name: {state.firstName}</p>
              <p>Last Name: {state.lastName}</p>
            </div>
            <div>
              <div>
                <input
                  type="text"
                  value={state.firstName}
                  onChange={actions.handleFirstNameChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={state.lastName}
                  onChange={actions.handleLastNameChange}
                />
              </div>
            </div>
          </div>
        );
      }}
    </UserConsumer>
  </div>
);