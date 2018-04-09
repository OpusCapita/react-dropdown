'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCheckbox = require('@opuscapita/react-checkbox');

var _reactCheckbox2 = _interopRequireDefault(_reactCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiSelectItem = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(MultiSelectItem, _React$PureComponent);

  function MultiSelectItem() {
    var _temp, _this, _ret;

    _classCallCheck(this, MultiSelectItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.onChange = function () {
      _this.props.onChange(_this.props.item.value, !_this.props.isChecked);
    }, _this.onKeyDown = function (e) {
      _this.props.onKeyDown(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MultiSelectItem.prototype.render = function render() {
    var _props = this.props,
        isChecked = _props.isChecked,
        item = _props.item;

    return _react2.default.createElement(_reactCheckbox2.default, {
      className: 'oc-multi-select-item-checkbox',
      checked: isChecked,
      id: item.value,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
      label: item.label
    });
  };

  return MultiSelectItem;
}(_react2.default.PureComponent), _class.defaultProps = {
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {}
}, _temp2);
exports.default = MultiSelectItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LWl0ZW0vbXVsdGktc2VsZWN0LWl0ZW0uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJNdWx0aVNlbGVjdEl0ZW0iLCJvbkNoYW5nZSIsInByb3BzIiwiaXRlbSIsInZhbHVlIiwiaXNDaGVja2VkIiwib25LZXlEb3duIiwiZSIsInJlbmRlciIsImxhYmVsIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Z0tBb0JuQkMsUSxHQUFXLFlBQU07QUFDZixZQUFLQyxLQUFMLENBQVdELFFBQVgsQ0FBb0IsTUFBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxLQUFwQyxFQUEyQyxDQUFDLE1BQUtGLEtBQUwsQ0FBV0csU0FBdkQ7QUFDRCxLLFFBRURDLFMsR0FBWSxVQUFDQyxDQUFELEVBQU87QUFDakIsWUFBS0wsS0FBTCxDQUFXSSxTQUFYLENBQXFCQyxDQUFyQjtBQUNELEs7Ozs0QkFFREMsTSxxQkFBUztBQUFBLGlCQUNxQixLQUFLTixLQUQxQjtBQUFBLFFBQ0NHLFNBREQsVUFDQ0EsU0FERDtBQUFBLFFBQ1lGLElBRFosVUFDWUEsSUFEWjs7QUFFUCxXQUNFO0FBQ0UsaUJBQVUsK0JBRFo7QUFFRSxlQUFTRSxTQUZYO0FBR0UsVUFBSUYsS0FBS0MsS0FIWDtBQUlFLGdCQUFVLEtBQUtILFFBSmpCO0FBS0UsaUJBQVcsS0FBS0ssU0FMbEI7QUFNRSxhQUFPSCxLQUFLTTtBQU5kLE1BREY7QUFVRCxHOzs7RUF4QzBDLGdCQUFNQyxhLFVBZTFDQyxZLEdBQWU7QUFDcEJWLFlBQVUsb0JBQU0sQ0FBRSxDQURFO0FBRXBCSyxhQUFXLHFCQUFNLENBQUU7QUFGQyxDO2tCQWZITixlIiwiZmlsZSI6Im11bHRpLXNlbGVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWNoZWNrYm94JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlTZWxlY3RJdGVtIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXRlbTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIGlzQ2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvbktleURvd246ICgpID0+IHt9LFxuICB9O1xuXG4gIG9uQ2hhbmdlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pdGVtLnZhbHVlLCAhdGhpcy5wcm9wcy5pc0NoZWNrZWQpO1xuICB9XG5cbiAgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzQ2hlY2tlZCwgaXRlbSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENoZWNrYm94XG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLW11bHRpLXNlbGVjdC1pdGVtLWNoZWNrYm94XCJcbiAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkfVxuICAgICAgICBpZD17aXRlbS52YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd259XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=