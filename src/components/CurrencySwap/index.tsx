import React, { useState, useCallback } from 'react';
import { Form, Input, Button, Tooltip } from 'antd';
import { SwapOutlined, SettingOutlined } from '@ant-design/icons';
import {
  StyledCard,
  SwapContainer,
  TokenInput,
  SwapButton,
  Container,
  Wrapper,
} from '../../styles';
import { useSwap } from '../../hooks';
import SwapSettings from '../SwapSettings';
import TokenSelector from '../TokenSelector';
import { TOKENS } from '../../constants';
import SwapInfo from '../SwapInfo';

const CurrencySwap: React.FC = () => {
  const [form] = Form.useForm();
  const [showSettings, setShowSettings] = useState(false);
  const [slippage, setSlippage] = useState(0.5);

  const {
    fromAmount,
    toAmount,
    fromToken,
    toToken,
    setFromToken,
    setToToken,
    handleFromAmountChange,
    handleSwap,
    currentRate,
  } = useSwap();

  const handleSubmit = useCallback(() => {
    if (!fromAmount) {
      form.setFields([
        {
          name: 'fromAmount',
          errors: ['Please enter an amount'],
        },
      ]);
      return;
    }
    // Simulate swap
    console.log('Swap executed:', {
      fromToken,
      toToken,
      fromAmount,
      toAmount,
      slippage,
    });
  }, [form, fromAmount, toAmount, fromToken, toToken, slippage]);

  return (
    <Container>
      <Wrapper>
        <StyledCard
          title='Swap'
          extra={
            <Tooltip title='Settings'>
              <Button
                type='text'
                icon={<SettingOutlined />}
                onClick={() => setShowSettings(!showSettings)}
              />
            </Tooltip>
          }
        >
          <Form form={form} layout='vertical'>
            <SwapContainer>
              {showSettings && (
                <SwapSettings
                  slippage={slippage}
                  onSlippageChange={setSlippage}
                />
              )}

              <TokenInput>
                <Form.Item
                  name='fromAmount'
                  label='From'
                  // validateTrigger={['onChange', 'onBlur']}
                >
                  <Input
                    size='large'
                    value={fromAmount}
                    onChange={(e) => handleFromAmountChange(e.target.value)}
                    addonAfter={
                      <TokenSelector
                        value={fromToken}
                        onChange={setFromToken}
                        tokens={TOKENS}
                      />
                    }
                    placeholder='0.0'
                  />
                </Form.Item>
              </TokenInput>

              <SwapButton
                type='default'
                icon={<SwapOutlined />}
                onClick={handleSwap}
              />

              <TokenInput>
                <Form.Item label='To'>
                  <Input
                    size='large'
                    value={toAmount}
                    readOnly
                    addonAfter={
                      <TokenSelector
                        value={toToken}
                        onChange={setToToken}
                        tokens={TOKENS}
                      />
                    }
                    placeholder='0.0'
                  />
                </Form.Item>
              </TokenInput>

              <SwapInfo
                fromToken={fromToken}
                toToken={toToken}
                rate={currentRate}
                slippage={slippage}
              />

              <Button
                type='primary'
                size='large'
                block
                onClick={handleSubmit}
                style={{
                  marginTop: '16px',
                  height: '48px',
                  borderRadius: '8px',
                }}
              >
                Swap
              </Button>
            </SwapContainer>
          </Form>
        </StyledCard>
      </Wrapper>
    </Container>
  );
};

export default CurrencySwap;
