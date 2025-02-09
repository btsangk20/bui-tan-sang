import { useState, useCallback, useMemo } from 'react';
import { RATES } from '../constants';

export const useSwap = () => {
  const [fromAmount, setFromAmount] = useState<string>('');
  const [toAmount, setToAmount] = useState<string>('');
  const [fromToken, setFromToken] = useState<string>('ETH');
  const [toToken, setToToken] = useState<string>('USDT');

  const calculateToAmount = useCallback(
    (value: string, from: string, to: string) => {
      if (!value) return '';
      const rate = RATES[from] / RATES[to];
      return (parseFloat(value) * rate).toFixed(6);
    },
    [],
  );

  const handleFromAmountChange = useCallback(
    (value: string) => {
      setFromAmount(value);
      setToAmount(calculateToAmount(value, fromToken, toToken));
    },
    [fromToken, toToken, calculateToAmount],
  );

  const handleSwap = useCallback(() => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  }, [fromToken, toToken, fromAmount, toAmount]);

  const currentRate = useMemo(
    () => RATES[fromToken] / RATES[toToken],
    [fromToken, toToken],
  );

  return {
    fromAmount,
    toAmount,
    fromToken,
    toToken,
    setFromToken,
    setToToken,
    handleFromAmountChange,
    handleSwap,
    currentRate,
  };
};
