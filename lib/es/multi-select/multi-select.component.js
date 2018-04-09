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
}(React.PureComponent), _class.defaultProps = {
  checkedItems: List(),
  isFocused: false,
  onChange: function onChange() {},
  onParentFocus: null
}, _temp);
export { MultiSelect as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJMaXN0IiwiSW1tdXRhYmxlUHJvcFR5cGVzIiwiS0VZX0NPREVTIiwiTXVsdGlTZWxlY3RJdGVtIiwiTXVsdGlTZWxlY3QiLCJwcm9wcyIsImZvY3VzSXRlbSIsImluYyIsIml0ZW1zIiwibGVuZ3RoIiwibmV3SW5kZXgiLCJzdGF0ZSIsImZvY3VzZWRJbmRleCIsInNldFN0YXRlIiwiZm9jdXNlZEl0ZW0iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZm9jdXMiLCJzY3JvbGxJbnRvVmlldyIsIm9uUGFyZW50Rm9jdXMiLCJoYW5kbGVDaGFuZ2UiLCJpc0NoZWNrZWQiLCJjaGVja2VkSXRlbXMiLCJvbkNoYW5nZSIsInZhbHVlSW5kZXgiLCJpbmRleE9mIiwicHVzaCIsImRlbGV0ZUluIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXlDb2RlIiwiRU5URVIiLCJET1dOIiwicHJldmVudERlZmF1bHQiLCJVUCIsImhhbmRsZU1vdXNlRG93biIsIml0ZW0iLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiaXNGb2N1c2VkIiwicmVuZGVyIiwibWFwIiwiaXRlbUNsYXNzIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFdBQXJCO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsMkJBQS9COztBQUVBLE9BQU9DLFNBQVAsTUFBc0IsaUNBQXRCO0FBQ0EsT0FBT0MsZUFBUCxNQUNFLGlEQURGO0FBRUEsT0FBTywrQkFBUDs7SUFFcUJDLFc7OztBQXVC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QUEzQixDQUFsQjtBQUNBLFlBQU1pQixZQUFZM0IsZ0JBQWdCLElBQWhCLElBQXdCQSxZQUFZSSxLQUFaLEtBQXNCb0IsS0FBS3BCLEtBQXJFO0FBQ0EsWUFBTTBCLHVDQUFvQ0gsWUFBWSxZQUFaLEdBQTJCLEVBQS9ELENBQU47QUFDQSxlQUNFO0FBQUE7QUFBQTtBQUNFLHVCQUFXRyxTQURiO0FBRUUsMEJBQVlOLEtBQUtwQixLQUZuQjtBQUdFLGlCQUFLb0IsS0FBS3BCLEtBSFo7QUFJRSx5QkFBYSxPQUFLbUIsZUFBTCxDQUFxQkMsSUFBckI7QUFKZjtBQU1FLDhCQUFDLGVBQUQ7QUFDRSxnQkFBSUEsS0FBS3BCLEtBRFg7QUFFRSx1QkFBV0ssU0FGYjtBQUdFLGtCQUFNZSxJQUhSO0FBSUUsc0JBQVUsT0FBS2hCLFlBSmpCO0FBS0UsdUJBQVcsT0FBS1E7QUFMbEI7QUFORixTQURGO0FBZ0JELE9BcEJBO0FBREgsS0FERjtBQXlCRCxHOzs7RUE1SHNDaEMsTUFBTStDLGEsVUFnQnRDQyxZLEdBQWU7QUFDcEJ0QixnQkFBY3hCLE1BRE07QUFFcEJ5QyxhQUFXLEtBRlM7QUFHcEJoQixZQUFVLG9CQUFNLENBQUUsQ0FIRTtBQUlwQkosaUJBQWU7QUFKSyxDO1NBaEJIakIsVyIsImZpbGUiOiJtdWx0aS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xyXG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xyXG5cclxuaW1wb3J0IEtFWV9DT0RFUyBmcm9tICcuLi9jb25zdGFudHMva2V5LWNvZGVzLmNvbnN0YW50JztcclxuaW1wb3J0IE11bHRpU2VsZWN0SXRlbSBmcm9tXHJcbiAgJy4vbXVsdGktc2VsZWN0LWl0ZW0vbXVsdGktc2VsZWN0LWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0ICcuL211bHRpLXNlbGVjdC5jb21wb25lbnQuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aVNlbGVjdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBjaGVja2VkSXRlbXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxyXG4gICAgaXNGb2N1c2VkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBdKS5pc1JlcXVpcmVkLFxyXG4gICAgfSkpLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvblBhcmVudEZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2hlY2tlZEl0ZW1zOiBMaXN0KCksXHJcbiAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxyXG4gICAgb25QYXJlbnRGb2N1czogbnVsbCxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgZm9jdXNlZEluZGV4OiAtMSwgZm9jdXNlZEl0ZW06IG51bGwgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAvLyBmb2N1cyBvbiB0aGUgZmlyc3QgaXRlbSBpZiBhIHBhcmVudCBjb21wb25lbnQgY2FsbHMgdG8gbW92ZSBmb2N1cyBvbiBpdFxyXG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChuZXh0UHJvcHMuaXNGb2N1c2VkICYmICF0aGlzLnByb3BzLmlzRm9jdXNlZCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSW5kZXg6IC0xLCBmb2N1c2VkSXRlbTogbnVsbCB9LCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW1zWzBdLnZhbHVlKTtcclxuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW0oMSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXNJdGVtID0gKGluYyA9IDApID0+IHtcclxuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuc3RhdGUuZm9jdXNlZEluZGV4ICsgaW5jO1xyXG4gICAgaWYgKG5ld0luZGV4ID4gLTEgJiYgbmV3SW5kZXggPCBpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJbmRleDogbmV3SW5kZXgsIGZvY3VzZWRJdGVtOiBpdGVtc1tuZXdJbmRleF0gfSk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbV8ke2l0ZW1zW25ld0luZGV4XS52YWx1ZX1gKTtcclxuICAgICAgZWxlbWVudC5mb2N1cygpO1xyXG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAtMSAmJiB0aGlzLnByb3BzLm9uUGFyZW50Rm9jdXMpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblBhcmVudEZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UgPSAodmFsdWUsIGlzQ2hlY2tlZCkgPT4ge1xyXG4gICAgY29uc3QgeyBjaGVja2VkSXRlbXMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgdmFsdWVJbmRleCA9IGNoZWNrZWRJdGVtcy5pbmRleE9mKHZhbHVlKTtcclxuICAgIGlmIChpc0NoZWNrZWQgJiYgdmFsdWVJbmRleCA9PT0gLTEpIHtcclxuICAgICAgb25DaGFuZ2UoY2hlY2tlZEl0ZW1zLnB1c2godmFsdWUpKTtcclxuICAgIH0gZWxzZSBpZiAoIWlzQ2hlY2tlZCAmJiB2YWx1ZUluZGV4ID4gLTEpIHtcclxuICAgICAgb25DaGFuZ2UoY2hlY2tlZEl0ZW1zLmRlbGV0ZUluKFt2YWx1ZUluZGV4XSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIEtFWV9DT0RFUy5FTlRFUjpcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkSXRlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgaXNDaGVja2VkID0gdGhpcy5pc0NoZWNrZWQodGhpcy5zdGF0ZS5mb2N1c2VkSXRlbS52YWx1ZSwgdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMpO1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UodGhpcy5zdGF0ZS5mb2N1c2VkSXRlbS52YWx1ZSwgIWlzQ2hlY2tlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEtFWV9DT0RFUy5ET1dOOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmZvY3VzSXRlbSgxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBLRVlfQ09ERVMuVVA6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNJdGVtKC0xKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZU1vdXNlRG93biA9IGl0ZW0gPT4gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLnByb3BzLml0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICBpZiAobmV3SW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEluZGV4OiBuZXdJbmRleCwgZm9jdXNlZEl0ZW06IGl0ZW0gfSk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbV8ke2l0ZW0udmFsdWV9YCk7XHJcbiAgICAgIGVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzQ2hlY2tlZCA9ICh2YWx1ZSwgY2hlY2tlZEl0ZW1zKSA9PiBjaGVja2VkSXRlbXMuaW5kZXhPZih2YWx1ZSkgPiAtMTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpdGVtcywgY2hlY2tlZEl0ZW1zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyBmb2N1c2VkSXRlbSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtbXVsdGktc2VsZWN0XCI+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXNDaGVja2VkID0gdGhpcy5pc0NoZWNrZWQoaXRlbS52YWx1ZSwgY2hlY2tlZEl0ZW1zKTtcclxuICAgICAgICAgIGNvbnN0IGlzRm9jdXNlZCA9IGZvY3VzZWRJdGVtICE9PSBudWxsICYmIGZvY3VzZWRJdGVtLnZhbHVlID09PSBpdGVtLnZhbHVlO1xyXG4gICAgICAgICAgY29uc3QgaXRlbUNsYXNzID0gYG9jLW11bHRpLXNlbGVjdC1pdGVtICR7aXNGb2N1c2VkID8gJ2lzLWZvY3VzZWQnIDogJyd9YDtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW1DbGFzc31cclxuICAgICAgICAgICAgICBpZD17YGl0ZW1fJHtpdGVtLnZhbHVlfWB9XHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bihpdGVtKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNdWx0aVNlbGVjdEl0ZW1cclxuICAgICAgICAgICAgICAgIGlkPXtpdGVtLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgaXNDaGVja2VkPXtpc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==