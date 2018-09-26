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
  title: React.createElement(Icon, { type: 'indicator', name: 'more', width: 32, height: 32 })
}, _temp);
export { DropdownMenu as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIk1lbnVJdGVtIiwiSWNvbiIsIkRyb3Bkb3duQ29udGFpbmVyIiwiRHJvcGRvd25NZW51IiwicHJvcHMiLCJoYW5kbGVUb2dnbGUiLCJpc09wZW4iLCJkb250Q2xvc2VEcm9wZG93bk1lbnUiLCJzZXRTdGF0ZSIsInJlbmRlck1lbnVJdGVtcyIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImkiLCJpZCIsInVuZGVmaW5lZCIsInR5cGUiLCJkaXNhYmxlZCIsImhyZWYiLCJlIiwiZGlzYWJsZUNsb3NpbmciLCJvbkNsaWNrIiwiaWNvbiIsInRpdGxlIiwic3RhdGUiLCJyZW5kZXIiLCJtZW51SXRlbXMiLCJjYXJldCIsInB1bGxMZWZ0Iiwib3RoZXJQcm9wcyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJkcm9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixpQkFBekI7O0FBRUEsU0FBU0MsSUFBVCxRQUFxQix5QkFBckI7O0FBRUEsT0FBT0MsaUJBQVAsTUFBOEIsb0RBQTlCO0FBQ0EsT0FBTyxnQ0FBUDs7SUFFcUJDLFk7OztBQTRCbkIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUEsVUFLbkJDLFlBTG1CLEdBS0osVUFBQ0MsTUFBRCxFQUFZO0FBQ3pCLFVBQUksTUFBS0MscUJBQVQsRUFBZ0M7QUFDOUIsY0FBS0MsUUFBTCxDQUFjLEVBQUVGLFFBQVEsSUFBVixFQUFkO0FBQ0EsY0FBS0MscUJBQUwsR0FBNkIsS0FBN0I7QUFDRCxPQUhELE1BR087QUFDTCxjQUFLQyxRQUFMLENBQWMsRUFBRUYsY0FBRixFQUFkO0FBQ0Q7QUFDRixLQVprQjs7QUFBQSxVQWNuQkcsZUFkbUIsR0FjRDtBQUFBLGFBQ2hCQyxNQUFNQyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDckIsWUFBTUMsS0FBS0YsS0FBS0UsRUFBTCxLQUFZQyxTQUFaLEdBQXdCSCxLQUFLRSxFQUE3QixZQUF5Q0QsQ0FBcEQ7QUFDQSxZQUFJRCxLQUFLSSxJQUFMLEtBQWMsU0FBbEIsRUFBNkI7QUFDM0IsaUJBQ0Usb0JBQUMsUUFBRDtBQUNFLGlCQUFLRixFQURQO0FBRUU7QUFGRixZQURGO0FBTUQ7QUFDRCxlQUNFO0FBQUMsa0JBQUQ7QUFBQTtBQUNFLGlCQUFLQSxFQURQO0FBRUUsZ0JBQUlBLEVBRk47QUFHRSxzQkFBVSxDQUFDLENBQUNGLEtBQUtLLFFBSG5CO0FBSUUsa0JBQU1MLEtBQUtNLElBSmI7QUFLRSxxQkFBUyxpQkFBQ0MsQ0FBRCxFQUFPO0FBQ2Qsa0JBQUlQLEtBQUtRLGNBQVQsRUFBeUI7QUFDdkIsc0JBQUtiLHFCQUFMLEdBQTZCLElBQTdCO0FBQ0Q7QUFDRCxrQkFBSSxDQUFDSyxLQUFLSyxRQUFOLElBQWtCTCxLQUFLUyxPQUEzQixFQUFvQztBQUNsQ1QscUJBQUtTLE9BQUwsQ0FBYUYsQ0FBYjtBQUNEO0FBQ0Y7QUFaSDtBQWNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsdUJBQWhCO0FBQXlDUCxpQkFBS1U7QUFBOUMsV0FkRjtBQWVFO0FBQUE7QUFBQSxjQUFNLFdBQVUsd0JBQWhCO0FBQTBDVixpQkFBS1c7QUFBL0M7QUFmRixTQURGO0FBbUJELE9BN0JELENBRGdCO0FBQUEsS0FkQzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQUVsQixRQUFRLEtBQVYsRUFBYjtBQUZpQjtBQUdsQjs7eUJBMkNEbUIsTSxxQkFBUztBQUFBLGlCQU1ILEtBQUtyQixLQU5GO0FBQUEsUUFFTHNCLFNBRkssVUFFTEEsU0FGSztBQUFBLFFBR0xDLEtBSEssVUFHTEEsS0FISztBQUFBLFFBSUxDLFFBSkssVUFJTEEsUUFKSztBQUFBLFFBS0ZDLFVBTEU7O0FBUVAsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQyx5QkFBRDtBQUFBO0FBQ0UsbUJBQVMsQ0FBQ0YsS0FEWjtBQUVFLHFCQUFXLENBQUNDLFFBRmQ7QUFHRSxrQkFBUSxLQUFLSixLQUFMLENBQVdsQixNQUhyQjtBQUlFLG9CQUFVLEtBQUtEO0FBSmpCLFdBS013QixVQUxOO0FBT0csYUFBS3BCLGVBQUwsQ0FBcUJpQixTQUFyQjtBQVBIO0FBREYsS0FERjtBQWFELEc7OztFQS9GdUM1QixNQUFNZ0MsYSxVQW9CdkNDLFksR0FBZTtBQUNwQkosU0FBTyxLQURhO0FBRXBCVixZQUFVLEtBRlU7QUFHcEJlLFVBQVEsS0FIWTtBQUlwQkosWUFBVSxLQUpVO0FBS3BCTCxTQUFPLG9CQUFDLElBQUQsSUFBTSxNQUFLLFdBQVgsRUFBdUIsTUFBSyxNQUE1QixFQUFtQyxPQUFPLEVBQTFDLEVBQThDLFFBQVEsRUFBdEQ7QUFMYSxDO1NBcEJIcEIsWSIsImZpbGUiOiJkcm9wZG93bi1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuXG5pbXBvcnQgRHJvcGRvd25Db250YWluZXIgZnJvbSAnLi4vZHJvcGRvd24tY29udGFpbmVyL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk1lbnUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgZGlzYWJsZUNsb3Npbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGljb246IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSwgLy8gc2VydmVzIGFzIGEga2V5XG4gICAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnaXRlbScsICdkaXZpZGVyJ10pLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIGNhcmV0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZHJvcHVwOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwdWxsTGVmdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjYXJldDogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGRyb3B1cDogZmFsc2UsXG4gICAgcHVsbExlZnQ6IGZhbHNlLFxuICAgIHRpdGxlOiA8SWNvbiB0eXBlPVwiaW5kaWNhdG9yXCIgbmFtZT1cIm1vcmVcIiB3aWR0aD17MzJ9IGhlaWdodD17MzJ9IC8+LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzT3BlbjogZmFsc2UgfTtcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSA9IChpc09wZW4pID0+IHtcbiAgICBpZiAodGhpcy5kb250Q2xvc2VEcm9wZG93bk1lbnUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUgfSk7XG4gICAgICB0aGlzLmRvbnRDbG9zZURyb3Bkb3duTWVudSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck1lbnVJdGVtcyA9IGl0ZW1zID0+XG4gICAgaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGl0ZW0uaWQgIT09IHVuZGVmaW5lZCA/IGl0ZW0uaWQgOiBgaXRlbSR7aX1gO1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RpdmlkZXInKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgZGl2aWRlclxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBkaXNhYmxlZD17ISFpdGVtLmRpc2FibGVkfVxuICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uZGlzYWJsZUNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgdGhpcy5kb250Q2xvc2VEcm9wZG93bk1lbnUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpdGVtLmRpc2FibGVkICYmIGl0ZW0ub25DbGljaykge1xuICAgICAgICAgICAgICBpdGVtLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9jLWRyb3Bkb3duLW1lbnUtaWNvblwiPntpdGVtLmljb259PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9jLWRyb3Bkb3duLW1lbnUtdGl0bGVcIj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICApO1xuICAgIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBtZW51SXRlbXMsXG4gICAgICBjYXJldCxcbiAgICAgIHB1bGxMZWZ0LFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtZHJvcGRvd24tbWVudVwiPlxuICAgICAgICA8RHJvcGRvd25Db250YWluZXJcbiAgICAgICAgICBub0NhcmV0PXshY2FyZXR9XG4gICAgICAgICAgcHVsbFJpZ2h0PXshcHVsbExlZnR9XG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn1cbiAgICAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJNZW51SXRlbXMobWVudUl0ZW1zKX1cbiAgICAgICAgPC9Ecm9wZG93bkNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==