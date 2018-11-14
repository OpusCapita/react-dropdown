var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'react-bootstrap';

import { Icon } from '@opuscapita/react-icons';

import DropdownContainer from '../dropdown-container/dropdown-container.component';
import './dropdown-menu.component.scss';

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
          return React.createElement(MenuItem, {
            key: id,
            divider: true
          });
        }
        return React.createElement(
          MenuItem,
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
          React.createElement(
            'span',
            { className: 'oc-dropdown-menu-icon' },
            item.icon
          ),
          React.createElement(
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

    return React.createElement(
      'div',
      { className: 'oc-dropdown-menu' },
      React.createElement(
        DropdownContainer,
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
}(React.PureComponent), _class.defaultProps = {
  caret: false,
  disabled: false,
  dropup: false,
  pullLeft: false,
  title: React.createElement(
    'div',
    { style: { padding: '6px 7px 3px' } },
    React.createElement(Icon, { type: 'indicator', name: 'more', width: 20, height: 20 })
  )
}, _temp);
export { DropdownMenu as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIk1lbnVJdGVtIiwiSWNvbiIsIkRyb3Bkb3duQ29udGFpbmVyIiwiRHJvcGRvd25NZW51IiwicHJvcHMiLCJoYW5kbGVUb2dnbGUiLCJpc09wZW4iLCJkb250Q2xvc2VEcm9wZG93bk1lbnUiLCJzZXRTdGF0ZSIsInJlbmRlck1lbnVJdGVtcyIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImkiLCJpZCIsInVuZGVmaW5lZCIsInR5cGUiLCJkaXNhYmxlZCIsImhyZWYiLCJlIiwiZGlzYWJsZUNsb3NpbmciLCJvbkNsaWNrIiwiaWNvbiIsInRpdGxlIiwic3RhdGUiLCJyZW5kZXIiLCJtZW51SXRlbXMiLCJjYXJldCIsInB1bGxMZWZ0Iiwib3RoZXJQcm9wcyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJkcm9wdXAiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsaUJBQXpCOztBQUVBLFNBQVNDLElBQVQsUUFBcUIseUJBQXJCOztBQUVBLE9BQU9DLGlCQUFQLE1BQThCLG9EQUE5QjtBQUNBLE9BQU8sZ0NBQVA7O0lBRXFCQyxZOzs7QUFnQ25CLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBS25CQyxZQUxtQixHQUtKLFVBQUNDLE1BQUQsRUFBWTtBQUN6QixVQUFJLE1BQUtDLHFCQUFULEVBQWdDO0FBQzlCLGNBQUtDLFFBQUwsQ0FBYyxFQUFFRixRQUFRLElBQVYsRUFBZDtBQUNBLGNBQUtDLHFCQUFMLEdBQTZCLEtBQTdCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsY0FBS0MsUUFBTCxDQUFjLEVBQUVGLGNBQUYsRUFBZDtBQUNEO0FBQ0YsS0Faa0I7O0FBQUEsVUFjbkJHLGVBZG1CLEdBY0Q7QUFBQSxhQUNoQkMsTUFBTUMsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ3JCLFlBQU1DLEtBQUtGLEtBQUtFLEVBQUwsS0FBWUMsU0FBWixHQUF3QkgsS0FBS0UsRUFBN0IsWUFBeUNELENBQXBEO0FBQ0EsWUFBSUQsS0FBS0ksSUFBTCxLQUFjLFNBQWxCLEVBQTZCO0FBQzNCLGlCQUNFLG9CQUFDLFFBQUQ7QUFDRSxpQkFBS0YsRUFEUDtBQUVFO0FBRkYsWUFERjtBQU1EO0FBQ0QsZUFDRTtBQUFDLGtCQUFEO0FBQUE7QUFDRSxpQkFBS0EsRUFEUDtBQUVFLGdCQUFJQSxFQUZOO0FBR0Usc0JBQVUsQ0FBQyxDQUFDRixLQUFLSyxRQUhuQjtBQUlFLGtCQUFNTCxLQUFLTSxJQUpiO0FBS0UscUJBQVMsaUJBQUNDLENBQUQsRUFBTztBQUNkLGtCQUFJUCxLQUFLUSxjQUFULEVBQXlCO0FBQ3ZCLHNCQUFLYixxQkFBTCxHQUE2QixJQUE3QjtBQUNEO0FBQ0Qsa0JBQUksQ0FBQ0ssS0FBS0ssUUFBTixJQUFrQkwsS0FBS1MsT0FBM0IsRUFBb0M7QUFDbENULHFCQUFLUyxPQUFMLENBQWFGLENBQWI7QUFDRDtBQUNGO0FBWkg7QUFjRTtBQUFBO0FBQUEsY0FBTSxXQUFVLHVCQUFoQjtBQUF5Q1AsaUJBQUtVO0FBQTlDLFdBZEY7QUFlRTtBQUFBO0FBQUEsY0FBTSxXQUFVLHdCQUFoQjtBQUEwQ1YsaUJBQUtXO0FBQS9DO0FBZkYsU0FERjtBQW1CRCxPQTdCRCxDQURnQjtBQUFBLEtBZEM7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFFbEIsUUFBUSxLQUFWLEVBQWI7QUFGaUI7QUFHbEI7O3lCQTJDRG1CLE0scUJBQVM7QUFBQSxpQkFNSCxLQUFLckIsS0FORjtBQUFBLFFBRUxzQixTQUZLLFVBRUxBLFNBRks7QUFBQSxRQUdMQyxLQUhLLFVBR0xBLEtBSEs7QUFBQSxRQUlMQyxRQUpLLFVBSUxBLFFBSks7QUFBQSxRQUtGQyxVQUxFOztBQVFQLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUMseUJBQUQ7QUFBQTtBQUNFLG1CQUFTLENBQUNGLEtBRFo7QUFFRSxxQkFBVyxDQUFDQyxRQUZkO0FBR0Usa0JBQVEsS0FBS0osS0FBTCxDQUFXbEIsTUFIckI7QUFJRSxvQkFBVSxLQUFLRDtBQUpqQixXQUtNd0IsVUFMTjtBQU9HLGFBQUtwQixlQUFMLENBQXFCaUIsU0FBckI7QUFQSDtBQURGLEtBREY7QUFhRCxHOzs7RUFuR3VDNUIsTUFBTWdDLGEsVUFvQnZDQyxZLEdBQWU7QUFDcEJKLFNBQU8sS0FEYTtBQUVwQlYsWUFBVSxLQUZVO0FBR3BCZSxVQUFRLEtBSFk7QUFJcEJKLFlBQVUsS0FKVTtBQUtwQkwsU0FDRTtBQUFBO0FBQUEsTUFBSyxPQUFPLEVBQUVVLFNBQVMsYUFBWCxFQUFaO0FBQ0Usd0JBQUMsSUFBRCxJQUFNLE1BQUssV0FBWCxFQUF1QixNQUFLLE1BQTVCLEVBQW1DLE9BQU8sRUFBMUMsRUFBOEMsUUFBUSxFQUF0RDtBQURGO0FBTmtCLEM7U0FwQkg5QixZIiwiZmlsZSI6ImRyb3Bkb3duLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5cbmltcG9ydCBEcm9wZG93bkNvbnRhaW5lciBmcm9tICcuLi9kcm9wZG93bi1jb250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duTWVudSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICBtZW51SXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBkaXNhYmxlQ2xvc2luZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaWNvbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLCAvLyBzZXJ2ZXMgYXMgYSBrZXlcbiAgICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydpdGVtJywgJ2RpdmlkZXInXSksXG4gICAgfSkpLmlzUmVxdWlyZWQsXG4gICAgY2FyZXQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkcm9wdXA6IFByb3BUeXBlcy5ib29sLFxuICAgIHB1bGxMZWZ0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNhcmV0OiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgZHJvcHVwOiBmYWxzZSxcbiAgICBwdWxsTGVmdDogZmFsc2UsXG4gICAgdGl0bGU6IChcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzZweCA3cHggM3B4JyB9fT5cbiAgICAgICAgPEljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJtb3JlXCIgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpc09wZW46IGZhbHNlIH07XG4gIH1cblxuICBoYW5kbGVUb2dnbGUgPSAoaXNPcGVuKSA9PiB7XG4gICAgaWYgKHRoaXMuZG9udENsb3NlRHJvcGRvd25NZW51KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiB0cnVlIH0pO1xuICAgICAgdGhpcy5kb250Q2xvc2VEcm9wZG93bk1lbnUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbiB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJNZW51SXRlbXMgPSBpdGVtcyA9PlxuICAgIGl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBpdGVtLmlkICE9PSB1bmRlZmluZWQgPyBpdGVtLmlkIDogYGl0ZW0ke2l9YDtcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkaXZpZGVyJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIGRpdmlkZXJcbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgZGlzYWJsZWQ9eyEhaXRlbS5kaXNhYmxlZH1cbiAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmRpc2FibGVDbG9zaW5nKSB7XG4gICAgICAgICAgICAgIHRoaXMuZG9udENsb3NlRHJvcGRvd25NZW51ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXRlbS5kaXNhYmxlZCAmJiBpdGVtLm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgaXRlbS5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvYy1kcm9wZG93bi1tZW51LWljb25cIj57aXRlbS5pY29ufTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvYy1kcm9wZG93bi1tZW51LXRpdGxlXCI+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgKTtcbiAgICB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWVudUl0ZW1zLFxuICAgICAgY2FyZXQsXG4gICAgICBwdWxsTGVmdCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLWRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgPERyb3Bkb3duQ29udGFpbmVyXG4gICAgICAgICAgbm9DYXJldD17IWNhcmV0fVxuICAgICAgICAgIHB1bGxSaWdodD17IXB1bGxMZWZ0fVxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgb25Ub2dnbGU9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucmVuZGVyTWVudUl0ZW1zKG1lbnVJdGVtcyl9XG4gICAgICAgIDwvRHJvcGRvd25Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=