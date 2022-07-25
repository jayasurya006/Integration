import { Form, Input, Modal, message } from "antd";

export const FormComp = ({ closeModel, show, setDataSource, dataSource }) => {
  const [form] = Form.useForm();

  const submit = () => {
    form
      .validateFields()
      .then((values) => {
        let formData = values;
        console.log(formData);
        setDataSource([...dataSource, formData]);
        form.resetFields();
        closeModel();
      })
      .catch((err) => message.error(err));
  };
  return (
    <div title="Add Records" onOk={submit}>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        style={{ padding: "20px" }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};
