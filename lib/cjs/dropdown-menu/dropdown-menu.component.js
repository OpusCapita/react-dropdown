'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _reactIcons = require('@opuscapita/react-icons');

var _dropdownContainer = require('../dropdown-container/dropdown-container.component');

var _dropdownContainer2 = _interopRequireDefault(_dropdownContainer);

require('./dropdown-menu.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownMenu = (_temp = _class = function (_React$PureComponent) {
  _inherits(DropdownMenu, _React$PureComponent);

  function DropdownMenu(props) {
    _classCallCheck(this, DropdownMenu);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.handleToggle = function (isOpen) {
      if (_this.dontCloseDropdownMenu) {
        _this.setState({ isOpen: true });
        _this.dontCloseDropdownMenu = false;
      } else {
        _this.setState({ isOpen: isOpen });
      }
    };

    _this.renderMenuItems = function (items) {
      return items.map(function (item, i) {
        var id = item.id !== undefined ? item.id : 'item' + i;
        if (item.type === 'divider') {
          return _react2.default.createElement(_reactBootstrap.MenuItem, {
            key: id,
            divider: true
          });
        }
        return _react2.default.createElement(
          _reactBootstrap.MenuItem,
          {
            key: id,
            id: id,
            disabled: !!item.disabled,
            href: item.href,
            onClick: function onClick(e) {
              if (item.disableClosing) {
                _this.dontCloseDropdownMenu = true;
              }
              if (!item.disabled && item.onClick) {
                item.onClick(e);
              }
            }
          },
          _react2.default.createElement(
            'span',
            { className: 'oc-dropdown-menu-icon' },
            item.icon
          ),
          _react2.default.createElement(
            'span',
            { className: 'oc-dropdown-menu-title' },
            item.title
          )
        );
      });
    };

    _this.state = { isOpen: false };
    return _this;
  }

  DropdownMenu.prototype.render = function render() {
    var _props = this.props,
        menuItems = _props.menuItems,
        caret = _props.caret,
        pullLeft = _props.pullLeft,
        otherProps = _objectWithoutProperties(_props, ['menuItems', 'caret', 'pullLeft']);

    return _react2.default.createElement(
      'div',
      { className: 'oc-dropdown-menu' },
      _react2.default.createElement(
        _dropdownContainer2.default,
        _extends({
          noCaret: !caret,
          pullRight: !pullLeft,
          isOpen: this.state.isOpen,
          onToggle: this.handleToggle
        }, otherProps),
        this.renderMenuItems(menuItems)
      )
    );
  };

  return DropdownMenu;
}(_react2.default.PureComponent), _class.defaultProps = {
  caret: false,
  disabled: false,
  dropup: false,
  pullLeft: false,
  title: _react2.default.createElement(_reactIcons.Icon, { type: 'indicator', name: 'more', width: 32, height: 32 })
}, _temp);
exports.default = DropdownMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJEcm9wZG93bk1lbnUiLCJwcm9wcyIsImhhbmRsZVRvZ2dsZSIsImlzT3BlbiIsImRvbnRDbG9zZURyb3Bkb3duTWVudSIsInNldFN0YXRlIiwicmVuZGVyTWVudUl0ZW1zIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaSIsImlkIiwidW5kZWZpbmVkIiwidHlwZSIsImRpc2FibGVkIiwiaHJlZiIsImUiLCJkaXNhYmxlQ2xvc2luZyIsIm9uQ2xpY2siLCJpY29uIiwidGl0bGUiLCJzdGF0ZSIsInJlbmRlciIsIm1lbnVJdGVtcyIsImNhcmV0IiwicHVsbExlZnQiLCJvdGhlclByb3BzIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImRyb3B1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7O0FBNEJuQix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQSxVQUtuQkMsWUFMbUIsR0FLSixVQUFDQyxNQUFELEVBQVk7QUFDekIsVUFBSSxNQUFLQyxxQkFBVCxFQUFnQztBQUM5QixjQUFLQyxRQUFMLENBQWMsRUFBRUYsUUFBUSxJQUFWLEVBQWQ7QUFDQSxjQUFLQyxxQkFBTCxHQUE2QixLQUE3QjtBQUNELE9BSEQsTUFHTztBQUNMLGNBQUtDLFFBQUwsQ0FBYyxFQUFFRixjQUFGLEVBQWQ7QUFDRDtBQUNGLEtBWmtCOztBQUFBLFVBY25CRyxlQWRtQixHQWNEO0FBQUEsYUFDaEJDLE1BQU1DLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNyQixZQUFNQyxLQUFLRixLQUFLRSxFQUFMLEtBQVlDLFNBQVosR0FBd0JILEtBQUtFLEVBQTdCLFlBQXlDRCxDQUFwRDtBQUNBLFlBQUlELEtBQUtJLElBQUwsS0FBYyxTQUFsQixFQUE2QjtBQUMzQixpQkFDRTtBQUNFLGlCQUFLRixFQURQO0FBRUU7QUFGRixZQURGO0FBTUQ7QUFDRCxlQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFLQSxFQURQO0FBRUUsZ0JBQUlBLEVBRk47QUFHRSxzQkFBVSxDQUFDLENBQUNGLEtBQUtLLFFBSG5CO0FBSUUsa0JBQU1MLEtBQUtNLElBSmI7QUFLRSxxQkFBUyxpQkFBQ0MsQ0FBRCxFQUFPO0FBQ2Qsa0JBQUlQLEtBQUtRLGNBQVQsRUFBeUI7QUFDdkIsc0JBQUtiLHFCQUFMLEdBQTZCLElBQTdCO0FBQ0Q7QUFDRCxrQkFBSSxDQUFDSyxLQUFLSyxRQUFOLElBQWtCTCxLQUFLUyxPQUEzQixFQUFvQztBQUNsQ1QscUJBQUtTLE9BQUwsQ0FBYUYsQ0FBYjtBQUNEO0FBQ0Y7QUFaSDtBQWNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsdUJBQWhCO0FBQXlDUCxpQkFBS1U7QUFBOUMsV0FkRjtBQWVFO0FBQUE7QUFBQSxjQUFNLFdBQVUsd0JBQWhCO0FBQTBDVixpQkFBS1c7QUFBL0M7QUFmRixTQURGO0FBbUJELE9BN0JELENBRGdCO0FBQUEsS0FkQzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQUVsQixRQUFRLEtBQVYsRUFBYjtBQUZpQjtBQUdsQjs7eUJBMkNEbUIsTSxxQkFBUztBQUFBLGlCQU1ILEtBQUtyQixLQU5GO0FBQUEsUUFFTHNCLFNBRkssVUFFTEEsU0FGSztBQUFBLFFBR0xDLEtBSEssVUFHTEEsS0FISztBQUFBLFFBSUxDLFFBSkssVUFJTEEsUUFKSztBQUFBLFFBS0ZDLFVBTEU7O0FBUVAsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsbUJBQVMsQ0FBQ0YsS0FEWjtBQUVFLHFCQUFXLENBQUNDLFFBRmQ7QUFHRSxrQkFBUSxLQUFLSixLQUFMLENBQVdsQixNQUhyQjtBQUlFLG9CQUFVLEtBQUtEO0FBSmpCLFdBS013QixVQUxOO0FBT0csYUFBS3BCLGVBQUwsQ0FBcUJpQixTQUFyQjtBQVBIO0FBREYsS0FERjtBQWFELEc7OztFQS9GdUMsZ0JBQU1JLGEsVUFvQnZDQyxZLEdBQWU7QUFDcEJKLFNBQU8sS0FEYTtBQUVwQlYsWUFBVSxLQUZVO0FBR3BCZSxVQUFRLEtBSFk7QUFJcEJKLFlBQVUsS0FKVTtBQUtwQkwsU0FBTyxrREFBTSxNQUFLLFdBQVgsRUFBdUIsTUFBSyxNQUE1QixFQUFtQyxPQUFPLEVBQTFDLEVBQThDLFFBQVEsRUFBdEQ7QUFMYSxDO2tCQXBCSHBCLFkiLCJmaWxlIjoiZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcblxuaW1wb3J0IERyb3Bkb3duQ29udGFpbmVyIGZyb20gJy4uL2Ryb3Bkb3duLWNvbnRhaW5lci9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCAnLi9kcm9wZG93bi1tZW51LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25NZW51IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIG1lbnVJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGRpc2FibGVDbG9zaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBpY29uOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksIC8vIHNlcnZlcyBhcyBhIGtleVxuICAgICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2l0ZW0nLCAnZGl2aWRlciddKSxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBjYXJldDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGRyb3B1cDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcHVsbExlZnQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2FyZXQ6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBkcm9wdXA6IGZhbHNlLFxuICAgIHB1bGxMZWZ0OiBmYWxzZSxcbiAgICB0aXRsZTogPEljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJtb3JlXCIgd2lkdGg9ezMyfSBoZWlnaHQ9ezMyfSAvPixcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpc09wZW46IGZhbHNlIH07XG4gIH1cblxuICBoYW5kbGVUb2dnbGUgPSAoaXNPcGVuKSA9PiB7XG4gICAgaWYgKHRoaXMuZG9udENsb3NlRHJvcGRvd25NZW51KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiB0cnVlIH0pO1xuICAgICAgdGhpcy5kb250Q2xvc2VEcm9wZG93bk1lbnUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbiB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJNZW51SXRlbXMgPSBpdGVtcyA9PlxuICAgIGl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBpdGVtLmlkICE9PSB1bmRlZmluZWQgPyBpdGVtLmlkIDogYGl0ZW0ke2l9YDtcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkaXZpZGVyJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIGRpdmlkZXJcbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgZGlzYWJsZWQ9eyEhaXRlbS5kaXNhYmxlZH1cbiAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmRpc2FibGVDbG9zaW5nKSB7XG4gICAgICAgICAgICAgIHRoaXMuZG9udENsb3NlRHJvcGRvd25NZW51ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXRlbS5kaXNhYmxlZCAmJiBpdGVtLm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgaXRlbS5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvYy1kcm9wZG93bi1tZW51LWljb25cIj57aXRlbS5pY29ufTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvYy1kcm9wZG93bi1tZW51LXRpdGxlXCI+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgKTtcbiAgICB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWVudUl0ZW1zLFxuICAgICAgY2FyZXQsXG4gICAgICBwdWxsTGVmdCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLWRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgPERyb3Bkb3duQ29udGFpbmVyXG4gICAgICAgICAgbm9DYXJldD17IWNhcmV0fVxuICAgICAgICAgIHB1bGxSaWdodD17IXB1bGxMZWZ0fVxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgb25Ub2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucmVuZGVyTWVudUl0ZW1zKG1lbnVJdGVtcyl9XG4gICAgICAgIDwvRHJvcGRvd25Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=