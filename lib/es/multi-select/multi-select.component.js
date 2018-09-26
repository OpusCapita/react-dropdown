var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import KEY_CODES from '../constants/key-codes.constant';
import MultiSelectItem from './multi-select-item/multi-select-item.component';
import './multi-select.component.scss';

var MultiSelect = (_temp = _class = function (_React$PureComponent) {
  _inherits(MultiSelect, _React$PureComponent);

  function MultiSelect(props) {
    _classCallCheck(this, MultiSelect);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.focusItem = function () {
      var inc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var items = _this.props.items;

      if (items.length === 0) return;
      var newIndex = _this.state.focusedIndex + inc;
      if (newIndex > -1 && newIndex < items.length) {
        _this.setState({ focusedIndex: newIndex, focusedItem: items[newIndex] });
        var element = document.getElementById('item_' + items[newIndex].value);
        element.focus();
        element.scrollIntoView();
      } else if (newIndex === -1 && _this.props.onParentFocus) {
        _this.props.onParentFocus();
      }
    };

    _this.handleChange = function (value, isChecked) {
      var _this$props = _this.props,
          checkedItems = _this$props.checkedItems,
          onChange = _this$props.onChange;

      var valueIndex = checkedItems.indexOf(value);
      if (isChecked && valueIndex === -1) {
        onChange(checkedItems.push(value));
      } else if (!isChecked && valueIndex > -1) {
        onChange(checkedItems.deleteIn([valueIndex]));
      }
    };

    _this.handleKeyDown = function (e) {
      switch (e.keyCode) {
        case KEY_CODES.ENTER:
          if (_this.state.focusedItem !== null) {
            var isChecked = _this.isChecked(_this.state.focusedItem.value, _this.props.checkedItems);
            _this.handleChange(_this.state.focusedItem.value, !isChecked);
          }
          break;
        case KEY_CODES.DOWN:
          e.preventDefault();
          _this.focusItem(1);
          break;
        case KEY_CODES.UP:
          e.preventDefault();
          _this.focusItem(-1);
          break;
        default:
          break;
      }
    };

    _this.handleMouseDown = function (item) {
      return function () {
        var newIndex = _this.props.items.indexOf(item);
        if (newIndex > -1) {
          _this.setState({ focusedIndex: newIndex, focusedItem: item });
          var element = document.getElementById('item_' + item.value);
          element.focus();
        }
      };
    };

    _this.isChecked = function (value, checkedItems) {
      return checkedItems.indexOf(value) > -1;
    };

    _this.state = { focusedIndex: -1, focusedItem: null };
    return _this;
  }

  MultiSelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    // focus on the first item if a parent component calls to move focus on it
    var items = this.props.items;

    if (nextProps.isFocused && !this.props.isFocused && items.length > 0) {
      this.setState({ focusedIndex: -1, focusedItem: null }, function () {
        var element = document.getElementById(items[0].value);
        element.focus();
        _this2.focusItem(1);
      });
    }
  };

  MultiSelect.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        items = _props.items,
        checkedItems = _props.checkedItems;
    var focusedItem = this.state.focusedItem;

    return React.createElement(
      'div',
      { className: 'oc-multi-select' },
      items.map(function (item) {
        var isChecked = _this3.isChecked(item.value, checkedItems);
        var isFocused = focusedItem !== null && focusedItem.value === item.value;
        var itemClass = 'oc-multi-select-item ' + (isFocused ? 'is-focused' : '');
        return React.createElement(
          'div',
          {
            className: itemClass,
            id: 'item_' + item.value,
            key: item.value,
            onMouseDown: _this3.handleMouseDown(item)
          },
          React.createElement(MultiSelectItem, {
            id: item.value,
            isChecked: isChecked,
            item: item,
            onChange: _this3.handleChange,
            onKeyDown: _this3.handleKeyDown
          })
        );
      })
    );
  };

  return MultiSelect;
}(React.PureComponent), _class.propTypes = {
  checkedItems: ImmutablePropTypes.list,
  isFocused: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]).isRequired
  })).isRequired,
  onChange: PropTypes.func,
  onParentFocus: PropTypes.func
}, _class.defaultProps = {
  checkedItems: List(),
  isFocused: false,
  onChange: function onChange() {},
  onParentFocus: null
}, _temp);
export { MultiSelect as default };