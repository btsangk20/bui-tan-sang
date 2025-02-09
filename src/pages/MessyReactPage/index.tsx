import { useState } from 'react';
import { CodeContainer } from '../../styles';
import { CodeSnippet } from '../../types';
import { CodeCard, IssuesDashboard } from '../../components';
import { Flex } from 'antd';

const MessyReactPage: React.FC = () => {
  const [copied, setCopied] = useState<number | null>(null);

  const codeSnippets: CodeSnippet[] = [
    {
      title: 'types/wallet.ts',
      code: `
export interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string;
}

export interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
}

export interface WalletRowProps {
  amount: number;
  usdValue: number;
  formattedAmount: string;
  className?: string;
}

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}
      `,
    },
    {
      title: 'constants/wallet.ts',
      code: `
export enum BlockchainPriority {
  Osmosis = 100,
  Ethereum = 50,
  Arbitrum = 30,
  Zilliqa = 20,
  Neo = 20,
  Default = -99,
}
      `,
    },
    {
      title: 'hooks/useWalletBalances.ts',
      code: `
import { useState, useEffect } from "react";

export const useWalletBalances = () => {
  const [balances, setBalances] = useState<WalletBalance[]>([]);
  
  useEffect(() => {
    // Fetch wallet balances here
  }, []);
  
  return balances;
};

export const usePrices = () => {
  const [prices, setPrices] = useState<Record<string, number>>({});
  
  useEffect(() => {
    // Fetch price data here
  }, []);
  
  return prices;
};
      `,
    },
    {
      title: 'components/WalletRow.tsx',
      code: `
import React from "react";
import PropTypes from "prop-types";
import { WalletRowProps } from "./types";

const WalletRow: React.FC<WalletRowProps> = ({ amount, usdValue, formattedAmount, className }) => {
  return (
    <div className={className}>
      <span>{formattedAmount}</span> - <span>{usdValue.toFixed(2)}</span>
    </div>
  );
};

export default WalletRow;
      `,
    },
    {
      title: 'pages/WalletPage.tsx',
      code: `
import React, { useMemo, useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useWalletBalances, usePrices } from "./hooks";
import { WalletBalance, FormattedWalletBalance, Props } from "./types";
import WalletRow from "./WalletRow";
import { BlockchainPriority } from "./constants";

const WalletPage: React.FC<Props> = ({ children, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const balances = useWalletBalances();
  const prices = usePrices();

  useEffect(() => {
    if (balances && prices) {
      setLoading(false);
    }
  }, [balances, prices]);

  const getPriority = (blockchain: string): number => {
    return BlockchainPriority[blockchain as keyof typeof BlockchainPriority] ?? BlockchainPriority.Default;
  };

  const sortedBalances = useMemo(() => {
    if (!Array.isArray(balances)) {
      setError("Invalid balances data");
      return [];
    }
    return balances
      .filter((balance: WalletBalance) => {
        const balancePriority = getPriority(balance.blockchain);
        return balancePriority > BlockchainPriority.Default && balance.amount > 0;
      })
      .sort((lhs: WalletBalance, rhs: WalletBalance) => getPriority(rhs.blockchain) - getPriority(lhs.blockchain));
  }, [balances]);

  const formattedBalances = useMemo(() => {
    return sortedBalances.map((balance: WalletBalance) => ({
      ...balance,
      formatted: balance.amount.toFixed(2),
    }));
  }, [sortedBalances]);

  if (loading) return <p>Loading balances...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ErrorBoundary fallback={<p>Something went wrong.</p>}>
      <div {...rest}>
        {formattedBalances.map((balance: FormattedWalletBalance) => {
          const usdValue = prices[balance.currency] ? prices[balance.currency] * balance.amount : 0;
          return (
            <WalletRow
              className="wallet-row"
              key={balance.currency}
              amount={balance.amount}
              usdValue={usdValue}
              formattedAmount={balance.formatted}
            />
          );
        })}
      </div>
    </ErrorBoundary>
  );
};

export default WalletPage;
      `,
    },
  ];

  return (
    <CodeContainer>
      {codeSnippets.map((snippet, index) => (
        <CodeCard
          key={index}
          snippet={snippet}
          index={index}
          copied={copied}
          setCopied={setCopied}
          width='1024px'
        />
      ))}

      <Flex>
        <IssuesDashboard />
      </Flex>
    </CodeContainer>
  );
};

export default MessyReactPage;
