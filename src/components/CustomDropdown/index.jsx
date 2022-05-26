import React,{useState} from 'react'
import { Form, Typography, Select, Input, Divider, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatchUrlData, urlDataActions } from '../../reducers/url.reducer';

const CustomDropdown = ({value}) => {
    const urlDataDispatch = useDispatchUrlData();
    const [items, setItems] = useState([
        "v3.explorug.com/explorug.html",
        "createyourrug.explorug.com/explorug.html",
      ]);
      const [name, setName] = useState("");
    
      const onNameChange = (event) => {
        setName(event.target.value);
      };
      const addItem = (e) => {
        e.preventDefault();
        if (!name) return;
        var nameStr = name;
        if (name && name[name.length - 1] !== "/") {
          nameStr = nameStr + "/";
        }
        setItems([...items, nameStr]);
        setName("");
      };
  return (
    <Form.Item
          name="urlPrefix"
          label="URL Prefix"
          rules={[
            {
              required: true,
              message: `Please choose URL!`,
            },
          ]}
        >
          <Select
            style={{
              width: 300,
            }}
            value={value}
            onChange={(val) =>
              urlDataDispatch({
                type: urlDataActions.SET_VALUE,
                fieldName: "urlPrefix",
                payload: val,
              })
            }
            placeholder="Choose URL or create a custom one"
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider
                  style={{
                    margin: "8px 0",
                  }}
                />
                <Space
                  align="center"
                  style={{
                    padding: "0 8px 4px",
                  }}
                >
                  <Input
                    placeholder="Please enter custom url"
                    value={name}
                    onChange={onNameChange}
                  />
                  <Typography.Link
                    onClick={addItem}
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    <PlusOutlined /> Add URL
                  </Typography.Link>
                </Space>
              </>
            )}
          >
            {items.map((item) => (
              <Select.Option key={item}>{item}</Select.Option>
            ))}
          </Select>
        </Form.Item>
  )
}

export default CustomDropdown