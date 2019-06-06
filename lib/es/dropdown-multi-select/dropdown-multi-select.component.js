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
      var _this$props = _this.props,
          checkedItems = _this$props.checkedItems,
          isClearable = _this$props.isClearable,
          onChange = _this$props.onChange;

      _this.preventToggle = true;
      if (isClearable && checkedItems.size > 0) {
        onChange(List());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtQ29udHJvbCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkxpc3QiLCJLRVlfQ09ERVMiLCJEcm9wZG93bkNvbnRhaW5lciIsIk11bHRpU2VsZWN0IiwiVGl0bGVJbnB1dCIsIkRyb3Bkb3duTXVsdGlTZWxlY3QiLCJwcm9wcyIsImdldFBsYWNlaG9sZGVyIiwiY2hlY2tlZEl0ZW1zIiwiaXRlbXMiLCJkZWZhdWx0UGxhY2Vob2xkZXIiLCJzaXplIiwicmVwbGFjZSIsImluZGV4IiwiZmluZEluZGV4IiwiaSIsInZhbHVlIiwiZ2V0IiwibGFiZWxQbGFjZWhvbGRlciIsInVuZGVmaW5lZCIsImxhYmVsIiwic2V0RmlsdGVyIiwiZSIsImZpbHRlclZhbHVlIiwidGFyZ2V0Iiwic3RhdGUiLCJpc09wZW4iLCJzZXRTdGF0ZSIsImJsdXJJbnB1dCIsImhhbmRsZVRvZ2dsZSIsImxlbmd0aCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJpc0ZvY3VzT25DaGlsZCIsImZpbHRlckl0ZW1zIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJtYXRjaCIsImZvY3VzSW5wdXQiLCJlbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsImZvY3VzIiwiaGFuZGxlQ2xlYXIiLCJpc0NsZWFyYWJsZSIsIm9uQ2hhbmdlIiwicHJldmVudFRvZ2dsZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiRE9XTiIsInJlbmRlciIsInRhYkluZGV4Iiwib3RoZXJQcm9wcyIsImlucHV0IiwidGl0bGUiLCJmaWx0ZXJlZEl0ZW1zIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxPQUFPQSxLQUFQ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QUFMLENBQVdGLFdBQVgsS0FBMkIsRUFBM0IsR0FBZ0NkLEtBQWhDLEdBQXdDLEtBQUswQixXQUFMLENBQWlCMUIsS0FBakIsQ0FBOUQ7QUFDQSxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsMEJBQWY7QUFDRTtBQUFDLHlCQUFEO0FBQUE7QUFDRSxjQUFJaUMsRUFETjtBQUVFLGtCQUFRLEtBQUtqQixLQUFMLENBQVdDLE1BRnJCO0FBR0UsdUJBSEY7QUFJRSxvQkFBVSxLQUFLRyxZQUpqQjtBQUtFLGlCQUFPMEIsS0FMVDtBQU1FO0FBTkYsV0FPTUYsVUFQTjtBQVNFLDRCQUFDLFdBQUQ7QUFDRSx3QkFBYzdDLFlBRGhCO0FBRUUsaUJBQU9nRCxhQUZUO0FBR0UscUJBQVcsS0FBSy9CLEtBQUwsQ0FBV1MsY0FIeEI7QUFJRSxvQkFBVVksUUFKWjtBQUtFLHlCQUFlLEtBQUtQO0FBTHRCO0FBVEY7QUFERixLQURGO0FBcUJELEc7OztFQWhLOEMzQyxNQUFNNkQsYSxVQW1COUNDLFksR0FBZTtBQUNwQmxELGdCQUFjUixNQURNO0FBRXBCVSxzQkFBb0Isb0JBRkE7QUFHcEJtQyxlQUFhLElBSE87QUFJcEJDLFlBQVUsb0JBQU0sQ0FBRSxDQUpFO0FBS3BCTSxZQUFVO0FBTFUsQztTQW5CSC9DLG1CIiwiZmlsZSI6ImRyb3Bkb3duLW11bHRpLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1lc2NhcGUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCBLRVlfQ09ERVMgZnJvbSAnLi4vY29uc3RhbnRzL2tleS1jb2Rlcy5jb25zdGFudCc7XG5pbXBvcnQgRHJvcGRvd25Db250YWluZXIgZnJvbSAnLi4vZHJvcGRvd24tY29udGFpbmVyL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IE11bHRpU2VsZWN0IGZyb20gJy4uL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCBUaXRsZUlucHV0IGZyb20gJy4vdGl0bGUtaW5wdXQvdGl0bGUtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCAnLi9kcm9wZG93bi1tdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk11bHRpU2VsZWN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hlY2tlZEl0ZW1zOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgICBkZWZhdWx0UGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIGlzQ2xlYXJhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsYWJlbFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgfSkpLmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkSXRlbXM6IExpc3QoKSxcbiAgICBkZWZhdWx0UGxhY2Vob2xkZXI6ICd7Tn0gaXRlbXMgc2VsZWN0ZWQnLFxuICAgIGlzQ2xlYXJhYmxlOiB0cnVlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICB0YWJJbmRleDogMSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpc09wZW46IGZhbHNlLCBpc0ZvY3VzT25DaGlsZDogZmFsc2UsIGZpbHRlclZhbHVlOiAnJyB9O1xuICAgIHRoaXMucHJldmVudFRvZ2dsZSA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0UGxhY2Vob2xkZXIgPSAoY2hlY2tlZEl0ZW1zLCBpdGVtcywgZGVmYXVsdFBsYWNlaG9sZGVyKSA9PiB7XG4gICAgaWYgKGNoZWNrZWRJdGVtcy5zaXplID09PSAwIHx8IGNoZWNrZWRJdGVtcy5zaXplID4gMSkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRQbGFjZWhvbGRlci5yZXBsYWNlKCd7Tn0nLCBjaGVja2VkSXRlbXMuc2l6ZSk7XG4gICAgfVxuICAgIGlmIChjaGVja2VkSXRlbXMuc2l6ZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoaSA9PiBpLnZhbHVlID09PSBjaGVja2VkSXRlbXMuZ2V0KDApKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHJldHVybiBpdGVtc1tpbmRleF0ubGFiZWxQbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICBpdGVtc1tpbmRleF0ubGFiZWxQbGFjZWhvbGRlciA6IGl0ZW1zW2luZGV4XS5sYWJlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRQbGFjZWhvbGRlci5yZXBsYWNlKCd7Tn0nLCAnMScpO1xuICB9XG5cbiAgc2V0RmlsdGVyID0gKGUpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChmaWx0ZXJWYWx1ZSAhPT0gJycgJiYgIXRoaXMuc3RhdGUuaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyVmFsdWUsIGlzT3BlbjogdHJ1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlclZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGJsdXJJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZSh0cnVlKTtcbiAgICBpZiAodGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzT25DaGlsZDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJJdGVtcyA9IChpdGVtcykgPT4ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZVxuICAgICAgLnJlcGxhY2UoL1xccy9nLCAnJykgLy8gcmVtb3ZlcyBzcGFjZSBjaGFyYWN0ZXJzXG4gICAgICAucmVwbGFjZSgvW1xcP1xcKlxcW1xcXVxcKFxcKVxce1xcfVxcXFxcXF5cXCRcXCtdL2csICdcXFxcJCYnKSAvLyBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzXG4gICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGkgPT4gaS5sYWJlbC5yZXBsYWNlKC9cXHMvZywgJycpLnRvTG93ZXJDYXNlKCkubWF0Y2goZmlsdGVyVmFsdWUpICE9PSBudWxsKTtcbiAgfVxuXG4gIGZvY3VzSW5wdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGUoZmFsc2UpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaW5wdXRfJHt0aGlzLnByb3BzLmlkfWApO1xuICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2hlY2tlZEl0ZW1zLCBpc0NsZWFyYWJsZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gdHJ1ZTtcbiAgICBpZiAoaXNDbGVhcmFibGUgJiYgY2hlY2tlZEl0ZW1zLnNpemUgPiAwKSB7XG4gICAgICBvbkNoYW5nZShMaXN0KCkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IEtFWV9DT0RFUy5ET1dOKSB7XG4gICAgICB0aGlzLmJsdXJJbnB1dCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSA9IChpc09wZW4pID0+IHtcbiAgICBpZiAodGhpcy5wcmV2ZW50VG9nZ2xlKSB7XG4gICAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCFpc09wZW4gJiYgdGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZSAhPT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4sIGlzRm9jdXNPbkNoaWxkOiBpc09wZW4sIGZpbHRlclZhbHVlOiAnJyB9KTtcbiAgICB9IGVsc2UgaWYgKCFpc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4sIGlzRm9jdXNPbkNoaWxkOiBpc09wZW4gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4gfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXNDbGVhcmFibGUsXG4gICAgICBpdGVtcyxcbiAgICAgIGNoZWNrZWRJdGVtcyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgZGVmYXVsdFBsYWNlaG9sZGVyLFxuICAgICAgdGFiSW5kZXgsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc09wZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaW5wdXQgPSAoXG4gICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPVwib2MtaW5wdXQtZ3JvdXAtaW5wdXRcIlxuICAgICAgICBpZD17YGlucHV0XyR7aWR9YH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMuZ2V0UGxhY2Vob2xkZXIoY2hlY2tlZEl0ZW1zLCBpdGVtcywgZGVmYXVsdFBsYWNlaG9sZGVyKX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0RmlsdGVyfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5mb2N1c0lucHV0fVxuICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlclZhbHVlfVxuICAgICAgLz5cbiAgICApO1xuICAgIGNvbnN0IHRpdGxlID0gKFxuICAgICAgPFRpdGxlSW5wdXRcbiAgICAgICAgaW5wdXQ9e2lucHV0fVxuICAgICAgICBpc0NsZWFyYWJsZT17aXNDbGVhcmFibGUgJiYgKGNoZWNrZWRJdGVtcyAmJiBjaGVja2VkSXRlbXMuc2l6ZSAhPT0gMCl9XG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICBvbkNsZWFyPXt0aGlzLmhhbmRsZUNsZWFyfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLmZvY3VzSW5wdXR9XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUgPT09ICcnID8gaXRlbXMgOiB0aGlzLmZpbHRlckl0ZW1zKGl0ZW1zKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1kcm9wZG93bi1tdWx0aS1zZWxlY3RcIj5cbiAgICAgICAgPERyb3Bkb3duQ29udGFpbmVyXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgbm9DYXJldFxuICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgdXNlQW5jaG9yXG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgICAgIGNoZWNrZWRJdGVtcz17Y2hlY2tlZEl0ZW1zfVxuICAgICAgICAgICAgaXRlbXM9e2ZpbHRlcmVkSXRlbXN9XG4gICAgICAgICAgICBpc0ZvY3VzZWQ9e3RoaXMuc3RhdGUuaXNGb2N1c09uQ2hpbGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBvblBhcmVudEZvY3VzPXt0aGlzLmZvY3VzSW5wdXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Ecm9wZG93bkNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==