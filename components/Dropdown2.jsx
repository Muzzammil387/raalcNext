import React from 'react';
import { Button, Dropdown, Space } from 'antd';
const Dropdown2 = ({langu}) => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
            langu,
        }}
        placement="bottomLeft"
        arrow={{
          pointAtCenter: true,
        }}
      >
        <Button>bottomLeft</Button>
      </Dropdown>
    </Space>
  </Space> 
);
export default Dropdown2;