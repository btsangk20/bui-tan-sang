import React from 'react';
import { Card, List, Typography } from 'antd';
import { Issue } from '../../types';

const { Title } = Typography;

const IssuesList: React.FC<{ title: string; data: Issue[] }> = ({
  title,
  data,
}) => (
  <Card title={title} style={{ marginBottom: 20, width: 1024 }}>
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <div>
            <Title level={5}>{item.category}</Title>
            <List
              size='small'
              dataSource={item.details}
              renderItem={(detail) => <List.Item>- {detail}</List.Item>}
            />
          </div>
        </List.Item>
      )}
    />
  </Card>
);

export default IssuesList;
