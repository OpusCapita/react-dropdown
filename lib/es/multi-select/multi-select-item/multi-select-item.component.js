var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@opuscapita/react-checkbox';

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

    return React.createElement(Checkbox, {
      className: 'oc-multi-select-item-checkbox',
      checked: isChecked,
      id: item.value,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
      label: item.label
    });
  };

  return MultiSelectItem;
}(React.PureComponent), _class.defaultProps = {
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {}
}, _temp2);
export { MultiSelectItem as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LWl0ZW0vbXVsdGktc2VsZWN0LWl0ZW0uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkNoZWNrYm94IiwiTXVsdGlTZWxlY3RJdGVtIiwib25DaGFuZ2UiLCJwcm9wcyIsIml0ZW0iLCJ2YWx1ZSIsImlzQ2hlY2tlZCIsIm9uS2V5RG93biIsImUiLCJyZW5kZXIiLCJsYWJlbCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLDRCQUFyQjs7SUFFcUJDLGU7Ozs7Ozs7Ozs7OztnS0FvQm5CQyxRLEdBQVcsWUFBTTtBQUNmLFlBQUtDLEtBQUwsQ0FBV0QsUUFBWCxDQUFvQixNQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLEtBQXBDLEVBQTJDLENBQUMsTUFBS0YsS0FBTCxDQUFXRyxTQUF2RDtBQUNELEssUUFFREMsUyxHQUFZLFVBQUNDLENBQUQsRUFBTztBQUNqQixZQUFLTCxLQUFMLENBQVdJLFNBQVgsQ0FBcUJDLENBQXJCO0FBQ0QsSzs7OzRCQUVEQyxNLHFCQUFTO0FBQUEsaUJBQ3FCLEtBQUtOLEtBRDFCO0FBQUEsUUFDQ0csU0FERCxVQUNDQSxTQUREO0FBQUEsUUFDWUYsSUFEWixVQUNZQSxJQURaOztBQUVQLFdBQ0Usb0JBQUMsUUFBRDtBQUNFLGlCQUFVLCtCQURaO0FBRUUsZUFBU0UsU0FGWDtBQUdFLFVBQUlGLEtBQUtDLEtBSFg7QUFJRSxnQkFBVSxLQUFLSCxRQUpqQjtBQUtFLGlCQUFXLEtBQUtLLFNBTGxCO0FBTUUsYUFBT0gsS0FBS007QUFOZCxNQURGO0FBVUQsRzs7O0VBeEMwQ1osTUFBTWEsYSxVQWUxQ0MsWSxHQUFlO0FBQ3BCVixZQUFVLG9CQUFNLENBQUUsQ0FERTtBQUVwQkssYUFBVyxxQkFBTSxDQUFFO0FBRkMsQztTQWZITixlIiwiZmlsZSI6Im11bHRpLXNlbGVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWNoZWNrYm94JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlTZWxlY3RJdGVtIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXRlbTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIGlzQ2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvbktleURvd246ICgpID0+IHt9LFxuICB9O1xuXG4gIG9uQ2hhbmdlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pdGVtLnZhbHVlLCAhdGhpcy5wcm9wcy5pc0NoZWNrZWQpO1xuICB9XG5cbiAgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzQ2hlY2tlZCwgaXRlbSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENoZWNrYm94XG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLW11bHRpLXNlbGVjdC1pdGVtLWNoZWNrYm94XCJcbiAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkfVxuICAgICAgICBpZD17aXRlbS52YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd259XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=