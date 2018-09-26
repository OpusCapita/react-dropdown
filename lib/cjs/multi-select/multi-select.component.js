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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTXVsdGlTZWxlY3QiLCJwcm9wcyIsImZvY3VzSXRlbSIsImluYyIsIml0ZW1zIiwibGVuZ3RoIiwibmV3SW5kZXgiLCJzdGF0ZSIsImZvY3VzZWRJbmRleCIsInNldFN0YXRlIiwiZm9jdXNlZEl0ZW0iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZm9jdXMiLCJzY3JvbGxJbnRvVmlldyIsIm9uUGFyZW50Rm9jdXMiLCJoYW5kbGVDaGFuZ2UiLCJpc0NoZWNrZWQiLCJjaGVja2VkSXRlbXMiLCJvbkNoYW5nZSIsInZhbHVlSW5kZXgiLCJpbmRleE9mIiwicHVzaCIsImRlbGV0ZUluIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXlDb2RlIiwiRU5URVIiLCJET1dOIiwicHJldmVudERlZmF1bHQiLCJVUCIsImhhbmRsZU1vdXNlRG93biIsIml0ZW0iLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiaXNGb2N1c2VkIiwicmVuZGVyIiwibWFwIiwiaXRlbUNsYXNzIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7QUFDQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxXOzs7QUF1Qm5CLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBaUJuQkMsU0FqQm1CLEdBaUJQLFlBQWE7QUFBQSxVQUFaQyxHQUFZLHVFQUFOLENBQU07QUFBQSxVQUNmQyxLQURlLEdBQ0wsTUFBS0gsS0FEQSxDQUNmRyxLQURlOztBQUV2QixVQUFJQSxNQUFNQyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3hC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LEtBSFo7QUFJRSx5QkFBYSxPQUFLbUIsZUFBTCxDQUFxQkMsSUFBckI7QUFKZjtBQU1FO0FBQ0UsZ0JBQUlBLEtBQUtwQixLQURYO0FBRUUsdUJBQVdLLFNBRmI7QUFHRSxrQkFBTWUsSUFIUjtBQUlFLHNCQUFVLE9BQUtoQixZQUpqQjtBQUtFLHVCQUFXLE9BQUtRO0FBTGxCO0FBTkYsU0FERjtBQWdCRCxPQXBCQTtBQURILEtBREY7QUF5QkQsRzs7O0VBNUhzQyxnQkFBTWUsYSxVQWdCdENDLFksR0FBZTtBQUNwQnRCLGdCQUFjLHNCQURNO0FBRXBCaUIsYUFBVyxLQUZTO0FBR3BCaEIsWUFBVSxvQkFBTSxDQUFFLENBSEU7QUFJcEJKLGlCQUFlO0FBSkssQztrQkFoQkhqQixXIiwiZmlsZSI6Im11bHRpLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcblxuaW1wb3J0IEtFWV9DT0RFUyBmcm9tICcuLi9jb25zdGFudHMva2V5LWNvZGVzLmNvbnN0YW50JztcbmltcG9ydCBNdWx0aVNlbGVjdEl0ZW0gZnJvbVxuICAnLi9tdWx0aS1zZWxlY3QtaXRlbS9tdWx0aS1zZWxlY3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0ICcuL211bHRpLXNlbGVjdC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpU2VsZWN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hlY2tlZEl0ZW1zOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgICBpc0ZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBdKS5pc1JlcXVpcmVkLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblBhcmVudEZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWRJdGVtczogTGlzdCgpLFxuICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIG9uUGFyZW50Rm9jdXM6IG51bGwsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZm9jdXNlZEluZGV4OiAtMSwgZm9jdXNlZEl0ZW06IG51bGwgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgLy8gZm9jdXMgb24gdGhlIGZpcnN0IGl0ZW0gaWYgYSBwYXJlbnQgY29tcG9uZW50IGNhbGxzIHRvIG1vdmUgZm9jdXMgb24gaXRcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChuZXh0UHJvcHMuaXNGb2N1c2VkICYmICF0aGlzLnByb3BzLmlzRm9jdXNlZCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEluZGV4OiAtMSwgZm9jdXNlZEl0ZW06IG51bGwgfSwgKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbXNbMF0udmFsdWUpO1xuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHRoaXMuZm9jdXNJdGVtKDEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNJdGVtID0gKGluYyA9IDApID0+IHtcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuc3RhdGUuZm9jdXNlZEluZGV4ICsgaW5jO1xuICAgIGlmIChuZXdJbmRleCA+IC0xICYmIG5ld0luZGV4IDwgaXRlbXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEluZGV4OiBuZXdJbmRleCwgZm9jdXNlZEl0ZW06IGl0ZW1zW25ld0luZGV4XSB9KTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbV8ke2l0ZW1zW25ld0luZGV4XS52YWx1ZX1gKTtcbiAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAtMSAmJiB0aGlzLnByb3BzLm9uUGFyZW50Rm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25QYXJlbnRGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSwgaXNDaGVja2VkKSA9PiB7XG4gICAgY29uc3QgeyBjaGVja2VkSXRlbXMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlSW5kZXggPSBjaGVja2VkSXRlbXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGlzQ2hlY2tlZCAmJiB2YWx1ZUluZGV4ID09PSAtMSkge1xuICAgICAgb25DaGFuZ2UoY2hlY2tlZEl0ZW1zLnB1c2godmFsdWUpKTtcbiAgICB9IGVsc2UgaWYgKCFpc0NoZWNrZWQgJiYgdmFsdWVJbmRleCA+IC0xKSB7XG4gICAgICBvbkNoYW5nZShjaGVja2VkSXRlbXMuZGVsZXRlSW4oW3ZhbHVlSW5kZXhdKSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgS0VZX0NPREVTLkVOVEVSOlxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkSXRlbSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGlzQ2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkKHRoaXMuc3RhdGUuZm9jdXNlZEl0ZW0udmFsdWUsIHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSh0aGlzLnN0YXRlLmZvY3VzZWRJdGVtLnZhbHVlLCAhaXNDaGVja2VkKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZX0NPREVTLkRPV046XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW0oMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLRVlfQ09ERVMuVVA6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW0oLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdXNlRG93biA9IGl0ZW0gPT4gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5wcm9wcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChuZXdJbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZEluZGV4OiBuZXdJbmRleCwgZm9jdXNlZEl0ZW06IGl0ZW0gfSk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW1fJHtpdGVtLnZhbHVlfWApO1xuICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGlzQ2hlY2tlZCA9ICh2YWx1ZSwgY2hlY2tlZEl0ZW1zKSA9PiBjaGVja2VkSXRlbXMuaW5kZXhPZih2YWx1ZSkgPiAtMTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpdGVtcywgY2hlY2tlZEl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZm9jdXNlZEl0ZW0gfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtbXVsdGktc2VsZWN0XCI+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZChpdGVtLnZhbHVlLCBjaGVja2VkSXRlbXMpO1xuICAgICAgICAgIGNvbnN0IGlzRm9jdXNlZCA9IGZvY3VzZWRJdGVtICE9PSBudWxsICYmIGZvY3VzZWRJdGVtLnZhbHVlID09PSBpdGVtLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IGl0ZW1DbGFzcyA9IGBvYy1tdWx0aS1zZWxlY3QtaXRlbSAke2lzRm9jdXNlZCA/ICdpcy1mb2N1c2VkJyA6ICcnfWA7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtQ2xhc3N9XG4gICAgICAgICAgICAgIGlkPXtgaXRlbV8ke2l0ZW0udmFsdWV9YH1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd24oaXRlbSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNdWx0aVNlbGVjdEl0ZW1cbiAgICAgICAgICAgICAgICBpZD17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICBpc0NoZWNrZWQ9e2lzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19