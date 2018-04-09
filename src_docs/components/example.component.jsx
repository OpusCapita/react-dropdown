import React from 'react';
import DropdownContainerView from
  './dropdown-container-view/dropdown-container-view.component';
import DropdownMenuView from
  './dropdown-menu-view/dropdown-menu-view.component';
import DropdownMultiSelectView from
  './dropdown-multi-select-view/dropdown-multi-select-view.component';


export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Dropdown container</h1>
        <DropdownContainerView />
        <br /><br /><br /><br />
        <h1>Dropdown menu</h1>
        <DropdownMenuView />
        <br /><br /><br /><br />
        <h1>Dropdown multiselect</h1>
        <DropdownMultiSelectView />
      </div>
    );
  }
}
