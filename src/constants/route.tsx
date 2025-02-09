import { CurrencySwapPage, MessyReactPage, SumToNPage } from '../pages';
import { RouteConfig } from '../types/route';

export const PATH = {
  SWAP: '/swap',
  MESSY_REACT: '/messy-react',
  SUM_TO_N: '/sum-to-n',
};

export const ROUTES: RouteConfig[] = [
  {
    path: PATH.SWAP,
    label: 'Currency Swap',
    key: 'currency-swap',
    element: <CurrencySwapPage />,
  },
  {
    path: PATH.MESSY_REACT,
    label: 'Messy React',
    key: 'messy-react',
    element: <MessyReactPage />,
  },
  {
    path: PATH.SUM_TO_N,
    label: 'Sum to N',
    key: 'sum-to-n',
    element: <SumToNPage />,
  },
];
