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
  componentWillReceiveProps () {
    this.props.willReceiveProps && this.props.willReceiveProps();
  }
  componentWillUpdate() {
    this.props.willUpdate && this.props.willUpdate();
  }
  componentDidUpdate () {
    this.props.didUpdate && this.props.didUpdate();
  }

  render () {
    return this.props.children || null;
  }
}

export default LifecycleGate;
