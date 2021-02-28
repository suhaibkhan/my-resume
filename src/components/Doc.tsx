import React, { CSSProperties } from 'react';
import styles from './Doc.module.css';

interface DocProps {
  scale: number;
  children: React.ReactNode;
}

function Doc({ children, scale }: DocProps) {
  const zoomSupported = true;
  const docStyles: CSSProperties = {};
  if (zoomSupported) {
    docStyles['zoom'] = `${scale}`;
  } else {
    docStyles['transform'] = `scale(${scale})`;
  }
  return (
    <div className={styles.doc}>
      <div style={docStyles}>{children}</div>
    </div>
  );
}

export default Doc;
