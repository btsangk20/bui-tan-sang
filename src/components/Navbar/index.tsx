import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StyledHeader, StyledMenu } from '../../styles';
import { ROUTES } from '../../constants/route';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <StyledHeader>
      <StyledMenu
        mode='horizontal'
        selectedKeys={[location.pathname.substring(1) || 'swap']}
      >
        {ROUTES.map((route) => (
          <StyledMenu.Item
            key={route.key}
            onClick={() => handleMenuClick(route.path)}
          >
            {route.label}
          </StyledMenu.Item>
        ))}
      </StyledMenu>
    </StyledHeader>
  );
};

export default Navbar;
