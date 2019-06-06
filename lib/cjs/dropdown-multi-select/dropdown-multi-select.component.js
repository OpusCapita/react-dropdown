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
      var _this$props = _this.props,
          checkedItems = _this$props.checkedItems,
          isClearable = _this$props.isClearable,
          onChange = _this$props.onChange;

      _this.preventToggle = true;
      if (isClearable && checkedItems.size > 0) {
        onChange((0, _immutable.List)());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRHJvcGRvd25NdWx0aVNlbGVjdCIsInByb3BzIiwiZ2V0UGxhY2Vob2xkZXIiLCJjaGVja2VkSXRlbXMiLCJpdGVtcyIsImRlZmF1bHRQbGFjZWhvbGRlciIsInNpemUiLCJyZXBsYWNlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpIiwidmFsdWUiLCJnZXQiLCJsYWJlbFBsYWNlaG9sZGVyIiwidW5kZWZpbmVkIiwibGFiZWwiLCJzZXRGaWx0ZXIiLCJlIiwiZmlsdGVyVmFsdWUiLCJ0YXJnZXQiLCJzdGF0ZSIsImlzT3BlbiIsInNldFN0YXRlIiwiYmx1cklucHV0IiwiaGFuZGxlVG9nZ2xlIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsImlzRm9jdXNPbkNoaWxkIiwiZmlsdGVySXRlbXMiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsIm1hdGNoIiwiZm9jdXNJbnB1dCIsImVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZm9jdXMiLCJoYW5kbGVDbGVhciIsImlzQ2xlYXJhYmxlIiwib25DaGFuZ2UiLCJwcmV2ZW50VG9nZ2xlIiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJLRVlfQ09ERVMiLCJET1dOIiwicmVuZGVyIiwidGFiSW5kZXgiLCJvdGhlclByb3BzIiwiaW5wdXQiLCJ0aXRsZSIsImZpbHRlcmVkSXRlbXMiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7bUJBQUE7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7QUEyQm5CLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBTW5CQyxjQU5tQixHQU1GLFVBQUNDLFlBQUQsRUFBZUMsS0FBZixFQUFzQkMsa0JBQXRCLEVBQTZDO0FBQzVELFVBQUlGLGFBQWFHLElBQWIsS0FBc0IsQ0FBdEIsSUFBMkJILGFBQWFHLElBQWIsR0FBb0IsQ0FBbkQsRUFBc0Q7QUFDcEQsZUFBT0QsbUJBQW1CRSxPQUFuQixDQUEyQixLQUEzQixFQUFrQ0osYUFBYUcsSUFBL0MsQ0FBUDtBQUNEO0FBQ0QsVUFBSUgsYUFBYUcsSUFBYixLQUFzQixDQUExQixFQUE2QjtBQUMzQixZQUFNRSxRQUFRSixNQUFNSyxTQUFOLENBQWdCO0FBQUEsaUJBQUtDLEVBQUVDLEtBQUYsS0FBWVIsYUFBYVMsR0FBYixDQUFpQixDQUFqQixDQUFqQjtBQUFBLFNBQWhCLENBQWQ7QUFDQSxZQUFJSixRQUFRLENBQUMsQ0FBYixFQUFnQjtBQUNkLGlCQUFPSixNQUFNSSxLQUFOLEVBQWFLLGdCQUFiLEtBQWtDQyxTQUFsQyxHQUNMVixNQUFNSSxLQUFOLEVBQWFLLGdCQURSLEdBQzJCVCxNQUFNSSxLQUFOLEVBQWFPLEtBRC9DO0FBRUQ7QUFDRjtBQUNELGFBQU9WLG1CQUFtQkUsT0FBbkIsQ0FBMkIsS0FBM0IsRUFBa0MsR0FBbEMsQ0FBUDtBQUNELEtBbEJrQjs7QUFBQSxVQW9CbkJTLFNBcEJtQixHQW9CUCxVQUFDQyxDQUFELEVBQU87QUFDakIsVUFBTUMsY0FBY0QsRUFBRUUsTUFBRixDQUFTUixLQUE3QjtBQUNBLFVBQUlPLGdCQUFnQixFQUFoQixJQUFzQixDQUFDLE1BQUtFLEtBQUwsQ0FBV0MsTUFBdEMsRUFBOEM7QUFDNUMsY0FBS0MsUUFBTCxDQUFjLEVBQUVKLHdCQUFGLEVBQWVHLFFBQVEsSUFBdkIsRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMLGNBQUtDLFFBQUwsQ0FBYyxFQUFFSix3QkFBRixFQUFkO0FBQ0Q7QUFDRixLQTNCa0I7O0FBQUEsVUE2Qm5CSyxTQTdCbUIsR0E2QlAsWUFBTTtBQUNoQixZQUFLQyxZQUFMLENBQWtCLElBQWxCO0FBQ0EsVUFBSSxNQUFLdkIsS0FBTCxDQUFXRyxLQUFYLENBQWlCcUIsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0JDLGlCQUFTQyxhQUFULENBQXVCQyxJQUF2QjtBQUNBLGNBQUtOLFFBQUwsQ0FBYyxFQUFFTyxnQkFBZ0IsSUFBbEIsRUFBZDtBQUNEO0FBQ0YsS0FuQ2tCOztBQUFBLFVBcUNuQkMsV0FyQ21CLEdBcUNMLFVBQUMxQixLQUFELEVBQVc7QUFDdkIsVUFBTWMsY0FBYyxNQUFLRSxLQUFMLENBQVdGLFdBQVgsQ0FDakJYLE9BRGlCLENBQ1QsS0FEUyxFQUNGLEVBREUsRUFDRTtBQURGLE9BRWpCQSxPQUZpQixDQUVULDZCQUZTLEVBRXNCLE1BRnRCLEVBRThCO0FBRjlCLE9BR2pCd0IsV0FIaUIsRUFBcEI7QUFJQSxhQUFPM0IsTUFBTTRCLE1BQU4sQ0FBYTtBQUFBLGVBQUt0QixFQUFFSyxLQUFGLENBQVFSLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUIsRUFBdkIsRUFBMkJ3QixXQUEzQixHQUF5Q0UsS0FBekMsQ0FBK0NmLFdBQS9DLE1BQWdFLElBQXJFO0FBQUEsT0FBYixDQUFQO0FBQ0QsS0EzQ2tCOztBQUFBLFVBNkNuQmdCLFVBN0NtQixHQTZDTixZQUFNO0FBQ2pCLFlBQUtWLFlBQUwsQ0FBa0IsS0FBbEI7QUFDQSxVQUFNVyxVQUFVVCxTQUFTVSxjQUFULFlBQWlDLE1BQUtuQyxLQUFMLENBQVdvQyxFQUE1QyxDQUFoQjtBQUNBRixjQUFRRyxLQUFSO0FBQ0QsS0FqRGtCOztBQUFBLFVBbURuQkMsV0FuRG1CLEdBbURMLFlBQU07QUFBQSx3QkFDOEIsTUFBS3RDLEtBRG5DO0FBQUEsVUFDVkUsWUFEVSxlQUNWQSxZQURVO0FBQUEsVUFDSXFDLFdBREosZUFDSUEsV0FESjtBQUFBLFVBQ2lCQyxRQURqQixlQUNpQkEsUUFEakI7O0FBRWxCLFlBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxVQUFJRixlQUFlckMsYUFBYUcsSUFBYixHQUFvQixDQUF2QyxFQUEwQztBQUN4Q21DLGlCQUFTLHNCQUFUO0FBQ0Q7QUFDRixLQXpEa0I7O0FBQUEsVUEyRG5CRSxhQTNEbUIsR0EyREgsVUFBQzFCLENBQUQsRUFBTztBQUNyQixVQUFJQSxFQUFFMkIsT0FBRixLQUFjQyxtQkFBVUMsSUFBNUIsRUFBa0M7QUFDaEMsY0FBS3ZCLFNBQUw7QUFDRDtBQUNGLEtBL0RrQjs7QUFBQSxVQWlFbkJDLFlBakVtQixHQWlFSixVQUFDSCxNQUFELEVBQVk7QUFDekIsVUFBSSxNQUFLcUIsYUFBVCxFQUF3QjtBQUN0QixjQUFLQSxhQUFMLEdBQXFCLEtBQXJCO0FBQ0QsT0FGRCxNQUVPLElBQUksQ0FBQ3JCLE1BQUQsSUFBVyxNQUFLRCxLQUFMLENBQVdGLFdBQVgsS0FBMkIsRUFBMUMsRUFBOEM7QUFDbkQsY0FBS0ksUUFBTCxDQUFjLEVBQUVELGNBQUYsRUFBVVEsZ0JBQWdCUixNQUExQixFQUFrQ0gsYUFBYSxFQUEvQyxFQUFkO0FBQ0QsT0FGTSxNQUVBLElBQUksQ0FBQ0csTUFBTCxFQUFhO0FBQ2xCLGNBQUtDLFFBQUwsQ0FBYyxFQUFFRCxjQUFGLEVBQVVRLGdCQUFnQlIsTUFBMUIsRUFBZDtBQUNELE9BRk0sTUFFQTtBQUNMLGNBQUtDLFFBQUwsQ0FBYyxFQUFFRCxjQUFGLEVBQWQ7QUFDRDtBQUNGLEtBM0VrQjs7QUFFakIsVUFBS0QsS0FBTCxHQUFhLEVBQUVDLFFBQVEsS0FBVixFQUFpQlEsZ0JBQWdCLEtBQWpDLEVBQXdDWCxhQUFhLEVBQXJELEVBQWI7QUFDQSxVQUFLd0IsYUFBTCxHQUFxQixLQUFyQjtBQUhpQjtBQUlsQjs7Z0NBeUVESyxNLHFCQUFTO0FBQUEsaUJBVUgsS0FBSzlDLEtBVkY7QUFBQSxRQUVMb0MsRUFGSyxVQUVMQSxFQUZLO0FBQUEsUUFHTEcsV0FISyxVQUdMQSxXQUhLO0FBQUEsUUFJTHBDLEtBSkssVUFJTEEsS0FKSztBQUFBLFFBS0xELFlBTEssVUFLTEEsWUFMSztBQUFBLFFBTUxzQyxRQU5LLFVBTUxBLFFBTks7QUFBQSxRQU9McEMsa0JBUEssVUFPTEEsa0JBUEs7QUFBQSxRQVFMMkMsUUFSSyxVQVFMQSxRQVJLO0FBQUEsUUFTRkMsVUFURTs7QUFBQSxRQVdDNUIsTUFYRCxHQVdZLEtBQUtELEtBWGpCLENBV0NDLE1BWEQ7O0FBWVAsUUFBTTZCLFFBQ0osOEJBQUMsMkJBQUQ7QUFDRSxpQkFBVSxzQkFEWjtBQUVFLHFCQUFhYixFQUZmO0FBR0UsbUJBQWEsS0FBS25DLGNBQUwsQ0FBb0JDLFlBQXBCLEVBQWtDQyxLQUFsQyxFQUF5Q0Msa0JBQXpDLENBSGY7QUFJRSxnQkFBVSxLQUFLVyxTQUpqQjtBQUtFLG1CQUFhLEtBQUtrQixVQUxwQjtBQU1FLGlCQUFXLEtBQUtTLGFBTmxCO0FBT0UsZ0JBQVVLLFFBUFo7QUFRRSxZQUFLLE1BUlA7QUFTRSxhQUFPLEtBQUs1QixLQUFMLENBQVdGO0FBVHBCLE1BREY7QUFhQSxRQUFNaUMsUUFDSiw4QkFBQyxvQkFBRDtBQUNFLGFBQU9ELEtBRFQ7QUFFRSxtQkFBYVYsZUFBZ0JyQyxnQkFBZ0JBLGFBQWFHLElBQWIsS0FBc0IsQ0FGckU7QUFHRSxjQUFRZSxNQUhWO0FBSUUsZUFBUyxLQUFLa0IsV0FKaEI7QUFLRSxlQUFTLEtBQUtMO0FBTGhCLE1BREY7QUFTQSxRQUFNa0IsZ0JBQWdCLEtBQUtoQyxLQUFMLENBQVdGLFdBQVgsS0FBMkIsRUFBM0IsR0FBZ0NkLEtBQWhDLEdBQXdDLEtBQUswQixXQUFMLENBQWlCMUIsS0FBakIsQ0FBOUQ7QUFDQSxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsMEJBQWY7QUFDRTtBQUFDLG1DQUFEO0FBQUE7QUFDRSxjQUFJaUMsRUFETjtBQUVFLGtCQUFRLEtBQUtqQixLQUFMLENBQVdDLE1BRnJCO0FBR0UsdUJBSEY7QUFJRSxvQkFBVSxLQUFLRyxZQUpqQjtBQUtFLGlCQUFPMkIsS0FMVDtBQU1FO0FBTkYsV0FPTUYsVUFQTjtBQVNFLHNDQUFDLHFCQUFEO0FBQ0Usd0JBQWM5QyxZQURoQjtBQUVFLGlCQUFPaUQsYUFGVDtBQUdFLHFCQUFXLEtBQUtoQyxLQUFMLENBQVdTLGNBSHhCO0FBSUUsb0JBQVVZLFFBSlo7QUFLRSx5QkFBZSxLQUFLUDtBQUx0QjtBQVRGO0FBREYsS0FERjtBQXFCRCxHOzs7RUFoSzhDbUIsZ0JBQU1DLGEsVUFtQjlDQyxZLEdBQWU7QUFDcEJwRCxnQkFBYyxzQkFETTtBQUVwQkUsc0JBQW9CLG9CQUZBO0FBR3BCbUMsZUFBYSxJQUhPO0FBSXBCQyxZQUFVLG9CQUFNLENBQUUsQ0FKRTtBQUtwQk8sWUFBVTtBQUxVLEM7a0JBbkJIaEQsbUIiLCJmaWxlIjoiZHJvcGRvd24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2VsZXNzLWVzY2FwZSAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcblxuaW1wb3J0IEtFWV9DT0RFUyBmcm9tICcuLi9jb25zdGFudHMva2V5LWNvZGVzLmNvbnN0YW50JztcbmltcG9ydCBEcm9wZG93bkNvbnRhaW5lciBmcm9tICcuLi9kcm9wZG93bi1jb250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgTXVsdGlTZWxlY3QgZnJvbSAnLi4vbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IFRpdGxlSW5wdXQgZnJvbSAnLi90aXRsZS1pbnB1dC90aXRsZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2Ryb3Bkb3duLW11bHRpLXNlbGVjdC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duTXVsdGlTZWxlY3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGVja2VkSXRlbXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIGRlZmF1bHRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgaXNDbGVhcmFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxhYmVsUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWRJdGVtczogTGlzdCgpLFxuICAgIGRlZmF1bHRQbGFjZWhvbGRlcjogJ3tOfSBpdGVtcyBzZWxlY3RlZCcsXG4gICAgaXNDbGVhcmFibGU6IHRydWUsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHRhYkluZGV4OiAxLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzT3BlbjogZmFsc2UsIGlzRm9jdXNPbkNoaWxkOiBmYWxzZSwgZmlsdGVyVmFsdWU6ICcnIH07XG4gICAgdGhpcy5wcmV2ZW50VG9nZ2xlID0gZmFsc2U7XG4gIH1cblxuICBnZXRQbGFjZWhvbGRlciA9IChjaGVja2VkSXRlbXMsIGl0ZW1zLCBkZWZhdWx0UGxhY2Vob2xkZXIpID0+IHtcbiAgICBpZiAoY2hlY2tlZEl0ZW1zLnNpemUgPT09IDAgfHwgY2hlY2tlZEl0ZW1zLnNpemUgPiAxKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFBsYWNlaG9sZGVyLnJlcGxhY2UoJ3tOfScsIGNoZWNrZWRJdGVtcy5zaXplKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrZWRJdGVtcy5zaXplID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleChpID0+IGkudmFsdWUgPT09IGNoZWNrZWRJdGVtcy5nZXQoMCkpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zW2luZGV4XS5sYWJlbFBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgIGl0ZW1zW2luZGV4XS5sYWJlbFBsYWNlaG9sZGVyIDogaXRlbXNbaW5kZXhdLmxhYmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFBsYWNlaG9sZGVyLnJlcGxhY2UoJ3tOfScsICcxJyk7XG4gIH1cblxuICBzZXRGaWx0ZXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKGZpbHRlclZhbHVlICE9PSAnJyAmJiAhdGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJWYWx1ZSwgaXNPcGVuOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyVmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgYmx1cklucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlKHRydWUpO1xuICAgIGlmICh0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNPbkNoaWxkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckl0ZW1zID0gKGl0ZW1zKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB0aGlzLnN0YXRlLmZpbHRlclZhbHVlXG4gICAgICAucmVwbGFjZSgvXFxzL2csICcnKSAvLyByZW1vdmVzIHNwYWNlIGNoYXJhY3RlcnNcbiAgICAgIC5yZXBsYWNlKC9bXFw/XFwqXFxbXFxdXFwoXFwpXFx7XFx9XFxcXFxcXlxcJFxcK10vZywgJ1xcXFwkJicpIC8vIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaSA9PiBpLmxhYmVsLnJlcGxhY2UoL1xccy9nLCAnJykudG9Mb3dlckNhc2UoKS5tYXRjaChmaWx0ZXJWYWx1ZSkgIT09IG51bGwpO1xuICB9XG5cbiAgZm9jdXNJbnB1dCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZShmYWxzZSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnB1dF8ke3RoaXMucHJvcHMuaWR9YCk7XG4gICAgZWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjaGVja2VkSXRlbXMsIGlzQ2xlYXJhYmxlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnByZXZlbnRUb2dnbGUgPSB0cnVlO1xuICAgIGlmIChpc0NsZWFyYWJsZSAmJiBjaGVja2VkSXRlbXMuc2l6ZSA+IDApIHtcbiAgICAgIG9uQ2hhbmdlKExpc3QoKSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZX0NPREVTLkRPV04pIHtcbiAgICAgIHRoaXMuYmx1cklucHV0KCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVG9nZ2xlID0gKGlzT3BlbikgPT4ge1xuICAgIGlmICh0aGlzLnByZXZlbnRUb2dnbGUpIHtcbiAgICAgIHRoaXMucHJldmVudFRvZ2dsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoIWlzT3BlbiAmJiB0aGlzLnN0YXRlLmZpbHRlclZhbHVlICE9PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbiwgaXNGb2N1c09uQ2hpbGQ6IGlzT3BlbiwgZmlsdGVyVmFsdWU6ICcnIH0pO1xuICAgIH0gZWxzZSBpZiAoIWlzT3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbiwgaXNGb2N1c09uQ2hpbGQ6IGlzT3BlbiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbiB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc0NsZWFyYWJsZSxcbiAgICAgIGl0ZW1zLFxuICAgICAgY2hlY2tlZEl0ZW1zLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBkZWZhdWx0UGxhY2Vob2xkZXIsXG4gICAgICB0YWJJbmRleCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpbnB1dCA9IChcbiAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICBjbGFzc05hbWU9XCJvYy1pbnB1dC1ncm91cC1pbnB1dFwiXG4gICAgICAgIGlkPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5nZXRQbGFjZWhvbGRlcihjaGVja2VkSXRlbXMsIGl0ZW1zLCBkZWZhdWx0UGxhY2Vob2xkZXIpfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXRGaWx0ZXJ9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmZvY3VzSW5wdXR9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyVmFsdWV9XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgdGl0bGUgPSAoXG4gICAgICA8VGl0bGVJbnB1dFxuICAgICAgICBpbnB1dD17aW5wdXR9XG4gICAgICAgIGlzQ2xlYXJhYmxlPXtpc0NsZWFyYWJsZSAmJiAoY2hlY2tlZEl0ZW1zICYmIGNoZWNrZWRJdGVtcy5zaXplICE9PSAwKX1cbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIG9uQ2xlYXI9e3RoaXMuaGFuZGxlQ2xlYXJ9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMuZm9jdXNJbnB1dH1cbiAgICAgIC8+XG4gICAgKTtcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5zdGF0ZS5maWx0ZXJWYWx1ZSA9PT0gJycgPyBpdGVtcyA6IHRoaXMuZmlsdGVySXRlbXMoaXRlbXMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLWRyb3Bkb3duLW11bHRpLXNlbGVjdFwiPlxuICAgICAgICA8RHJvcGRvd25Db250YWluZXJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn1cbiAgICAgICAgICBub0NhcmV0XG4gICAgICAgICAgb25Ub2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICB1c2VBbmNob3JcbiAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIDxNdWx0aVNlbGVjdFxuICAgICAgICAgICAgY2hlY2tlZEl0ZW1zPXtjaGVja2VkSXRlbXN9XG4gICAgICAgICAgICBpdGVtcz17ZmlsdGVyZWRJdGVtc31cbiAgICAgICAgICAgIGlzRm9jdXNlZD17dGhpcy5zdGF0ZS5pc0ZvY3VzT25DaGlsZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIG9uUGFyZW50Rm9jdXM9e3RoaXMuZm9jdXNJbnB1dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Ryb3Bkb3duQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19