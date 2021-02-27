import React from 'react';
import IconLabel from './IconLabel';
import styles from './SubSection.module.css';

interface SubSectionProps {
  title?: string;
  subtitle?: string;
  date?: string;
  location?: string;
  children?: React.ReactNode;
}

function SubSection({
  title,
  children,
  subtitle,
  date,
  location,
}: SubSectionProps) {
  return (
    <div className={styles.subSection}>
      {(title || location) && (
        <div className={styles.subSectionHead}>
          {title && <div className={styles.subSecTitleText}>{title}</div>}
          {location && (
            <IconLabel
              icon="map-marker-alt"
              textStyle={styles.subSecLocText}
              iconStyle={styles.subSecIcon}
            >
              {location}
            </IconLabel>
          )}
        </div>
      )}
      {(subtitle || date) && (
        <div className={styles.subSectionHead}>
          {subtitle && (
            <div className={styles.subSecSubTitleText}>{subtitle}</div>
          )}
          {date && (
            <IconLabel
              icon="calendar-alt"
              textStyle={styles.subSecDateText}
              iconStyle={styles.subSecIcon}
            >
              {date}
            </IconLabel>
          )}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}

export default SubSection;
