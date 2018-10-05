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
      onClear: this.handleClear
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRHJvcGRvd25NdWx0aVNlbGVjdCIsInByb3BzIiwiZ2V0UGxhY2Vob2xkZXIiLCJjaGVja2VkSXRlbXMiLCJpdGVtcyIsImRlZmF1bHRQbGFjZWhvbGRlciIsInNpemUiLCJyZXBsYWNlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpIiwidmFsdWUiLCJnZXQiLCJsYWJlbFBsYWNlaG9sZGVyIiwidW5kZWZpbmVkIiwibGFiZWwiLCJzZXRGaWx0ZXIiLCJlIiwiZmlsdGVyVmFsdWUiLCJ0YXJnZXQiLCJzdGF0ZSIsImlzT3BlbiIsInNldFN0YXRlIiwiYmx1cklucHV0IiwiaGFuZGxlVG9nZ2xlIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsImlzRm9jdXNPbkNoaWxkIiwiZmlsdGVySXRlbXMiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsIm1hdGNoIiwiZm9jdXNJbnB1dCIsImVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZm9jdXMiLCJoYW5kbGVDbGVhciIsInByZXZlbnRUb2dnbGUiLCJvbkNoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiRE9XTiIsInJlbmRlciIsInRhYkluZGV4Iiwib3RoZXJQcm9wcyIsImlucHV0IiwidGl0bGUiLCJmaWx0ZXJlZEl0ZW1zIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OzttQkFBQTtBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7OztBQXlCbkIsK0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FE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bGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2VsZXNzLWVzY2FwZSAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcblxuaW1wb3J0IEtFWV9DT0RFUyBmcm9tICcuLi9jb25zdGFudHMva2V5LWNvZGVzLmNvbnN0YW50JztcbmltcG9ydCBEcm9wZG93bkNvbnRhaW5lciBmcm9tICcuLi9kcm9wZG93bi1jb250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgTXVsdGlTZWxlY3QgZnJvbSAnLi4vbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IFRpdGxlSW5wdXQgZnJvbSAnLi90aXRsZS1pbnB1dC90aXRsZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2Ryb3Bkb3duLW11bHRpLXNlbGVjdC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duTXVsdGlTZWxlY3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGVja2VkSXRlbXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIGRlZmF1bHRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGFiZWxQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBdKS5pc1JlcXVpcmVkLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZEl0ZW1zOiBMaXN0KCksXG4gICAgZGVmYXVsdFBsYWNlaG9sZGVyOiAne059IGl0ZW1zIHNlbGVjdGVkJyxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgdGFiSW5kZXg6IDEsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNPcGVuOiBmYWxzZSwgaXNGb2N1c09uQ2hpbGQ6IGZhbHNlLCBmaWx0ZXJWYWx1ZTogJycgfTtcbiAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyID0gKGNoZWNrZWRJdGVtcywgaXRlbXMsIGRlZmF1bHRQbGFjZWhvbGRlcikgPT4ge1xuICAgIGlmIChjaGVja2VkSXRlbXMuc2l6ZSA9PT0gMCB8fCBjaGVja2VkSXRlbXMuc2l6ZSA+IDEpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0UGxhY2Vob2xkZXIucmVwbGFjZSgne059JywgY2hlY2tlZEl0ZW1zLnNpemUpO1xuICAgIH1cbiAgICBpZiAoY2hlY2tlZEl0ZW1zLnNpemUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KGkgPT4gaS52YWx1ZSA9PT0gY2hlY2tlZEl0ZW1zLmdldCgwKSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICByZXR1cm4gaXRlbXNbaW5kZXhdLmxhYmVsUGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgaXRlbXNbaW5kZXhdLmxhYmVsUGxhY2Vob2xkZXIgOiBpdGVtc1tpbmRleF0ubGFiZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0UGxhY2Vob2xkZXIucmVwbGFjZSgne059JywgJzEnKTtcbiAgfVxuXG4gIHNldEZpbHRlciA9IChlKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAoZmlsdGVyVmFsdWUgIT09ICcnICYmICF0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlclZhbHVlLCBpc09wZW46IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJWYWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBibHVySW5wdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGUodHJ1ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c09uQ2hpbGQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVySXRlbXMgPSAoaXRlbXMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHRoaXMuc3RhdGUuZmlsdGVyVmFsdWVcbiAgICAgIC5yZXBsYWNlKC9cXHMvZywgJycpIC8vIHJlbW92ZXMgc3BhY2UgY2hhcmFjdGVyc1xuICAgICAgLnJlcGxhY2UoL1tcXD9cXCpcXFtcXF1cXChcXClcXHtcXH1cXFxcXFxeXFwkXFwrXS9nLCAnXFxcXCQmJykgLy8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpID0+IGkubGFiZWwucmVwbGFjZSgvXFxzL2csICcnKS50b0xvd2VyQ2FzZSgpLm1hdGNoKGZpbHRlclZhbHVlKSAhPT0gbnVsbCk7XG4gIH1cblxuICBmb2N1c0lucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlKGZhbHNlKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlucHV0XyR7dGhpcy5wcm9wcy5pZH1gKTtcbiAgICBlbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBoYW5kbGVDbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSB0cnVlO1xuICAgIGlmICh0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5zaXplID4gMCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShMaXN0KCkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IEtFWV9DT0RFUy5ET1dOKSB7XG4gICAgICB0aGlzLmJsdXJJbnB1dCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSA9IChpc09wZW4pID0+IHtcbiAgICBpZiAodGhpcy5wcmV2ZW50VG9nZ2xlKSB7XG4gICAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCFpc09wZW4gJiYgdGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZSAhPT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4sIGlzRm9jdXNPbkNoaWxkOiBpc09wZW4sIGZpbHRlclZhbHVlOiAnJyB9KTtcbiAgICB9IGVsc2UgaWYgKCFpc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4sIGlzRm9jdXNPbkNoaWxkOiBpc09wZW4gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4gfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXRlbXMsXG4gICAgICBjaGVja2VkSXRlbXMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGRlZmF1bHRQbGFjZWhvbGRlcixcbiAgICAgIHRhYkluZGV4LFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlucHV0ID0gKFxuICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLWlucHV0LWdyb3VwLWlucHV0XCJcbiAgICAgICAgaWQ9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLmdldFBsYWNlaG9sZGVyKGNoZWNrZWRJdGVtcywgaXRlbXMsIGRlZmF1bHRQbGFjZWhvbGRlcil9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNldEZpbHRlcn1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMuZm9jdXNJbnB1dH1cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgICBjb25zdCB0aXRsZSA9IChcbiAgICAgIDxUaXRsZUlucHV0XG4gICAgICAgIGlucHV0PXtpbnB1dH1cbiAgICAgICAgb25DbGVhcj17dGhpcy5oYW5kbGVDbGVhcn1cbiAgICAgIC8+XG4gICAgKTtcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZSA9PT0gJycgPyBpdGVtcyA6IHRoaXMuZmlsdGVySXRlbXMoaXRlbXMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLWRyb3Bkb3duLW11bHRpLXNlbGVjdFwiPlxuICAgICAgICA8RHJvcGRvd25Db250YWluZXJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn1cbiAgICAgICAgICBub0NhcmV0XG4gICAgICAgICAgb25Ub2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICB1c2VBbmNob3JcbiAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIDxNdWx0aVNlbGVjdFxuICAgICAgICAgICAgY2hlY2tlZEl0ZW1zPXtjaGVja2VkSXRlbXN9XG4gICAgICAgICAgICBpdGVtcz17ZmlsdGVyZWRJdGVtc31cbiAgICAgICAgICAgIGlzRm9jdXNlZD17dGhpcy5zdGF0ZS5pc0ZvY3VzT25DaGlsZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIG9uUGFyZW50Rm9jdXM9e3RoaXMuZm9jdXNJbnB1dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Ryb3Bkb3duQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19