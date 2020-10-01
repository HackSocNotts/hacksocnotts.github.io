type NavItem = {
  content: string;
  to?: string;
  children?: NavItem[];
};

export default NavItem;
