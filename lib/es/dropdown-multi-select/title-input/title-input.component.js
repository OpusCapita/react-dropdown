var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';

import { Icon } from '@opuscapita/react-icons';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

import './title-input.component.scss';

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

      return isOpen ? React.createElement(FaCaretUp, { height: '9px', width: '9px' }) : React.createElement(FaCaretDown, { height: '9px', width: '9px' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TitleInput.prototype.render = function render() {
    var _props = this.props,
        input = _props.input,
        isClearable = _props.isClearable,
        onClear = _props.onClear,
        onFocus = _props.onFocus;

    var className = 'oc-input-group-icon-remove' + (isClearable ? '' : ' disabled');
    return React.createElement(
      InputGroup,
      null,
      input,
      React.createElement(
        InputGroup.Addon,
        {
          className: className,
          onClick: onClear
        },
        React.createElement(Icon, {
          type: 'indicator',
          name: 'remove',
          width: 9,
          height: 9
        })
      ),
      React.createElement(
        InputGroup.Addon,
        {
          className: 'oc-input-group-icon-toggle',
          onClick: onFocus
        },
        this.renderToggleIcon()
      )
    );
  };

  return TitleInput;
}(React.PureComponent), _class.defaultProps = {
  isClearable: false,
  isOpen: false,
  onClear: function onClear() {},
  onFocus: function onFocus() {}
}, _temp2);
export { TitleInput as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvdGl0bGUtaW5wdXQvdGl0bGUtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIklucHV0R3JvdXAiLCJJY29uIiwiRmFDYXJldERvd24iLCJGYUNhcmV0VXAiLCJUaXRsZUlucHV0IiwicmVuZGVyVG9nZ2xlSWNvbiIsImlzT3BlbiIsInByb3BzIiwicmVuZGVyIiwiaW5wdXQiLCJpc0NsZWFyYWJsZSIsIm9uQ2xlYXIiLCJvbkZvY3VzIiwiY2xhc3NOYW1lIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsaUJBQTNCOztBQUVBLFNBQVNDLElBQVQsUUFBcUIseUJBQXJCO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsU0FBdEIsUUFBdUMsZ0JBQXZDOztBQUVBLE9BQU8sOEJBQVA7O0lBRXFCQyxVOzs7Ozs7Ozs7Ozs7Z0tBZ0JuQkMsZ0IsR0FBbUIsWUFBTTtBQUFBLFVBQ2ZDLE1BRGUsR0FDSixNQUFLQyxLQURELENBQ2ZELE1BRGU7O0FBRXZCLGFBQU9BLFNBQ0gsb0JBQUMsU0FBRCxJQUFXLFFBQU8sS0FBbEIsRUFBd0IsT0FBTSxLQUE5QixHQURHLEdBRUgsb0JBQUMsV0FBRCxJQUFhLFFBQU8sS0FBcEIsRUFBMEIsT0FBTSxLQUFoQyxHQUZKO0FBR0QsSzs7O3VCQUVERSxNLHFCQUFTO0FBQUEsaUJBTUgsS0FBS0QsS0FORjtBQUFBLFFBRUxFLEtBRkssVUFFTEEsS0FGSztBQUFBLFFBR0xDLFdBSEssVUFHTEEsV0FISztBQUFBLFFBSUxDLE9BSkssVUFJTEEsT0FKSztBQUFBLFFBS0xDLE9BTEssVUFLTEEsT0FMSzs7QUFPUCxRQUFNQyw0Q0FBeUNILGNBQWMsRUFBZCxHQUFtQixXQUE1RCxDQUFOO0FBQ0EsV0FDRTtBQUFDLGdCQUFEO0FBQUE7QUFDR0QsV0FESDtBQUVFO0FBQUMsa0JBQUQsQ0FBWSxLQUFaO0FBQUE7QUFDRSxxQkFBV0ksU0FEYjtBQUVFLG1CQUFTRjtBQUZYO0FBSUUsNEJBQUMsSUFBRDtBQUNFLGdCQUFLLFdBRFA7QUFFRSxnQkFBSyxRQUZQO0FBR0UsaUJBQU8sQ0FIVDtBQUlFLGtCQUFRO0FBSlY7QUFKRixPQUZGO0FBYUU7QUFBQyxrQkFBRCxDQUFZLEtBQVo7QUFBQTtBQUNFLHFCQUFVLDRCQURaO0FBRUUsbUJBQVNDO0FBRlg7QUFJRyxhQUFLUCxnQkFBTDtBQUpIO0FBYkYsS0FERjtBQXNCRCxHOzs7RUFyRHFDUCxNQUFNZ0IsYSxVQVNyQ0MsWSxHQUFlO0FBQ3BCTCxlQUFhLEtBRE87QUFFcEJKLFVBQVEsS0FGWTtBQUdwQkssV0FBUyxtQkFBTSxDQUFFLENBSEc7QUFJcEJDLFdBQVMsbUJBQU0sQ0FBRTtBQUpHLEM7U0FUSFIsVSIsImZpbGUiOiJ0aXRsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IElucHV0R3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IHsgRmFDYXJldERvd24sIEZhQ2FyZXRVcCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxuaW1wb3J0ICcuL3RpdGxlLWlucHV0LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGVJbnB1dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlucHV0OiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICAgIGlzQ2xlYXJhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2xlYXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXNDbGVhcmFibGU6IGZhbHNlLFxuICAgIGlzT3BlbjogZmFsc2UsXG4gICAgb25DbGVhcjogKCkgPT4ge30sXG4gICAgb25Gb2N1czogKCkgPT4ge30sXG4gIH07XG5cbiAgcmVuZGVyVG9nZ2xlSWNvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gaXNPcGVuXG4gICAgICA/IDxGYUNhcmV0VXAgaGVpZ2h0PVwiOXB4XCIgd2lkdGg9XCI5cHhcIiAvPlxuICAgICAgOiA8RmFDYXJldERvd24gaGVpZ2h0PVwiOXB4XCIgd2lkdGg9XCI5cHhcIiAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpbnB1dCxcbiAgICAgIGlzQ2xlYXJhYmxlLFxuICAgICAgb25DbGVhcixcbiAgICAgIG9uRm9jdXMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gYG9jLWlucHV0LWdyb3VwLWljb24tcmVtb3ZlJHtpc0NsZWFyYWJsZSA/ICcnIDogJyBkaXNhYmxlZCd9YDtcbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgIHtpbnB1dH1cbiAgICAgICAgPElucHV0R3JvdXAuQWRkb25cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsZWFyfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIHR5cGU9XCJpbmRpY2F0b3JcIlxuICAgICAgICAgICAgbmFtZT1cInJlbW92ZVwiXG4gICAgICAgICAgICB3aWR0aD17OX1cbiAgICAgICAgICAgIGhlaWdodD17OX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lucHV0R3JvdXAuQWRkb24+XG4gICAgICAgIDxJbnB1dEdyb3VwLkFkZG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2MtaW5wdXQtZ3JvdXAtaWNvbi10b2dnbGVcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uRm9jdXN9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJUb2dnbGVJY29uKCl9XG4gICAgICAgIDwvSW5wdXRHcm91cC5BZGRvbj5cbiAgICAgIDwvSW5wdXRHcm91cD5cbiAgICApO1xuICB9XG59XG4iXX0=