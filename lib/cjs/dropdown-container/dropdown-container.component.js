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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownContainer = (_temp = _class = function (_React$PureComponent) {
  _inherits(DropdownContainer, _React$PureComponent);

  function DropdownContainer() {
    _classCallCheck(this, DropdownContainer);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  /** Note: 'useAnchor' prop makes dropdown.toggle render as a link rather than
   * a button with onClick issue when it wraps an input
   */

  DropdownContainer.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        id = _props.id,
        isOpen = _props.isOpen,
        noCaret = _props.noCaret,
        title = _props.title,
        useAnchor = _props.useAnchor,
        otherProps = _objectWithoutProperties(_props, ['children', 'id', 'isOpen', 'noCaret', 'title', 'useAnchor']);

    return _react2.default.createElement(
      _reactBootstrap.Dropdown,
      _extends({
        id: id,
        open: isOpen
      }, otherProps),
      _react2.default.createElement(
        _reactBootstrap.Dropdown.Toggle,
        {
          noCaret: noCaret,
          open: isOpen,
          useAnchor: useAnchor
        },
        title
      ),
      _react2.default.createElement(
        _reactBootstrap.Dropdown.Menu,
        null,
        children
      )
    );
  };

  return DropdownContainer;
}(_react2.default.PureComponent), _class.defaultProps = {
  children: null,
  disabled: false,
  dropup: false,
  isOpen: false,
  noCaret: false,
  onToggle: function onToggle() {},
  pullRight: false,
  style: {
    bsSize: 'xs',
    bsStyle: 'info'
  },
  useAnchor: false
}, _temp);
exports.default = DropdownContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1jb250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRHJvcGRvd25Db250YWluZXIiLCJyZW5kZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiaWQiLCJpc09wZW4iLCJub0NhcmV0IiwidGl0bGUiLCJ1c2VBbmNob3IiLCJvdGhlclByb3BzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiZGlzYWJsZWQiLCJkcm9wdXAiLCJvblRvZ2dsZSIsInB1bGxSaWdodCIsInN0eWxlIiwiYnNTaXplIiwiYnNTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7Ozs7Ozs7QUFDbkI7Ozs7OEJBd0NBQyxNLHFCQUFTO0FBQUEsaUJBU0gsS0FBS0MsS0FURjtBQUFBLFFBRUxDLFFBRkssVUFFTEEsUUFGSztBQUFBLFFBR0xDLEVBSEssVUFHTEEsRUFISztBQUFBLFFBSUxDLE1BSkssVUFJTEEsTUFKSztBQUFBLFFBS0xDLE9BTEssVUFLTEEsT0FMSztBQUFBLFFBTUxDLEtBTkssVUFNTEEsS0FOSztBQUFBLFFBT0xDLFNBUEssVUFPTEEsU0FQSztBQUFBLFFBUUZDLFVBUkU7O0FBV1AsV0FDRTtBQUFDLDhCQUFEO0FBQUE7QUFDRSxZQUFJTCxFQUROO0FBRUUsY0FBTUM7QUFGUixTQUdNSSxVQUhOO0FBS0U7QUFBQyxnQ0FBRCxDQUFVLE1BQVY7QUFBQTtBQUNFLG1CQUFTSCxPQURYO0FBRUUsZ0JBQU1ELE1BRlI7QUFHRSxxQkFBV0c7QUFIYjtBQUtHRDtBQUxILE9BTEY7QUFZRTtBQUFDLGdDQUFELENBQVUsSUFBVjtBQUFBO0FBQ0dKO0FBREg7QUFaRixLQURGO0FBa0JELEc7OztFQXRFNENPLGdCQUFNQyxhLFVBMEI1Q0MsWSxHQUFlO0FBQ3BCVCxZQUFVLElBRFU7QUFFcEJVLFlBQVUsS0FGVTtBQUdwQkMsVUFBUSxLQUhZO0FBSXBCVCxVQUFRLEtBSlk7QUFLcEJDLFdBQVMsS0FMVztBQU1wQlMsWUFBVSxvQkFBTSxDQUFFLENBTkU7QUFPcEJDLGFBQVcsS0FQUztBQVFwQkMsU0FBTztBQUNMQyxZQUFRLElBREg7QUFFTEMsYUFBUztBQUZKLEdBUmE7QUFZcEJYLGFBQVc7QUFaUyxDO2tCQTFCSFIsaUIiLCJmaWxlIjoiZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAvKiogTm90ZTogJ3VzZUFuY2hvcicgcHJvcCBtYWtlcyBkcm9wZG93bi50b2dnbGUgcmVuZGVyIGFzIGEgbGluayByYXRoZXIgdGhhblxuICAgKiBhIGJ1dHRvbiB3aXRoIG9uQ2xpY2sgaXNzdWUgd2hlbiBpdCB3cmFwcyBhbiBpbnB1dFxuICAgKi9cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKS5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSxcbiAgICBdKSxcbiAgICBub0NhcmV0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZHJvcHVwOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIG9uVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwdWxsUmlnaHQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYnNTaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgYnNTdHlsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgICB1c2VBbmNob3I6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGRyb3B1cDogZmFsc2UsXG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgICBub0NhcmV0OiBmYWxzZSxcbiAgICBvblRvZ2dsZTogKCkgPT4ge30sXG4gICAgcHVsbFJpZ2h0OiBmYWxzZSxcbiAgICBzdHlsZToge1xuICAgICAgYnNTaXplOiAneHMnLFxuICAgICAgYnNTdHlsZTogJ2luZm8nLFxuICAgIH0sXG4gICAgdXNlQW5jaG9yOiBmYWxzZSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGlzT3BlbixcbiAgICAgIG5vQ2FyZXQsXG4gICAgICB0aXRsZSxcbiAgICAgIHVzZUFuY2hvcixcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBvcGVuPXtpc09wZW59XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICA8RHJvcGRvd24uVG9nZ2xlXG4gICAgICAgICAgbm9DYXJldD17bm9DYXJldH1cbiAgICAgICAgICBvcGVuPXtpc09wZW59XG4gICAgICAgICAgdXNlQW5jaG9yPXt1c2VBbmNob3J9XG4gICAgICAgID5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxuICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgIDwvRHJvcGRvd24+XG4gICAgKTtcbiAgfVxufVxuIl19