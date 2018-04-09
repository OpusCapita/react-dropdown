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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtQ29udHJvbCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkxpc3QiLCJLRVlfQ09ERVMiLCJEcm9wZG93bkNvbnRhaW5lciIsIk11bHRpU2VsZWN0IiwiVGl0bGVJbnB1dCIsIkRyb3Bkb3duTXVsdGlTZWxlY3QiLCJwcm9wcyIsImdldFBsYWNlaG9sZGVyIiwiY2hlY2tlZEl0ZW1zIiwiaXRlbXMiLCJkZWZhdWx0UGxhY2Vob2xkZXIiLCJzaXplIiwicmVwbGFjZSIsImluZGV4IiwiZmluZEluZGV4IiwiaSIsInZhbHVlIiwiZ2V0IiwibGFiZWxQbGFjZWhvbGRlciIsInVuZGVmaW5lZCIsImxhYmVsIiwic2V0RmlsdGVyIiwiZSIsImZpbHRlclZhbHVlIiwidGFyZ2V0Iiwic3RhdGUiLCJpc09wZW4iLCJzZXRTdGF0ZSIsImJsdXJJbnB1dCIsImhhbmRsZVRvZ2dsZSIsImxlbmd0aCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJpc0ZvY3VzT25DaGlsZCIsImZpbHRlckl0ZW1zIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJtYXRjaCIsImZvY3VzSW5wdXQiLCJlbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsImZvY3VzIiwiaGFuZGxlQ2xlYXIiLCJwcmV2ZW50VG9nZ2xlIiwib25DaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsIkRPV04iLCJyZW5kZXIiLCJ0YWJJbmRleCIsIm90aGVyUHJvcHMiLCJpbnB1dCIsInRpdGxlIiwiZmlsdGVyZWRJdGVtcyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxP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VDtBQUdFLHFCQUFXLEtBQUs5QixLQUFMLENBQVdTLGNBSHhCO0FBSUUsb0JBQVVZLFFBSlo7QUFLRSx5QkFBZSxLQUFLUDtBQUx0QjtBQVRGO0FBREYsS0FERjtBQXFCRCxHOzs7RUFySjhDM0MsTUFBTTRELGEsVUFrQjlDQyxZLEdBQWU7QUFDcEJqRCxnQkFBY1IsTUFETTtBQUVwQlUsc0JBQW9CLG9CQUZBO0FBR3BCb0MsWUFBVSxvQkFBTSxDQUFFLENBSEU7QUFJcEJLLFlBQVU7QUFKVSxDO1NBbEJIOUMsbUIiLCJmaWxlIjoiZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgS0VZX0NPREVTIGZyb20gJy4uL2NvbnN0YW50cy9rZXktY29kZXMuY29uc3RhbnQnO1xuaW1wb3J0IERyb3Bkb3duQ29udGFpbmVyIGZyb20gJy4uL2Ryb3Bkb3duLWNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBNdWx0aVNlbGVjdCBmcm9tICcuLi9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgVGl0bGVJbnB1dCBmcm9tICcuL3RpdGxlLWlucHV0L3RpdGxlLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25NdWx0aVNlbGVjdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoZWNrZWRJdGVtczogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXG4gICAgZGVmYXVsdFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsYWJlbFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgfSkpLmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkSXRlbXM6IExpc3QoKSxcbiAgICBkZWZhdWx0UGxhY2Vob2xkZXI6ICd7Tn0gaXRlbXMgc2VsZWN0ZWQnLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICB0YWJJbmRleDogMSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpc09wZW46IGZhbHNlLCBpc0ZvY3VzT25DaGlsZDogZmFsc2UsIGZpbHRlclZhbHVlOiAnJyB9O1xuICAgIHRoaXMucHJldmVudFRvZ2dsZSA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0UGxhY2Vob2xkZXIgPSAoY2hlY2tlZEl0ZW1zLCBpdGVtcywgZGVmYXVsdFBsYWNlaG9sZGVyKSA9PiB7XG4gICAgaWYgKGNoZWNrZWRJdGVtcy5zaXplID09PSAwIHx8IGNoZWNrZWRJdGVtcy5zaXplID4gMSkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRQbGFjZWhvbGRlci5yZXBsYWNlKCd7Tn0nLCBjaGVja2VkSXRlbXMuc2l6ZSk7XG4gICAgfVxuICAgIGlmIChjaGVja2VkSXRlbXMuc2l6ZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoaSA9PiBpLnZhbHVlID09PSBjaGVja2VkSXRlbXMuZ2V0KDApKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHJldHVybiBpdGVtc1tpbmRleF0ubGFiZWxQbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICBpdGVtc1tpbmRleF0ubGFiZWxQbGFjZWhvbGRlciA6IGl0ZW1zW2luZGV4XS5sYWJlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRQbGFjZWhvbGRlci5yZXBsYWNlKCd7Tn0nLCAnMScpO1xuICB9XG5cbiAgc2V0RmlsdGVyID0gKGUpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChmaWx0ZXJWYWx1ZSAhPT0gJycgJiYgIXRoaXMuc3RhdGUuaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyVmFsdWUsIGlzT3BlbjogdHJ1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlclZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGJsdXJJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZSh0cnVlKTtcbiAgICBpZiAodGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzT25DaGlsZDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJJdGVtcyA9IChpdGVtcykgPT4ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpID0+IGkubGFiZWwucmVwbGFjZSgvXFxzL2csICcnKS50b0xvd2VyQ2FzZSgpLm1hdGNoKGZpbHRlclZhbHVlKSAhPT0gbnVsbCk7XG4gIH1cblxuICBmb2N1c0lucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlKGZhbHNlKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlucHV0XyR7dGhpcy5wcm9wcy5pZH1gKTtcbiAgICBlbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBoYW5kbGVDbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSB0cnVlO1xuICAgIGlmICh0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5zaXplID4gMCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShMaXN0KCkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IEtFWV9DT0RFUy5ET1dOKSB7XG4gICAgICB0aGlzLmJsdXJJbnB1dCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSA9IChpc09wZW4pID0+IHtcbiAgICBpZiAodGhpcy5wcmV2ZW50VG9nZ2xlKSB7XG4gICAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCFpc09wZW4gJiYgdGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZSAhPT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4sIGlzRm9jdXNPbkNoaWxkOiBpc09wZW4sIGZpbHRlclZhbHVlOiAnJyB9KTtcbiAgICB9IGVsc2UgaWYgKCFpc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4sIGlzRm9jdXNPbkNoaWxkOiBpc09wZW4gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4gfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXRlbXMsXG4gICAgICBjaGVja2VkSXRlbXMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGRlZmF1bHRQbGFjZWhvbGRlcixcbiAgICAgIHRhYkluZGV4LFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlucHV0ID0gKFxuICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLWlucHV0LWdyb3VwLWlucHV0XCJcbiAgICAgICAgaWQ9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLmdldFBsYWNlaG9sZGVyKGNoZWNrZWRJdGVtcywgaXRlbXMsIGRlZmF1bHRQbGFjZWhvbGRlcil9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNldEZpbHRlcn1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMuZm9jdXNJbnB1dH1cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgICBjb25zdCB0aXRsZSA9IChcbiAgICAgIDxUaXRsZUlucHV0XG4gICAgICAgIGlucHV0PXtpbnB1dH1cbiAgICAgICAgb25DbGVhcj17dGhpcy5oYW5kbGVDbGVhcn1cbiAgICAgIC8+XG4gICAgKTtcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZSA9PT0gJycgPyBpdGVtcyA6IHRoaXMuZmlsdGVySXRlbXMoaXRlbXMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLWRyb3Bkb3duLW11bHRpLXNlbGVjdFwiPlxuICAgICAgICA8RHJvcGRvd25Db250YWluZXJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn1cbiAgICAgICAgICBub0NhcmV0XG4gICAgICAgICAgb25Ub2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICB1c2VBbmNob3JcbiAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIDxNdWx0aVNlbGVjdFxuICAgICAgICAgICAgY2hlY2tlZEl0ZW1zPXtjaGVja2VkSXRlbXN9XG4gICAgICAgICAgICBpdGVtcz17ZmlsdGVyZWRJdGVtc31cbiAgICAgICAgICAgIGlzRm9jdXNlZD17dGhpcy5zdGF0ZS5pc0ZvY3VzT25DaGlsZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIG9uUGFyZW50Rm9jdXM9e3RoaXMuZm9jdXNJbnB1dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Ryb3Bkb3duQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19