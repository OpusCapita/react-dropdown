'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _reactIcons = require('@opuscapita/react-icons');

var _fa = require('react-icons/fa');

require('./title-input.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleInput = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(TitleInput, _React$PureComponent);

  function TitleInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, TitleInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.renderToggleIcon = function () {
      var isOpen = _this.props.isOpen;

      return isOpen ? _react2.default.createElement(_fa.FaCaretUp, { height: '9px', width: '9px' }) : _react2.default.createElement(_fa.FaCaretDown, { height: '9px', width: '9px' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TitleInput.prototype.render = function render() {
    var _props = this.props,
        input = _props.input,
        isClearable = _props.isClearable,
        onClear = _props.onClear,
        onFocus = _props.onFocus;

    var className = 'oc-input-group-icon-remove' + (isClearable ? '' : ' disabled');
    return _react2.default.createElement(
      _reactBootstrap.InputGroup,
      null,
      input,
      _react2.default.createElement(
        _reactBootstrap.InputGroup.Addon,
        {
          className: className,
          onClick: onClear
        },
        _react2.default.createElement(_reactIcons.Icon, {
          type: 'indicator',
          name: 'remove',
          width: 9,
          height: 9
        })
      ),
      _react2.default.createElement(
        _reactBootstrap.InputGroup.Addon,
        {
          className: 'oc-input-group-icon-toggle',
          onClick: onFocus
        },
        this.renderToggleIcon()
      )
    );
  };

  return TitleInput;
}(_react2.default.PureComponent), _class.defaultProps = {
  isClearable: false,
  isOpen: false,
  onClear: function onClear() {},
  onFocus: function onFocus() {}
}, _temp2);
exports.default = TitleInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvdGl0bGUtaW5wdXQvdGl0bGUtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJUaXRsZUlucHV0IiwicmVuZGVyVG9nZ2xlSWNvbiIsImlzT3BlbiIsInByb3BzIiwicmVuZGVyIiwiaW5wdXQiLCJpc0NsZWFyYWJsZSIsIm9uQ2xlYXIiLCJvbkZvY3VzIiwiY2xhc3NOYW1lIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Z0tBZ0JuQkMsZ0IsR0FBbUIsWUFBTTtBQUFBLFVBQ2ZDLE1BRGUsR0FDSixNQUFLQyxLQURELENBQ2ZELE1BRGU7O0FBRXZCLGFBQU9BLFNBQ0gsOEJBQUMsYUFBRCxJQUFXLFFBQU8sS0FBbEIsRUFBd0IsT0FBTSxLQUE5QixHQURHLEdBRUgsOEJBQUMsZUFBRCxJQUFhLFFBQU8sS0FBcEIsRUFBMEIsT0FBTSxLQUFoQyxHQUZKO0FBR0QsSzs7O3VCQUVERSxNLHFCQUFTO0FBQUEsaUJBTUgsS0FBS0QsS0FORjtBQUFBLFFBRUxFLEtBRkssVUFFTEEsS0FGSztBQUFBLFFBR0xDLFdBSEssVUFHTEEsV0FISztBQUFBLFFBSUxDLE9BSkssVUFJTEEsT0FKSztBQUFBLFFBS0xDLE9BTEssVUFLTEEsT0FMSzs7QUFPUCxRQUFNQyw0Q0FBeUNILGNBQWMsRUFBZCxHQUFtQixXQUE1RCxDQUFOO0FBQ0EsV0FDRTtBQUFDLGdDQUFEO0FBQUE7QUFDR0QsV0FESDtBQUVFO0FBQUMsa0NBQUQsQ0FBWSxLQUFaO0FBQUE7QUFDRSxxQkFBV0ksU0FEYjtBQUVFLG1CQUFTRjtBQUZYO0FBSUUsc0NBQUMsZ0JBQUQ7QUFDRSxnQkFBSyxXQURQO0FBRUUsZ0JBQUssUUFGUDtBQUdFLGlCQUFPLENBSFQ7QUFJRSxrQkFBUTtBQUpWO0FBSkYsT0FGRjtBQWFFO0FBQUMsa0NBQUQsQ0FBWSxLQUFaO0FBQUE7QUFDRSxxQkFBVSw0QkFEWjtBQUVFLG1CQUFTQztBQUZYO0FBSUcsYUFBS1AsZ0JBQUw7QUFKSDtBQWJGLEtBREY7QUFzQkQsRzs7O0VBckRxQ1MsZ0JBQU1DLGEsVUFTckNDLFksR0FBZTtBQUNwQk4sZUFBYSxLQURPO0FBRXBCSixVQUFRLEtBRlk7QUFHcEJLLFdBQVMsbUJBQU0sQ0FBRSxDQUhHO0FBSXBCQyxXQUFTLG1CQUFNLENBQUU7QUFKRyxDO2tCQVRIUixVIiwiZmlsZSI6InRpdGxlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5pbXBvcnQgeyBGYUNhcmV0RG93biwgRmFDYXJldFVwIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5pbXBvcnQgJy4vdGl0bGUtaW5wdXQuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZUlucHV0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW5wdXQ6IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG4gICAgaXNDbGVhcmFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbGVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc0NsZWFyYWJsZTogZmFsc2UsXG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgICBvbkNsZWFyOiAoKSA9PiB7fSxcbiAgICBvbkZvY3VzOiAoKSA9PiB7fSxcbiAgfTtcblxuICByZW5kZXJUb2dnbGVJY29uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBpc09wZW5cbiAgICAgID8gPEZhQ2FyZXRVcCBoZWlnaHQ9XCI5cHhcIiB3aWR0aD1cIjlweFwiIC8+XG4gICAgICA6IDxGYUNhcmV0RG93biBoZWlnaHQ9XCI5cHhcIiB3aWR0aD1cIjlweFwiIC8+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlucHV0LFxuICAgICAgaXNDbGVhcmFibGUsXG4gICAgICBvbkNsZWFyLFxuICAgICAgb25Gb2N1cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWUgPSBgb2MtaW5wdXQtZ3JvdXAtaWNvbi1yZW1vdmUke2lzQ2xlYXJhYmxlID8gJycgOiAnIGRpc2FibGVkJ31gO1xuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAge2lucHV0fVxuICAgICAgICA8SW5wdXRHcm91cC5BZGRvblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xlYXJ9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgICAgICBuYW1lPVwicmVtb3ZlXCJcbiAgICAgICAgICAgIHdpZHRoPXs5fVxuICAgICAgICAgICAgaGVpZ2h0PXs5fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5wdXRHcm91cC5BZGRvbj5cbiAgICAgICAgPElucHV0R3JvdXAuQWRkb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJvYy1pbnB1dC1ncm91cC1pY29uLXRvZ2dsZVwiXG4gICAgICAgICAgb25DbGljaz17b25Gb2N1c31cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnJlbmRlclRvZ2dsZUljb24oKX1cbiAgICAgICAgPC9JbnB1dEdyb3VwLkFkZG9uPlxuICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==