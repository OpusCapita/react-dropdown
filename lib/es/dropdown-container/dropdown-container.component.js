var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

var DropdownContainer = (_temp = _class = function (_React$PureComponent) {
  _inherits(DropdownContainer, _React$PureComponent);

  function DropdownContainer() {
    _classCallCheck(this, DropdownContainer);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  /** Note: 'useAnchor' prop makes dropdown.toggle render as a link rather than
   * a button with onClick issue when it wraps an input
   */

  DropdownContainer.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        id = _props.id,
        isOpen = _props.isOpen,
        noCaret = _props.noCaret,
        title = _props.title,
        useAnchor = _props.useAnchor,
        otherProps = _objectWithoutProperties(_props, ['children', 'id', 'isOpen', 'noCaret', 'title', 'useAnchor']);

    return React.createElement(
      Dropdown,
      _extends({
        id: id,
        open: isOpen
      }, otherProps),
      React.createElement(
        Dropdown.Toggle,
        {
          noCaret: noCaret,
          open: isOpen,
          useAnchor: useAnchor
        },
        title
      ),
      React.createElement(
        Dropdown.Menu,
        null,
        children
      )
    );
  };

  return DropdownContainer;
}(React.PureComponent), _class.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  noCaret: PropTypes.bool,
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  pullRight: PropTypes.bool,
  style: PropTypes.shape({
    bsSize: PropTypes.string,
    bsStyle: PropTypes.string
  }),
  useAnchor: PropTypes.bool
}, _class.defaultProps = {
  children: null,
  disabled: false,
  dropup: false,
  isOpen: false,
  noCaret: false,
  onToggle: function onToggle() {},
  pullRight: false,
  style: {
    bsSize: 'xs',
    bsStyle: 'info'
  },
  useAnchor: false
}, _temp);
export { DropdownContainer as default };