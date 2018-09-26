'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _reactIcons = require('@opuscapita/react-icons');

require('./title-input.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleInput = (_temp = _class = function (_React$PureComponent) {
  _inherits(TitleInput, _React$PureComponent);

  function TitleInput() {
    _classCallCheck(this, TitleInput);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  TitleInput.prototype.render = function render() {
    var _props = this.props,
        input = _props.input,
        onClear = _props.onClear;

    return _react2.default.createElement(
      _reactBootstrap.InputGroup,
      null,
      input,
      _react2.default.createElement(
        _reactBootstrap.InputGroup.Addon,
        {
          className: 'oc-input-group-icon-remove',
          onClick: onClear
        },
        _react2.default.createElement(_reactIcons.Icon, {
          type: 'indicator',
          name: 'remove',
          width: 17,
          height: 17
        })
      )
    );
  };

  return TitleInput;
}(_react2.default.PureComponent), _class.propTypes = {
  input: _propTypes2.default.element.isRequired,
  onClear: _propTypes2.default.func
}, _class.defaultProps = {
  onClear: function onClear() {}
}, _temp);
exports.default = TitleInput;