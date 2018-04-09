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
import TitleInput from './title-input/title-input.component.jsx';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtQ29udHJvbCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkxpc3QiLCJLRVlfQ09ERVMiLCJEcm9wZG93bkNvbnRhaW5lciIsIk11bHRpU2VsZWN0IiwiVGl0bGVJbnB1dCIsIkRyb3Bkb3duTXVsdGlTZWxlY3QiLCJwcm9wcyIsImdldFBsYWNlaG9sZGVyIiwiY2hlY2tlZEl0ZW1zIiwiaXRlbXMiLCJkZWZhdWx0UGxhY2Vob2xkZXIiLCJzaXplIiwicmVwbGFjZSIsImluZGV4IiwiZmluZEluZGV4IiwiaSIsInZhbHVlIiwiZ2V0IiwibGFiZWxQbGFjZWhvbGRlciIsInVuZGVmaW5lZCIsImxhYmVsIiwic2V0RmlsdGVyIiwiZSIsImZpbHRlclZhbHVlIiwidGFyZ2V0Iiwic3RhdGUiLCJpc09wZW4iLCJzZXRTdGF0ZSIsImJsdXJJbnB1dCIsImhhbmRsZVRvZ2dsZSIsImxlbmd0aCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJpc0ZvY3VzT25DaGlsZCIsImZpbHRlckl0ZW1zIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJtYXRjaCIsImZvY3VzSW5wdXQiLCJlbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsImZvY3VzIiwiaGFuZGxlQ2xlYXIiLCJwcmV2ZW50VG9nZ2xlIiwib25DaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsIkRPV04iLCJyZW5kZXIiLCJ0YWJJbmRleCIsIm90aGVyUHJvcHMiLCJpbnB1dCIsInRpdGxlIiwiZmlsdGVyZWRJdGVtcyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxP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VDtBQUdFLHFCQUFXLEtBQUs5QixLQUFMLENBQVdTLGNBSHhCO0FBSUUsb0JBQVVZLFFBSlo7QUFLRSx5QkFBZSxLQUFLUDtBQUx0QjtBQVRGO0FBREYsS0FERjtBQXFCRCxHOzs7RUFySjhDM0MsTUFBTTRELGEsVUFrQjlDQyxZLEdBQWU7QUFDcEJqRCxnQkFBY1IsTUFETTtBQUVwQlUsc0JBQW9CLG9CQUZBO0FBR3BCb0MsWUFBVSxvQkFBTSxDQUFFLENBSEU7QUFJcEJLLFlBQVU7QUFKVSxDO1NBbEJIOUMsbUIiLCJmaWxlIjoiZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgS0VZX0NPREVTIGZyb20gJy4uL2NvbnN0YW50cy9rZXktY29kZXMuY29uc3RhbnQnO1xuaW1wb3J0IERyb3Bkb3duQ29udGFpbmVyIGZyb20gJy4uL2Ryb3Bkb3duLWNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBNdWx0aVNlbGVjdCBmcm9tICcuLi9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgVGl0bGVJbnB1dCBmcm9tICcuL3RpdGxlLWlucHV0L3RpdGxlLWlucHV0LmNvbXBvbmVudC5qc3gnO1xuaW1wb3J0ICcuL2Ryb3Bkb3duLW11bHRpLXNlbGVjdC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duTXVsdGlTZWxlY3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGVja2VkSXRlbXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIGRlZmF1bHRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGFiZWxQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBdKS5pc1JlcXVpcmVkLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZEl0ZW1zOiBMaXN0KCksXG4gICAgZGVmYXVsdFBsYWNlaG9sZGVyOiAne059IGl0ZW1zIHNlbGVjdGVkJyxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgdGFiSW5kZXg6IDEsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNPcGVuOiBmYWxzZSwgaXNGb2N1c09uQ2hpbGQ6IGZhbHNlLCBmaWx0ZXJWYWx1ZTogJycgfTtcbiAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyID0gKGNoZWNrZWRJdGVtcywgaXRlbXMsIGRlZmF1bHRQbGFjZWhvbGRlcikgPT4ge1xuICAgIGlmIChjaGVja2VkSXRlbXMuc2l6ZSA9PT0gMCB8fCBjaGVja2VkSXRlbXMuc2l6ZSA+IDEpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0UGxhY2Vob2xkZXIucmVwbGFjZSgne059JywgY2hlY2tlZEl0ZW1zLnNpemUpO1xuICAgIH1cbiAgICBpZiAoY2hlY2tlZEl0ZW1zLnNpemUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KGkgPT4gaS52YWx1ZSA9PT0gY2hlY2tlZEl0ZW1zLmdldCgwKSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICByZXR1cm4gaXRlbXNbaW5kZXhdLmxhYmVsUGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgaXRlbXNbaW5kZXhdLmxhYmVsUGxhY2Vob2xkZXIgOiBpdGVtc1tpbmRleF0ubGFiZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0UGxhY2Vob2xkZXIucmVwbGFjZSgne059JywgJzEnKTtcbiAgfVxuXG4gIHNldEZpbHRlciA9IChlKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAoZmlsdGVyVmFsdWUgIT09ICcnICYmICF0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlclZhbHVlLCBpc09wZW46IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJWYWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBibHVySW5wdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGUodHJ1ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c09uQ2hpbGQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVySXRlbXMgPSAoaXRlbXMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUucmVwbGFjZSgvXFxzL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaSA9PiBpLmxhYmVsLnJlcGxhY2UoL1xccy9nLCAnJykudG9Mb3dlckNhc2UoKS5tYXRjaChmaWx0ZXJWYWx1ZSkgIT09IG51bGwpO1xuICB9XG5cbiAgZm9jdXNJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZShmYWxzZSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnB1dF8ke3RoaXMucHJvcHMuaWR9YCk7XG4gICAgZWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMuc2l6ZSA+IDApIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoTGlzdCgpKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlfQ09ERVMuRE9XTikge1xuICAgICAgdGhpcy5ibHVySW5wdXQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUb2dnbGUgPSAoaXNPcGVuKSA9PiB7XG4gICAgaWYgKHRoaXMucHJldmVudFRvZ2dsZSkge1xuICAgICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghaXNPcGVuICYmIHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUgIT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuLCBpc0ZvY3VzT25DaGlsZDogaXNPcGVuLCBmaWx0ZXJWYWx1ZTogJycgfSk7XG4gICAgfSBlbHNlIGlmICghaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuLCBpc0ZvY3VzT25DaGlsZDogaXNPcGVuIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGl0ZW1zLFxuICAgICAgY2hlY2tlZEl0ZW1zLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBkZWZhdWx0UGxhY2Vob2xkZXIsXG4gICAgICB0YWJJbmRleCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dCA9IChcbiAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICBjbGFzc05hbWU9XCJvYy1pbnB1dC1ncm91cC1pbnB1dFwiXG4gICAgICAgIGlkPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5nZXRQbGFjZWhvbGRlcihjaGVja2VkSXRlbXMsIGl0ZW1zLCBkZWZhdWx0UGxhY2Vob2xkZXIpfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXRGaWx0ZXJ9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmZvY3VzSW5wdXR9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyVmFsdWV9XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgdGl0bGUgPSAoXG4gICAgICA8VGl0bGVJbnB1dFxuICAgICAgICBpbnB1dD17aW5wdXR9XG4gICAgICAgIG9uQ2xlYXI9e3RoaXMuaGFuZGxlQ2xlYXJ9XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUgPT09ICcnID8gaXRlbXMgOiB0aGlzLmZpbHRlckl0ZW1zKGl0ZW1zKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1kcm9wZG93bi1tdWx0aS1zZWxlY3RcIj5cbiAgICAgICAgPERyb3Bkb3duQ29udGFpbmVyXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgbm9DYXJldFxuICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgdXNlQW5jaG9yXG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgICAgIGNoZWNrZWRJdGVtcz17Y2hlY2tlZEl0ZW1zfVxuICAgICAgICAgICAgaXRlbXM9e2ZpbHRlcmVkSXRlbXN9XG4gICAgICAgICAgICBpc0ZvY3VzZWQ9e3RoaXMuc3RhdGUuaXNGb2N1c09uQ2hpbGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBvblBhcmVudEZvY3VzPXt0aGlzLmZvY3VzSW5wdXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Ecm9wZG93bkNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==