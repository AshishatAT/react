import React from 'react'
import { Checkbox,Form } from 'antd';
import { urlDataActions, useDispatchUrlData } from '../../reducers/url.reducer';

const CheckboxComponent = ({name, label,value}) => {
  const urlDataDispatch = useDispatchUrlData()
    const onChange = (e) => {
      urlDataDispatch({
        type: urlDataActions.SET_VALUE,
        fieldName: name,
        payload: e.target.checked,
      })
      };
  return (
    <Form.Item name={name} label={label} valuePropName="checked">
      <Checkbox onChange={onChange} value={value}></Checkbox>
    </Form.Item>
  )
}

export default CheckboxComponent