'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*! wh-react-spinner/src/index.js | © 2016 Wirehive Ltd, License: MIT */

var _smallest_wheel = 1000;

function _scale_wheel(delta) {
  if (Math.abs(delta) < _smallest_wheel) {
    _smallest_wheel = Math.abs(delta);
  }
  return delta / _smallest_wheel;
}

var Spinner = function (_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'span',
        {
          style: { cursor: 'row-resize' },
          onWheel: function onWheel(e) {
            if (e.ctrlKey) {
              _this2.props.onChange(_scale_wheel(-e.deltaY) * (e.altKey ? e.shiftKey ? .1 : .01 : e.shiftKey ? 10 : 1));
              e.preventDefault();
            }
          },
          title: 'Ctrl + Mouse wheel to alter amount (Ctrl + Shift + Wheel: faster)'
        },
        _react2.default.createElement(
          'a',
          { title: '-10', onClick: function onClick() {
              return _this2.props.onChange(-10);
            } },
          '«'
        ),
        _react2.default.createElement(
          'a',
          { title: '-1', onClick: function onClick() {
              return _this2.props.onChange(-1);
            } },
          '<'
        ),
        _react2.default.createElement(
          'span',
          { onClick: this.props.onClick },
          this.props.children
        ),
        _react2.default.createElement(
          'a',
          { title: '+1', onClick: function onClick() {
              return _this2.props.onChange(+1);
            } },
          '>'
        ),
        _react2.default.createElement(
          'a',
          { title: '+10', onClick: function onClick() {
              return _this2.props.onChange(10);
            } },
          '»'
        )
      );
    }
  }]);

  return Spinner;
}(_react2.default.Component);

Spinner.propTypes = {
  onChange: _react2.default.PropTypes.func.isRequired,
  children: _react2.default.PropTypes.node.isRequired,
  onClick: _react2.default.PropTypes.func
};
exports.default = Spinner;