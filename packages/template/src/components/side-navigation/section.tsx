import classNames from 'classnames';
import React from 'react';
import styles from './section.module.scss';

export default (properties) => (
    <div className={classNames(properties.className, styles.section)}>
        <div className={styles.sectionContent}>
            {properties.children}
        </div>
    </div>
);
