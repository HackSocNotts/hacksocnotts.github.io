import React, { useState } from 'react';
import NavItemType from '../types/NavItem';
import cx from 'classnames';
import { Link } from 'gatsby';

interface NavItemProps {
  item: NavItemType;
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const [isActive, setActive] = useState(false);

  const getPropsHandler = ({ isCurrent }: { isCurrent: boolean }) => {
    setActive(isCurrent);
    return {};
  };

  const isExternal = (link: string) => {
    return link.substr(0, 4) === 'http';
  };

  return (
    <li
      className={cx({
        current: isActive,
      })}
    >
      {isExternal(item.to) && (
        <a href={item.to} rel="noopener noreferrer" target="_blank">
          {item.content}
        </a>
      )}
      {!isExternal(item.to) && (
        <Link to={item.to || '#'} getProps={getPropsHandler}>
          {item.content}
        </Link>
      )}
      {item.children && (
        <ul>
          {item.children.map((child, i) => (
            <NavItem item={child} key={i} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
