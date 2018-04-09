var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

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

    return React.createElement(
      Dropdown,
      _extends({
        id: id,
        open: isOpen
      }, otherProps),
      React.createElement(
        Dropdown.Toggle,
        {
          noCaret: noCaret,
          open: isOpen,
          useAnchor: useAnchor
        },
        title
      ),
      React.createElement(
        Dropdown.Menu,
        null,
        children
      )
    );
  };

  return DropdownContainer;
}(React.PureComponent), _class.defaultProps = {
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
export { DropdownContainer as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcm9wZG93bi1jb250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJEcm9wZG93biIsIkRyb3Bkb3duQ29udGFpbmVyIiwicmVuZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImlkIiwiaXNPcGVuIiwibm9DYXJldCIsInRpdGxlIiwidXNlQW5jaG9yIiwib3RoZXJQcm9wcyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJkaXNhYmxlZCIsImRyb3B1cCIsIm9uVG9nZ2xlIiwicHVsbFJpZ2h0Iiwic3R5bGUiLCJic1NpemUiLCJic1N0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsaUJBQXpCOztJQUVxQkMsaUI7Ozs7Ozs7OztBQUNuQjs7Ozs4QkF3Q0FDLE0scUJBQVM7QUFBQSxpQkFTSCxLQUFLQyxLQVRGO0FBQUEsUUFFTEMsUUFGSyxVQUVMQSxRQUZLO0FBQUEsUUFHTEMsRUFISyxVQUdMQSxFQUhLO0FBQUEsUUFJTEMsTUFKSyxVQUlMQSxNQUpLO0FBQUEsUUFLTEMsT0FMSyxVQUtMQSxPQUxLO0FBQUEsUUFNTEMsS0FOSyxVQU1MQSxLQU5LO0FBQUEsUUFPTEMsU0FQSyxVQU9MQSxTQVBLO0FBQUEsUUFRRkMsVUFSRTs7QUFXUCxXQUNFO0FBQUMsY0FBRDtBQUFBO0FBQ0UsWUFBSUwsRUFETjtBQUVFLGNBQU1DO0FBRlIsU0FHTUksVUFITjtBQUtFO0FBQUMsZ0JBQUQsQ0FBVSxNQUFWO0FBQUE7QUFDRSxtQkFBU0gsT0FEWDtBQUVFLGdCQUFNRCxNQUZSO0FBR0UscUJBQVdHO0FBSGI7QUFLR0Q7QUFMSCxPQUxGO0FBWUU7QUFBQyxnQkFBRCxDQUFVLElBQVY7QUFBQTtBQUNHSjtBQURIO0FBWkYsS0FERjtBQWtCRCxHOzs7RUF0RTRDTixNQUFNYSxhLFVBMEI1Q0MsWSxHQUFlO0FBQ3BCUixZQUFVLElBRFU7QUFFcEJTLFlBQVUsS0FGVTtBQUdwQkMsVUFBUSxLQUhZO0FBSXBCUixVQUFRLEtBSlk7QUFLcEJDLFdBQVMsS0FMVztBQU1wQlEsWUFBVSxvQkFBTSxDQUFFLENBTkU7QUFPcEJDLGFBQVcsS0FQUztBQVFwQkMsU0FBTztBQUNMQyxZQUFRLElBREg7QUFFTEMsYUFBUztBQUZKLEdBUmE7QUFZcEJWLGFBQVc7QUFaUyxDO1NBMUJIUixpQiIsImZpbGUiOiJkcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIC8qKiBOb3RlOiAndXNlQW5jaG9yJyBwcm9wIG1ha2VzIGRyb3Bkb3duLnRvZ2dsZSByZW5kZXIgYXMgYSBsaW5rIHJhdGhlciB0aGFuXG4gICAqIGEgYnV0dG9uIHdpdGggb25DbGljayBpc3N1ZSB3aGVuIGl0IHdyYXBzIGFuIGlucHV0XG4gICAqL1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmVsZW1lbnQpLFxuICAgIF0pLFxuICAgIG5vQ2FyZXQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkcm9wdXA6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25Ub2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHB1bGxSaWdodDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBic1NpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBic1N0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICAgIHVzZUFuY2hvcjogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgZHJvcHVwOiBmYWxzZSxcbiAgICBpc09wZW46IGZhbHNlLFxuICAgIG5vQ2FyZXQ6IGZhbHNlLFxuICAgIG9uVG9nZ2xlOiAoKSA9PiB7fSxcbiAgICBwdWxsUmlnaHQ6IGZhbHNlLFxuICAgIHN0eWxlOiB7XG4gICAgICBic1NpemU6ICd4cycsXG4gICAgICBic1N0eWxlOiAnaW5mbycsXG4gICAgfSxcbiAgICB1c2VBbmNob3I6IGZhbHNlLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlkLFxuICAgICAgaXNPcGVuLFxuICAgICAgbm9DYXJldCxcbiAgICAgIHRpdGxlLFxuICAgICAgdXNlQW5jaG9yLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93blxuICAgICAgICBpZD17aWR9XG4gICAgICAgIG9wZW49e2lzT3Blbn1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxEcm9wZG93bi5Ub2dnbGVcbiAgICAgICAgICBub0NhcmV0PXtub0NhcmV0fVxuICAgICAgICAgIG9wZW49e2lzT3Blbn1cbiAgICAgICAgICB1c2VBbmNob3I9e3VzZUFuY2hvcn1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XG4gICAgICAgIDxEcm9wZG93bi5NZW51PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICApO1xuICB9XG59XG4iXX0=