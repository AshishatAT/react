import React from "react";
import { Form, Input } from "antd";
import { urlDataActions, useDispatchUrlData,useUrlDataState } from "../../reducers/url.reducer";


const TextInput = ({ label, name, required = false,value }) => {
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
          required: required,
          message: `Please input ${name}!`,
        },
      ]}
    >
      <Input value={value} />
    </Form.Item>
  )
}

export default TextInput