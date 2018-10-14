import React from "react";
import { UserConsumer } from "../App.js";
import { UserDetails } from "./UserDetails";

export const UserProfile = props => (
  <UserConsumer>
    {({ state }) => {
      return (
        <div>
          <h2 className=" p-3 mb-2 bg-secondary text-white">Profile Page of {state.username}</h2>
          <UserDetails />
        </div>
      );
    }}
  </UserConsumer>
);