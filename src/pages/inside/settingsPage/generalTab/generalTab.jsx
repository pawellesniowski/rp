import React, { Component } from 'react';


const options = [
  {
    value: 'AI',
    label: '1 hour',
    disabled: false,
  }, {
    value: 'PB',
    label: '3 hours',
    disabled: false,
  }, {
    value: 'SI',
    label: '6 hours',
    disabled: false,
  }, {
    value: 'ND',
    label: '12 hours',
    disabled: false,
  }, {
    value: 'TI',
    label: '1 day',
    disabled: false,
  }, {
    value: 'TY',
    label: '1 week',
    disabled: false,
  }];


export class GeneralTab extends Component {
  render() {
    return (
      <div>
        General Tab
      </div>
    );
  }
}

