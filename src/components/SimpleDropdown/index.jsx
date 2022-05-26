import React from 'react'
import {Select, Form } from "antd";
import { urlDataActions, useDispatchUrlData } from '../../reducers/url.reducer';

const SimpleDropdown = ({name, label, placeholder, array, required=false, value}) => {
    const urlDataDispatch = useDispatchUrlData()
  return (
    <Form.Item name={name} label={label} rules={[
      {
        required: required,
        message: `Please choose ${name}!`,
      },
    ]}>
          <Select
            placeholder={placeholder}
            style={{ width: "60%" }}
            value={value}
            onChange={(val) =>
              urlDataDispatch({
                type: urlDataActions.SET_VALUE,
                fieldName: name,
                payload: val,
              })
            }
          >
              {array.map((item, i) => (
                  <Select.Option value={item.value} key={i}>{item.name}</Select.Option>
              ))}
          </Select>
        </Form.Item>
  )
}

export default SimpleDropdown