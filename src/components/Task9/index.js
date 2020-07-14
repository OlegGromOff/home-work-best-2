
import React from "react";
// import './style.css'

export const users = [
  {
    key: 1,
    name: "Joe",
    isAdmin: true,
  },
  {
    key: 2,
    name: "Kolia",
    isAdmin: false,
  },
  {
    key: 3,
    name: "Vlad",
    isAdmin: true,
  },
  {
    key: 4,
    name: "Sergey",
    isAdmin: true,
  },
  {
    key: 5,
    name: "Kolawole",
    isAdmin: false,
  },
  {
    key: 6,
    name: "Bill Gates",
    isAdmin: false,
  },
];

const User = (props) => {
  return (
    <p key={props.key} className={props.isAdmin ? 'red' : null}>
      {props.name}
      {props.isAdmin && " 👑"}
    </p>
  );
}

const Task9 = () => {

  return (
    <div className="wrapper">
      <h2>User List</h2>
      <div className="list">
        {users.map((user) => {
          return (
            <User key={user.key} isAdmin={user.isAdmin} name={user.name} />
          );

        })}
      </div>
    </div>
  )
}
export default Task9;