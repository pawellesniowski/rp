
import styles from './demoDataTab.scss';
import { Input } from '../../../../components/inputs/input';

export const DemoDataTab = () => (
  <div className={styles.demoDataTabContainer}>
    <p className={styles.youCanGenerateDat}>You can generate data only on desktop view.</p>
    <h5 className={styles.theSystemWillGene}>
      THE SYSTEM WILL GENERATE THE FOLLOWING DEMO DATA:
    </h5>
    <ul>
      <li><span className={styles.dot} />10 launches</li>
      <li><span className={styles.dot} />1 dashboard with 9 widgets</li>
      <li><span className={styles.dot} />1 filter</li>
    </ul>
    <p className={styles.prefixWillBeAdd}>
      Prefix will be added to the demo dashboard, widgets, filter name
    </p>
    <div className={styles.input}>
      <Input
        placeholder="Enter Prefix"
      />
    </div>
    <button className={styles.button}>
      <span className={styles.generateDemoData}>Generate Demo Data</span>
    </button>
    <div>
      <img
        src="img/ic-warning.png"
        srcSet="img/ic-warning@2x.png 2x,
               img/ic-warning@3x.png 3x"
        className={styles.icWarning}
        alt="Warning sign"
      />
      <p className={styles.warning}>Warning</p>
    </div>
    <p className={styles.youWillHaveToRemove}>
      You will have to remove the demo data manually.
    </p>
  </div>
);
