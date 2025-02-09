import { useState } from 'react';
import { CodeContainer } from '../../styles';
import { CodeSnippet } from '../../types';
import { CodeCard } from '../../components';

const SumToNPage: React.FC = () => {
  const [copied, setCopied] = useState<number | null>(null);

  const codeSnippets: CodeSnippet[] = [
    {
      title: 'Using Loop',
      code: `
  function sumToN(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
      `,
    },
    {
      title: 'Using Recursion',
      code: `
  function sumToN(n: number): number {
    if (n === 1) return 1;
    return n + sumToN(n - 1);
  }
      `,
    },
    {
      title: 'Using Formula',
      code: `
  function sumToN(n: number): number {
    return (n * (n + 1)) / 2;
  }
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
        />
      ))}
    </CodeContainer>
  );
};

export default SumToNPage;
