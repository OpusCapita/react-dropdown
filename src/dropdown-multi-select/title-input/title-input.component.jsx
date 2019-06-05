import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';

import { Icon } from '@opuscapita/react-icons';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

import './title-input.component.scss';

export default class TitleInput extends React.PureComponent {
  static propTypes = {
    input: PropTypes.element.isRequired,
    isClearable: PropTypes.bool,
    isOpen: PropTypes.bool,
    onClear: PropTypes.func,
    onFocus: PropTypes.func,
  };

  static defaultProps = {
    isClearable: false,
    isOpen: false,
    onClear: () => {},
    onFocus: () => {},
  };

  renderToggleIcon = () => {
    const { isOpen } = this.props;
    return isOpen
      ? <FaCaretUp height="9px" width="9px" />
      : <FaCaretDown height="9px" width="9px" />;
  }

  render() {
    const {
      input,
      isClearable,
      onClear,
      onFocus,
    } = this.props;
    const className = `oc-input-group-icon-remove${isClearable ? '' : ' disabled'}`;
    return (
      <InputGroup>
        {input}
        <InputGroup.Addon
          className={className}
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
          onClick={onFocus}
        >
          {this.renderToggleIcon()}
        </InputGroup.Addon>
      </InputGroup>
    );
  }
}
