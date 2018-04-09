'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /* eslint-disable import/extensions */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRHJvcGRvd25NdWx0aVNlbGVjdCIsInByb3BzIiwiZ2V0UGxhY2Vob2xkZXIiLCJjaGVja2VkSXRlbXMiLCJpdGVtcyIsImRlZmF1bHRQbGFjZWhvbGRlciIsInNpemUiLCJyZXBsYWNlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpIiwidmFsdWUiLCJnZXQiLCJsYWJlbFBsYWNlaG9sZGVyIiwidW5kZWZpbmVkIiwibGFiZWwiLCJzZXRGaWx0ZXIiLCJlIiwiZmlsdGVyVmFsdWUiLCJ0YXJnZXQiLCJzdGF0ZSIsImlzT3BlbiIsInNldFN0YXRlIiwiYmx1cklucHV0IiwiaGFuZGxlVG9nZ2xlIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsImlzRm9jdXNPbkNoaWxkIiwiZmlsdGVySXRlbXMiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsIm1hdGNoIiwiZm9jdXNJbnB1dCIsImVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZm9jdXMiLCJoYW5kbGVDbGVhciIsInByZXZlbnRUb2dnbGUiLCJvbkNoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiRE9XTiIsInJlbmRlciIsInRhYkluZGV4Iiwib3RoZXJQcm9wcyIsImlucHV0IiwidGl0bGUiLCJmaWx0ZXJlZEl0ZW1zIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OzttQkFBQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7QUF5Qm5CLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztB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QXlDQyxrQkFBekMsQ0FIZjtBQUlFLGdCQUFVLEtBQUtXLFNBSmpCO0FBS0UsbUJBQWEsS0FBS2tCLFVBTHBCO0FBTUUsaUJBQVcsS0FBS1EsYUFObEI7QUFPRSxnQkFBVUksUUFQWjtBQVFFLFlBQUssTUFSUDtBQVNFLGFBQU8sS0FBSzFCLEtBQUwsQ0FBV0Y7QUFUcEIsTUFERjtBQWFBLFFBQU0rQixRQUNKO0FBQ0UsYUFBT0QsS0FEVDtBQUVFLGVBQVMsS0FBS1Q7QUFGaEIsTUFERjtBQU1BLFFBQU1XLGdCQUFnQixLQUFLOUIsS0FBTCxDQUFXRixXQUFYLEtBQTJCLEVBQTNCLEdBQWdDZCxLQUFoQyxHQUF3QyxLQUFLMEIsV0FBTCxDQUFpQjFCLEtBQWpCLENBQTlEO0FBQ0EsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLDBCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsY0FBSWlDLEVBRE47QUFFRSxrQkFBUSxLQUFLakIsS0FBTCxDQUFXQyxNQUZyQjtBQUdFLHVCQUhGO0FBSUUsb0JBQVUsS0FBS0csWUFKakI7QUFLRSxpQkFBT3lCLEtBTFQ7QUFNRTtBQU5GLFdBT01GLFVBUE47QUFTRTtBQUNFLHdCQUFjNUMsWUFEaEI7QUFFRSxpQkFBTytDLGFBRlQ7QUFHRSxxQkFBVyxLQUFLOUIsS0FBTCxDQUFXUyxjQUh4QjtBQUlFLG9CQUFVWSxRQUpaO0FBS0UseUJBQWUsS0FBS1A7QUFMdEI7QUFURjtBQURGLEtBREY7QUFxQkQsRzs7O0VBcko4QyxnQkFBTWlCLGEsVUFrQjlDQyxZLEdBQWU7QUFDcEJqRCxnQkFBYyxzQkFETTtBQUVwQkUsc0JBQW9CLG9CQUZBO0FBR3BCb0MsWUFBVSxvQkFBTSxDQUFFLENBSEU7QUFJcEJLLFlBQVU7QUFKVSxDO2tCQWxCSDlDLG1CIiwiZmlsZSI6ImRyb3Bkb3duLW11bHRpLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcblxuaW1wb3J0IEtFWV9DT0RFUyBmcm9tICcuLi9jb25zdGFudHMva2V5LWNvZGVzLmNvbnN0YW50JztcbmltcG9ydCBEcm9wZG93bkNvbnRhaW5lciBmcm9tICcuLi9kcm9wZG93bi1jb250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgTXVsdGlTZWxlY3QgZnJvbSAnLi4vbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IFRpdGxlSW5wdXQgZnJvbSAnLi90aXRsZS1pbnB1dC90aXRsZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2Ryb3Bkb3duLW11bHRpLXNlbGVjdC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duTXVsdGlTZWxlY3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGVja2VkSXRlbXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIGRlZmF1bHRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGFiZWxQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBdKS5pc1JlcXVpcmVkLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZEl0ZW1zOiBMaXN0KCksXG4gICAgZGVmYXVsdFBsYWNlaG9sZGVyOiAne059IGl0ZW1zIHNlbGVjdGVkJyxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgdGFiSW5kZXg6IDEsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNPcGVuOiBmYWxzZSwgaXNGb2N1c09uQ2hpbGQ6IGZhbHNlLCBmaWx0ZXJWYWx1ZTogJycgfTtcbiAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyID0gKGNoZWNrZWRJdGVtcywgaXRlbXMsIGRlZmF1bHRQbGFjZWhvbGRlcikgPT4ge1xuICAgIGlmIChjaGVja2VkSXRlbXMuc2l6ZSA9PT0gMCB8fCBjaGVja2VkSXRlbXMuc2l6ZSA+IDEpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0UGxhY2Vob2xkZXIucmVwbGFjZSgne059JywgY2hlY2tlZEl0ZW1zLnNpemUpO1xuICAgIH1cbiAgICBpZiAoY2hlY2tlZEl0ZW1zLnNpemUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KGkgPT4gaS52YWx1ZSA9PT0gY2hlY2tlZEl0ZW1zLmdldCgwKSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICByZXR1cm4gaXRlbXNbaW5kZXhdLmxhYmVsUGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgaXRlbXNbaW5kZXhdLmxhYmVsUGxhY2Vob2xkZXIgOiBpdGVtc1tpbmRleF0ubGFiZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0UGxhY2Vob2xkZXIucmVwbGFjZSgne059JywgJzEnKTtcbiAgfVxuXG4gIHNldEZpbHRlciA9IChlKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAoZmlsdGVyVmFsdWUgIT09ICcnICYmICF0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlclZhbHVlLCBpc09wZW46IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJWYWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBibHVySW5wdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGUodHJ1ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c09uQ2hpbGQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVySXRlbXMgPSAoaXRlbXMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUucmVwbGFjZSgvXFxzL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaSA9PiBpLmxhYmVsLnJlcGxhY2UoL1xccy9nLCAnJykudG9Mb3dlckNhc2UoKS5tYXRjaChmaWx0ZXJWYWx1ZSkgIT09IG51bGwpO1xuICB9XG5cbiAgZm9jdXNJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZShmYWxzZSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnB1dF8ke3RoaXMucHJvcHMuaWR9YCk7XG4gICAgZWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMuc2l6ZSA+IDApIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoTGlzdCgpKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlfQ09ERVMuRE9XTikge1xuICAgICAgdGhpcy5ibHVySW5wdXQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUb2dnbGUgPSAoaXNPcGVuKSA9PiB7XG4gICAgaWYgKHRoaXMucHJldmVudFRvZ2dsZSkge1xuICAgICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghaXNPcGVuICYmIHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUgIT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuLCBpc0ZvY3VzT25DaGlsZDogaXNPcGVuLCBmaWx0ZXJWYWx1ZTogJycgfSk7XG4gICAgfSBlbHNlIGlmICghaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuLCBpc0ZvY3VzT25DaGlsZDogaXNPcGVuIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGl0ZW1zLFxuICAgICAgY2hlY2tlZEl0ZW1zLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBkZWZhdWx0UGxhY2Vob2xkZXIsXG4gICAgICB0YWJJbmRleCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dCA9IChcbiAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICBjbGFzc05hbWU9XCJvYy1pbnB1dC1ncm91cC1pbnB1dFwiXG4gICAgICAgIGlkPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5nZXRQbGFjZWhvbGRlcihjaGVja2VkSXRlbXMsIGl0ZW1zLCBkZWZhdWx0UGxhY2Vob2xkZXIpfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXRGaWx0ZXJ9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmZvY3VzSW5wdXR9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyVmFsdWV9XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgdGl0bGUgPSAoXG4gICAgICA8VGl0bGVJbnB1dFxuICAgICAgICBpbnB1dD17aW5wdXR9XG4gICAgICAgIG9uQ2xlYXI9e3RoaXMuaGFuZGxlQ2xlYXJ9XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUgPT09ICcnID8gaXRlbXMgOiB0aGlzLmZpbHRlckl0ZW1zKGl0ZW1zKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1kcm9wZG93bi1tdWx0aS1zZWxlY3RcIj5cbiAgICAgICAgPERyb3Bkb3duQ29udGFpbmVyXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgbm9DYXJldFxuICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgdXNlQW5jaG9yXG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgICAgIGNoZWNrZWRJdGVtcz17Y2hlY2tlZEl0ZW1zfVxuICAgICAgICAgICAgaXRlbXM9e2ZpbHRlcmVkSXRlbXN9XG4gICAgICAgICAgICBpc0ZvY3VzZWQ9e3RoaXMuc3RhdGUuaXNGb2N1c09uQ2hpbGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBvblBhcmVudEZvY3VzPXt0aGlzLmZvY3VzSW5wdXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Ecm9wZG93bkNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==