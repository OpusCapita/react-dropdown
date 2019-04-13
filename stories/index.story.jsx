import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, boolean } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import { List, fromJS } from 'immutable';
// Application
import './scss/app.component.scss';

/* eslint-disable no-alert */

import DropdownMenu from '../src/dropdown-menu/dropdown-menu.component';
import DropdownMultiSelect from '../src/dropdown-multi-select/dropdown-multi-select.component';
import DropdownContainer from '../src/dropdown-container/dropdown-container.component';

const stories = storiesOf('@opuscapita/react-dropdown', module);
const menuItems = [{
  title: 'Menu item 1',
  onClick: () => {
    alert('Menu item clicked');
  },
  disabled: false,
  href: '#',
  icon: null,
  id: '1',
  disabledClosing: false,
}, {
  title: 'divider',
  id: 'divider',
  type: 'divider',
}, {
  title: 'Menu item 2',
  onClick: () => {
    alert('Menu item #2 clicked');
  },
  disabled: false,
  icon: null,
  id: '2',
  disabledClosing: true,
}];

stories.add('Dropdown: Dropdown menu', () => {
  const knobs = {
    caret: boolean('Show caret (use with title)', false),
    disabled: boolean('Dropdown disabled', false),
    title: text('Title', undefined),
    dropup: boolean('"Drop up"', false),
    pullLeft: boolean('Pull left', false),
    menuItems: object('Menu items', menuItems),
  };

  /* eslint-disable key-spacing */
  return (
    <header className="dropdown-header">
      <h4>DropdownMenu</h4>
      <DropdownMenu
        id="demo-menu"
        {...knobs}
      />
    </header>
  );
});

const store = new Store({
  checkedItems: List(),
});

stories.add('Dropdown: Multi select menu', () => {


  const items = [];
  for (let i = 1; i < 11; i += 1) {
    items.push({ value: `item-${i}`, label: `Item ${i}` });
  }

  const knobs = {
    items: object('Items', fromJS(items)),
    defaultPlaceholder: text('Default placeholder ({N} items selected)', undefined),
  };

  const onMultiSelectChange = (checkedItems) => {
    store.set({ checkedItems });
  };

  /* eslint-disable key-spacing */
  return (
    <header className="dropdown-header">
      <State store={store}>
        <DropdownMultiSelect
          id="demo-multi-select-menu"
          items={items}
          checkedItems={store.get('checkedItems')}
          onChange={onMultiSelectChange}
          {...knobs}
        />
      </State>
    </header>
  );
});

stories.add('Dropdown: Dropdown container', () => {
  const knobs = {
    title: text('Title', 'Title'),
    disabled: boolean('Disabled', false),
    isOpen: boolean('isOpen', false),
    dropup: boolean('Drop up', false),
    pullRight: boolean('Pull right', false),
    style: object('Styles', { padding: '1rem' }),
    useAnchor: boolean('Use anchor', false),
  };

  const onToggleClick = () => {
    alert('onToggle callback: normally you would change the isOpen prop with this');
  };

  return (
    <DropdownContainer
      onToggle={onToggleClick}
      id="demo-dropdown-container"
      {...knobs}
    >
      <div>
        <h4>Dropdown container content</h4>
        <p>Here is some content.</p>
      </div>
    </DropdownContainer>
  );
});
