'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp; /* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-static-element-interactions */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require('immutable');

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _keyCodes = require('../constants/key-codes.constant');

var _keyCodes2 = _interopRequireDefault(_keyCodes);

var _multiSelectItemComponent = require('./multi-select-item/multi-select-item.component.jsx');

var _multiSelectItemComponent2 = _interopRequireDefault(_multiSelectItemComponent);

require('./multi-select.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        case _keyCodes2.default.ENTER:
          if (_this.state.focusedItem !== null) {
            var isChecked = _this.isChecked(_this.state.focusedItem.value, _this.props.checkedItems);
            _this.handleChange(_this.state.focusedItem.value, !isChecked);
          }
          break;
        case _keyCodes2.default.DOWN:
          e.preventDefault();
          _this.focusItem(1);
          break;
        case _keyCodes2.default.UP:
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

    return _react2.default.createElement(
      'div',
      { className: 'oc-multi-select' },
      items.map(function (item) {
        var isChecked = _this3.isChecked(item.value, checkedItems);
        var isFocused = focusedItem !== null && focusedItem.value === item.value;
        var itemClass = 'oc-multi-select-item ' + (isFocused ? 'is-focused' : '');
        return _react2.default.createElement(
          'div',
          {
            className: itemClass,
            id: 'item_' + item.value,
            key: item.value,
            onMouseDown: _this3.handleMouseDown(item)
          },
          _react2.default.createElement(_multiSelectItemComponent2.default, {
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
}(_react2.default.PureComponent), _class.defaultProps = {
  checkedItems: (0, _immutable.List)(),
  isFocused: false,
  onChange: function onChange() {},
  onParentFocus: null
}, _temp);
exports.default = MultiSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTXVsdGlTZWxlY3QiLCJwcm9wcyIsImZvY3VzSXRlbSIsImluYyIsIml0ZW1zIiwibGVuZ3RoIiwibmV3SW5kZXgiLCJzdGF0ZSIsImZvY3VzZWRJbmRleCIsInNldFN0YXRlIiwiZm9jdXNlZEl0ZW0iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZm9jdXMiLCJzY3JvbGxJbnRvVmlldyIsIm9uUGFyZW50Rm9jdXMiLCJoYW5kbGVDaGFuZ2UiLCJpc0NoZWNrZWQiLCJjaGVja2VkSXRlbXMiLCJvbkNoYW5nZSIsInZhbHVlSW5kZXgiLCJpbmRleE9mIiwicHVzaCIsImRlbGV0ZUluIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXlDb2RlIiwiRU5URVIiLCJET1dOIiwicHJldmVudERlZmF1bHQiLCJVUCIsImhhbmRsZU1vdXNlRG93biIsIml0ZW0iLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiaXNGb2N1c2VkIiwicmVuZGVyIiwibWFwIiwiaXRlbUNsYXNzIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7QUFDQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxXOzs7QUF1Qm5CLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBaUJuQkMsU0FqQm1CLEdBaUJQLFlBQWE7QUFBQSxVQUFaQyxHQUFZLHVFQUFOLENBQU07QUFBQSxVQUNmQyxLQURlLEdBQ0wsTUFBS0gsS0FEQSxDQUNmRyxLQURlOztBQUV2QixVQUFJQSxNQUFNQyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3hC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LEtBSFo7QUFJRSx5QkFBYSxPQUFLbUIsZUFBTCxDQUFxQkMsSUFBckI7QUFKZjtBQU1FO0FBQ0UsZ0JBQUlBLEtBQUtwQixLQURYO0FBRUUsdUJBQVdLLFNBRmI7QUFHRSxrQkFBTWUsSUFIUjtBQUlFLHNCQUFVLE9BQUtoQixZQUpqQjtBQUtFLHVCQUFXLE9BQUtRO0FBTGxCO0FBTkYsU0FERjtBQWdCRCxPQXBCQTtBQURILEtBREY7QUF5QkQsRzs7O0VBNUhzQyxnQkFBTWUsYSxVQWdCdENDLFksR0FBZTtBQUNwQnRCLGdCQUFjLHNCQURNO0FBRXBCaUIsYUFBVyxLQUZTO0FBR3BCaEIsWUFBVSxvQkFBTSxDQUFFLENBSEU7QUFJcEJKLGlCQUFlO0FBSkssQztrQkFoQkhqQixXIiwiZmlsZSI6Im11bHRpLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcblxuaW1wb3J0IEtFWV9DT0RFUyBmcm9tICcuLi9jb25zdGFudHMva2V5LWNvZGVzLmNvbnN0YW50JztcbmltcG9ydCBNdWx0aVNlbGVjdEl0ZW0gZnJvbVxuICAnLi9tdWx0aS1zZWxlY3QtaXRlbS9tdWx0aS1zZWxlY3QtaXRlbS5jb21wb25lbnQuanN4JztcbmltcG9ydCAnLi9tdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aVNlbGVjdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoZWNrZWRJdGVtczogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXG4gICAgaXNGb2N1c2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25QYXJlbnRGb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkSXRlbXM6IExpc3QoKSxcbiAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvblBhcmVudEZvY3VzOiBudWxsLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGZvY3VzZWRJbmRleDogLTEsIGZvY3VzZWRJdGVtOiBudWxsIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIC8vIGZvY3VzIG9uIHRoZSBmaXJzdCBpdGVtIGlmIGEgcGFyZW50IGNvbXBvbmVudCBjYWxscyB0byBtb3ZlIGZvY3VzIG9uIGl0XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobmV4dFByb3BzLmlzRm9jdXNlZCAmJiAhdGhpcy5wcm9wcy5pc0ZvY3VzZWQgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJbmRleDogLTEsIGZvY3VzZWRJdGVtOiBudWxsIH0sICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW1zWzBdLnZhbHVlKTtcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB0aGlzLmZvY3VzSXRlbSgxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzSXRlbSA9IChpbmMgPSAwKSA9PiB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLnN0YXRlLmZvY3VzZWRJbmRleCArIGluYztcbiAgICBpZiAobmV3SW5kZXggPiAtMSAmJiBuZXdJbmRleCA8IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJbmRleDogbmV3SW5kZXgsIGZvY3VzZWRJdGVtOiBpdGVtc1tuZXdJbmRleF0gfSk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW1fJHtpdGVtc1tuZXdJbmRleF0udmFsdWV9YCk7XG4gICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gLTEgJiYgdGhpcy5wcm9wcy5vblBhcmVudEZvY3VzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUGFyZW50Rm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAodmFsdWUsIGlzQ2hlY2tlZCkgPT4ge1xuICAgIGNvbnN0IHsgY2hlY2tlZEl0ZW1zLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2YWx1ZUluZGV4ID0gY2hlY2tlZEl0ZW1zLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpc0NoZWNrZWQgJiYgdmFsdWVJbmRleCA9PT0gLTEpIHtcbiAgICAgIG9uQ2hhbmdlKGNoZWNrZWRJdGVtcy5wdXNoKHZhbHVlKSk7XG4gICAgfSBlbHNlIGlmICghaXNDaGVja2VkICYmIHZhbHVlSW5kZXggPiAtMSkge1xuICAgICAgb25DaGFuZ2UoY2hlY2tlZEl0ZW1zLmRlbGV0ZUluKFt2YWx1ZUluZGV4XSkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIEtFWV9DT0RFUy5FTlRFUjpcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZEl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCh0aGlzLnN0YXRlLmZvY3VzZWRJdGVtLnZhbHVlLCB0aGlzLnByb3BzLmNoZWNrZWRJdGVtcyk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UodGhpcy5zdGF0ZS5mb2N1c2VkSXRlbS52YWx1ZSwgIWlzQ2hlY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtFWV9DT0RFUy5ET1dOOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNJdGVtKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZX0NPREVTLlVQOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNJdGVtKC0xKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb3VzZURvd24gPSBpdGVtID0+ICgpID0+IHtcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMucHJvcHMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAobmV3SW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJbmRleDogbmV3SW5kZXgsIGZvY3VzZWRJdGVtOiBpdGVtIH0pO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtXyR7aXRlbS52YWx1ZX1gKTtcbiAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBpc0NoZWNrZWQgPSAodmFsdWUsIGNoZWNrZWRJdGVtcykgPT4gY2hlY2tlZEl0ZW1zLmluZGV4T2YodmFsdWUpID4gLTE7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXRlbXMsIGNoZWNrZWRJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZvY3VzZWRJdGVtIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLW11bHRpLXNlbGVjdFwiPlxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNDaGVja2VkID0gdGhpcy5pc0NoZWNrZWQoaXRlbS52YWx1ZSwgY2hlY2tlZEl0ZW1zKTtcbiAgICAgICAgICBjb25zdCBpc0ZvY3VzZWQgPSBmb2N1c2VkSXRlbSAhPT0gbnVsbCAmJiBmb2N1c2VkSXRlbS52YWx1ZSA9PT0gaXRlbS52YWx1ZTtcbiAgICAgICAgICBjb25zdCBpdGVtQ2xhc3MgPSBgb2MtbXVsdGktc2VsZWN0LWl0ZW0gJHtpc0ZvY3VzZWQgPyAnaXMtZm9jdXNlZCcgOiAnJ31gO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUNsYXNzfVxuICAgICAgICAgICAgICBpZD17YGl0ZW1fJHtpdGVtLnZhbHVlfWB9XG4gICAgICAgICAgICAgIGtleT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlTW91c2VEb3duKGl0ZW0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RJdGVtXG4gICAgICAgICAgICAgICAgaWQ9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgaXNDaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==