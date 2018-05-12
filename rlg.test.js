import React from 'react';
import {expect} from 'chai';
import enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {spy} from 'sinon';

import LifecycleGate from './react-lifecycle-gate';

enzyme.configure({adapter: new Adapter()});
spy(LifecycleGate.prototype, 'componentDidMount');

describe('<LifecycleGate />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<LifecycleGate />);
    expect(LifecycleGate.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
