import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';

import { Icon } from '@opuscapita/react-icons';

import './title-input.component.scss';

export default class TitleInput extends React.PureComponent {
  static propTypes = {
    input: PropTypes.element.isRequired,
    onClear: PropTypes.func,
  };

  static defaultProps = {
    onClear: () => {},
  };

  render() {
    const { input, onClear } = this.props;
    return (
      <InputGroup>
        {input}
        <InputGroup.Addon
          className="oc-input-group-icon-remove"
          onClick={onClear}
        >
          <div style={{ padding: '0 4px' }}>
            <Icon
              type="indicator"
              name="remove"
              width={9}
              height={9}
            />
          </div>
        </InputGroup.Addon>
      </InputGroup>
    );
  }
}
