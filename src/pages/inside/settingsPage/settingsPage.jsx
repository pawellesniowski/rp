import React, { Component } from 'react';

import { PageLayout } from 'layouts/pageLayout';

import { GeneralTab } from './generalTab/index';

export class SettingsPage extends Component {
  render() {
    return (
      <PageLayout>
        <GeneralTab />
      </PageLayout>
    );
  } // end of render
} // end of class
