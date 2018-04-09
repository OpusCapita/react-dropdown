var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/extensions */

import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';

import KEY_CODES from '../constants/key-codes.constant';
import DropdownContainer from '../dropdown-container/dropdown-container.component';
import MultiSelect from '../multi-select/multi-select.component';
import TitleInput from './title-input/title-input.component';
import './dropdown-multi-select.component.scss';

var DropdownMultiSelect = (_temp = _class = function (_React$PureComponent) {
  _inherits(DropdownMultiSelect, _React$PureComponent);

  function DropdownMultiSelect(props) {
    _classCallCheck(this, DropdownMultiSelect);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.getPlaceholder = function (checkedItems, items, defaultPlaceholder) {
      if (checkedItems.size === 0 || checkedItems.size > 1) {
        return defaultPlaceholder.replace('{N}', checkedItems.size);
      }
      if (checkedItems.size === 1) {
        var index = items.findIndex(function (i) {
          return i.value === checkedItems.get(0);
        });
        if (index > -1) {
          return items[index].labelPlaceholder !== undefined ? items[index].labelPlaceholder : items[index].label;
        }
      }
      return defaultPlaceholder.replace('{N}', '1');
    };

    _this.setFilter = function (e) {
      var filterValue = e.target.value;
      if (filterValue !== '' && !_this.state.isOpen) {
        _this.setState({ filterValue: filterValue, isOpen: true });
      } else {
        _this.setState({ filterValue: filterValue });
      }
    };

    _this.blurInput = function () {
      _this.handleToggle(true);
      if (_this.props.items.length > 0) {
        document.activeElement.blur();
        _this.setState({ isFocusOnChild: true });
      }
    };

    _this.filterItems = function (items) {
      var filterValue = _this.state.filterValue.replace(/\s/g, '').toLowerCase();
      return items.filter(function (i) {
        return i.label.replace(/\s/g, '').toLowerCase().match(filterValue) !== null;
      });
    };

    _this.focusInput = function () {
      _this.handleToggle(false);
      var element = document.getElementById('input_' + _this.props.id);
      element.focus();
    };

    _this.handleClear = function () {
      _this.preventToggle = true;
      if (_this.props.checkedItems.size > 0) {
        _this.props.onChange(List());
      }
    };

    _this.handleKeyDown = function (e) {
      if (e.keyCode === KEY_CODES.DOWN) {
        _this.blurInput();
      }
    };

    _this.handleToggle = function (isOpen) {
      if (_this.preventToggle) {
        _this.preventToggle = false;
      } else if (!isOpen && _this.state.filterValue !== '') {
        _this.setState({ isOpen: isOpen, isFocusOnChild: isOpen, filterValue: '' });
      } else if (!isOpen) {
        _this.setState({ isOpen: isOpen, isFocusOnChild: isOpen });
      } else {
        _this.setState({ isOpen: isOpen });
      }
    };

    _this.state = { isOpen: false, isFocusOnChild: false, filterValue: '' };
    _this.preventToggle = false;
    return _this;
  }

  DropdownMultiSelect.prototype.render = function render() {
    var _props = this.props,
        id = _props.id,
        items = _props.items,
        checkedItems = _props.checkedItems,
        onChange = _props.onChange,
        defaultPlaceholder = _props.defaultPlaceholder,
        tabIndex = _props.tabIndex,
        otherProps = _objectWithoutProperties(_props, ['id', 'items', 'checkedItems', 'onChange', 'defaultPlaceholder', 'tabIndex']);

    var input = React.createElement(FormControl, {
      className: 'oc-input-group-input',
      id: 'input_' + id,
      placeholder: this.getPlaceholder(checkedItems, items, defaultPlaceholder),
      onChange: this.setFilter,
      onMouseDown: this.focusInput,
      onKeyDown: this.handleKeyDown,
      tabIndex: tabIndex,
      type: 'text',
      value: this.state.filterValue
    });
    var title = React.createElement(TitleInput, {
      input: input,
      onClear: this.handleClear
    });
    var filteredItems = this.state.filterValue === '' ? items : this.filterItems(items);
    return React.createElement(
      'div',
      { className: 'oc-dropdown-multi-select' },
      React.createElement(
        DropdownContainer,
        _extends({
          id: id,
          isOpen: this.state.isOpen,
          noCaret: true,
          onToggle: this.handleToggle,
          title: title,
          useAnchor: true
        }, otherProps),
        React.createElement(MultiSelect, {
          checkedItems: checkedItems,
          items: filteredItems,
          isFocused: this.state.isFocusOnChild,
          onChange: onChange,
          onParentFocus: this.focusInput
        })
      )
    );
  };

  return DropdownMultiSelect;
}(React.PureComponent), _class.defaultProps = {
  checkedItems: List(),
  defaultPlaceholder: '{N} items selected',
  onChange: function onChange() {},
  tabIndex: 1
}, _temp);
export { DropdownMultiSelect as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtQ29udHJvbCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkxpc3QiLCJLRVlfQ09ERVMiLCJEcm9wZG93bkNvbnRhaW5lciIsIk11bHRpU2VsZWN0IiwiVGl0bGVJbnB1dCIsIkRyb3Bkb3duTXVsdGlTZWxlY3QiLCJwcm9wcyIsImdldFBsYWNlaG9sZGVyIiwiY2hlY2tlZEl0ZW1zIiwiaXRlbXMiLCJkZWZhdWx0UGxhY2Vob2xkZXIiLCJzaXplIiwicmVwbGFjZSIsImluZGV4IiwiZmluZEluZGV4IiwiaSIsInZhbHVlIiwiZ2V0IiwibGFiZWxQbGFjZWhvbGRlciIsInVuZGVmaW5lZCIsImxhYmVsIiwic2V0RmlsdGVyIiwiZSIsImZpbHRlclZhbHVlIiwidGFyZ2V0Iiwic3RhdGUiLCJpc09wZW4iLCJzZXRTdGF0ZSIsImJsdXJJbnB1dCIsImhhbmRsZVRvZ2dsZSIsImxlbmd0aCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJpc0ZvY3VzT25DaGlsZCIsImZpbHRlckl0ZW1zIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJtYXRjaCIsImZvY3VzSW5wdXQiLCJlbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsImZvY3VzIiwiaGFuZGxlQ2xlYXIiLCJwcmV2ZW50VG9nZ2xlIiwib25DaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsIkRPV04iLCJyZW5kZXIiLCJ0YWJJbmRleCIsIm90aGVyUHJvcHMiLCJpbnB1dCIsInRpdGxlIiwiZmlsdGVyZWRJdGVtcyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxP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VDtBQUdFLHFCQUFXLEtBQUs5QixLQUFMLENBQVdTLGNBSHhCO0FBSUUsb0JBQVVZLFFBSlo7QUFLRSx5QkFBZSxLQUFLUDtBQUx0QjtBQVRGO0FBREYsS0FERjtBQXFCRCxHOzs7RUFySjhDM0MsTUFBTTRELGEsVUFrQjlDQyxZLEdBQWU7QUFDcEJqRCxnQkFBY1IsTUFETTtBQUVwQlUsc0JBQW9CLG9CQUZBO0FBR3BCb0MsWUFBVSxvQkFBTSxDQUFFLENBSEU7QUFJcEJLLFlBQVU7QUFKVSxDO1NBbEJIOUMsbUIiLCJmaWxlIjoiZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xyXG5cclxuaW1wb3J0IEtFWV9DT0RFUyBmcm9tICcuLi9jb25zdGFudHMva2V5LWNvZGVzLmNvbnN0YW50JztcclxuaW1wb3J0IERyb3Bkb3duQ29udGFpbmVyIGZyb20gJy4uL2Ryb3Bkb3duLWNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IE11bHRpU2VsZWN0IGZyb20gJy4uL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IFRpdGxlSW5wdXQgZnJvbSAnLi90aXRsZS1pbnB1dC90aXRsZS1pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duTXVsdGlTZWxlY3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgY2hlY2tlZEl0ZW1zOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcclxuICAgIGRlZmF1bHRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBsYWJlbFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBdKS5pc1JlcXVpcmVkLFxyXG4gICAgfSkpLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGVja2VkSXRlbXM6IExpc3QoKSxcclxuICAgIGRlZmF1bHRQbGFjZWhvbGRlcjogJ3tOfSBpdGVtcyBzZWxlY3RlZCcsXHJcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICB0YWJJbmRleDogMSxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNPcGVuOiBmYWxzZSwgaXNGb2N1c09uQ2hpbGQ6IGZhbHNlLCBmaWx0ZXJWYWx1ZTogJycgfTtcclxuICAgIHRoaXMucHJldmVudFRvZ2dsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxhY2Vob2xkZXIgPSAoY2hlY2tlZEl0ZW1zLCBpdGVtcywgZGVmYXVsdFBsYWNlaG9sZGVyKSA9PiB7XHJcbiAgICBpZiAoY2hlY2tlZEl0ZW1zLnNpemUgPT09IDAgfHwgY2hlY2tlZEl0ZW1zLnNpemUgPiAxKSB7XHJcbiAgICAgIHJldHVybiBkZWZhdWx0UGxhY2Vob2xkZXIucmVwbGFjZSgne059JywgY2hlY2tlZEl0ZW1zLnNpemUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoZWNrZWRJdGVtcy5zaXplID09PSAxKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KGkgPT4gaS52YWx1ZSA9PT0gY2hlY2tlZEl0ZW1zLmdldCgwKSk7XHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zW2luZGV4XS5sYWJlbFBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgaXRlbXNbaW5kZXhdLmxhYmVsUGxhY2Vob2xkZXIgOiBpdGVtc1tpbmRleF0ubGFiZWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkZWZhdWx0UGxhY2Vob2xkZXIucmVwbGFjZSgne059JywgJzEnKTtcclxuICB9XHJcblxyXG4gIHNldEZpbHRlciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKGZpbHRlclZhbHVlICE9PSAnJyAmJiAhdGhpcy5zdGF0ZS5pc09wZW4pIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlclZhbHVlLCBpc09wZW46IHRydWUgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyVmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBibHVySW5wdXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZSh0cnVlKTtcclxuICAgIGlmICh0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzT25DaGlsZDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlckl0ZW1zID0gKGl0ZW1zKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUucmVwbGFjZSgvXFxzL2csICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpID0+IGkubGFiZWwucmVwbGFjZSgvXFxzL2csICcnKS50b0xvd2VyQ2FzZSgpLm1hdGNoKGZpbHRlclZhbHVlKSAhPT0gbnVsbCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0lucHV0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5oYW5kbGVUb2dnbGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnB1dF8ke3RoaXMucHJvcHMuaWR9YCk7XHJcbiAgICBlbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGVhciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJldmVudFRvZ2dsZSA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMuc2l6ZSA+IDApIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShMaXN0KCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlfQ09ERVMuRE9XTikge1xyXG4gICAgICB0aGlzLmJsdXJJbnB1dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlVG9nZ2xlID0gKGlzT3BlbikgPT4ge1xyXG4gICAgaWYgKHRoaXMucHJldmVudFRvZ2dsZSkge1xyXG4gICAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIWlzT3BlbiAmJiB0aGlzLnN0YXRlLmZpbHRlclZhbHVlICE9PSAnJykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuLCBpc0ZvY3VzT25DaGlsZDogaXNPcGVuLCBmaWx0ZXJWYWx1ZTogJycgfSk7XHJcbiAgICB9IGVsc2UgaWYgKCFpc09wZW4pIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbiwgaXNGb2N1c09uQ2hpbGQ6IGlzT3BlbiB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGlkLFxyXG4gICAgICBpdGVtcyxcclxuICAgICAgY2hlY2tlZEl0ZW1zLFxyXG4gICAgICBvbkNoYW5nZSxcclxuICAgICAgZGVmYXVsdFBsYWNlaG9sZGVyLFxyXG4gICAgICB0YWJJbmRleCxcclxuICAgICAgLi4ub3RoZXJQcm9wc1xyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBpbnB1dCA9IChcclxuICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgY2xhc3NOYW1lPVwib2MtaW5wdXQtZ3JvdXAtaW5wdXRcIlxyXG4gICAgICAgIGlkPXtgaW5wdXRfJHtpZH1gfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLmdldFBsYWNlaG9sZGVyKGNoZWNrZWRJdGVtcywgaXRlbXMsIGRlZmF1bHRQbGFjZWhvbGRlcil9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0RmlsdGVyfVxyXG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmZvY3VzSW5wdXR9XHJcbiAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XHJcbiAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgICBjb25zdCB0aXRsZSA9IChcclxuICAgICAgPFRpdGxlSW5wdXRcclxuICAgICAgICBpbnB1dD17aW5wdXR9XHJcbiAgICAgICAgb25DbGVhcj17dGhpcy5oYW5kbGVDbGVhcn1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZSA9PT0gJycgPyBpdGVtcyA6IHRoaXMuZmlsdGVySXRlbXMoaXRlbXMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1kcm9wZG93bi1tdWx0aS1zZWxlY3RcIj5cclxuICAgICAgICA8RHJvcGRvd25Db250YWluZXJcclxuICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XHJcbiAgICAgICAgICBub0NhcmV0XHJcbiAgICAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XHJcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICB1c2VBbmNob3JcclxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNdWx0aVNlbGVjdFxyXG4gICAgICAgICAgICBjaGVja2VkSXRlbXM9e2NoZWNrZWRJdGVtc31cclxuICAgICAgICAgICAgaXRlbXM9e2ZpbHRlcmVkSXRlbXN9XHJcbiAgICAgICAgICAgIGlzRm9jdXNlZD17dGhpcy5zdGF0ZS5pc0ZvY3VzT25DaGlsZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICBvblBhcmVudEZvY3VzPXt0aGlzLmZvY3VzSW5wdXR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRHJvcGRvd25Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19