import React from "react";

import "./UsersList.css";
import UsersItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
  if (props.item.length === 0) {
    return (
      <div className="center">
        <Card>
          {" "}
          <h2>no users found</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="user-item">
      {props.item.map((user) => {
        return (
          <UsersItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
