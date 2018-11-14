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
  title: _react2.default.createElement(
    'div',
    { style: { padding: '6px 7px 3px' } },
    _react2.default.createElement(_reactIcons.Icon, { type: 'indicator', name: 'more', width: 20, height: 20 })
  )
}, _temp);
exports.default = DropdownMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJEcm9wZG93bk1lbnUiLCJwcm9wcyIsImhhbmRsZVRvZ2dsZSIsImlzT3BlbiIsImRvbnRDbG9zZURyb3Bkb3duTWVudSIsInNldFN0YXRlIiwicmVuZGVyTWVudUl0ZW1zIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaSIsImlkIiwidW5kZWZpbmVkIiwidHlwZSIsImRpc2FibGVkIiwiaHJlZiIsImUiLCJkaXNhYmxlQ2xvc2luZyIsIm9uQ2xpY2siLCJpY29uIiwidGl0bGUiLCJzdGF0ZSIsInJlbmRlciIsIm1lbnVJdGVtcyIsImNhcmV0IiwicHVsbExlZnQiLCJvdGhlclByb3BzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiZHJvcHVwIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7O0FBZ0NuQix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQSxVQUtuQkMsWUFMbUIsR0FLSixVQUFDQyxNQUFELEVBQVk7QUFDekIsVUFBSSxNQUFLQyxxQkFBVCxFQUFnQztBQUM5QixjQUFLQyxRQUFMLENBQWMsRUFBRUYsUUFBUSxJQUFWLEVBQWQ7QUFDQSxjQUFLQyxxQkFBTCxHQUE2QixLQUE3QjtBQUNELE9BSEQsTUFHTztBQUNMLGNBQUtDLFFBQUwsQ0FBYyxFQUFFRixjQUFGLEVBQWQ7QUFDRDtBQUNGLEtBWmtCOztBQUFBLFVBY25CRyxlQWRtQixHQWNEO0FBQUEsYUFDaEJDLE1BQU1DLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNyQixZQUFNQyxLQUFLRixLQUFLRSxFQUFMLEtBQVlDLFNBQVosR0FBd0JILEtBQUtFLEVBQTdCLFlBQXlDRCxDQUFwRDtBQUNBLFlBQUlELEtBQUtJLElBQUwsS0FBYyxTQUFsQixFQUE2QjtBQUMzQixpQkFDRSw4QkFBQyx3QkFBRDtBQUNFLGlCQUFLRixFQURQO0FBRUU7QUFGRixZQURGO0FBTUQ7QUFDRCxlQUNFO0FBQUMsa0NBQUQ7QUFBQTtBQUNFLGlCQUFLQSxFQURQO0FBRUUsZ0JBQUlBLEVBRk47QUFHRSxzQkFBVSxDQUFDLENBQUNGLEtBQUtLLFFBSG5CO0FBSUUsa0JBQU1MLEtBQUtNLElBSmI7QUFLRSxxQkFBUyxpQkFBQ0MsQ0FBRCxFQUFPO0FBQ2Qsa0JBQUlQLEtBQUtRLGNBQVQsRUFBeUI7QUFDdkIsc0JBQUtiLHFCQUFMLEdBQTZCLElBQTdCO0FBQ0Q7QUFDRCxrQkFBSSxDQUFDSyxLQUFLSyxRQUFOLElBQWtCTCxLQUFLUyxPQUEzQixFQUFvQztBQUNsQ1QscUJBQUtTLE9BQUwsQ0FBYUYsQ0FBYjtBQUNEO0FBQ0Y7QUFaSDtBQWNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsdUJBQWhCO0FBQXlDUCxpQkFBS1U7QUFBOUMsV0FkRjtBQWVFO0FBQUE7QUFBQSxjQUFNLFdBQVUsd0JBQWhCO0FBQTBDVixpQkFBS1c7QUFBL0M7QUFmRixTQURGO0FBbUJELE9BN0JELENBRGdCO0FBQUEsS0FkQzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQUVsQixRQUFRLEtBQVYsRUFBYjtBQUZpQjtBQUdsQjs7eUJBMkNEbUIsTSxxQkFBUztBQUFBLGlCQU1ILEtBQUtyQixLQU5GO0FBQUEsUUFFTHNCLFNBRkssVUFFTEEsU0FGSztBQUFBLFFBR0xDLEtBSEssVUFHTEEsS0FISztBQUFBLFFBSUxDLFFBSkssVUFJTEEsUUFKSztBQUFBLFFBS0ZDLFVBTEU7O0FBUVAsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQyxtQ0FBRDtBQUFBO0FBQ0UsbUJBQVMsQ0FBQ0YsS0FEWjtBQUVFLHFCQUFXLENBQUNDLFFBRmQ7QUFHRSxrQkFBUSxLQUFLSixLQUFMLENBQVdsQixNQUhyQjtBQUlFLG9CQUFVLEtBQUtEO0FBSmpCLFdBS013QixVQUxOO0FBT0csYUFBS3BCLGVBQUwsQ0FBcUJpQixTQUFyQjtBQVBIO0FBREYsS0FERjtBQWFELEc7OztFQW5HdUNJLGdCQUFNQyxhLFVBb0J2Q0MsWSxHQUFlO0FBQ3BCTCxTQUFPLEtBRGE7QUFFcEJWLFlBQVUsS0FGVTtBQUdwQmdCLFVBQVEsS0FIWTtBQUlwQkwsWUFBVSxLQUpVO0FBS3BCTCxTQUNFO0FBQUE7QUFBQSxNQUFLLE9BQU8sRUFBRVcsU0FBUyxhQUFYLEVBQVo7QUFDRSxrQ0FBQyxnQkFBRCxJQUFNLE1BQUssV0FBWCxFQUF1QixNQUFLLE1BQTVCLEVBQW1DLE9BQU8sRUFBMUMsRUFBOEMsUUFBUSxFQUF0RDtBQURGO0FBTmtCLEM7a0JBcEJIL0IsWSIsImZpbGUiOiJkcm9wZG93bi1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuXG5pbXBvcnQgRHJvcGRvd25Db250YWluZXIgZnJvbSAnLi4vZHJvcGRvd24tY29udGFpbmVyL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk1lbnUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgZGlzYWJsZUNsb3Npbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGljb246IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSwgLy8gc2VydmVzIGFzIGEga2V5XG4gICAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnaXRlbScsICdkaXZpZGVyJ10pLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIGNhcmV0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZHJvcHVwOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwdWxsTGVmdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjYXJldDogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGRyb3B1cDogZmFsc2UsXG4gICAgcHVsbExlZnQ6IGZhbHNlLFxuICAgIHRpdGxlOiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc2cHggN3B4IDNweCcgfX0+XG4gICAgICAgIDxJY29uIHR5cGU9XCJpbmRpY2F0b3JcIiBuYW1lPVwibW9yZVwiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICksXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNPcGVuOiBmYWxzZSB9O1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlID0gKGlzT3BlbikgPT4ge1xuICAgIGlmICh0aGlzLmRvbnRDbG9zZURyb3Bkb3duTWVudSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSB9KTtcbiAgICAgIHRoaXMuZG9udENsb3NlRHJvcGRvd25NZW51ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4gfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyTWVudUl0ZW1zID0gaXRlbXMgPT5cbiAgICBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gaXRlbS5pZCAhPT0gdW5kZWZpbmVkID8gaXRlbS5pZCA6IGBpdGVtJHtpfWA7XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZGl2aWRlcicpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICBkaXZpZGVyXG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGRpc2FibGVkPXshIWl0ZW0uZGlzYWJsZWR9XG4gICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5kaXNhYmxlQ2xvc2luZykge1xuICAgICAgICAgICAgICB0aGlzLmRvbnRDbG9zZURyb3Bkb3duTWVudSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQgJiYgaXRlbS5vbkNsaWNrKSB7XG4gICAgICAgICAgICAgIGl0ZW0ub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2MtZHJvcGRvd24tbWVudS1pY29uXCI+e2l0ZW0uaWNvbn08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2MtZHJvcGRvd24tbWVudS10aXRsZVwiPntpdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1lbnVJdGVtcyxcbiAgICAgIGNhcmV0LFxuICAgICAgcHVsbExlZnQsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1kcm9wZG93bi1tZW51XCI+XG4gICAgICAgIDxEcm9wZG93bkNvbnRhaW5lclxuICAgICAgICAgIG5vQ2FyZXQ9eyFjYXJldH1cbiAgICAgICAgICBwdWxsUmlnaHQ9eyFwdWxsTGVmdH1cbiAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNPcGVufVxuICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnJlbmRlck1lbnVJdGVtcyhtZW51SXRlbXMpfVxuICAgICAgICA8L0Ryb3Bkb3duQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19