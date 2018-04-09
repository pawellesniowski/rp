import React, { Component } from 'react';
import { Input } from '../../../../components/inputs/input';

import styles from './generalTab.scss';
import {InputDropdown} from "../../../../components/inputs/inputDropdown";
import {InputBigSwitcher} from "../../../../components/inputs/inputBigSwitcher";
import {BigButton} from "../../../../components/buttons/bigButton";


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
      <div className={styles.generalTabContainer}>
        <form className={styles.generalTabContent}>
          <label className={styles.generalTabLabel}>Name</label>
          <Input disabled placeholder="artem" />

          <label className={styles.generalTabLabel}>Launch inactivity timeout</label>
          <InputDropdown className={styles.generalTabDropDown} options={options} />
          <p>Schedule time for Job to interrupt inactive launches</p>

          <label className={styles.generalTabLabel}>Keep logs</label>
          <InputDropdown className={styles.generalTabDropDown} options={options} />
          <p>How long to keep old logs in launches.
            Related launches structure will be saved, in order to keep statistics
          </p>

          <label className={styles.generalTabLabel}>Keep attachments</label>
          <InputDropdown className={styles.generalTabDropDown} options={options} />
          <p>How long to keep attachments in system</p>

          <label className={styles.generalTabLabel}>Auto analysis</label>
          <InputBigSwitcher value />
          <p>If ON - analysis starts as soon as any launch finished. </p>
          <p>If OFF - not automatic, but can be invoked manually.</p>

          <label className={styles.generalTabLabel}>Base for Auto Analysis</label>

          <BigButton className={styles.bigButton}>Submit</BigButton>

        </form>

      </div>
    );
  }
}

