import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export const StyledHeader = styled(Header)`
  background: white;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

export const StyledMenu = styled(Menu)`
  display: flex;
  justify-content: center;
  border-bottom: none;

  .ant-menu-item {
    padding: 0 24px;
    font-size: 16px;
    &:hover {
      color: #1890ff;
    }
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 64px;
  min-height: 100vh;
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
`;
