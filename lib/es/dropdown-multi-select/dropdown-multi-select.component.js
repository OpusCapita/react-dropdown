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
      .replace(/[\?\*\[\]\(\)\{\}\\\^\$\+]/g, '\\$&') // escape special characters
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
        isClearable = _props.isClearable,
        items = _props.items,
        checkedItems = _props.checkedItems,
        onChange = _props.onChange,
        defaultPlaceholder = _props.defaultPlaceholder,
        tabIndex = _props.tabIndex,
        otherProps = _objectWithoutProperties(_props, ['id', 'isClearable', 'items', 'checkedItems', 'onChange', 'defaultPlaceholder', 'tabIndex']);

    var isOpen = this.state.isOpen;

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
      isClearable: isClearable && checkedItems && checkedItems.size !== 0,
      isOpen: isOpen,
      onClear: this.handleClear,
      onFocus: this.focusInput
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
  isClearable: true,
  onChange: function onChange() {},
  tabIndex: 1
}, _temp);
export { DropdownMultiSelect as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtQ29udHJvbCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkxpc3QiLCJLRVlfQ09ERVMiLCJEcm9wZG93bkNvbnRhaW5lciIsIk11bHRpU2VsZWN0IiwiVGl0bGVJbnB1dCIsIkRyb3Bkb3duTXVsdGlTZWxlY3QiLCJwcm9wcyIsImdldFBsYWNlaG9sZGVyIiwiY2hlY2tlZEl0ZW1zIiwiaXRlbXMiLCJkZWZhdWx0UGxhY2Vob2xkZXIiLCJzaXplIiwicmVwbGFjZSIsImluZGV4IiwiZmluZEluZGV4IiwiaSIsInZhbHVlIiwiZ2V0IiwibGFiZWxQbGFjZWhvbGRlciIsInVuZGVmaW5lZCIsImxhYmVsIiwic2V0RmlsdGVyIiwiZSIsImZpbHRlclZhbHVlIiwidGFyZ2V0Iiwic3RhdGUiLCJpc09wZW4iLCJzZXRTdGF0ZSIsImJsdXJJbnB1dCIsImhhbmRsZVRvZ2dsZSIsImxlbmd0aCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJpc0ZvY3VzT25DaGlsZCIsImZpbHRlckl0ZW1zIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJtYXRjaCIsImZvY3VzSW5wdXQiLCJlbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsImZvY3VzIiwiaGFuZGxlQ2xlYXIiLCJwcmV2ZW50VG9nZ2xlIiwib25DaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsIkRPV04iLCJyZW5kZXIiLCJpc0NsZWFyYWJsZSIsInRhYkluZGV4Iiwib3RoZXJQcm9wcyIsImlucHV0IiwidGl0bGUiLCJmaWx0ZXJlZEl0ZW1zIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxPQUFPQSxLQUFQ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QUE5RDtBQUNBLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSwwQkFBZjtBQUNFO0FBQUMseUJBQUQ7QUFBQTtBQUNFLGNBQUlpQyxFQUROO0FBRUUsa0JBQVEsS0FBS2pCLEtBQUwsQ0FBV0MsTUFGckI7QUFHRSx1QkFIRjtBQUlFLG9CQUFVLEtBQUtHLFlBSmpCO0FBS0UsaUJBQU8wQixLQUxUO0FBTUU7QUFORixXQU9NRixVQVBOO0FBU0UsNEJBQUMsV0FBRDtBQUNFLHdCQUFjN0MsWUFEaEI7QUFFRSxpQkFBT2dELGFBRlQ7QUFHRSxxQkFBVyxLQUFLL0IsS0FBTCxDQUFXUyxjQUh4QjtBQUlFLG9CQUFVWSxRQUpaO0FBS0UseUJBQWUsS0FBS1A7QUFMdEI7QUFURjtBQURGLEtBREY7QUFxQkQsRzs7O0VBL0o4QzNDLE1BQU02RCxhLFVBbUI5Q0MsWSxHQUFlO0FBQ3BCbEQsZ0JBQWNSLE1BRE07QUFFcEJVLHNCQUFvQixvQkFGQTtBQUdwQnlDLGVBQWEsSUFITztBQUlwQkwsWUFBVSxvQkFBTSxDQUFFLENBSkU7QUFLcEJNLFlBQVU7QUFMVSxDO1NBbkJIL0MsbUIiLCJmaWxlIjoiZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2VsZXNzLWVzY2FwZSAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcblxuaW1wb3J0IEtFWV9DT0RFUyBmcm9tICcuLi9jb25zdGFudHMva2V5LWNvZGVzLmNvbnN0YW50JztcbmltcG9ydCBEcm9wZG93bkNvbnRhaW5lciBmcm9tICcuLi9kcm9wZG93bi1jb250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgTXVsdGlTZWxlY3QgZnJvbSAnLi4vbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IFRpdGxlSW5wdXQgZnJvbSAnLi90aXRsZS1pbnB1dC90aXRsZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2Ryb3Bkb3duLW11bHRpLXNlbGVjdC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duTXVsdGlTZWxlY3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGVja2VkSXRlbXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIGRlZmF1bHRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgaXNDbGVhcmFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxhYmVsUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWRJdGVtczogTGlzdCgpLFxuICAgIGRlZmF1bHRQbGFjZWhvbGRlcjogJ3tOfSBpdGVtcyBzZWxlY3RlZCcsXG4gICAgaXNDbGVhcmFibGU6IHRydWUsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHRhYkluZGV4OiAxLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzT3BlbjogZmFsc2UsIGlzRm9jdXNPbkNoaWxkOiBmYWxzZSwgZmlsdGVyVmFsdWU6ICcnIH07XG4gICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gZmFsc2U7XG4gIH1cblxuICBnZXRQbGFjZWhvbGRlciA9IChjaGVja2VkSXRlbXMsIGl0ZW1zLCBkZWZhdWx0UGxhY2Vob2xkZXIpID0+IHtcbiAgICBpZiAoY2hlY2tlZEl0ZW1zLnNpemUgPT09IDAgfHwgY2hlY2tlZEl0ZW1zLnNpemUgPiAxKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFBsYWNlaG9sZGVyLnJlcGxhY2UoJ3tOfScsIGNoZWNrZWRJdGVtcy5zaXplKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrZWRJdGVtcy5zaXplID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleChpID0+IGkudmFsdWUgPT09IGNoZWNrZWRJdGVtcy5nZXQoMCkpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zW2luZGV4XS5sYWJlbFBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgIGl0ZW1zW2luZGV4XS5sYWJlbFBsYWNlaG9sZGVyIDogaXRlbXNbaW5kZXhdLmxhYmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFBsYWNlaG9sZGVyLnJlcGxhY2UoJ3tOfScsICcxJyk7XG4gIH1cblxuICBzZXRGaWx0ZXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKGZpbHRlclZhbHVlICE9PSAnJyAmJiAhdGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJWYWx1ZSwgaXNPcGVuOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyVmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgYmx1cklucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlKHRydWUpO1xuICAgIGlmICh0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNPbkNoaWxkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckl0ZW1zID0gKGl0ZW1zKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB0aGlzLnN0YXRlLmZpbHRlclZhbHVlXG4gICAgICAucmVwbGFjZSgvXFxzL2csICcnKSAvLyByZW1vdmVzIHNwYWNlIGNoYXJhY3RlcnNcbiAgICAgIC5yZXBsYWNlKC9bXFw/XFwqXFxbXFxdXFwoXFwpXFx7XFx9XFxcXFxcXlxcJFxcK10vZywgJ1xcXFwkJicpIC8vIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaSA9PiBpLmxhYmVsLnJlcGxhY2UoL1xccy9nLCAnJykudG9Mb3dlckNhc2UoKS5tYXRjaChmaWx0ZXJWYWx1ZSkgIT09IG51bGwpO1xuICB9XG5cbiAgZm9jdXNJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZShmYWxzZSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnB1dF8ke3RoaXMucHJvcHMuaWR9YCk7XG4gICAgZWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMuc2l6ZSA+IDApIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoTGlzdCgpKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlfQ09ERVMuRE9XTikge1xuICAgICAgdGhpcy5ibHVySW5wdXQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUb2dnbGUgPSAoaXNPcGVuKSA9PiB7XG4gICAgaWYgKHRoaXMucHJldmVudFRvZ2dsZSkge1xuICAgICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghaXNPcGVuICYmIHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUgIT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuLCBpc0ZvY3VzT25DaGlsZDogaXNPcGVuLCBmaWx0ZXJWYWx1ZTogJycgfSk7XG4gICAgfSBlbHNlIGlmICghaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuLCBpc0ZvY3VzT25DaGlsZDogaXNPcGVuIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGlzQ2xlYXJhYmxlLFxuICAgICAgaXRlbXMsXG4gICAgICBjaGVja2VkSXRlbXMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGRlZmF1bHRQbGFjZWhvbGRlcixcbiAgICAgIHRhYkluZGV4LFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGlucHV0ID0gKFxuICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLWlucHV0LWdyb3VwLWlucHV0XCJcbiAgICAgICAgaWQ9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLmdldFBsYWNlaG9sZGVyKGNoZWNrZWRJdGVtcywgaXRlbXMsIGRlZmF1bHRQbGFjZWhvbGRlcil9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNldEZpbHRlcn1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMuZm9jdXNJbnB1dH1cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgICBjb25zdCB0aXRsZSA9IChcbiAgICAgIDxUaXRsZUlucHV0XG4gICAgICAgIGlucHV0PXtpbnB1dH1cbiAgICAgICAgaXNDbGVhcmFibGU9e2lzQ2xlYXJhYmxlICYmIChjaGVja2VkSXRlbXMgJiYgY2hlY2tlZEl0ZW1zLnNpemUgIT09IDApfVxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgb25DbGVhcj17dGhpcy5oYW5kbGVDbGVhcn1cbiAgICAgICAgb25Gb2N1cz17dGhpcy5mb2N1c0lucHV0fVxuICAgICAgLz5cbiAgICApO1xuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLnN0YXRlLmZpbHRlclZhbHVlID09PSAnJyA/IGl0ZW1zIDogdGhpcy5maWx0ZXJJdGVtcyhpdGVtcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtZHJvcGRvd24tbXVsdGktc2VsZWN0XCI+XG4gICAgICAgIDxEcm9wZG93bkNvbnRhaW5lclxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNPcGVufVxuICAgICAgICAgIG5vQ2FyZXRcbiAgICAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHVzZUFuY2hvclxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgPE11bHRpU2VsZWN0XG4gICAgICAgICAgICBjaGVja2VkSXRlbXM9e2NoZWNrZWRJdGVtc31cbiAgICAgICAgICAgIGl0ZW1zPXtmaWx0ZXJlZEl0ZW1zfVxuICAgICAgICAgICAgaXNGb2N1c2VkPXt0aGlzLnN0YXRlLmlzRm9jdXNPbkNoaWxkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgb25QYXJlbnRGb2N1cz17dGhpcy5mb2N1c0lucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRHJvcGRvd25Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=