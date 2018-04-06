/* eslint-disable no-unused-expressions, prefer-arrow-callback, react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { List } from 'immutable';
import sinon from 'sinon';

import { DropdownMultiSelect } from '../../src/index';


describe('DropdownMultiSelect component', function describe() {
  it('should render and function correctly', function it() {
    const props = {
      checkedItems: List(),
      defaultPlaceholder: '{N} selected',
      id: 'dropdownMultiSelectExample',
      items: [
        {
          value: 'Item_1',
          label: 'Item 1',
        },
        {
          value: 'Item_2',
          label: 'Item 2',
        },
      ],
      onChange: sinon.spy(),
    };
    const wrapper = mount(<DropdownMultiSelect {...props} />);
    expect(wrapper.find('.oc-multi-select-item-checkbox').hostNodes().length).to.eql(2);
    expect(wrapper.find('.oc-multi-select-item-checkbox span').at(0).text()).to.eql('Item 1');
    wrapper.find('.oc-checkbox .icon').at(0).simulate('click');
    expect(props.onChange.called).to.be.true;
    wrapper.find('.oc-input-group-icon-remove').hostNodes().simulate('click');
    expect(props.onChange.called).to.be.true;
    expect(wrapper.instance().getPlaceholder(List(), props.items, props.defaultPlaceholder)).to.eql('0 selected');
    let spy;
    spy = sinon.spy(wrapper.instance(), 'handleClear');
    wrapper.instance().handleClear();
    expect(spy.called).to.be.true;
    spy = sinon.spy(wrapper.instance(), 'handleKeyDown');
    wrapper.instance().handleKeyDown({ keyCode: 1 });
    expect(spy.called).to.be.true;
    spy = sinon.spy(wrapper.instance(), 'handleToggle');
    wrapper.instance().handleToggle();
    expect(spy.called).to.be.true;
  });
});
