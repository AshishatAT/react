import React from 'react'
import { InputNumber,Form } from 'antd';
import { urlDataActions, useDispatchUrlData } from '../../reducers/url.reducer';


const InputNumberField = ({name, label, value}) => {
    const urlDataDispatch = useDispatchUrlData()
    const onChange = (val) => {
        urlDataDispatch({
            type: urlDataActions.SET_VALUE,
            fieldName: name,
            payload: val,
          })
      };

  return (
    <Form.Item name={name} label={label}>
      <InputNumber min={1} value={value} onChange={onChange} />
    </Form.Item>
  )
}

export default InputNumberField