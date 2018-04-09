'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _reactIcons = require('@opuscapita/react-icons');

require('./title-input.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleInput = (_temp = _class = function (_React$PureComponent) {
  _inherits(TitleInput, _React$PureComponent);

  function TitleInput() {
    _classCallCheck(this, TitleInput);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  TitleInput.prototype.render = function render() {
    var _props = this.props,
        input = _props.input,
        onClear = _props.onClear;

    return _react2.default.createElement(
      _reactBootstrap.InputGroup,
      null,
      input,
      _react2.default.createElement(
        _reactBootstrap.InputGroup.Addon,
        {
          className: 'oc-input-group-icon-remove',
          onClick: onClear
        },
        _react2.default.createElement(_reactIcons.Icon, {
          type: 'indicator',
          name: 'remove',
          width: 17,
          height: 17
        })
      )
    );
  };

  return TitleInput;
}(_react2.default.PureComponent), _class.defaultProps = {
  onClear: function onClear() {}
}, _temp);
exports.default = TitleInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvdGl0bGUtaW5wdXQvdGl0bGUtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJUaXRsZUlucHV0IiwicmVuZGVyIiwicHJvcHMiLCJpbnB1dCIsIm9uQ2xlYXIiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7dUJBVW5CQyxNLHFCQUFTO0FBQUEsaUJBQ29CLEtBQUtDLEtBRHpCO0FBQUEsUUFDQ0MsS0FERCxVQUNDQSxLQUREO0FBQUEsUUFDUUMsT0FEUixVQUNRQSxPQURSOztBQUVQLFdBQ0U7QUFBQTtBQUFBO0FBQ0dELFdBREg7QUFFRTtBQUFBLG1DQUFZLEtBQVo7QUFBQTtBQUNFLHFCQUFVLDRCQURaO0FBRUUsbUJBQVNDO0FBRlg7QUFJRTtBQUNFLGdCQUFLLFdBRFA7QUFFRSxnQkFBSyxRQUZQO0FBR0UsaUJBQU8sRUFIVDtBQUlFLGtCQUFRO0FBSlY7QUFKRjtBQUZGLEtBREY7QUFnQkQsRzs7O0VBNUJxQyxnQkFBTUMsYSxVQU1yQ0MsWSxHQUFlO0FBQ3BCRixXQUFTLG1CQUFNLENBQUU7QUFERyxDO2tCQU5ISixVIiwiZmlsZSI6InRpdGxlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5cbmltcG9ydCAnLi90aXRsZS1pbnB1dC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlSW5wdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpbnB1dDogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgICBvbkNsZWFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2xlYXI6ICgpID0+IHt9LFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlucHV0LCBvbkNsZWFyIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAge2lucHV0fVxuICAgICAgICA8SW5wdXRHcm91cC5BZGRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9jLWlucHV0LWdyb3VwLWljb24tcmVtb3ZlXCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsZWFyfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIHR5cGU9XCJpbmRpY2F0b3JcIlxuICAgICAgICAgICAgbmFtZT1cInJlbW92ZVwiXG4gICAgICAgICAgICB3aWR0aD17MTd9XG4gICAgICAgICAgICBoZWlnaHQ9ezE3fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5wdXRHcm91cC5BZGRvbj5cbiAgICAgIDwvSW5wdXRHcm91cD5cbiAgICApO1xuICB9XG59XG4iXX0=