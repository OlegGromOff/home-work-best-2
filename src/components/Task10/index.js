import React from 'react';
import './style.css'

const notifications = [
  {
    key: 1,
    text: 'Welcome user101',
    notificationType: 'info',
  },
  {
    key: 2,
    text: 'You have been banned',
    notificationType: 'error',
  },
  {
    key: 3,
    text: 'New friend request',
    notificationType: 'info',
  },
  {
    key: 4,
    text: 'You are about to exceed your usage limit',
    notificationType: 'warning',
  },
  {
    key: 5,
    text: 'Free trial will soon expire',
    notificationType: 'warning',
  },
  {
    key: 6,
    text: 'Token expired',
    notificationType: 'error',
  },
];

const Info = ({ text }) => <p className="info">{text}</p>;
const Warning = ({ text }) => <p className="warning">{text}</p>;
const Error = ({ text }) => <p className="error">{text}</p>;

function Notification({ text, notificationType }) {
  let value;
  switch (notificationType) {
    case 'error':
      value = <Info text={text} />;
      break;
    case 'info':
      value = <Warning text={text} />;
      break;
    case 'warning':
      value = <Error text={text} />;
      break;

    default:
      value = null;
      break;
  }
  return <div>{value}</div>;
}

const Task10 = () => {
  return (
    <div className="wrapper">
      <h2>User List</h2>

      <div style={{ width: '400px' }}>
        {notifications.map((item) => (
          <Notification key={item.key} {...item} />
        ))}
      </div>
    </div>
  );
}
export default Task10;