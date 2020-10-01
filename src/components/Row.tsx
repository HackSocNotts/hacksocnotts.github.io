import React from 'react';
import cx from 'classnames';

interface RowProps {
  children: React.ReactNode;
  className?: string;
}

const Row: React.FC<RowProps> = ({ children, className }) => {
  return <div className={cx('row', className)}>{children}</div>;
};

export default Row;
