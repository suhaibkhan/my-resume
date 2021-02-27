import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  title: string;
  children?: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>{title}</div>
      <div>{children}</div>
    </div>
  );
}

export default Section;
