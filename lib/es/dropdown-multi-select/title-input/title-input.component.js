var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';

import { Icon } from '@opuscapita/react-icons';

import './title-input.component.scss';

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

    return React.createElement(
      InputGroup,
      null,
      input,
      React.createElement(
        InputGroup.Addon,
        {
          className: 'oc-input-group-icon-remove',
          onClick: onClear
        },
        React.createElement(
          'div',
          { style: { padding: '0 4px' } },
          React.createElement(Icon, {
            type: 'indicator',
            name: 'remove',
            width: 9,
            height: 9
          })
        )
      )
    );
  };

  return TitleInput;
}(React.PureComponent), _class.defaultProps = {
  onClear: function onClear() {}
}, _temp);
export { TitleInput as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kcm9wZG93bi1tdWx0aS1zZWxlY3QvdGl0bGUtaW5wdXQvdGl0bGUtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIklucHV0R3JvdXAiLCJJY29uIiwiVGl0bGVJbnB1dCIsInJlbmRlciIsInByb3BzIiwiaW5wdXQiLCJvbkNsZWFyIiwicGFkZGluZyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxVQUFULFFBQTJCLGlCQUEzQjs7QUFFQSxTQUFTQyxJQUFULFFBQXFCLHlCQUFyQjs7QUFFQSxPQUFPLDhCQUFQOztJQUVxQkMsVTs7Ozs7Ozs7O3VCQVVuQkMsTSxxQkFBUztBQUFBLGlCQUNvQixLQUFLQyxLQUR6QjtBQUFBLFFBQ0NDLEtBREQsVUFDQ0EsS0FERDtBQUFBLFFBQ1FDLE9BRFIsVUFDUUEsT0FEUjs7QUFFUCxXQUNFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNHRCxXQURIO0FBRUU7QUFBQyxrQkFBRCxDQUFZLEtBQVo7QUFBQTtBQUNFLHFCQUFVLDRCQURaO0FBRUUsbUJBQVNDO0FBRlg7QUFJRTtBQUFBO0FBQUEsWUFBSyxPQUFPLEVBQUVDLFNBQVMsT0FBWCxFQUFaO0FBQ0UsOEJBQUMsSUFBRDtBQUNFLGtCQUFLLFdBRFA7QUFFRSxrQkFBSyxRQUZQO0FBR0UsbUJBQU8sQ0FIVDtBQUlFLG9CQUFRO0FBSlY7QUFERjtBQUpGO0FBRkYsS0FERjtBQWtCRCxHOzs7RUE5QnFDVCxNQUFNVSxhLFVBTXJDQyxZLEdBQWU7QUFDcEJILFdBQVMsbUJBQU0sQ0FBRTtBQURHLEM7U0FOSEosVSIsImZpbGUiOiJ0aXRsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IElucHV0R3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuXG5pbXBvcnQgJy4vdGl0bGUtaW5wdXQuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZUlucHV0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW5wdXQ6IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG4gICAgb25DbGVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNsZWFyOiAoKSA9PiB7fSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dCwgb25DbGVhciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgIHtpbnB1dH1cbiAgICAgICAgPElucHV0R3JvdXAuQWRkb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJvYy1pbnB1dC1ncm91cC1pY29uLXJlbW92ZVwiXG4gICAgICAgICAgb25DbGljaz17b25DbGVhcn1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzAgNHB4JyB9fT5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIHR5cGU9XCJpbmRpY2F0b3JcIlxuICAgICAgICAgICAgICBuYW1lPVwicmVtb3ZlXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezl9XG4gICAgICAgICAgICAgIGhlaWdodD17OX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvSW5wdXRHcm91cC5BZGRvbj5cbiAgICAgIDwvSW5wdXRHcm91cD5cbiAgICApO1xuICB9XG59XG4iXX0=