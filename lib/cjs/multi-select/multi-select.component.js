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

var _multiSelectItem = require('./multi-select-item/multi-select-item.component');

var _multiSelectItem2 = _interopRequireDefault(_multiSelectItem);

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
          _react2.default.createElement(_multiSelectItem2.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTXVsdGlTZWxlY3QiLCJwcm9wcyIsImZvY3VzSXRlbSIsImluYyIsIml0ZW1zIiwibGVuZ3RoIiwibmV3SW5kZXgiLCJzdGF0ZSIsImZvY3VzZWRJbmRleCIsInNldFN0YXRlIiwiZm9jdXNlZEl0ZW0iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZm9jdXMiLCJzY3JvbGxJbnRvVmlldyIsIm9uUGFyZW50Rm9jdXMiLCJoYW5kbGVDaGFuZ2UiLCJpc0NoZWNrZWQiLCJjaGVja2VkSXRlbXMiLCJvbkNoYW5nZSIsInZhbHVlSW5kZXgiLCJpbmRleE9mIiwicHVzaCIsImRlbGV0ZUluIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXlDb2RlIiwiRU5URVIiLCJET1dOIiwicHJldmVudERlZmF1bHQiLCJVUCIsImhhbmRsZU1vdXNlRG93biIsIml0ZW0iLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiaXNGb2N1c2VkIiwicmVuZGVyIiwibWFwIiwiaXRlbUNsYXNzIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7QUFDQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxXOzs7QUF1Qm5CLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBaUJuQkMsU0FqQm1CLEdBaUJQLFlBQWE7QUFBQSxVQUFaQyxHQUFZLHVFQUFOLENBQU07QUFBQSxVQUNmQyxLQURlLEdBQ0wsTUFBS0gsS0FEQSxDQUNmRyxLQURlOztBQUV2QixVQUFJQSxNQUFNQyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3hC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LEtBSFo7QUFJRSx5QkFBYSxPQUFLbUIsZUFBTCxDQUFxQkMsSUFBckI7QUFKZjtBQU1FO0FBQ0UsZ0JBQUlBLEtBQUtwQixLQURYO0FBRUUsdUJBQVdLLFNBRmI7QUFHRSxrQkFBTWUsSUFIUjtBQUlFLHNCQUFVLE9BQUtoQixZQUpqQjtBQUtFLHVCQUFXLE9BQUtRO0FBTGxCO0FBTkYsU0FERjtBQWdCRCxPQXBCQTtBQURILEtBREY7QUF5QkQsRzs7O0VBNUhzQyxnQkFBTWUsYSxVQWdCdENDLFksR0FBZTtBQUNwQnRCLGdCQUFjLHNCQURNO0FBRXBCaUIsYUFBVyxLQUZTO0FBR3BCaEIsWUFBVSxvQkFBTSxDQUFFLENBSEU7QUFJcEJKLGlCQUFlO0FBSkssQztrQkFoQkhqQixXIiwiZmlsZSI6Im11bHRpLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XHJcblxyXG5pbXBvcnQgS0VZX0NPREVTIGZyb20gJy4uL2NvbnN0YW50cy9rZXktY29kZXMuY29uc3RhbnQnO1xyXG5pbXBvcnQgTXVsdGlTZWxlY3RJdGVtIGZyb21cclxuICAnLi9tdWx0aS1zZWxlY3QtaXRlbS9tdWx0aS1zZWxlY3QtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vbXVsdGktc2VsZWN0LmNvbXBvbmVudC5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpU2VsZWN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGNoZWNrZWRJdGVtczogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXHJcbiAgICBpc0ZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIF0pLmlzUmVxdWlyZWQsXHJcbiAgICB9KSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uUGFyZW50Rm9jdXM6IFByb3BUeXBlcy5mdW5jLFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGVja2VkSXRlbXM6IExpc3QoKSxcclxuICAgIGlzRm9jdXNlZDogZmFsc2UsXHJcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICBvblBhcmVudEZvY3VzOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBmb2N1c2VkSW5kZXg6IC0xLCBmb2N1c2VkSXRlbTogbnVsbCB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIC8vIGZvY3VzIG9uIHRoZSBmaXJzdCBpdGVtIGlmIGEgcGFyZW50IGNvbXBvbmVudCBjYWxscyB0byBtb3ZlIGZvY3VzIG9uIGl0XHJcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKG5leHRQcm9wcy5pc0ZvY3VzZWQgJiYgIXRoaXMucHJvcHMuaXNGb2N1c2VkICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRJbmRleDogLTEsIGZvY3VzZWRJdGVtOiBudWxsIH0sICgpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbXNbMF0udmFsdWUpO1xyXG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLmZvY3VzSXRlbSgxKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c0l0ZW0gPSAoaW5jID0gMCkgPT4ge1xyXG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5zdGF0ZS5mb2N1c2VkSW5kZXggKyBpbmM7XHJcbiAgICBpZiAobmV3SW5kZXggPiAtMSAmJiBuZXdJbmRleCA8IGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEluZGV4OiBuZXdJbmRleCwgZm9jdXNlZEl0ZW06IGl0ZW1zW25ld0luZGV4XSB9KTtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtXyR7aXRlbXNbbmV3SW5kZXhdLnZhbHVlfWApO1xyXG4gICAgICBlbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPT09IC0xICYmIHRoaXMucHJvcHMub25QYXJlbnRGb2N1cykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uUGFyZW50Rm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSwgaXNDaGVja2VkKSA9PiB7XHJcbiAgICBjb25zdCB7IGNoZWNrZWRJdGVtcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB2YWx1ZUluZGV4ID0gY2hlY2tlZEl0ZW1zLmluZGV4T2YodmFsdWUpO1xyXG4gICAgaWYgKGlzQ2hlY2tlZCAmJiB2YWx1ZUluZGV4ID09PSAtMSkge1xyXG4gICAgICBvbkNoYW5nZShjaGVja2VkSXRlbXMucHVzaCh2YWx1ZSkpO1xyXG4gICAgfSBlbHNlIGlmICghaXNDaGVja2VkICYmIHZhbHVlSW5kZXggPiAtMSkge1xyXG4gICAgICBvbkNoYW5nZShjaGVja2VkSXRlbXMuZGVsZXRlSW4oW3ZhbHVlSW5kZXhdKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcclxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgS0VZX0NPREVTLkVOVEVSOlxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRJdGVtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCh0aGlzLnN0YXRlLmZvY3VzZWRJdGVtLnZhbHVlLCB0aGlzLnByb3BzLmNoZWNrZWRJdGVtcyk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh0aGlzLnN0YXRlLmZvY3VzZWRJdGVtLnZhbHVlLCAhaXNDaGVja2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgS0VZX0NPREVTLkRPV046XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNJdGVtKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEtFWV9DT0RFUy5VUDpcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW0oLTEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTW91c2VEb3duID0gaXRlbSA9PiAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMucHJvcHMuaXRlbXMuaW5kZXhPZihpdGVtKTtcclxuICAgIGlmIChuZXdJbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSW5kZXg6IG5ld0luZGV4LCBmb2N1c2VkSXRlbTogaXRlbSB9KTtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtXyR7aXRlbS52YWx1ZX1gKTtcclxuICAgICAgZWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNDaGVja2VkID0gKHZhbHVlLCBjaGVja2VkSXRlbXMpID0+IGNoZWNrZWRJdGVtcy5pbmRleE9mKHZhbHVlKSA+IC0xO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGl0ZW1zLCBjaGVja2VkSXRlbXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGZvY3VzZWRJdGVtIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1tdWx0aS1zZWxlY3RcIj5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZChpdGVtLnZhbHVlLCBjaGVja2VkSXRlbXMpO1xyXG4gICAgICAgICAgY29uc3QgaXNGb2N1c2VkID0gZm9jdXNlZEl0ZW0gIT09IG51bGwgJiYgZm9jdXNlZEl0ZW0udmFsdWUgPT09IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBpdGVtQ2xhc3MgPSBgb2MtbXVsdGktc2VsZWN0LWl0ZW0gJHtpc0ZvY3VzZWQgPyAnaXMtZm9jdXNlZCcgOiAnJ31gO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUNsYXNzfVxyXG4gICAgICAgICAgICAgIGlkPXtgaXRlbV8ke2l0ZW0udmFsdWV9YH1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlTW91c2VEb3duKGl0ZW0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE11bHRpU2VsZWN0SXRlbVxyXG4gICAgICAgICAgICAgICAgaWQ9e2l0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICBpc0NoZWNrZWQ9e2lzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19