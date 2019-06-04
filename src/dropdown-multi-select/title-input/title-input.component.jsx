import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';

import { Icon } from '@opuscapita/react-icons';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

import './title-input.component.scss';

export default class TitleInput extends React.PureComponent {
  static propTypes = {
    input: PropTypes.element.isRequired,
    isOpen: PropTypes.bool,
    onClear: PropTypes.func,
  };

  static defaultProps = {
    isOpen: false,
    onClear: () => {},
  };

  renderToggleIcon = () => {
    const { isOpen } = this.props;
    return isOpen
      ? <FaCaretUp height="9px" width="9px" />
      : <FaCaretDown height="9px" width="9px" />;
  }

  render() {
    const { input, onClear } = this.props;
    return (
      <InputGroup>
        {input}
        <InputGroup.Addon
          className="oc-input-group-icon-remove"
          onClick={onClear}
        >
          <Icon
            type="indicator"
            name="remove"
            width={9}
            height={9}
          />
        </InputGroup.Addon>
        <InputGroup.Addon
          className="oc-input-group-icon-toggle"
          onClick={onClear}
        >
          {this.renderToggleIcon()}
        </InputGroup.Addon>
      </InputGroup>
    );
  }
}
