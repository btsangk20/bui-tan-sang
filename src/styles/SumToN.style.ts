import { Button } from 'antd';
import styled from 'styled-components';

export const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: auto;
  padding: 20px;
`;

export const CodeBlock = styled.pre<{ $width: string }>`
  background: #f5f5f5;
  padding: 12px;
  border-radius: 8px;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: monospace;
  position: relative;
  width: ${({ $width }) => $width};
`;

export const CopyButton = styled(Button)`
  position: absolute;
  top: 8px;
  right: 8px;
`;
