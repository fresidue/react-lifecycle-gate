import React from 'react';
import {expect} from 'chai';
import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import LifecycleGate from './react-lifecycle-gate';

enzyme.configure({adapter: new Adapter()});
sinon.spy(LifecycleGate.prototype, 'componentDidMount');

describe('LifecycleGate:', () => {
  it('calls componentDidMount', () => {
    const willMount = sinon.spy();
    const didMount = sinon.spy();
    const willUnmount = sinon.spy();
    const wrapper = enzyme.mount(
      <LifecycleGate
        willMount={willMount}
        didMount={didMount}
        willUnmount={willUnmount}
      />
    );
    expect(willMount.calledOnce).to.equal(true);
    expect(didMount.calledOnce).to.equal(true);
    console.log('crazy');
    wrapper.unmount();
    console.log('crazycrow');
    expect(willUnmount.calledOnce).to.equal(true);
    console.log('crazycrowing');
  });
});

describe('Nested gates: ', () => {
  const outerWillMount = sinon.spy();
  const outerDidMount = sinon.spy();
  const outerWillUnmount = sinon.spy();
  const innerWillMount = sinon.spy();
  const innerDidMount = sinon.spy();
  const innerWillUnmount = sinon.spy();
  const Nested = () => (
    <LifecycleGate
      didMount={outerDidMount}
      willMount={outerWillMount}
      willUnmount={outerWillUnmount}
      >
      <LifecycleGate
        didMount={innerDidMount}
        willMount={innerWillMount}
        willUnmount={innerWillUnmount}
      />
    </LifecycleGate>
  );
  const wrapper = enzyme.mount(<Nested />);
  it('calls nested willMount\'s from root to leaf of DOM', () => {
    sinon.assert.callOrder(outerWillMount, innerWillMount);
  });
  it('calls nested didMount\'s from leaf to root of DOM', () => {
    sinon.assert.callOrder(innerDidMount, outerDidMount);
  });
  wrapper.unmount();
  it('calls nested willUnmount\'s from root to leaf of DOM', () => {
    sinon.assert.callOrder(outerWillUnmount, innerWillUnmount);
  });
});
