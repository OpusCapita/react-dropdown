var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'react-bootstrap';

import { Icon } from '@opuscapita/react-icons';

import DropdownContainer from '../dropdown-container/dropdown-container.component';
import './dropdown-menu.component.scss';

var DropdownMenu = (_temp = _class = function (_React$PureComponent) {
  _inherits(DropdownMenu, _React$PureComponent);

  function DropdownMenu(props) {
    _classCallCheck(this, DropdownMenu);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.handleToggle = function (isOpen) {
      if (_this.dontCloseDropdownMenu) {
        _this.setState({ isOpen: true });
        _this.dontCloseDropdownMenu = false;
      } else {
        _this.setState({ isOpen: isOpen });
      }
    };

    _this.renderMenuItems = function (items) {
      return items.map(function (item, i) {
        var id = item.id !== undefined ? item.id : 'item' + i;
        if (item.type === 'divider') {
          return React.createElement(MenuItem, {
            key: id,
            divider: true
          });
        }
        return React.createElement(
          MenuItem,
          {
            key: id,
            id: id,
            disabled: !!item.disabled,
            href: item.href,
            onClick: function onClick(e) {
              if (item.disableClosing) {
                _this.dontCloseDropdownMenu = true;
              }
              if (!item.disabled && item.onClick) {
                item.onClick(e);
              }
            }
          },
          React.createElement(
            'span',
            { className: 'oc-dropdown-menu-icon' },
            item.icon
          ),
          React.createElement(
            'span',
            { className: 'oc-dropdown-menu-title' },
            item.title
          )
        );
      });
    };

    _this.state = { isOpen: false };
    return _this;
  }

  DropdownMenu.prototype.render = function render() {
    var _props = this.props,
        menuItems = _props.menuItems,
        caret = _props.caret,
        pullLeft = _props.pullLeft,
        otherProps = _objectWithoutProperties(_props, ['menuItems', 'caret', 'pullLeft']);

    return React.createElement(
      'div',
      { className: 'oc-dropdown-menu' },
      React.createElement(
        DropdownContainer,
        _extends({
          noCaret: !caret,
          pullRight: !pullLeft,
          isOpen: this.state.isOpen,
          onToggle: this.handleToggle
        }, otherProps),
        this.renderMenuItems(menuItems)
      )
    );
  };

  return DropdownMenu;
}(React.PureComponent), _class.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    disabled: PropTypes.bool,
    disableClosing: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.element,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // serves as a key
    onClick: PropTypes.func,
    title: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element]),
    type: PropTypes.oneOf(['item', 'divider'])
  })).isRequired,
  caret: PropTypes.bool,
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  pullLeft: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element])
}, _class.defaultProps = {
  caret: false,
  disabled: false,
  dropup: false,
  pullLeft: false,
  title: React.createElement(Icon, { type: 'indicator', name: 'more', width: 32, height: 32 })
}, _temp);
export { DropdownMenu as default };