import { useEffect, useState } from 'react';
import { Card, message } from 'antd';
import { CodeSnippet } from '../../types';
import { CopyButton } from '../../styles';
import { codeToHtml } from 'shiki';

const CodeCard: React.FC<{
  snippet: CodeSnippet;
  width?: string;
  index: number;
  copied: number | null;
  setCopied: (index: number | null) => void;
}> = ({ snippet, width = '400px', index, copied, setCopied }) => {
  const [highlightedCode, setHighlightedCode] = useState<string>('');

  useEffect(() => {
    (async () => {
      const html = await codeToHtml(snippet.code, {
        lang: 'typescript',
        theme: 'github-dark',
      });
      setHighlightedCode(html);
    })();
  }, [snippet.code]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(index);
    message.success('Copied to clipboard!');
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <Card title={snippet.title} style={{ width }}>
      <div
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
        style={{ padding: '10px', borderRadius: '5px', background: '#282c34' }}
      />
      <CopyButton type='primary' size='small' onClick={copyToClipboard}>
        {copied === index ? 'Copied!' : 'Copy'}
      </CopyButton>
    </Card>
  );
};

export default CodeCard;
