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
        items = _props.items,
        checkedItems = _props.checkedItems,
        onChange = _props.onChange,
        defaultPlaceholder = _props.defaultPlaceholder,
        tabIndex = _props.tabIndex,
        otherProps = _objectWithoutProperties(_props, ['id', 'items', 'checkedItems', 'onChange', 'defaultPlaceholder', 'tabIndex']);

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
      isClearable: checkedItems && checkedItems.size !== 0,
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
  onChange: function onChange() {},
  tabIndex: 1
}, _temp);
export { DropdownMultiSelect as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtQ29udHJvbCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkxpc3QiLCJLRVlfQ09ERVMiLCJEcm9wZG93bkNvbnRhaW5lciIsIk11bHRpU2VsZWN0IiwiVGl0bGVJbnB1dCIsIkRyb3Bkb3duTXVsdGlTZWxlY3QiLCJwcm9wcyIsImdldFBsYWNlaG9sZGVyIiwiY2hlY2tlZEl0ZW1zIiwiaXRlbXMiLCJkZWZhdWx0UGxhY2Vob2xkZXIiLCJzaXplIiwicmVwbGFjZSIsImluZGV4IiwiZmluZEluZGV4IiwiaSIsInZhbHVlIiwiZ2V0IiwibGFiZWxQbGFjZWhvbGRlciIsInVuZGVmaW5lZCIsImxhYmVsIiwic2V0RmlsdGVyIiwiZSIsImZpbHRlclZhbHVlIiwidGFyZ2V0Iiwic3RhdGUiLCJpc09wZW4iLCJzZXRTdGF0ZSIsImJsdXJJbnB1dCIsImhhbmRsZVRvZ2dsZSIsImxlbmd0aCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJpc0ZvY3VzT25DaGlsZCIsImZpbHRlckl0ZW1zIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJtYXRjaCIsImZvY3VzSW5wdXQiLCJlbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsImZvY3VzIiwiaGFuZGxlQ2xlYXIiLCJwcmV2ZW50VG9nZ2xlIiwib25DaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsIkRPV04iLCJyZW5kZXIiLCJ0YWJJbmRleCIsIm90aGVyUHJvcHMiLCJpbnB1dCIsInRpdGxlIiwiZmlsdGVyZWRJdGVtcyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtB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QUMseUJBQUQ7QUFBQTtBQUNFLGNBQUlpQyxFQUROO0FBRUUsa0JBQVEsS0FBS2pCLEtBQUwsQ0FBV0MsTUFGckI7QUFHRSx1QkFIRjtBQUlFLG9CQUFVLEtBQUtHLFlBSmpCO0FBS0UsaUJBQU95QixLQUxUO0FBTUU7QUFORixXQU9NRixVQVBOO0FBU0UsNEJBQUMsV0FBRDtBQUNFLHdCQUFjNUMsWUFEaEI7QUFFRSxpQkFBTytDLGFBRlQ7QUFHRSxxQkFBVyxLQUFLOUIsS0FBTCxDQUFXUyxjQUh4QjtBQUlFLG9CQUFVWSxRQUpaO0FBS0UseUJBQWUsS0FBS1A7QUFMdEI7QUFURjtBQURGLEtBREY7QUFxQkQsRzs7O0VBNUo4QzNDLE1BQU00RCxhLFVBa0I5Q0MsWSxHQUFlO0FBQ3BCakQsZ0JBQWNSLE1BRE07QUFFcEJVLHNCQUFvQixvQkFGQTtBQUdwQm9DLFlBQVUsb0JBQU0sQ0FBRSxDQUhFO0FBSXBCSyxZQUFVO0FBSlUsQztTQWxCSDlDLG1CIiwiZmlsZSI6ImRyb3Bkb3duLW11bHRpLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1lc2NhcGUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCBLRVlfQ09ERVMgZnJvbSAnLi4vY29uc3RhbnRzL2tleS1jb2Rlcy5jb25zdGFudCc7XG5pbXBvcnQgRHJvcGRvd25Db250YWluZXIgZnJvbSAnLi4vZHJvcGRvd24tY29udGFpbmVyL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IE11bHRpU2VsZWN0IGZyb20gJy4uL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCBUaXRsZUlucHV0IGZyb20gJy4vdGl0bGUtaW5wdXQvdGl0bGUtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCAnLi9kcm9wZG93bi1tdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk11bHRpU2VsZWN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hlY2tlZEl0ZW1zOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgICBkZWZhdWx0UGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxhYmVsUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWRJdGVtczogTGlzdCgpLFxuICAgIGRlZmF1bHRQbGFjZWhvbGRlcjogJ3tOfSBpdGVtcyBzZWxlY3RlZCcsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHRhYkluZGV4OiAxLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzT3BlbjogZmFsc2UsIGlzRm9jdXNPbkNoaWxkOiBmYWxzZSwgZmlsdGVyVmFsdWU6ICcnIH07XG4gICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gZmFsc2U7XG4gIH1cblxuICBnZXRQbGFjZWhvbGRlciA9IChjaGVja2VkSXRlbXMsIGl0ZW1zLCBkZWZhdWx0UGxhY2Vob2xkZXIpID0+IHtcbiAgICBpZiAoY2hlY2tlZEl0ZW1zLnNpemUgPT09IDAgfHwgY2hlY2tlZEl0ZW1zLnNpemUgPiAxKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFBsYWNlaG9sZGVyLnJlcGxhY2UoJ3tOfScsIGNoZWNrZWRJdGVtcy5zaXplKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrZWRJdGVtcy5zaXplID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleChpID0+IGkudmFsdWUgPT09IGNoZWNrZWRJdGVtcy5nZXQoMCkpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zW2luZGV4XS5sYWJlbFBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgIGl0ZW1zW2luZGV4XS5sYWJlbFBsYWNlaG9sZGVyIDogaXRlbXNbaW5kZXhdLmxhYmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFBsYWNlaG9sZGVyLnJlcGxhY2UoJ3tOfScsICcxJyk7XG4gIH1cblxuICBzZXRGaWx0ZXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKGZpbHRlclZhbHVlICE9PSAnJyAmJiAhdGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJWYWx1ZSwgaXNPcGVuOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyVmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgYmx1cklucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlKHRydWUpO1xuICAgIGlmICh0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNPbkNoaWxkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckl0ZW1zID0gKGl0ZW1zKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB0aGlzLnN0YXRlLmZpbHRlclZhbHVlXG4gICAgICAucmVwbGFjZSgvXFxzL2csICcnKSAvLyByZW1vdmVzIHNwYWNlIGNoYXJhY3RlcnNcbiAgICAgIC5yZXBsYWNlKC9bXFw/XFwqXFxbXFxdXFwoXFwpXFx7XFx9XFxcXFxcXlxcJFxcK10vZywgJ1xcXFwkJicpIC8vIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaSA9PiBpLmxhYmVsLnJlcGxhY2UoL1xccy9nLCAnJykudG9Mb3dlckNhc2UoKS5tYXRjaChmaWx0ZXJWYWx1ZSkgIT09IG51bGwpO1xuICB9XG5cbiAgZm9jdXNJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZShmYWxzZSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnB1dF8ke3RoaXMucHJvcHMuaWR9YCk7XG4gICAgZWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMuc2l6ZSA+IDApIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoTGlzdCgpKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlfQ09ERVMuRE9XTikge1xuICAgICAgdGhpcy5ibHVySW5wdXQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUb2dnbGUgPSAoaXNPcGVuKSA9PiB7XG4gICAgaWYgKHRoaXMucHJldmVudFRvZ2dsZSkge1xuICAgICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghaXNPcGVuICYmIHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUgIT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuLCBpc0ZvY3VzT25DaGlsZDogaXNPcGVuLCBmaWx0ZXJWYWx1ZTogJycgfSk7XG4gICAgfSBlbHNlIGlmICghaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuLCBpc0ZvY3VzT25DaGlsZDogaXNPcGVuIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGl0ZW1zLFxuICAgICAgY2hlY2tlZEl0ZW1zLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBkZWZhdWx0UGxhY2Vob2xkZXIsXG4gICAgICB0YWJJbmRleCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpbnB1dCA9IChcbiAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICBjbGFzc05hbWU9XCJvYy1pbnB1dC1ncm91cC1pbnB1dFwiXG4gICAgICAgIGlkPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5nZXRQbGFjZWhvbGRlcihjaGVja2VkSXRlbXMsIGl0ZW1zLCBkZWZhdWx0UGxhY2Vob2xkZXIpfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXRGaWx0ZXJ9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmZvY3VzSW5wdXR9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyVmFsdWV9XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgdGl0bGUgPSAoXG4gICAgICA8VGl0bGVJbnB1dFxuICAgICAgICBpbnB1dD17aW5wdXR9XG4gICAgICAgIGlzQ2xlYXJhYmxlPXsoY2hlY2tlZEl0ZW1zICYmIGNoZWNrZWRJdGVtcy5zaXplICE9PSAwKX1cbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIG9uQ2xlYXI9e3RoaXMuaGFuZGxlQ2xlYXJ9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMuZm9jdXNJbnB1dH1cbiAgICAgIC8+XG4gICAgKTtcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZSA9PT0gJycgPyBpdGVtcyA6IHRoaXMuZmlsdGVySXRlbXMoaXRlbXMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLWRyb3Bkb3duLW11bHRpLXNlbGVjdFwiPlxuICAgICAgICA8RHJvcGRvd25Db250YWluZXJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn1cbiAgICAgICAgICBub0NhcmV0XG4gICAgICAgICAgb25Ub2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICB1c2VBbmNob3JcbiAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIDxNdWx0aVNlbGVjdFxuICAgICAgICAgICAgY2hlY2tlZEl0ZW1zPXtjaGVja2VkSXRlbXN9XG4gICAgICAgICAgICBpdGVtcz17ZmlsdGVyZWRJdGVtc31cbiAgICAgICAgICAgIGlzRm9jdXNlZD17dGhpcy5zdGF0ZS5pc0ZvY3VzT25DaGlsZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIG9uUGFyZW50Rm9jdXM9e3RoaXMuZm9jdXNJbnB1dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Ryb3Bkb3duQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19