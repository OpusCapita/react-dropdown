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

var _titleInputComponent = require('./title-input/title-input.component.jsx');

var _titleInputComponent2 = _interopRequireDefault(_titleInputComponent);

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
    var title = _react2.default.createElement(_titleInputComponent2.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRHJvcGRvd25NdWx0aVNlbGVjdCIsInByb3BzIiwiZ2V0UGxhY2Vob2xkZXIiLCJjaGVja2VkSXRlbXMiLCJpdGVtcyIsImRlZmF1bHRQbGFjZWhvbGRlciIsInNpemUiLCJyZXBsYWNlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpIiwidmFsdWUiLCJnZXQiLCJsYWJlbFBsYWNlaG9sZGVyIiwidW5kZWZpbmVkIiwibGFiZWwiLCJzZXRGaWx0ZXIiLCJlIiwiZmlsdGVyVmFsdWUiLCJ0YXJnZXQiLCJzdGF0ZSIsImlzT3BlbiIsInNldFN0YXRlIiwiYmx1cklucHV0IiwiaGFuZGxlVG9nZ2xlIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsImlzRm9jdXNPbkNoaWxkIiwiZmlsdGVySXRlbXMiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsIm1hdGNoIiwiZm9jdXNJbnB1dCIsImVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZm9jdXMiLCJoYW5kbGVDbGVhciIsInByZXZlbnRUb2dnbGUiLCJvbkNoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiRE9XTiIsInJlbmRlciIsInRhYkluZGV4Iiwib3RoZXJQcm9wcyIsImlucHV0IiwidGl0bGUiLCJmaWx0ZXJlZEl0ZW1zIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OzttQkFBQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7QUF5Qm5CLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztB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QXlDQyxrQkFBekMsQ0FIZjtBQUlFLGdCQUFVLEtBQUtXLFNBSmpCO0FBS0UsbUJBQWEsS0FBS2tCLFVBTHBCO0FBTUUsaUJBQVcsS0FBS1EsYUFObEI7QUFPRSxnQkFBVUksUUFQWjtBQVFFLFlBQUssTUFSUDtBQVNFLGFBQU8sS0FBSzFCLEtBQUwsQ0FBV0Y7QUFUcEIsTUFERjtBQWFBLFFBQU0rQixRQUNKO0FBQ0UsYUFBT0QsS0FEVDtBQUVFLGVBQVMsS0FBS1Q7QUFGaEIsTUFERjtBQU1BLFFBQU1XLGdCQUFnQixLQUFLOUIsS0FBTCxDQUFXRixXQUFYLEtBQTJCLEVBQTNCLEdBQWdDZCxLQUFoQyxHQUF3QyxLQUFLMEIsV0FBTCxDQUFpQjFCLEtBQWpCLENBQTlEO0FBQ0EsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLDBCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsY0FBSWlDLEVBRE47QUFFRSxrQkFBUSxLQUFLakIsS0FBTCxDQUFXQyxNQUZyQjtBQUdFLHVCQUhGO0FBSUUsb0JBQVUsS0FBS0csWUFKakI7QUFLRSxpQkFBT3lCLEtBTFQ7QUFNRTtBQU5GLFdBT01GLFVBUE47QUFTRTtBQUNFLHdCQUFjNUMsWUFEaEI7QUFFRSxpQkFBTytDLGFBRlQ7QUFHRSxxQkFBVyxLQUFLOUIsS0FBTCxDQUFXUyxjQUh4QjtBQUlFLG9CQUFVWSxRQUpaO0FBS0UseUJBQWUsS0FBS1A7QUFMdEI7QUFURjtBQURGLEtBREY7QUFxQkQsRzs7O0VBcko4QyxnQkFBTWlCLGEsVUFrQjlDQyxZLEdBQWU7QUFDcEJqRCxnQkFBYyxzQkFETTtBQUVwQkUsc0JBQW9CLG9CQUZBO0FBR3BCb0MsWUFBVSxvQkFBTSxDQUFFLENBSEU7QUFJcEJLLFlBQVU7QUFKVSxDO2tCQWxCSDlDLG1CIiwiZmlsZSI6ImRyb3Bkb3duLW11bHRpLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcblxuaW1wb3J0IEtFWV9DT0RFUyBmcm9tICcuLi9jb25zdGFudHMva2V5LWNvZGVzLmNvbnN0YW50JztcbmltcG9ydCBEcm9wZG93bkNvbnRhaW5lciBmcm9tICcuLi9kcm9wZG93bi1jb250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgTXVsdGlTZWxlY3QgZnJvbSAnLi4vbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IFRpdGxlSW5wdXQgZnJvbSAnLi90aXRsZS1pbnB1dC90aXRsZS1pbnB1dC5jb21wb25lbnQuanN4JztcbmltcG9ydCAnLi9kcm9wZG93bi1tdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk11bHRpU2VsZWN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hlY2tlZEl0ZW1zOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgICBkZWZhdWx0UGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxhYmVsUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWRJdGVtczogTGlzdCgpLFxuICAgIGRlZmF1bHRQbGFjZWhvbGRlcjogJ3tOfSBpdGVtcyBzZWxlY3RlZCcsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHRhYkluZGV4OiAxLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzT3BlbjogZmFsc2UsIGlzRm9jdXNPbkNoaWxkOiBmYWxzZSwgZmlsdGVyVmFsdWU6ICcnIH07XG4gICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gZmFsc2U7XG4gIH1cblxuICBnZXRQbGFjZWhvbGRlciA9IChjaGVja2VkSXRlbXMsIGl0ZW1zLCBkZWZhdWx0UGxhY2Vob2xkZXIpID0+IHtcbiAgICBpZiAoY2hlY2tlZEl0ZW1zLnNpemUgPT09IDAgfHwgY2hlY2tlZEl0ZW1zLnNpemUgPiAxKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFBsYWNlaG9sZGVyLnJlcGxhY2UoJ3tOfScsIGNoZWNrZWRJdGVtcy5zaXplKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrZWRJdGVtcy5zaXplID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleChpID0+IGkudmFsdWUgPT09IGNoZWNrZWRJdGVtcy5nZXQoMCkpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zW2luZGV4XS5sYWJlbFBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgIGl0ZW1zW2luZGV4XS5sYWJlbFBsYWNlaG9sZGVyIDogaXRlbXNbaW5kZXhdLmxhYmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFBsYWNlaG9sZGVyLnJlcGxhY2UoJ3tOfScsICcxJyk7XG4gIH1cblxuICBzZXRGaWx0ZXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKGZpbHRlclZhbHVlICE9PSAnJyAmJiAhdGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJWYWx1ZSwgaXNPcGVuOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyVmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgYmx1cklucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlKHRydWUpO1xuICAgIGlmICh0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNPbkNoaWxkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckl0ZW1zID0gKGl0ZW1zKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB0aGlzLnN0YXRlLmZpbHRlclZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGkgPT4gaS5sYWJlbC5yZXBsYWNlKC9cXHMvZywgJycpLnRvTG93ZXJDYXNlKCkubWF0Y2goZmlsdGVyVmFsdWUpICE9PSBudWxsKTtcbiAgfVxuXG4gIGZvY3VzSW5wdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVUb2dnbGUoZmFsc2UpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaW5wdXRfJHt0aGlzLnByb3BzLmlkfWApO1xuICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xuICAgIHRoaXMucHJldmVudFRvZ2dsZSA9IHRydWU7XG4gICAgaWYgKHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLnNpemUgPiAwKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKExpc3QoKSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZX0NPREVTLkRPV04pIHtcbiAgICAgIHRoaXMuYmx1cklucHV0KCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVG9nZ2xlID0gKGlzT3BlbikgPT4ge1xuICAgIGlmICh0aGlzLnByZXZlbnRUb2dnbGUpIHtcbiAgICAgIHRoaXMucHJldmVudFRvZ2dsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoIWlzT3BlbiAmJiB0aGlzLnN0YXRlLmZpbHRlclZhbHVlICE9PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbiwgaXNGb2N1c09uQ2hpbGQ6IGlzT3BlbiwgZmlsdGVyVmFsdWU6ICcnIH0pO1xuICAgIH0gZWxzZSBpZiAoIWlzT3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbiwgaXNGb2N1c09uQ2hpbGQ6IGlzT3BlbiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbiB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpdGVtcyxcbiAgICAgIGNoZWNrZWRJdGVtcyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgZGVmYXVsdFBsYWNlaG9sZGVyLFxuICAgICAgdGFiSW5kZXgsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5wdXQgPSAoXG4gICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPVwib2MtaW5wdXQtZ3JvdXAtaW5wdXRcIlxuICAgICAgICBpZD17YGlucHV0XyR7aWR9YH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMuZ2V0UGxhY2Vob2xkZXIoY2hlY2tlZEl0ZW1zLCBpdGVtcywgZGVmYXVsdFBsYWNlaG9sZGVyKX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0RmlsdGVyfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5mb2N1c0lucHV0fVxuICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlclZhbHVlfVxuICAgICAgLz5cbiAgICApO1xuICAgIGNvbnN0IHRpdGxlID0gKFxuICAgICAgPFRpdGxlSW5wdXRcbiAgICAgICAgaW5wdXQ9e2lucHV0fVxuICAgICAgICBvbkNsZWFyPXt0aGlzLmhhbmRsZUNsZWFyfVxuICAgICAgLz5cbiAgICApO1xuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLnN0YXRlLmZpbHRlclZhbHVlID09PSAnJyA/IGl0ZW1zIDogdGhpcy5maWx0ZXJJdGVtcyhpdGVtcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtZHJvcGRvd24tbXVsdGktc2VsZWN0XCI+XG4gICAgICAgIDxEcm9wZG93bkNvbnRhaW5lclxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNPcGVufVxuICAgICAgICAgIG5vQ2FyZXRcbiAgICAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHVzZUFuY2hvclxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgPE11bHRpU2VsZWN0XG4gICAgICAgICAgICBjaGVja2VkSXRlbXM9e2NoZWNrZWRJdGVtc31cbiAgICAgICAgICAgIGl0ZW1zPXtmaWx0ZXJlZEl0ZW1zfVxuICAgICAgICAgICAgaXNGb2N1c2VkPXt0aGlzLnN0YXRlLmlzRm9jdXNPbkNoaWxkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgb25QYXJlbnRGb2N1cz17dGhpcy5mb2N1c0lucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRHJvcGRvd25Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=