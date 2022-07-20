import { Button, Breadcrumb, Switch, Space } from "antd";
import React, { useState } from "react";
import { TableList } from "./table";

const User2 = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false)
  const visible = () => setOpen(true)

  const changeLanguage = (e) => {
    alert(e);
  }
  return (
    <div style={{ padding: '30px' }}>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Details</a>
        </Breadcrumb.Item>

      </Breadcrumb>
      <div style={{ float: 'right' }}>
        <Space>
          <Switch unCheckedChildren="English" checkedChildren="Tamil" defaultChecked onChange={(e) => {changeLanguage(e)}} />
          <Button onClick={visible} type='primary' danger >Add New Records</Button>
        </Space>
      </div>
      <TableList />
    </div>
  );
};

export default User2;
