'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /* eslint-disable import/extensions */
/* eslint-disable no-useless-escape */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _immutable = require('immutable');

var _keyCodes = require('../constants/key-codes.constant');

var _keyCodes2 = _interopRequireDefault(_keyCodes);

var _dropdownContainer = require('../dropdown-container/dropdown-container.component');

var _dropdownContainer2 = _interopRequireDefault(_dropdownContainer);

var _multiSelect = require('../multi-select/multi-select.component');

var _multiSelect2 = _interopRequireDefault(_multiSelect);

var _titleInput = require('./title-input/title-input.component');

var _titleInput2 = _interopRequireDefault(_titleInput);

require('./dropdown-multi-select.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        _this.props.onChange((0, _immutable.List)());
      }
    };

    _this.handleKeyDown = function (e) {
      if (e.keyCode === _keyCodes2.default.DOWN) {
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

    var input = _react2.default.createElement(_reactBootstrap.FormControl, {
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
    var title = _react2.default.createElement(_titleInput2.default, {
      input: input,
      isClearable: checkedItems && checkedItems.size !== 0,
      isOpen: isOpen,
      onClear: this.handleClear,
      onFocus: this.focusInput
    });
    var filteredItems = this.state.filterValue === '' ? items : this.filterItems(items);
    return _react2.default.createElement(
      'div',
      { className: 'oc-dropdown-multi-select' },
      _react2.default.createElement(
        _dropdownContainer2.default,
        _extends({
          id: id,
          isOpen: this.state.isOpen,
          noCaret: true,
          onToggle: this.handleToggle,
          title: title,
          useAnchor: true
        }, otherProps),
        _react2.default.createElement(_multiSelect2.default, {
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
}(_react2.default.PureComponent), _class.defaultProps = {
  checkedItems: (0, _immutable.List)(),
  defaultPlaceholder: '{N} items selected',
  onChange: function onChange() {},
  tabIndex: 1
}, _temp);
exports.default = DropdownMultiSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRHJvcGRvd25NdWx0aVNlbGVjdCIsInByb3BzIiwiZ2V0UGxhY2Vob2xkZXIiLCJjaGVja2VkSXRlbXMiLCJpdGVtcyIsImRlZmF1bHRQbGFjZWhvbGRlciIsInNpemUiLCJyZXBsYWNlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpIiwidmFsdWUiLCJnZXQiLCJsYWJlbFBsYWNlaG9sZGVyIiwidW5kZWZpbmVkIiwibGFiZWwiLCJzZXRGaWx0ZXIiLCJlIiwiZmlsdGVyVmFsdWUiLCJ0YXJnZXQiLCJzdGF0ZSIsImlzT3BlbiIsInNldFN0YXRlIiwiYmx1cklucHV0IiwiaGFuZGxlVG9nZ2xlIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsImlzRm9jdXNPbkNoaWxkIiwiZmlsdGVySXRlbXMiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsIm1hdGNoIiwiZm9jdXNJbnB1dCIsImVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZm9jdXMiLCJoYW5kbGVDbGVhciIsInByZXZlbnRUb2dnbGUiLCJvbkNoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiS0VZX0NPREVTIiwiRE9XTiIsInJlbmRlciIsInRhYkluZGV4Iiwib3RoZXJQcm9wcyIsImlucHV0IiwidGl0bGUiLCJmaWx0ZXJlZEl0ZW1zIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O21CQUFBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxtQjs7O0FBeUJuQiwrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlE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QixnQkFBTUMsYSxVQWtCOUNDLFksR0FBZTtBQUNwQm5ELGdCQUFjLHNCQURNO0FBRXBCRSxzQkFBb0Isb0JBRkE7QUFHcEJvQyxZQUFVLG9CQUFNLENBQUUsQ0FIRTtBQUlwQk0sWUFBVTtBQUpVLEM7a0JBbEJIL0MsbUIiLCJmaWxlIjoiZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2VsZXNzLWVzY2FwZSAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcblxuaW1wb3J0IEtFWV9DT0RFUyBmcm9tICcuLi9jb25zdGFudHMva2V5LWNvZGVzLmNvbnN0YW50JztcbmltcG9ydCBEcm9wZG93bkNvbnRhaW5lciBmcm9tICcuLi9kcm9wZG93bi1jb250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgTXVsdGlTZWxlY3QgZnJvbSAnLi4vbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IFRpdGxlSW5wdXQgZnJvbSAnLi90aXRsZS1pbnB1dC90aXRsZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2Ryb3Bkb3duLW11bHRpLXNlbGVjdC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duTXVsdGlTZWxlY3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGVja2VkSXRlbXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIGRlZmF1bHRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGFiZWxQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBdKS5pc1JlcXVpcmVkLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZEl0ZW1zOiBMaXN0KCksXG4gICAgZGVmYXVsdFBsYWNlaG9sZGVyOiAne059IGl0ZW1zIHNlbGVjdGVkJyxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgdGFiSW5kZXg6IDEsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNPcGVuOiBmYWxzZSwgaXNGb2N1c09uQ2hpbGQ6IGZhbHNlLCBmaWx0ZXJWYWx1ZTogJycgfTtcbiAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyID0gKGNoZWNrZWRJdGVtcywgaXRlbXMsIGRlZmF1bHRQbGFjZWhvbGRlcikgPT4ge1xuICAgIGlmIChjaGVja2VkSXRlbXMuc2l6ZSA9PT0gMCB8fCBjaGVja2VkSXRlbXMuc2l6ZSA+IDEpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0UGxhY2Vob2xkZXIucmVwbGFjZSgne059JywgY2hlY2tlZEl0ZW1zLnNpemUpO1xuICAgIH1cbiAgICBpZiAoY2hlY2tlZEl0ZW1zLnNpemUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KGkgPT4gaS52YWx1ZSA9PT0gY2hlY2tlZEl0ZW1zLmdldCgwKSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICByZXR1cm4gaXRlbXNbaW5kZXhdLmxhYmVsUGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgaXRlbXNbaW5kZXhdLmxhYmVsUGxhY2Vob2xkZXIgOiBpdGVtc1tpbmRleF0ubGFiZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0UGxhY2Vob2xkZXIucmVwbGFjZSgne059JywgJzEnKTtcbiAgfVxuXG4gIHNldEZpbHRlciA9IChlKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAoZmlsdGVyVmFsdWUgIT09ICcnICYmICF0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlclZhbHVlLCBpc09wZW46IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJWYWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBibHVySW5wdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGUodHJ1ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c09uQ2hpbGQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVySXRlbXMgPSAoaXRlbXMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHRoaXMuc3RhdGUuZmlsdGVyVmFsdWVcbiAgICAgIC5yZXBsYWNlKC9cXHMvZywgJycpIC8vIHJlbW92ZXMgc3BhY2UgY2hhcmFjdGVyc1xuICAgICAgLnJlcGxhY2UoL1tcXD9cXCpcXFtcXF1cXChcXClcXHtcXH1cXFxcXFxeXFwkXFwrXS9nLCAnXFxcXCQmJykgLy8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpID0+IGkubGFiZWwucmVwbGFjZSgvXFxzL2csICcnKS50b0xvd2VyQ2FzZSgpLm1hdGNoKGZpbHRlclZhbHVlKSAhPT0gbnVsbCk7XG4gIH1cblxuICBmb2N1c0lucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlKGZhbHNlKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlucHV0XyR7dGhpcy5wcm9wcy5pZH1gKTtcbiAgICBlbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBoYW5kbGVDbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSB0cnVlO1xuICAgIGlmICh0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5zaXplID4gMCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShMaXN0KCkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IEtFWV9DT0RFUy5ET1dOKSB7XG4gICAgICB0aGlzLmJsdXJJbnB1dCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSA9IChpc09wZW4pID0+IHtcbiAgICBpZiAodGhpcy5wcmV2ZW50VG9nZ2xlKSB7XG4gICAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCFpc09wZW4gJiYgdGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZSAhPT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4sIGlzRm9jdXNPbkNoaWxkOiBpc09wZW4sIGZpbHRlclZhbHVlOiAnJyB9KTtcbiAgICB9IGVsc2UgaWYgKCFpc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4sIGlzRm9jdXNPbkNoaWxkOiBpc09wZW4gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4gfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXRlbXMsXG4gICAgICBjaGVja2VkSXRlbXMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGRlZmF1bHRQbGFjZWhvbGRlcixcbiAgICAgIHRhYkluZGV4LFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGlucHV0ID0gKFxuICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLWlucHV0LWdyb3VwLWlucHV0XCJcbiAgICAgICAgaWQ9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLmdldFBsYWNlaG9sZGVyKGNoZWNrZWRJdGVtcywgaXRlbXMsIGRlZmF1bHRQbGFjZWhvbGRlcil9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNldEZpbHRlcn1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMuZm9jdXNJbnB1dH1cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgICBjb25zdCB0aXRsZSA9IChcbiAgICAgIDxUaXRsZUlucHV0XG4gICAgICAgIGlucHV0PXtpbnB1dH1cbiAgICAgICAgaXNDbGVhcmFibGU9eyhjaGVja2VkSXRlbXMgJiYgY2hlY2tlZEl0ZW1zLnNpemUgIT09IDApfVxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgb25DbGVhcj17dGhpcy5oYW5kbGVDbGVhcn1cbiAgICAgICAgb25Gb2N1cz17dGhpcy5mb2N1c0lucHV0fVxuICAgICAgLz5cbiAgICApO1xuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLnN0YXRlLmZpbHRlclZhbHVlID09PSAnJyA/IGl0ZW1zIDogdGhpcy5maWx0ZXJJdGVtcyhpdGVtcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtZHJvcGRvd24tbXVsdGktc2VsZWN0XCI+XG4gICAgICAgIDxEcm9wZG93bkNvbnRhaW5lclxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNPcGVufVxuICAgICAgICAgIG5vQ2FyZXRcbiAgICAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHVzZUFuY2hvclxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgPE11bHRpU2VsZWN0XG4gICAgICAgICAgICBjaGVja2VkSXRlbXM9e2NoZWNrZWRJdGVtc31cbiAgICAgICAgICAgIGl0ZW1zPXtmaWx0ZXJlZEl0ZW1zfVxuICAgICAgICAgICAgaXNGb2N1c2VkPXt0aGlzLnN0YXRlLmlzRm9jdXNPbkNoaWxkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgb25QYXJlbnRGb2N1cz17dGhpcy5mb2N1c0lucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRHJvcGRvd25Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=