import React from "react";
import { Form, Input } from "antd";

const FormAtt = ({ label, name, handleChange }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      onChange={(e) => handleChange(name, e.target.value)}
      rules={[
        {
          required: true,
          message: `Please input ${name}!`,
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
};

export default FormAtt;
