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
import MultiSelectItem from './multi-select-item/multi-select-item.component.jsx';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJMaXN0IiwiSW1tdXRhYmxlUHJvcFR5cGVzIiwiS0VZX0NPREVTIiwiTXVsdGlTZWxlY3RJdGVtIiwiTXVsdGlTZWxlY3QiLCJwcm9wcyIsImZvY3VzSXRlbSIsImluYyIsIml0ZW1zIiwibGVuZ3RoIiwibmV3SW5kZXgiLCJzdGF0ZSIsImZvY3VzZWRJbmRleCIsInNldFN0YXRlIiwiZm9jdXNlZEl0ZW0iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZm9jdXMiLCJzY3JvbGxJbnRvVmlldyIsIm9uUGFyZW50Rm9jdXMiLCJoYW5kbGVDaGFuZ2UiLCJpc0NoZWNrZWQiLCJjaGVja2VkSXRlbXMiLCJvbkNoYW5nZSIsInZhbHVlSW5kZXgiLCJpbmRleE9mIiwicHVzaCIsImRlbGV0ZUluIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXlDb2RlIiwiRU5URVIiLCJET1dOIiwicHJldmVudERlZmF1bHQiLCJVUCIsImhhbmRsZU1vdXNlRG93biIsIml0ZW0iLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiaXNGb2N1c2VkIiwicmVuZGVyIiwibWFwIiwiaXRlbUNsYXNzIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFdBQXJCO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsMkJBQS9COztBQUVBLE9BQU9DLFNBQVAsTUFBc0IsaUNBQXRCO0FBQ0EsT0FBT0MsZUFBUCxNQUNFLHFEQURGO0FBRUEsT0FBTywrQkFBUDs7SUFFcUJDLFc7OztBQXVCbkIsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUEsVUFpQm5CQyxTQWpCbUIsR0FpQlAsWUFBYTtBQUFBLFVBQVpDLEdBQVksdUVBQU4sQ0FBTTtBQUFBLFVBQ2ZDLEtBRGUsR0FDTCxNQUFLSCxLQURBLENBQ2ZHLEtBRGU7O0FBRXZCLFVBQUlBLE1BQU1DLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDeEIsVUFBTUMsV0FBVyxNQUFLQyxLQUFMLENBQVdDLFlBQVgsR0FBMEJMLEdBQTNDO0FBQ0EsVUFBSUcsV0FBVyxDQUFDLENBQVosSUFBaUJBLFdBQVdGLE1BQU1DLE1BQXRDLEVBQThDO0FBQzVDLGNBQUtJLFFBQUwsQ0FBYyxFQUFFRCxjQUFjRixRQUFoQixFQUEwQkksYUFBYU4sTUFBTUUsUUFBTixDQUF2QyxFQUFkO0FBQ0EsWUFBTUssVUFBVUMsU0FBU0MsY0FBVCxXQUFnQ1QsTUFBTUUsUUFBTixFQUFnQlEsS0FBaEQsQ0FBaEI7QUFDQUgsZ0JBQVFJLEtBQVI7QUFDQUosZ0JBQVFLLGNBQVI7QUFDRCxPQUxELE1BS08sSUFBSVYsYUFBYSxDQUFDLENBQWQsSUFBbUIsTUFBS0wsS0FBTCxDQUFXZ0IsYUFBbEMsRUFBaUQ7QUFDdEQsY0FBS2hCLEtBQUwsQ0FBV2dCLGFBQVg7QUFDRDtBQUNGLEtBN0JrQjs7QUFBQSxVQStCbkJDLFlBL0JtQixHQStCSixVQUFDSixLQUFELEVBQVFLLFNBQVIsRUFBc0I7QUFBQSx3QkFDQSxNQUFLbEIsS0FETDtBQUFBLFVBQzNCbUIsWUFEMkIsZUFDM0JBLFlBRDJCO0FBQUEsVUFDYkMsUUFEYSxlQUNiQSxRQURhOztBQUVuQyxVQUFNQyxhQUFhRixhQUFhRyxPQUFiLENBQXFCVCxLQUFyQixDQUFuQjtBQUNBLFVBQUlLLGFBQWFHLGVBQWUsQ0FBQyxDQUFqQyxFQUFvQztBQUNsQ0QsaUJBQVNELGFBQWFJLElBQWIsQ0FBa0JWLEtBQWxCLENBQVQ7QUFDRCxPQUZELE1BRU8sSUFBSSxDQUFDSyxTQUFELElBQWNHLGFBQWEsQ0FBQyxDQUFoQyxFQUFtQztBQUN4Q0QsaUJBQVNELGFBQWFLLFFBQWIsQ0FBc0IsQ0FBQ0gsVUFBRCxDQUF0QixDQUFUO0FBQ0Q7QUFDRixLQXZDa0I7O0FBQUEsVUF5Q25CSSxhQXpDbUIsR0F5Q0gsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3JCLGNBQVFBLEVBQUVDLE9BQVY7QUFDRSxhQUFLOUIsVUFBVStCLEtBQWY7QUFDRSxjQUFJLE1BQUt0QixLQUFMLENBQVdHLFdBQVgsS0FBMkIsSUFBL0IsRUFBcUM7QUFDbkMsZ0JBQU1TLFlBQVksTUFBS0EsU0FBTCxDQUFlLE1BQUtaLEtBQUwsQ0FBV0csV0FBWCxDQUF1QkksS0FBdEMsRUFBNkMsTUFBS2IsS0FBTCxDQUFXbUIsWUFBeEQsQ0FBbEI7QUFDQSxrQkFBS0YsWUFBTCxDQUFrQixNQUFLWCxLQUFMLENBQVdHLFdBQVgsQ0FBdUJJLEtBQXpDLEVBQWdELENBQUNLLFNBQWpEO0FBQ0Q7QUFDRDtBQUNGLGFBQUtyQixVQUFVZ0MsSUFBZjtBQUNFSCxZQUFFSSxjQUFGO0FBQ0EsZ0JBQUs3QixTQUFMLENBQWUsQ0FBZjtBQUNBO0FBQ0YsYUFBS0osVUFBVWtDLEVBQWY7QUFDRUwsWUFBRUksY0FBRjtBQUNBLGdCQUFLN0IsU0FBTCxDQUFlLENBQUMsQ0FBaEI7QUFDQTtBQUNGO0FBQ0U7QUFoQko7QUFrQkQsS0E1RGtCOztBQUFBLFVBOERuQitCLGVBOURtQixHQThERDtBQUFBLGFBQVEsWUFBTTtBQUM5QixZQUFNM0IsV0FBVyxNQUFLTCxLQUFMLENBQVdHLEtBQVgsQ0FBaUJtQixPQUFqQixDQUF5QlcsSUFBekIsQ0FBakI7QUFDQSxZQUFJNUIsV0FBVyxDQUFDLENBQWhCLEVBQW1CO0FBQ2pCLGdCQUFLRyxRQUFMLENBQWMsRUFBRUQsY0FBY0YsUUFBaEIsRUFBMEJJLGFBQWF3QixJQUF2QyxFQUFkO0FBQ0EsY0FBTXZCLFVBQVVDLFNBQVNDLGNBQVQsV0FBZ0NxQixLQUFLcEIsS0FBckMsQ0FBaEI7QUFDQUgsa0JBQVFJLEtBQVI7QUFDRDtBQUNGLE9BUGlCO0FBQUEsS0E5REM7O0FBQUEsVUF1RW5CSSxTQXZFbUIsR0F1RVAsVUFBQ0wsS0FBRCxFQUFRTSxZQUFSO0FBQUEsYUFBeUJBLGFBQWFHLE9BQWIsQ0FBcUJULEtBQXJCLElBQThCLENBQUMsQ0FBeEQ7QUFBQSxLQXZFTzs7QUFFakIsVUFBS1AsS0FBTCxHQUFhLEVBQUVDLGNBQWMsQ0FBQyxDQUFqQixFQUFvQkUsYUFBYSxJQUFqQyxFQUFiO0FBRmlCO0FBR2xCOzt3QkFFRHlCLHlCLHNDQUEwQkMsUyxFQUFXO0FBQUE7O0FBQ25DO0FBRG1DLFFBRTNCaEMsS0FGMkIsR0FFakIsS0FBS0gsS0FGWSxDQUUzQkcsS0FGMkI7O0FBR25DLFFBQUlnQyxVQUFVQyxTQUFWLElBQXVCLENBQUMsS0FBS3BDLEtBQUwsQ0FBV29DLFNBQW5DLElBQWdEakMsTUFBTUMsTUFBTixHQUFlLENBQW5FLEVBQXNFO0FBQ3BFLFdBQUtJLFFBQUwsQ0FBYyxFQUFFRCxjQUFjLENBQUMsQ0FBakIsRUFBb0JFLGFBQWEsSUFBakMsRUFBZCxFQUF1RCxZQUFNO0FBQzNELFlBQU1DLFVBQVVDLFNBQVNDLGNBQVQsQ0FBd0JULE1BQU0sQ0FBTixFQUFTVSxLQUFqQyxDQUFoQjtBQUNBSCxnQkFBUUksS0FBUjtBQUNBLGVBQUtiLFNBQUwsQ0FBZSxDQUFmO0FBQ0QsT0FKRDtBQUtEO0FBQ0YsRzs7d0JBMEREb0MsTSxxQkFBUztBQUFBOztBQUFBLGlCQUN5QixLQUFLckMsS0FEOUI7QUFBQSxRQUNDRyxLQURELFVBQ0NBLEtBREQ7QUFBQSxRQUNRZ0IsWUFEUixVQUNRQSxZQURSO0FBQUEsUUFFQ1YsV0FGRCxHQUVpQixLQUFLSCxLQUZ0QixDQUVDRyxXQUZEOztBQUdQLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxpQkFBZjtBQUNHTixZQUFNbUMsR0FBTixDQUFVLFVBQUNMLElBQUQsRUFBVTtBQUNuQixZQUFNZixZQUFZLE9BQUtBLFNBQUwsQ0FBZWUsS0FBS3BCLEtBQXBCLEVBQTJCTSxZQUEzQixDQUFsQjtBQUNBLFlBQU1pQixZQUFZM0IsZ0JBQWdCLElBQWhCLElBQXdCQSxZQUFZSSxLQUFaLEtBQXNCb0IsS0FBS3BCLEtBQXJFO0FBQ0EsWUFBTTBCLHVDQUFvQ0gsWUFBWSxZQUFaLEdBQTJCLEVBQS9ELENBQU47QUFDQSxlQUNFO0FBQUE7QUFBQTtBQUNFLHVCQUFXRyxTQURiO0FBRUUsMEJBQVlOLEtBQUtwQixLQUZuQjtBQUdFLGlCQUFLb0IsS0FBS3BCLEtBSFo7QUFJRSx5QkFBYSxPQUFLbUIsZUFBTCxDQUFxQkMsSUFBckI7QUFKZjtBQU1FLDhCQUFDLGVBQUQ7QUFDRSxnQkFBSUEsS0FBS3BCLEtBRFg7QUFFRSx1QkFBV0ssU0FGYjtBQUdFLGtCQUFNZSxJQUhSO0FBSUUsc0JBQVUsT0FBS2hCLFlBSmpCO0FBS0UsdUJBQVcsT0FBS1E7QUFMbEI7QUFORixTQURGO0FBZ0JELE9BcEJBO0FBREgsS0FERjtBQXlCRCxHOzs7RUE1SHNDaEMsTUFBTStDLGEsVUFnQnRDQyxZLEdBQWU7QUFDcEJ0QixnQkFBY3hCLE1BRE07QUFFcEJ5QyxhQUFXLEtBRlM7QUFHcEJoQixZQUFVLG9CQUFNLENBQUUsQ0FIRTtBQUlwQkosaUJBQWU7QUFKSyxDO1NBaEJIakIsVyIsImZpbGUiOiJtdWx0aS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5cbmltcG9ydCBLRVlfQ09ERVMgZnJvbSAnLi4vY29uc3RhbnRzL2tleS1jb2Rlcy5jb25zdGFudCc7XG5pbXBvcnQgTXVsdGlTZWxlY3RJdGVtIGZyb21cbiAgJy4vbXVsdGktc2VsZWN0LWl0ZW0vbXVsdGktc2VsZWN0LWl0ZW0uY29tcG9uZW50LmpzeCc7XG5pbXBvcnQgJy4vbXVsdGktc2VsZWN0LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlTZWxlY3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGVja2VkSXRlbXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIGlzRm9jdXNlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgfSkpLmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUGFyZW50Rm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZEl0ZW1zOiBMaXN0KCksXG4gICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgb25QYXJlbnRGb2N1czogbnVsbCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBmb2N1c2VkSW5kZXg6IC0xLCBmb2N1c2VkSXRlbTogbnVsbCB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAvLyBmb2N1cyBvbiB0aGUgZmlyc3QgaXRlbSBpZiBhIHBhcmVudCBjb21wb25lbnQgY2FsbHMgdG8gbW92ZSBmb2N1cyBvbiBpdFxuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG5leHRQcm9wcy5pc0ZvY3VzZWQgJiYgIXRoaXMucHJvcHMuaXNGb2N1c2VkICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSW5kZXg6IC0xLCBmb2N1c2VkSXRlbTogbnVsbCB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtc1swXS52YWx1ZSk7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW0oMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmb2N1c0l0ZW0gPSAoaW5jID0gMCkgPT4ge1xuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5zdGF0ZS5mb2N1c2VkSW5kZXggKyBpbmM7XG4gICAgaWYgKG5ld0luZGV4ID4gLTEgJiYgbmV3SW5kZXggPCBpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSW5kZXg6IG5ld0luZGV4LCBmb2N1c2VkSXRlbTogaXRlbXNbbmV3SW5kZXhdIH0pO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpdGVtXyR7aXRlbXNbbmV3SW5kZXhdLnZhbHVlfWApO1xuICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPT09IC0xICYmIHRoaXMucHJvcHMub25QYXJlbnRGb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5vblBhcmVudEZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKHZhbHVlLCBpc0NoZWNrZWQpID0+IHtcbiAgICBjb25zdCB7IGNoZWNrZWRJdGVtcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWVJbmRleCA9IGNoZWNrZWRJdGVtcy5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoaXNDaGVja2VkICYmIHZhbHVlSW5kZXggPT09IC0xKSB7XG4gICAgICBvbkNoYW5nZShjaGVja2VkSXRlbXMucHVzaCh2YWx1ZSkpO1xuICAgIH0gZWxzZSBpZiAoIWlzQ2hlY2tlZCAmJiB2YWx1ZUluZGV4ID4gLTEpIHtcbiAgICAgIG9uQ2hhbmdlKGNoZWNrZWRJdGVtcy5kZWxldGVJbihbdmFsdWVJbmRleF0pKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSBLRVlfQ09ERVMuRU5URVI6XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRJdGVtICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgaXNDaGVja2VkID0gdGhpcy5pc0NoZWNrZWQodGhpcy5zdGF0ZS5mb2N1c2VkSXRlbS52YWx1ZSwgdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHRoaXMuc3RhdGUuZm9jdXNlZEl0ZW0udmFsdWUsICFpc0NoZWNrZWQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLRVlfQ09ERVMuRE9XTjpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzSXRlbSgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtFWV9DT0RFUy5VUDpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzSXRlbSgtMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW91c2VEb3duID0gaXRlbSA9PiAoKSA9PiB7XG4gICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLnByb3BzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKG5ld0luZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSW5kZXg6IG5ld0luZGV4LCBmb2N1c2VkSXRlbTogaXRlbSB9KTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaXRlbV8ke2l0ZW0udmFsdWV9YCk7XG4gICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgaXNDaGVja2VkID0gKHZhbHVlLCBjaGVja2VkSXRlbXMpID0+IGNoZWNrZWRJdGVtcy5pbmRleE9mKHZhbHVlKSA+IC0xO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW1zLCBjaGVja2VkSXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmb2N1c2VkSXRlbSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1tdWx0aS1zZWxlY3RcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzQ2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkKGl0ZW0udmFsdWUsIGNoZWNrZWRJdGVtcyk7XG4gICAgICAgICAgY29uc3QgaXNGb2N1c2VkID0gZm9jdXNlZEl0ZW0gIT09IG51bGwgJiYgZm9jdXNlZEl0ZW0udmFsdWUgPT09IGl0ZW0udmFsdWU7XG4gICAgICAgICAgY29uc3QgaXRlbUNsYXNzID0gYG9jLW11bHRpLXNlbGVjdC1pdGVtICR7aXNGb2N1c2VkID8gJ2lzLWZvY3VzZWQnIDogJyd9YDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW1DbGFzc31cbiAgICAgICAgICAgICAgaWQ9e2BpdGVtXyR7aXRlbS52YWx1ZX1gfVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bihpdGVtKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE11bHRpU2VsZWN0SXRlbVxuICAgICAgICAgICAgICAgIGlkPXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17aXNDaGVja2VkfVxuICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=