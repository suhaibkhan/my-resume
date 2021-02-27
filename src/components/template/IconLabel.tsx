import React from 'react';
import styles from './IconLabel.module.css';
import {
  FontAwesomeIconProps,
  FontAwesomeIcon as FIcon,
} from '@fortawesome/react-fontawesome';

interface IconLabelProps {
  icon: FontAwesomeIconProps['icon'];
  children: string;
  textStyle?: string;
  iconStyle?: string;
  isLink?: boolean;
}

function IconLabel({
  icon,
  children,
  textStyle = '',
  iconStyle = '',
  isLink = false,
}: IconLabelProps) {
  if (!children) {
    return null;
  }
  return (
    <div className={styles.iconLabelBlock}>
      <FIcon icon={icon} className={`${styles.iconLabelIcon} ${iconStyle}`} />
      {!isLink ? (
        <span className={`${styles.iconLabelTxt} ${textStyle}`}>
          {children}
        </span>
      ) : (
        <a
          href={`https://${children.replace(/(http|https):\/\//g, '')}`}
          className={`${styles.iconLabelTxt} ${textStyle}`}
          target="blank"
        >
          {children}
        </a>
      )}
    </div>
  );
}

export default IconLabel;
