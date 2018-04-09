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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJMaXN0IiwiSW1tdXRhYmxlUHJvcFR5cGVzIiwiS0VZX0NPREVTIiwiTXVsdGlTZWxlY3RJdGVtIiwiTXVsdGlTZWxlY3QiLCJwcm9wcyIsImZvY3VzSXRlbSIsImluYyIsIml0ZW1zIiwibGVuZ3RoIiwibmV3SW5kZXgiLCJzdGF0ZSIsImZvY3VzZWRJbmRleCIsInNldFN0YXRlIiwiZm9jdXNlZEl0ZW0iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZm9jdXMiLCJzY3JvbGxJbnRvVmlldyIsIm9uUGFyZW50Rm9jdXMiLCJoYW5kbGVDaGFuZ2UiLCJpc0NoZWNrZWQiLCJjaGVja2VkSXRlbXMiLCJvbkNoYW5nZSIsInZhbHVlSW5kZXgiLCJpbmRleE9mIiwicHVzaCIsImRlbGV0ZUluIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXlDb2RlIiwiRU5URVIiLCJET1dOIiwicHJldmVudERlZmF1bHQiLCJVUCIsImhhbmRsZU1vdXNlRG93biIsIml0ZW0iLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiaXNGb2N1c2VkIiwicmVuZGVyIiwibWFwIiwiaXRlbUNsYXNzIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFdBQXJCO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsMkJBQS9COztBQUVBLE9BQU9DLFNBQVAsTUFBc0IsaUNBQXRCO0FBQ0EsT0FBT0MsZUFBUCxNQUNFLGlEQURGO0FBRUEsT0FBTywrQkFBUDs7SUFFcUJDLFc7OztBQXVC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QUEzQixDQUFsQjtBQUNBLFlBQU1pQixZQUFZM0IsZ0JBQWdCLElBQWhCLElBQXdCQSxZQUFZSSxLQUFaLEtBQXNCb0IsS0FBS3BCLEtBQXJFO0FBQ0EsWUFBTTBCLHVDQUFvQ0gsWUFBWSxZQUFaLEdBQTJCLEVBQS9ELENBQU47QUFDQSxlQUNFO0FBQUE7QUFBQTtBQUNFLHVCQUFXRyxTQURiO0FBRUUsMEJBQVlOLEtBQUtwQixLQUZuQjtBQUdFLGlCQUFLb0IsS0FBS3BCLEtBSFo7QUFJRSx5QkFBYSxPQUFLbUIsZUFBTCxDQUFxQkMsSUFBckI7QUFKZjtBQU1FLDhCQUFDLGVBQUQ7QUFDRSxnQkFBSUEsS0FBS3BCLEtBRFg7QUFFRSx1QkFBV0ssU0FGYjtBQUdFLGtCQUFNZSxJQUhSO0FBSUUsc0JBQVUsT0FBS2hCLFlBSmpCO0FBS0UsdUJBQVcsT0FBS1E7QUFMbEI7QUFORixTQURGO0FBZ0JELE9BcEJBO0FBREgsS0FERjtBQXlCRCxHOzs7RUE1SHNDaEMsTUFBTStDLGEsVUFnQnRDQyxZLEdBQWU7QUFDcEJ0QixnQkFBY3hCLE1BRE07QUFFcEJ5QyxhQUFXLEtBRlM7QUFHcEJoQixZQUFVLG9CQUFNLENBQUUsQ0FIRTtBQUlwQkosaUJBQWU7QUFKSyxDO1NBaEJIakIsVyIsImZpbGUiOiJtdWx0aS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5cbmltcG9ydCBLRVlfQ09ERVMgZnJvbSAnLi4vY29uc3RhbnRzL2tleS1jb2Rlcy5jb25zdGFudCc7XG5pbXBvcnQgTXVsdGlTZWxlY3RJdGVtIGZyb21cbiAgJy4vbXVsdGktc2VsZWN0LWl0ZW0vbXVsdGktc2VsZWN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCAnLi9tdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aVNlbGVjdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoZWNrZWRJdGVtczogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXG4gICAgaXNGb2N1c2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25QYXJlbnRGb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkSXRlbXM6IExpc3QoKSxcbiAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvblBhcmVudEZvY3VzOiBudWxsLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGZvY3VzZWRJbmRleDogLTEsIGZvY3VzZWRJdGVtOiBudWxsIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIC8vIGZvY3VzIG9uIHRoZSBmaXJzdCBpdGVtIGlmIGEgcGFyZW50IGNvbXBvbmVudCBjYWxscyB0byBtb3ZlIGZvY3VzIG9uIGl0XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobmV4dFByb3BzLmlzRm9jdXNlZCAmJiAhdGhpcy5wcm9wcy5pc0ZvY3VzZWQgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJbmRleDogLTEsIGZvY3VzZWRJdGVtOiBudWxsIH0sICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW1zWzBdLnZhbHVlKTtcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB0aGlzLmZvY3VzSXRlbSgxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzSXRlbSA9IChpbmMgPSAwKSA9PiB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLnN0YXRlLmZvY3VzZWRJbmRleCArIGluYztcbiAgICBpZiAobmV3SW5kZXggPiAtMSAmJiBuZXdJbmRleCA8IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJbmRleDogbmV3SW5kZXgsIGZvY3VzZWRJdGVtOiBpdGVtc1tuZXdJbmRleF0gfSk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW1fJHtpdGVtc1tuZXdJbmRleF0udmFsdWV9YCk7XG4gICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gLTEgJiYgdGhpcy5wcm9wcy5vblBhcmVudEZvY3VzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUGFyZW50Rm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAodmFsdWUsIGlzQ2hlY2tlZCkgPT4ge1xuICAgIGNvbnN0IHsgY2hlY2tlZEl0ZW1zLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2YWx1ZUluZGV4ID0gY2hlY2tlZEl0ZW1zLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpc0NoZWNrZWQgJiYgdmFsdWVJbmRleCA9PT0gLTEpIHtcbiAgICAgIG9uQ2hhbmdlKGNoZWNrZWRJdGVtcy5wdXNoKHZhbHVlKSk7XG4gICAgfSBlbHNlIGlmICghaXNDaGVja2VkICYmIHZhbHVlSW5kZXggPiAtMSkge1xuICAgICAgb25DaGFuZ2UoY2hlY2tlZEl0ZW1zLmRlbGV0ZUluKFt2YWx1ZUluZGV4XSkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIEtFWV9DT0RFUy5FTlRFUjpcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZEl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCh0aGlzLnN0YXRlLmZvY3VzZWRJdGVtLnZhbHVlLCB0aGlzLnByb3BzLmNoZWNrZWRJdGVtcyk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UodGhpcy5zdGF0ZS5mb2N1c2VkSXRlbS52YWx1ZSwgIWlzQ2hlY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtFWV9DT0RFUy5ET1dOOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNJdGVtKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZX0NPREVTLlVQOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNJdGVtKC0xKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb3VzZURvd24gPSBpdGVtID0+ICgpID0+IHtcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMucHJvcHMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAobmV3SW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJbmRleDogbmV3SW5kZXgsIGZvY3VzZWRJdGVtOiBpdGVtIH0pO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtXyR7aXRlbS52YWx1ZX1gKTtcbiAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBpc0NoZWNrZWQgPSAodmFsdWUsIGNoZWNrZWRJdGVtcykgPT4gY2hlY2tlZEl0ZW1zLmluZGV4T2YodmFsdWUpID4gLTE7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXRlbXMsIGNoZWNrZWRJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZvY3VzZWRJdGVtIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLW11bHRpLXNlbGVjdFwiPlxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNDaGVja2VkID0gdGhpcy5pc0NoZWNrZWQoaXRlbS52YWx1ZSwgY2hlY2tlZEl0ZW1zKTtcbiAgICAgICAgICBjb25zdCBpc0ZvY3VzZWQgPSBmb2N1c2VkSXRlbSAhPT0gbnVsbCAmJiBmb2N1c2VkSXRlbS52YWx1ZSA9PT0gaXRlbS52YWx1ZTtcbiAgICAgICAgICBjb25zdCBpdGVtQ2xhc3MgPSBgb2MtbXVsdGktc2VsZWN0LWl0ZW0gJHtpc0ZvY3VzZWQgPyAnaXMtZm9jdXNlZCcgOiAnJ31gO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUNsYXNzfVxuICAgICAgICAgICAgICBpZD17YGl0ZW1fJHtpdGVtLnZhbHVlfWB9XG4gICAgICAgICAgICAgIGtleT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlTW91c2VEb3duKGl0ZW0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RJdGVtXG4gICAgICAgICAgICAgICAgaWQ9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgaXNDaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==