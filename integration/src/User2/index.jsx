import { Button, Breadcrumb, Switch, Space, message, Select } from "antd";
import React, { useState } from "react";
import { Store } from "../source";
import { FormComp } from "./form";
import { TableList } from "./table";

const User2 = () => {
  const [data, setData] = useState(Store.language.Tamil);
  const [dataSource, setDataSource] = useState([]); 
  const [show, setShow] = useState(false);

  const openMoadel = () => setShow(true);
  const closeModel = () => setShow(false);

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
          <Select placeholder='Select Theme' />
          <Switch sie='large' unCheckedChildren="English" checkedChildren="தமிழ்" defaultChecked onChange={(e) => { changeLanguage(e) }} />
          <Button type='primary' warning onClick={openMoadel}>{data.addUser.button}</Button>
        </Space>
      </div>
      <TableList dataSource={dataSource} datas={data} />
      <FormComp dataSource={dataSource} setDataSource={setDataSource} closeModel={closeModel} show={show} />
    </div>
  );
};

export default User2;
