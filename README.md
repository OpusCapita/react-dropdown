# react-dropdown

### Description
Describe the component here

### Installation

```
npm install @opuscapita/react-dropdown
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-dropdown)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API

DropdownContainer
| Prop name                | Type              | Default                                  | Description                              |
| ------------------------ | ----------------- | ---------------------------------------- | ---------------------------------------- |
| id                       | number or string  | required                                 | Unique HTML id attribute                 |
| title                    | number, string or element | required                         | Title of the dropdown                    |
| children                 | string, element or array  |                                  | Content of the dropdown                  |
| disabled                 | boolean           | false                                    | Is dropdown disabled or not              |
| dropup                   | boolean           | false                                    | Is dropup or dropdown                    |
| isOpen                   | boolean           | false                                    | Is dropdown open by default              |
| noCaret                  | boolean           | false                                    | If false, caret is show                  |
| onToggle                 | function          | empty function                           | Callback function for toggle             |
| pullRight                | boolean           | false                                    | If false, dropdown is aligned on left, otherwise on right |
| style                    | object            | { bsSize: 'xs', bsStyle: 'info' }        | Custom style for the dropdown            |
| useAnchor                | boolean           | false                                    | If true, title is anchor                 |

DropdownMenu
| Prop name                | Type              | Default                                  | Description                              |
| ------------------------ | ----------------- | ---------------------------------------- | ---------------------------------------- |
| id                       | number or string  | required                                 | Unique HTML id attribute                 |
| menuItems                | array of MenuItems | required                                 | List of the dropdown menu items          |
| menuItems.disabled       | boolean           |                                          | Is dropdown menu item disabled           |
| menuItems.disableClosing | boolean           |                                          | Is dropdown menu item's closing disabled |
| menuItems.href           | string            |                                          | Hyperlink of the dropdown menu item      |
| menuItems.icon           | element           |                                          | Icon of the dropdown menu item           |
| menuItems.id             | number or string  |                                          | Unique HTML id attribute                 |
| menuItems.onClick        | function          |                                          | Callback function of click               |
| menuItems.title          | number, string or element |                                  | Title of the dropdown menu item          |
| menuItems.type           | string            |                                          | Enumeration either 'item' or 'divider'   |
| caret                    | boolean           | false                                    | If true, caret is show                   |
| disabled                 | boolean           | false                                    | Is dropdown disabled or not              |
| dropup                   | boolean           | false                                    | Is dropup or dropdown                    |
| pullLeft                 | boolean           | false                                    | If false, dropdown is aligned on right, otherwise on left |
| title                    | number, string or element | <Icon type="indicator" name="more" width={32} height={32} /> | Title of the dropdown |

MenuItems
| Prop name                | Type              | Default                                  | Description                              |
| ------------------------ | ----------------- | ---------------------------------------- | ---------------------------------------- |
| disabled                 | boolean           |                                          | Is dropdown menu item disabled           |
| disableClosing           | boolean           |                                          | Is dropdown menu item's closing disabled |
| href                     | string            |                                          | Hyperlink of the dropdown menu item      |
| icon                     | element           |                                          | Icon of the dropdown menu item           |
| id                       | number or string  |                                          | Unique HTML id attribute                 |
| onClick                  | function          |                                          | Callback function of click               |
| title                    | number, string or element |                                  | Title of the dropdown menu item          |
| type                     | string            |                                          | Enumeration either 'item' or 'divider'   |
           
DropdownMultiSelect
| Prop name                | Type              | Default                                  | Description                              |
| ------------------------ | ----------------- | ---------------------------------------- | ---------------------------------------- |
| id                       | number or string  | required                                 | Unique HTML id attribute                 |
| items                    | array of Items    | required                                 | Dropdown menu items                      |
| checkedItems             | List              | empty list                               | Checked items                            |
| defaultPlaceholder       | string            | '{N} items selected'                     | Default placeholder                      |
| onChange                 | function          | empty function                           | Callback function of checked change      |
| tabIndex                 | number or string  | 1                                        | tabIndex attribute                       |

Items
| Prop name                | Type              | Default                                  | Description                              |
| ------------------------ | ----------------- | ---------------------------------------- | ---------------------------------------- |
| label                    | string            |                                          | Label of the dropdown menu item          |
| labelPlaceholder         | string            |                                          | Placeholder of the dropdown menu item    |
| value                    | boolean, number or string |                                  | Value of the dropdown menu item          |

### Code example
```jsx
import React from 'react';
import { 
  DropdownContainer,
  DropdownMenu,
  DropdownMultiSelect,
} from '@opuscapita/react-dropdown';

export default class ReactView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkedItems: List() };
  }

  componentWillMount() {
    this.items = this.initializeItems();
  }

  onChange = (checkedItems) => {
    this.setState({ checkedItems });
  }

  initializeItems = () => {
    const items = [];
    for (let i = 0; i < 300; i += 1) {
      items.push({ value: i, label: `Item ${i}` });
    }
    return items;
  };

  render() {
    return (
    <div>
      <DropdownContainer
        id="exampleDropdownContainer"
        isOpen
        noCaret
        title="Dropdown title"
      >
        <div>
          CONTENT
        </div>
      </DropdownContainer>      
      <DropdownMenu
        id="example"
        menuItems={[
          {
            id: 'item_id_11',
            title: 'Item 1, dont\'t close',
            onClick: () => console.log('Item 1 clicked'),
            disableClosing: true,
          },
          {
            id: 'item_id_12',
            title: 'Item 2, with the icon',
            onClick: () => console.log('Item 2 clicked'),
            icon: <Icon type="indicator" name="ok" width={25} height={25} />,
          },
          {
            id: 'item_id_d1',
            type: 'divider',
          },
          {
            id: 'item_id_13',
            title: 'Item 3',
            onClick: () => console.log('Item 3 clicked'),
            disabled: true,
          },
        ]}
      />
      <DropdownMenu
        id="example2"
        menuItems={[
          {
            id: 'item_id_21',
            title: 'Item 1',
            onClick: () => console.log('Item 1 clicked'),
          },
          {
            id: 'item_id_22',
            title: 'Item 2',
            onClick: () => console.log('Item 2 clicked'),
          },
          {
            id: 'item_id_d1',
            type: 'divider',
          },
          {
            id: 'item_id_23',
            title: 'Item 3',
            onClick: () => console.log('Item 3 clicked'),
            disableClosing: true,
          },
        ]}
        title="Dropdown"
        caret
        pullRight={false}
      />
      <DropdownMultiSelect
        checkedItems={this.state.checkedItems}
        id="exampleDropdownMultiSelect"
        items={this.items}
        onChange={this.onChange}
        defaultPlaceholder="{N} kpl"
      />
    </div>
    );
  }
}
```
