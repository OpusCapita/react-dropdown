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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRHJvcGRvd25NdWx0aVNlbGVjdCIsInByb3BzIiwiZ2V0UGxhY2Vob2xkZXIiLCJjaGVja2VkSXRlbXMiLCJpdGVtcyIsImRlZmF1bHRQbGFjZWhvbGRlciIsInNpemUiLCJyZXBsYWNlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpIiwidmFsdWUiLCJnZXQiLCJsYWJlbFBsYWNlaG9sZGVyIiwidW5kZWZpbmVkIiwibGFiZWwiLCJzZXRGaWx0ZXIiLCJlIiwiZmlsdGVyVmFsdWUiLCJ0YXJnZXQiLCJzdGF0ZSIsImlzT3BlbiIsInNldFN0YXRlIiwiYmx1cklucHV0IiwiaGFuZGxlVG9nZ2xlIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsImlzRm9jdXNPbkNoaWxkIiwiZmlsdGVySXRlbXMiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsIm1hdGNoIiwiZm9jdXNJbnB1dCIsImVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZm9jdXMiLCJoYW5kbGVDbGVhciIsInByZXZlbnRUb2dnbGUiLCJvbkNoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiS0VZX0NPREVTIiwiRE9XTiIsInJlbmRlciIsInRhYkluZGV4Iiwib3RoZXJQcm9wcyIsImlucHV0IiwidGl0bGUiLCJmaWx0ZXJlZEl0ZW1zIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O21CQUFBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxtQjs7O0FBeUJuQiwrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlE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ZSI6ImRyb3Bkb3duLW11bHRpLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1lc2NhcGUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCBLRVlfQ09ERVMgZnJvbSAnLi4vY29uc3RhbnRzL2tleS1jb2Rlcy5jb25zdGFudCc7XG5pbXBvcnQgRHJvcGRvd25Db250YWluZXIgZnJvbSAnLi4vZHJvcGRvd24tY29udGFpbmVyL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IE11bHRpU2VsZWN0IGZyb20gJy4uL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCBUaXRsZUlucHV0IGZyb20gJy4vdGl0bGUtaW5wdXQvdGl0bGUtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCAnLi9kcm9wZG93bi1tdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk11bHRpU2VsZWN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hlY2tlZEl0ZW1zOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgICBkZWZhdWx0UGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxhYmVsUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWRJdGVtczogTGlzdCgpLFxuICAgIGRlZmF1bHRQbGFjZWhvbGRlcjogJ3tOfSBpdGVtcyBzZWxlY3RlZCcsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHRhYkluZGV4OiAxLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzT3BlbjogZmFsc2UsIGlzRm9jdXNPbkNoaWxkOiBmYWxzZSwgZmlsdGVyVmFsdWU6ICcnIH07XG4gICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gZmFsc2U7XG4gIH1cblxuICBnZXRQbGFjZWhvbGRlciA9IChjaGVja2VkSXRlbXMsIGl0ZW1zLCBkZWZhdWx0UGxhY2Vob2xkZXIpID0+IHtcbiAgICBpZiAoY2hlY2tlZEl0ZW1zLnNpemUgPT09IDAgfHwgY2hlY2tlZEl0ZW1zLnNpemUgPiAxKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFBsYWNlaG9sZGVyLnJlcGxhY2UoJ3tOfScsIGNoZWNrZWRJdGVtcy5zaXplKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrZWRJdGVtcy5zaXplID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleChpID0+IGkudmFsdWUgPT09IGNoZWNrZWRJdGVtcy5nZXQoMCkpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zW2luZGV4XS5sYWJlbFBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgIGl0ZW1zW2luZGV4XS5sYWJlbFBsYWNlaG9sZGVyIDogaXRlbXNbaW5kZXhdLmxhYmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFBsYWNlaG9sZGVyLnJlcGxhY2UoJ3tOfScsICcxJyk7XG4gIH1cblxuICBzZXRGaWx0ZXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKGZpbHRlclZhbHVlICE9PSAnJyAmJiAhdGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJWYWx1ZSwgaXNPcGVuOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyVmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgYmx1cklucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlKHRydWUpO1xuICAgIGlmICh0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNPbkNoaWxkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckl0ZW1zID0gKGl0ZW1zKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB0aGlzLnN0YXRlLmZpbHRlclZhbHVlXG4gICAgICAucmVwbGFjZSgvXFxzL2csICcnKSAvLyByZW1vdmVzIHNwYWNlIGNoYXJhY3RlcnNcbiAgICAgIC5yZXBsYWNlKC9bXFw/XFwqXFxbXFxdXFwoXFwpXFx7XFx9XFxcXFxcXlxcJFxcK10vZywgJ1xcXFwkJicpIC8vIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaSA9PiBpLmxhYmVsLnJlcGxhY2UoL1xccy9nLCAnJykudG9Mb3dlckNhc2UoKS5tYXRjaChmaWx0ZXJWYWx1ZSkgIT09IG51bGwpO1xuICB9XG5cbiAgZm9jdXNJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZShmYWxzZSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnB1dF8ke3RoaXMucHJvcHMuaWR9YCk7XG4gICAgZWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMuc2l6ZSA+IDApIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoTGlzdCgpKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlfQ09ERVMuRE9XTikge1xuICAgICAgdGhpcy5ibHVySW5wdXQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUb2dnbGUgPSAoaXNPcGVuKSA9PiB7XG4gICAgaWYgKHRoaXMucHJldmVudFRvZ2dsZSkge1xuICAgICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghaXNPcGVuICYmIHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUgIT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuLCBpc0ZvY3VzT25DaGlsZDogaXNPcGVuLCBmaWx0ZXJWYWx1ZTogJycgfSk7XG4gICAgfSBlbHNlIGlmICghaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuLCBpc0ZvY3VzT25DaGlsZDogaXNPcGVuIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGl0ZW1zLFxuICAgICAgY2hlY2tlZEl0ZW1zLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBkZWZhdWx0UGxhY2Vob2xkZXIsXG4gICAgICB0YWJJbmRleCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dCA9IChcbiAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICBjbGFzc05hbWU9XCJvYy1pbnB1dC1ncm91cC1pbnB1dFwiXG4gICAgICAgIGlkPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5nZXRQbGFjZWhvbGRlcihjaGVja2VkSXRlbXMsIGl0ZW1zLCBkZWZhdWx0UGxhY2Vob2xkZXIpfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXRGaWx0ZXJ9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmZvY3VzSW5wdXR9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyVmFsdWV9XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgdGl0bGUgPSAoXG4gICAgICA8VGl0bGVJbnB1dFxuICAgICAgICBpbnB1dD17aW5wdXR9XG4gICAgICAgIG9uQ2xlYXI9e3RoaXMuaGFuZGxlQ2xlYXJ9XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMuc3RhdGUuZmlsdGVyVmFsdWUgPT09ICcnID8gaXRlbXMgOiB0aGlzLmZpbHRlckl0ZW1zKGl0ZW1zKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1kcm9wZG93bi1tdWx0aS1zZWxlY3RcIj5cbiAgICAgICAgPERyb3Bkb3duQ29udGFpbmVyXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgbm9DYXJldFxuICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgdXNlQW5jaG9yXG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgICAgIGNoZWNrZWRJdGVtcz17Y2hlY2tlZEl0ZW1zfVxuICAgICAgICAgICAgaXRlbXM9e2ZpbHRlcmVkSXRlbXN9XG4gICAgICAgICAgICBpc0ZvY3VzZWQ9e3RoaXMuc3RhdGUuaXNGb2N1c09uQ2hpbGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBvblBhcmVudEZvY3VzPXt0aGlzLmZvY3VzSW5wdXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Ecm9wZG93bkNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==