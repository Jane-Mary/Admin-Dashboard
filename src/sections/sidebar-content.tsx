import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from 'react-pro-sidebar';

interface MenuItemLinkProps {
  to: string;
  icon: string;
  label: string;
  marginBottom?: string;
  iconMarginRight?: string;
}

const MenuItemLink: React.FC<MenuItemLinkProps> = ({
  to,
  icon,
  label,
  marginBottom = '1rem',
  iconMarginRight = '2rem',
}) => (
  <MenuItem style={{ marginBottom }}>
    <Link to={to} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <i className={icon} style={{ marginRight: iconMarginRight }}></i>
      {label}
    </Link>
  </MenuItem>
);

export default MenuItemLink;
