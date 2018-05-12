import React from 'react';

class LifecycleGate extends React.Component {
  componentWillMount () {
    this.props.willMount && this.props.willMount();
  }
  componentDidMount () {
    this.props.didMount && this.props.didMount();
  }
  componentWillUnmount () {
    this.props.willUnmount && this.props.willUnmount();
  }
  render () {
    return this.props.children || null;
  }
}

export default LifecycleGate;
