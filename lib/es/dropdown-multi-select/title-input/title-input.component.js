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
        React.createElement(Icon, {
          type: 'indicator',
          name: 'remove',
          width: 17,
          height: 17
        })
      )
    );
  };

  return TitleInput;
}(React.PureComponent), _class.propTypes = {
  input: PropTypes.element.isRequired,
  onClear: PropTypes.func
}, _class.defaultProps = {
  onClear: function onClear() {}
}, _temp);
export { TitleInput as default };