import React, { ComponentProps } from 'react';
import cx from 'classnames';

export interface ColumnProps {
  large?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  medium?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  small?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xsmall?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;
  children: React.ReactNode;
}

const Column: React.FC<ColumnProps & ComponentProps<'div'>> = ({
  large,
  medium,
  small,
  xsmall,
  className,
  children,
  ...rest
}) => {
  const largeClass = large ? `col-${large}` : 'col-12';
  const mediumClass = medium ? `col-${medium}-medium` : undefined;
  const smallClass = small ? `col-${small}-small` : undefined;
  const xsmallClass = small ? `col-${xsmall}-xsmall` : undefined;
  const classnames = cx(
    largeClass,
    {
      [mediumClass]: !!medium,
      [smallClass]: !!small,
      [xsmallClass]: !!xsmall,
    },
    className,
  );
  return (
    <section className={classnames} {...rest}>
      {children}
    </section>
  );
};

export default Column;
