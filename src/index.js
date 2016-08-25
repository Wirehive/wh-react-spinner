/*! wh-react-spinner/src/index.js | © 2016 Wirehive Ltd, License: MIT */

import React from 'react';

var _smallest_wheel = 1000;

function _scale_wheel(delta) {
  if(Math.abs(delta) < _smallest_wheel) {
    _smallest_wheel = Math.abs(delta);
  }
  return delta / _smallest_wheel;
}

export default class Spinner extends React.Component {

  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
    children: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func
  };

  render() {
    return <span
      style={{cursor: 'row-resize'}}
      onWheel={(e) => {
        if(e.ctrlKey) {
          this.props.onChange( _scale_wheel(-e.deltaY) * (e.altKey ? e.shiftKey ? .1 : .01 : e.shiftKey ? 10 : 1));
          e.preventDefault();
        }
      }}
      title='Ctrl + Mouse wheel to alter amount (Ctrl + Shift + Wheel: faster)'
    >
      <a title='-10' onClick={() => this.props.onChange(-10)}>«</a>
      <a title='-1' onClick={() => this.props.onChange(-1)}>&lt;</a>
      <span onClick={this.props.onClick}>{this.props.children}</span>
      <a title='+1' onClick={() => this.props.onChange(+1)}>&gt;</a>
      <a title='+10' onClick={() => this.props.onChange(10)}>»</a>
    </span>;
  }
}
