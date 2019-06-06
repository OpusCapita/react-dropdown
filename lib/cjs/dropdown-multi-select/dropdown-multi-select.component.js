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
        isClearable = _props.isClearable,
        items = _props.items,
        checkedItems = _props.checkedItems,
        onChange = _props.onChange,
        defaultPlaceholder = _props.defaultPlaceholder,
        tabIndex = _props.tabIndex,
        otherProps = _objectWithoutProperties(_props, ['id', 'isClearable', 'items', 'checkedItems', 'onChange', 'defaultPlaceholder', 'tabIndex']);

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
      isClearable: isClearable && checkedItems && checkedItems.size !== 0,
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
  isClearable: true,
  onChange: function onChange() {},
  tabIndex: 1
}, _temp);
exports.default = DropdownMultiSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRHJvcGRvd25NdWx0aVNlbGVjdCIsInByb3BzIiwiZ2V0UGxhY2Vob2xkZXIiLCJjaGVja2VkSXRlbXMiLCJpdGVtcyIsImRlZmF1bHRQbGFjZWhvbGRlciIsInNpemUiLCJyZXBsYWNlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpIiwidmFsdWUiLCJnZXQiLCJsYWJlbFBsYWNlaG9sZGVyIiwidW5kZWZpbmVkIiwibGFiZWwiLCJzZXRGaWx0ZXIiLCJlIiwiZmlsdGVyVmFsdWUiLCJ0YXJnZXQiLCJzdGF0ZSIsImlzT3BlbiIsInNldFN0YXRlIiwiYmx1cklucHV0IiwiaGFuZGxlVG9nZ2xlIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsImlzRm9jdXNPbkNoaWxkIiwiZmlsdGVySXRlbXMiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsIm1hdGNoIiwiZm9jdXNJbnB1dCIsImVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZm9jdXMiLCJoYW5kbGVDbGVhciIsInByZXZlbnRUb2dnbGUiLCJvbkNoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiS0VZX0NPREVTIiwiRE9XTiIsInJlbmRlciIsImlzQ2xlYXJhYmxlIiwidGFiSW5kZXgiLCJvdGhlclByb3BzIiwiaW5wdXQiLCJ0aXRsZSIsImZpbHRlcmVkSXRlbXMiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7bUJBQUE7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7QUEyQm5CLCtCQUFZQyxLQUFaLEVBQW1C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QUFlLEtBQUtQO0FBTHRCO0FBVEY7QUFERixLQURGO0FBcUJELEc7OztFQS9KOENtQixnQkFBTUMsYSxVQW1COUNDLFksR0FBZTtBQUNwQnBELGdCQUFjLHNCQURNO0FBRXBCRSxzQkFBb0Isb0JBRkE7QUFHcEIwQyxlQUFhLElBSE87QUFJcEJOLFlBQVUsb0JBQU0sQ0FBRSxDQUpFO0FBS3BCTyxZQUFVO0FBTFUsQztrQkFuQkhoRCxtQiIsImZpbGUiOiJkcm9wZG93bi1tdWx0aS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtZXNjYXBlICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgS0VZX0NPREVTIGZyb20gJy4uL2NvbnN0YW50cy9rZXktY29kZXMuY29uc3RhbnQnO1xuaW1wb3J0IERyb3Bkb3duQ29udGFpbmVyIGZyb20gJy4uL2Ryb3Bkb3duLWNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBNdWx0aVNlbGVjdCBmcm9tICcuLi9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgVGl0bGVJbnB1dCBmcm9tICcuL3RpdGxlLWlucHV0L3RpdGxlLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25NdWx0aVNlbGVjdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoZWNrZWRJdGVtczogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXG4gICAgZGVmYXVsdFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICBpc0NsZWFyYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGFiZWxQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBdKS5pc1JlcXVpcmVkLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZEl0ZW1zOiBMaXN0KCksXG4gICAgZGVmYXVsdFBsYWNlaG9sZGVyOiAne059IGl0ZW1zIHNlbGVjdGVkJyxcbiAgICBpc0NsZWFyYWJsZTogdHJ1ZSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgdGFiSW5kZXg6IDEsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNPcGVuOiBmYWxzZSwgaXNGb2N1c09uQ2hpbGQ6IGZhbHNlLCBmaWx0ZXJWYWx1ZTogJycgfTtcbiAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyID0gKGNoZWNrZWRJdGVtcywgaXRlbXMsIGRlZmF1bHRQbGFjZWhvbGRlcikgPT4ge1xuICAgIGlmIChjaGVja2VkSXRlbXMuc2l6ZSA9PT0gMCB8fCBjaGVja2VkSXRlbXMuc2l6ZSA+IDEpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0UGxhY2Vob2xkZXIucmVwbGFjZSgne059JywgY2hlY2tlZEl0ZW1zLnNpemUpO1xuICAgIH1cbiAgICBpZiAoY2hlY2tlZEl0ZW1zLnNpemUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KGkgPT4gaS52YWx1ZSA9PT0gY2hlY2tlZEl0ZW1zLmdldCgwKSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICByZXR1cm4gaXRlbXNbaW5kZXhdLmxhYmVsUGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgaXRlbXNbaW5kZXhdLmxhYmVsUGxhY2Vob2xkZXIgOiBpdGVtc1tpbmRleF0ubGFiZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0UGxhY2Vob2xkZXIucmVwbGFjZSgne059JywgJzEnKTtcbiAgfVxuXG4gIHNldEZpbHRlciA9IChlKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAoZmlsdGVyVmFsdWUgIT09ICcnICYmICF0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlclZhbHVlLCBpc09wZW46IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJWYWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBibHVySW5wdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGUodHJ1ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c09uQ2hpbGQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVySXRlbXMgPSAoaXRlbXMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHRoaXMuc3RhdGUuZmlsdGVyVmFsdWVcbiAgICAgIC5yZXBsYWNlKC9cXHMvZywgJycpIC8vIHJlbW92ZXMgc3BhY2UgY2hhcmFjdGVyc1xuICAgICAgLnJlcGxhY2UoL1tcXD9cXCpcXFtcXF1cXChcXClcXHtcXH1cXFxcXFxeXFwkXFwrXS9nLCAnXFxcXCQmJykgLy8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpID0+IGkubGFiZWwucmVwbGFjZSgvXFxzL2csICcnKS50b0xvd2VyQ2FzZSgpLm1hdGNoKGZpbHRlclZhbHVlKSAhPT0gbnVsbCk7XG4gIH1cblxuICBmb2N1c0lucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlKGZhbHNlKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlucHV0XyR7dGhpcy5wcm9wcy5pZH1gKTtcbiAgICBlbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBoYW5kbGVDbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSB0cnVlO1xuICAgIGlmICh0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5zaXplID4gMCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShMaXN0KCkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IEtFWV9DT0RFUy5ET1dOKSB7XG4gICAgICB0aGlzLmJsdXJJbnB1dCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSA9IChpc09wZW4pID0+IHtcbiAgICBpZiAodGhpcy5wcmV2ZW50VG9nZ2xlKSB7XG4gICAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCFpc09wZW4gJiYgdGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZSAhPT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4sIGlzRm9jdXNPbkNoaWxkOiBpc09wZW4sIGZpbHRlclZhbHVlOiAnJyB9KTtcbiAgICB9IGVsc2UgaWYgKCFpc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4sIGlzRm9jdXNPbkNoaWxkOiBpc09wZW4gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4gfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXNDbGVhcmFibGUsXG4gICAgICBpdGVtcyxcbiAgICAgIGNoZWNrZWRJdGVtcyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgZGVmYXVsdFBsYWNlaG9sZGVyLFxuICAgICAgdGFiSW5kZXgsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc09wZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaW5wdXQgPSAoXG4gICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPVwib2MtaW5wdXQtZ3JvdXAtaW5wdXRcIlxuICAgICAgICBpZD17YGlucHV0XyR7aWR9YH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMuZ2V0UGxhY2Vob2xkZXIoY2hlY2tlZEl0ZW1zLCBpdGVtcywgZGVmYXVsdFBsYWNlaG9sZGVyKX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0RmlsdGVyfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5mb2N1c0lucHV0fVxuICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlclZhbHVlfVxuICAgICAgLz5cbiAgICApO1xuICAgIGNvbnN0IHRpdGxlID0gKFxuICAgICAgPFRpdGxlSW5wdXRcbiAgICAgICAgaW5wdXQ9e2lucHV0fVxuICAgICAgICBpc0NsZWFyYWJsZT17aXNDbGVhcmFibGUgJiYgKGNoZWNrZWRJdGVtcyAmJiBjaGVja2VkSXRlbXMuc2l6ZSAhPT0gMCl9XG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICBvbkNsZWFyPXt0aGlzLmhhbmRsZUNsZWFyfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLmZvY3VzSW5wdXR9XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUgPT09ICcnID8gaXRlbXMgOiB0aGlzLmZpbHRlckl0ZW1zKGl0ZW1zKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1kcm9wZG93bi1tdWx0aS1zZWxlY3RcIj5cbiAgICAgICAgPERyb3Bkb3duQ29udGFpbmVyXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgbm9DYXJldFxuICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgdXNlQW5jaG9yXG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgICAgIGNoZWNrZWRJdGVtcz17Y2hlY2tlZEl0ZW1zfVxuICAgICAgICAgICAgaXRlbXM9e2ZpbHRlcmVkSXRlbXN9XG4gICAgICAgICAgICBpc0ZvY3VzZWQ9e3RoaXMuc3RhdGUuaXNGb2N1c09uQ2hpbGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBvblBhcmVudEZvY3VzPXt0aGlzLmZvY3VzSW5wdXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Ecm9wZG93bkNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==