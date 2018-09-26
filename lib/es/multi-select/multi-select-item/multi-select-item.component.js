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
}(React.PureComponent), _class.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]).isRequired
  }).isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
}, _class.defaultProps = {
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {}
}, _temp2);
export { MultiSelectItem as default };