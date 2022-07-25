import {
  Button,
  Breadcrumb,
  Switch,
  message,
  Input,
  Radio,
  Space,
  Form,
  Popover,
} from "antd";

import { GlobalOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
// import { Store } from "./intl/LOCALES";
import { TableList } from "./table";
import Message from "./intl/Message";

import "./index.css";

const user = [
  {
    name: "jayasurya",
    age: "22",
    email: "jayasurya@gmail.com",
    mobile: "34345234234",
  },
  {
    name: "jayasurya",
    age: "22",
    email: "jayasurya@gmail.com",
    mobile: "34345234234",
  },
  {
    name: "Guna",
    age: "22",
    email: "Guna@gmail.com",
    mobile: "34345234234",
  },
  {
    name: "jayasurya",
    age: "22",
    email: "jayasurya@gmail.com",
    mobile: "34345234234",
  },
  {
    name: "Guna",
    age: "22",
    email: "Guna@gmail.com",
    mobile: "34345234234",
  },
  {
    name: "jayasurya",
    age: "22",
    email: "jayasurya@gmail.com",
    mobile: "34345234234",
  },
];

const name = Message("mobile");

const User2 = ({ setTheme, setLang }) => {
  const [dataSource, setDataSource] = useState(user);
  const [show, setShow] = useState(false);

  const changeLanguage = (e) => {
    if (e == true) {
      setLang("Tam");
    } else {
      setLang("En");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ margin: "30px", width: "100%" }}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <span>
                <FormattedMessage id="home" />
              </span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">
                <span>
                  <FormattedMessage id="details" />
                </span>
              </a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div
          className=""
          style={{ margin: "30px", display: "grid", gap: "20px" }}
        >
          <Popover
            placement="left"
            content={[
              <div className="lang" onClick={() => setLang("Kan")}>
                Kannada
              </div>,
              <div className="lang" onClick={() => setLang("En")}>
                English
              </div>,
              <div className="lang" onClick={() => setLang("Tam")}>
                Tamil
              </div>,
              ,
            ]}
          >
            <GlobalOutlined style={{ fontSize: "30px" }} />
          </Popover>
          <Switch
            size="large"
            unCheckedChildren="light"
            checkedChildren="dark"
            onChange={(e) => setTheme((e) => (e == "light" ? "dark" : "light"))}
            style={{ backgroundImage: "none", borderColor: "white" }}
          />
        </div>
      </div>
      <FormComp dataSource={dataSource} setDataSource={setDataSource} />

      <div className="table" id="table-1">
        <div
          className="table-heading"
          style={{ fontSize: "25px", margin: "10px" }}
        >
          <FormattedMessage id="userDetails" />
        </div>
        <TableList dataSource={dataSource} />
      </div>
      <div style={{ margin: "30px", alignSelf: "flex-start" }}>
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={1}>Option A</Radio>
            <Radio value={2}>Option B</Radio>
            <Radio value={3}>Option C</Radio>
            <Radio value={4}>More...</Radio>
          </Space>
        </Radio.Group>
      </div>
    </div>
  );
};

const FormComp = ({ setDataSource, dataSource }) => {
  const [form] = Form.useForm();

  const submit = () => {
    form
      .validateFields()
      .then((values) => {
        let formData = values;
        setDataSource([...dataSource, formData]);
        form.resetFields();
      })
      .catch((err) => message.error(err));
  };
  return (
    <div
      title="Add User"
      className="form"
      onOk={submit}
      style={{
        width: "30%",
        borderRadius: "20px",
        margin: "30px",
        padding: "20px",
      }}
    >
      <Form
        form={form}
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <div
          className="signin"
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <FormattedMessage id="addUser" />
        </div>
        <Form.Item name="name">
          <Input
            style={{
              borderRadius: "20px",
              textAlign: "center",
              borderColor: "white",
            }}
            placeholder={"Name"}
          />
        </Form.Item>
        <Form.Item name="age">
          <Input
            style={{
              borderRadius: "20px",
              textAlign: "center",
              borderColor: "white",
            }}
            placeholder={"Age"}
          />
        </Form.Item>
        <Form.Item name="email">
          <Input
            style={{
              borderRadius: "20px",
              textAlign: "center",
              borderColor: "white",
            }}
            placeholder={"Email"}
          />
        </Form.Item>
        <Form.Item name="mobile">
          <Input
            style={{
              borderRadius: "20px",
              textAlign: "center",
              borderColor: "white",
            }}
            placeholder={"Mobile"}
          />
        </Form.Item>
        <Button onClick={submit}>
          <FormattedMessage id="save" />
        </Button>
      </Form>
    </div>
  );
};

export default User2;
