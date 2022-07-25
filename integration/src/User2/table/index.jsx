import { Card, Table, Col, Row, Form, Input, Modal, message } from "antd";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

export const TableList = ({ dataSource }) => {
  const columns = [
    {
      title: <FormattedMessage id="name" />,
      dataIndex: "name",
      key: "name",
    },
    {
      title: <FormattedMessage id="age" />,
      dataIndex: "age",
      key: "age",
    },
    {
      title: <FormattedMessage id="email" />,
      dataIndex: "email",
      key: "address",
    },
    {
      title: <FormattedMessage id="mobile" />,
      dataIndex: "mobile",
      key: "address",
    },
  ];
  return (
    <>
      <Table
        size={"larger"}
        dataSource={dataSource.reverse()}
        columns={columns}
        pagination={false}
      />
    </>
  );
};
