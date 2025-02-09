import React, { memo } from 'react';
import { Select } from 'antd';
import { Token } from '../../types';

interface TokenSelectorProps {
  value: string;
  onChange: (value: string) => void;
  tokens: Token[];
}

const TokenSelector: React.FC<TokenSelectorProps> = memo(
  ({ value, onChange, tokens }) => (
    <Select value={value} onChange={onChange} style={{ width: 100 }}>
      {tokens.map((token) => (
        <Select.Option key={token.symbol} value={token.symbol}>
          {token.icon} {token.symbol}
        </Select.Option>
      ))}
    </Select>
  ),
);

export default TokenSelector;
