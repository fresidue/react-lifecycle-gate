# react-lifecycle-gate
A lightweight component to which lifecycle hooks can easily be attached as props. Similar to [react-lifecycle-component](https://github.com/JamieDixon/react-lifecycle-component) but slightly simpler

`npm i react-lifecycle-gate --save`

## Usage

Suppose you want to use a pure functional component, and need to trigger some stuffs on e.g. componentDidMount, just wrap your content in a lifecycle gate and you're done.

```javascript
import LifecycleGate from 'react-lifecycle-gate';

const initStuffs = () => {};

export const JankyComponent = props => (
  <LifecycleGate
    willMount={initStuffs}
    willUpdate={() => {
      console.log('fresh props just arrived');
    }} >
    <p>Children get rendered if included. If not, the callbacks get called anyways of course</p>
  </LifecycleGate>
);
```
## Supported properties

#### willMount
#### didMount
#### willUnmount
#### willReceiveProps
#### willUpdate
#### didUpdate
