var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/extensions */
/* eslint-disable no-useless-escape */

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
      var filterValue = _this.state.filterValue.replace(/\s/g, '') // removes space characters
      .replace(/[\?\*\[\]\(\)\{\}\\\^\$]/g, '\\$&') // escape special characters
      .toLowerCase();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtQ29udHJvbCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkxpc3QiLCJLRVlfQ09ERVMiLCJEcm9wZG93bkNvbnRhaW5lciIsIk11bHRpU2VsZWN0IiwiVGl0bGVJbnB1dCIsIkRyb3Bkb3duTXVsdGlTZWxlY3QiLCJwcm9wcyIsImdldFBsYWNlaG9sZGVyIiwiY2hlY2tlZEl0ZW1zIiwiaXRlbXMiLCJkZWZhdWx0UGxhY2Vob2xkZXIiLCJzaXplIiwicmVwbGFjZSIsImluZGV4IiwiZmluZEluZGV4IiwiaSIsInZhbHVlIiwiZ2V0IiwibGFiZWxQbGFjZWhvbGRlciIsInVuZGVmaW5lZCIsImxhYmVsIiwic2V0RmlsdGVyIiwiZSIsImZpbHRlclZhbHVlIiwidGFyZ2V0Iiwic3RhdGUiLCJpc09wZW4iLCJzZXRTdGF0ZSIsImJsdXJJbnB1dCIsImhhbmRsZVRvZ2dsZSIsImxlbmd0aCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJpc0ZvY3VzT25DaGlsZCIsImZpbHRlckl0ZW1zIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJtYXRjaCIsImZvY3VzSW5wdXQiLCJlbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsImZvY3VzIiwiaGFuZGxlQ2xlYXIiLCJwcmV2ZW50VG9nZ2xlIiwib25DaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsIkRPV04iLCJyZW5kZXIiLCJ0YWJJbmRleCIsIm90aGVyUHJvcHMiLCJpbnB1dCIsInRpdGxlIiwiZmlsdGVyZWRJdGVtcyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtB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TUYsVUFQTjtBQVNFLDRCQUFDLFdBQUQ7QUFDRSx3QkFBYzVDLFlBRGhCO0FBRUUsaUJBQU8rQyxhQUZUO0FBR0UscUJBQVcsS0FBSzlCLEtBQUwsQ0FBV1MsY0FIeEI7QUFJRSxvQkFBVVksUUFKWjtBQUtFLHlCQUFlLEtBQUtQO0FBTHRCO0FBVEY7QUFERixLQURGO0FBcUJELEc7OztFQXhKOEMzQyxNQUFNNEQsYSxVQWtCOUNDLFksR0FBZTtBQUNwQmpELGdCQUFjUixNQURNO0FBRXBCVSxzQkFBb0Isb0JBRkE7QUFHcEJvQyxZQUFVLG9CQUFNLENBQUUsQ0FIRTtBQUlwQkssWUFBVTtBQUpVLEM7U0FsQkg5QyxtQiIsImZpbGUiOiJkcm9wZG93bi1tdWx0aS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtZXNjYXBlICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgS0VZX0NPREVTIGZyb20gJy4uL2NvbnN0YW50cy9rZXktY29kZXMuY29uc3RhbnQnO1xuaW1wb3J0IERyb3Bkb3duQ29udGFpbmVyIGZyb20gJy4uL2Ryb3Bkb3duLWNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBNdWx0aVNlbGVjdCBmcm9tICcuLi9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgVGl0bGVJbnB1dCBmcm9tICcuL3RpdGxlLWlucHV0L3RpdGxlLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25NdWx0aVNlbGVjdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoZWNrZWRJdGVtczogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXG4gICAgZGVmYXVsdFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsYWJlbFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgfSkpLmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkSXRlbXM6IExpc3QoKSxcbiAgICBkZWZhdWx0UGxhY2Vob2xkZXI6ICd7Tn0gaXRlbXMgc2VsZWN0ZWQnLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICB0YWJJbmRleDogMSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpc09wZW46IGZhbHNlLCBpc0ZvY3VzT25DaGlsZDogZmFsc2UsIGZpbHRlclZhbHVlOiAnJyB9O1xuICAgIHRoaXMucHJldmVudFRvZ2dsZSA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0UGxhY2Vob2xkZXIgPSAoY2hlY2tlZEl0ZW1zLCBpdGVtcywgZGVmYXVsdFBsYWNlaG9sZGVyKSA9PiB7XG4gICAgaWYgKGNoZWNrZWRJdGVtcy5zaXplID09PSAwIHx8IGNoZWNrZWRJdGVtcy5zaXplID4gMSkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRQbGFjZWhvbGRlci5yZXBsYWNlKCd7Tn0nLCBjaGVja2VkSXRlbXMuc2l6ZSk7XG4gICAgfVxuICAgIGlmIChjaGVja2VkSXRlbXMuc2l6ZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoaSA9PiBpLnZhbHVlID09PSBjaGVja2VkSXRlbXMuZ2V0KDApKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHJldHVybiBpdGVtc1tpbmRleF0ubGFiZWxQbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICBpdGVtc1tpbmRleF0ubGFiZWxQbGFjZWhvbGRlciA6IGl0ZW1zW2luZGV4XS5sYWJlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRQbGFjZWhvbGRlci5yZXBsYWNlKCd7Tn0nLCAnMScpO1xuICB9XG5cbiAgc2V0RmlsdGVyID0gKGUpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChmaWx0ZXJWYWx1ZSAhPT0gJycgJiYgIXRoaXMuc3RhdGUuaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyVmFsdWUsIGlzT3BlbjogdHJ1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlclZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGJsdXJJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZSh0cnVlKTtcbiAgICBpZiAodGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzT25DaGlsZDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJJdGVtcyA9IChpdGVtcykgPT4ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZVxuICAgICAgLnJlcGxhY2UoL1xccy9nLCAnJykgLy8gcmVtb3ZlcyBzcGFjZSBjaGFyYWN0ZXJzXG4gICAgICAucmVwbGFjZSgvW1xcP1xcKlxcW1xcXVxcKFxcKVxce1xcfVxcXFxcXF5cXCRdL2csICdcXFxcJCYnKSAvLyBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzXG4gICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGkgPT4gaS5sYWJlbC5yZXBsYWNlKC9cXHMvZywgJycpLnRvTG93ZXJDYXNlKCkubWF0Y2goZmlsdGVyVmFsdWUpICE9PSBudWxsKTtcbiAgfVxuXG4gIGZvY3VzSW5wdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGUoZmFsc2UpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaW5wdXRfJHt0aGlzLnByb3BzLmlkfWApO1xuICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xuICAgIHRoaXMucHJldmVudFRvZ2dsZSA9IHRydWU7XG4gICAgaWYgKHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLnNpemUgPiAwKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKExpc3QoKSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZX0NPREVTLkRPV04pIHtcbiAgICAgIHRoaXMuYmx1cklucHV0KCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVG9nZ2xlID0gKGlzT3BlbikgPT4ge1xuICAgIGlmICh0aGlzLnByZXZlbnRUb2dnbGUpIHtcbiAgICAgIHRoaXMucHJldmVudFRvZ2dsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoIWlzT3BlbiAmJiB0aGlzLnN0YXRlLmZpbHRlclZhbHVlICE9PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbiwgaXNGb2N1c09uQ2hpbGQ6IGlzT3BlbiwgZmlsdGVyVmFsdWU6ICcnIH0pO1xuICAgIH0gZWxzZSBpZiAoIWlzT3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbiwgaXNGb2N1c09uQ2hpbGQ6IGlzT3BlbiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbiB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpdGVtcyxcbiAgICAgIGNoZWNrZWRJdGVtcyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgZGVmYXVsdFBsYWNlaG9sZGVyLFxuICAgICAgdGFiSW5kZXgsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5wdXQgPSAoXG4gICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPVwib2MtaW5wdXQtZ3JvdXAtaW5wdXRcIlxuICAgICAgICBpZD17YGlucHV0XyR7aWR9YH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMuZ2V0UGxhY2Vob2xkZXIoY2hlY2tlZEl0ZW1zLCBpdGVtcywgZGVmYXVsdFBsYWNlaG9sZGVyKX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0RmlsdGVyfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5mb2N1c0lucHV0fVxuICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlclZhbHVlfVxuICAgICAgLz5cbiAgICApO1xuICAgIGNvbnN0IHRpdGxlID0gKFxuICAgICAgPFRpdGxlSW5wdXRcbiAgICAgICAgaW5wdXQ9e2lucHV0fVxuICAgICAgICBvbkNsZWFyPXt0aGlzLmhhbmRsZUNsZWFyfVxuICAgICAgLz5cbiAgICApO1xuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLnN0YXRlLmZpbHRlclZhbHVlID09PSAnJyA/IGl0ZW1zIDogdGhpcy5maWx0ZXJJdGVtcyhpdGVtcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtZHJvcGRvd24tbXVsdGktc2VsZWN0XCI+XG4gICAgICAgIDxEcm9wZG93bkNvbnRhaW5lclxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNPcGVufVxuICAgICAgICAgIG5vQ2FyZXRcbiAgICAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHVzZUFuY2hvclxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgPE11bHRpU2VsZWN0XG4gICAgICAgICAgICBjaGVja2VkSXRlbXM9e2NoZWNrZWRJdGVtc31cbiAgICAgICAgICAgIGl0ZW1zPXtmaWx0ZXJlZEl0ZW1zfVxuICAgICAgICAgICAgaXNGb2N1c2VkPXt0aGlzLnN0YXRlLmlzRm9jdXNPbkNoaWxkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgb25QYXJlbnRGb2N1cz17dGhpcy5mb2N1c0lucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRHJvcGRvd25Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=