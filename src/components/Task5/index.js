import React from 'react';
import './style.css'

const todos = [
  {
    key: 1,
    status: 'start',
    text: 'Learn english',
  },
  {
    key: 2,
    status: 'done',
    text: 'Watch a new movie',
  },
  {
    key: 3,
    status: 'inProgress',
    text: 'Make a post on Instagram',
  },
  {
    key: 4,
    status: 'done',
    text: 'Learn React',
  },
  {
    key: 5,
    status: 'inProgress',
    text: 'Do home task',
  },
  {
    key: 6,
    status: 'start',
    text: 'Go shopping',
  },
];

const Todo = ({ status, text }) => {

  let myClass;
  switch (status) {
    case 'start':
      myClass = 'start';
      break;
    case 'done':
      myClass = 'done';
      break;
    case 'inProgress':
      myClass = 'inProgress';
      break;

    default:
      break;
  }

  return <p className={myClass}>{text}</p>;
};

const Task5 = () => {

  return (
    <div className="wrapper" >
      <h2>Todo</h2>

      <div className="list">
        {todos.map((el) => (
          <Todo key={el.key} {...el} />
        ))}
      </div>
    </div >
  );

}

export default Task5;

