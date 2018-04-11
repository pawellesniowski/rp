import React, { Component } from 'react';

import { PageLayout } from 'layouts/pageLayout';

import { GeneralTab } from './generalTab/index';
import { DemoDataTab } from './demoDataTab';

export class SettingsPage extends Component {
  render() {
    return (
      <PageLayout>
        <DemoDataTab />
      </PageLayout>
    );
  } // end of render
} // end of class
