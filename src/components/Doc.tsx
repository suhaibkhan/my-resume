import React from 'react';
import styles from './Doc.module.css';

interface DocProps {
  scale: number;
  children: React.ReactNode;
}

function Doc({ children, scale }: DocProps) {
  return (
    <div className={styles.doc}>
      <div style={{ transform: `scale(${scale})` }}>{children}</div>
    </div>
  );
}

export default Doc;
