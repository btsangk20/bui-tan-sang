import styled from 'styled-components';
import { Card, Button, Divider } from 'antd';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0rem;
`;

export const StyledCard = styled(Card)`
  width: 480px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .ant-card-body {
    padding: 24px;
  }
`;

export const SwapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TokenInput = styled.div`
  background: #f5f5f5;
  border-radius: 12px;
  padding: 16px;
`;

export const SwapButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  &:hover {
    transform: rotate(180deg);
    transition: all 0.3s ease;
  }
`;

export const StyledDivider = styled(Divider)`
  margin: 16px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 14px;
`;

export const SettingsContainer = styled.div`
  background: #f5f5f5;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
`;
