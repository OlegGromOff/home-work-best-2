import React from 'react';
import './task2.css';

export default class Task2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  onToggleButtonClick() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  render() {
    return (
      <div>
        <button onClick={this.onToggleButtonClick.bind(this)}></button>
        {this.renderDrawer()}
      </div>
    );
  }

  renderDrawer() {
    return (
      <div className="wrapper">
        {!this.state.expanded ?
          (<nav >
            <ul>
              <li><a href="#">Some link</a></li>
              <li><a href="#">Another link</a></li>
              <li><a href="#">Just one more link</a></li>
            </ul>
          </nav>)
          : null}
      </div>
    );
  }
}

