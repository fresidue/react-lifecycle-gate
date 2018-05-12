# react-lifecycle-gate
A lightweight component to which lifecycle hooks can easily be attached as props. Similar to [react-lifecycle-component](https://github.com/JamieDixon/react-lifecycle-component) but slightly simpler

`npm i react-lifecycle-gate --save`

## Usage

Suppose you want to use a pure functional component, and need to trigger some stuffs on componentDidMount, componentWillMount, and/or componentWillUnmount (which are the 3 supported lifecycle hooks). Simply wrap your content in a lifecycle gate and you're done.

```
import LifecycleGate from 'react-lifecycle-gate';

const initStuffs = () => {};
const moreInitStuffs = () => {};
const cleanupStuffs = () => {};

export const JankyComponent = props => (
  <LifecycleGate
    willMount={initStuffs}
    didMount={moreInitStuffs}
    willUnmount={cleanupStuffs} >
    <p>Children get rendered if included. If not, the callbacks get called anyways of course</p>
  </LifecycleGate>
);
```
