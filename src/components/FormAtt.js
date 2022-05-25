import React from "react";
import { Form, Input } from "antd";
import { urlDataActions, useDispatchUrlData } from "../reducers/url.reducer";

const FormAtt = ({ label, name }) => {
  const urlDataDispatch = useDispatchUrlData();

  return (
    <Form.Item
      label={label}
      name={name}
      onChange={(e) => {
        urlDataDispatch({
          type: urlDataActions.SET_VALUE,
          fieldName: name,
          payload: e.target.value,
        });
      }}
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
