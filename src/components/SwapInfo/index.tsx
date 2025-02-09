import React, { memo } from 'react';
import { InfoRow } from '../../styles';

interface SwapInfoProps {
  fromToken: string;
  toToken: string;
  rate: number;
  slippage: number;
}

const SwapInfo: React.FC<SwapInfoProps> = memo(
  ({ fromToken, toToken, rate, slippage }) => (
    <>
      <InfoRow>
        <span>Exchange Rate</span>
        <span>
          1 {fromToken} = {rate.toFixed(6)} {toToken}
        </span>
      </InfoRow>
      <InfoRow>
        <span>Slippage Tolerance</span>
        <span>{slippage}%</span>
      </InfoRow>
    </>
  ),
);

export default SwapInfo;
