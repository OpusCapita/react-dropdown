import React from 'react';

import DropdownContainerView from
  './dropdown-container-view/dropdown-container-view.component';
import DropdownMenuView from
  './dropdown-menu-view/dropdown-menu-view.component';
import DropdownMultiSelectView from
  './dropdown-multi-select-view/dropdown-multi-select-view.component';

export default function ComponentView() {
  return (
    <div>
      <DropdownContainerView />
      <br /><br /><br /><br />
      <DropdownMenuView />
      <br /><br /><br /><br />
      <DropdownMultiSelectView />
    </div>
  );
}
