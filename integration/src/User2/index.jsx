import { Button, Breadcrumb } from "antd";
import React, { useState } from "react";
import { FormComp } from "./form";
import { TableList } from "./table";

const User2 = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false)
  const visible = () => setOpen(true)
  return (
    <div style={{ padding: '30px' }}>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Details</a>
        </Breadcrumb.Item>
        
      </Breadcrumb>
      <Button onClick={visible} type='primary' danger style={{ float: 'right' }}>Add New Records</Button>

      <TableList />
      <FormComp
        onClose={onClose}
        visible={visible}
        open={open}
      />
    </div>
  );
};

export default User2;
