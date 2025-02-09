import React, { memo } from 'react';
import { Form, Select } from 'antd';
import { SettingsContainer } from '../../styles';

interface SwapSettingsProps {
  slippage: number;
  onSlippageChange: (value: number) => void;
}

const SwapSettings: React.FC<SwapSettingsProps> = memo(
  ({ slippage, onSlippageChange }) => (
    <SettingsContainer>
      <Form.Item label='Slippage Tolerance'>
        <Select
          value={slippage}
          onChange={onSlippageChange}
          options={[
            { value: 0.5, label: '0.5%' },
            { value: 1, label: '1.0%' },
            { value: 2, label: '2.0%' },
            { value: 3, label: '3.0%' },
          ]}
        />
      </Form.Item>
    </SettingsContainer>
  ),
);

export default SwapSettings;
