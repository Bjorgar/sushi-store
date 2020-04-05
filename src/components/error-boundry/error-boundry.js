import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {

  state = {
    catchError: false
  };

  componentDidCatch() {
    this.setState({
      catchError: true
    });
  }
  
  render() {
    if (this.state.catchError) {
      return <ErrorIndicator /> 
    }
    return this.props.children;
  }
}

