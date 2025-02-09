import { Rate, Token } from '../types';

export const TOKENS: Token[] = [
  { symbol: 'ETH', name: 'Ethereum', icon: '⟠' },
  { symbol: 'BTC', name: 'Bitcoin', icon: '₿' },
  { symbol: 'USDT', name: 'Tether', icon: '₮' },
  { symbol: 'BNB', name: 'Binance Coin', icon: 'BNB' },
];

export const RATES: Rate = {
  ETH: 2000,
  BTC: 40000,
  USDT: 1,
  BNB: 300,
};
