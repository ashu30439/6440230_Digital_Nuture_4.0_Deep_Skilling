import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ number, type, status }) {
  return (
    <div className={styles.box}>
      <h3 style={{ color: status === 'ongoing' ? 'green' : 'blue' }}>{status}</h3>
      <dl>
        <dt>Number</dt>
        <dd>{number}</dd>
        <dt>Type</dt>
        <dd>{type}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
