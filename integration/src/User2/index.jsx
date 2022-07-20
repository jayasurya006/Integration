import { Button, Breadcrumb, Switch, Space, message } from "antd";
import React, { useState } from "react";
import { Store } from "../source";
import { TableList } from "./table";

const User2 = () => {
  const [data, setData] = useState(Store.language.Tamil);

  const changeLanguage = (e) => {
    if (e === false) {
      setData(Store.language.English)
    } else {
      setData(Store.language.Tamil)
    }
  }
  return (
    <div style={{ padding: '30px' }}>
      <Breadcrumb>
        <Breadcrumb.Item>{data.breadCrumb.home}</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">{data.breadCrumb.details}</a>
        </Breadcrumb.Item>

      </Breadcrumb>
      <div style={{ float: 'right' }}>
        <Space size={20}>
          <Switch sie='large' unCheckedChildren="English" checkedChildren="தமிழ்" defaultChecked onChange={(e) => { changeLanguage(e) }} />
          <Button type='primary' warning >{data.addUser.button}</Button>
        </Space>
      </div>
      <TableList datas={data} />
    </div>
  );
};

export default User2;
