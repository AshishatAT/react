import React, { useState } from "react";
import { Form, Button, Typography, Select, Input, Divider, Space } from "antd";
import FormAtt from "./FormAtt";
import {
  urlDataActions,
  useUrlDataState,
  useDispatchUrlData,
} from "../reducers/url.reducer";
import { PlusOutlined } from "@ant-design/icons";

const NewForm = () => {
  const urlDataState = useUrlDataState();
  const urlDataDispatch = useDispatchUrlData();
  console.log(urlDataState);
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
    <div>
      <div className="heading">
        <Typography.Title
          level={1}
          style={{ marginTop: "3rem", alignItems: "center" }}
        >
          URL GENERATOR
        </Typography.Title>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={() => {
          urlDataDispatch({ type: urlDataActions.SET_URL });
        }}
      >
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
            onChange={(value) =>
              urlDataDispatch({
                type: urlDataActions.SET_VALUE,
                fieldName: "urlPrefix",
                payload: value,
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

        <FormAtt label="Page Name" name="pageName" />
        <FormAtt label="Original Design" name="originalDesign" />
        <Form.Item
          label="Variation Name"
          name="variationName"
          onChange={(e) =>
            urlDataDispatch({
              type: urlDataActions.SET_VALUE,
              fieldName: "variationName",
              payload: e.target.value,
            })
          }
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Room Name"
          name="roomName"
          onChange={(e) =>
            urlDataDispatch({
              type: urlDataActions.SET_VALUE,
              fieldName: "roomName",
              payload: e.target.value,
            })
          }
        >
          <Input />
        </Form.Item>

        <Form.Item name="scroll" label="Scroll To">
          <Select
            placeholder="Select your option"
            style={{ width: "60%" }}
            onChange={(value) =>
              urlDataDispatch({
                type: urlDataActions.SET_VALUE,
                fieldName: "scrollTo",
                payload: value,
              })
            }
          >
            <Select.Option value=""></Select.Option>
            <Select.Option value="design-view-container">
              Design View
            </Select.Option>
            <Select.Option value="room-view-container">Room View</Select.Option>
            <Select.Option value="cyr-collection"> Collection</Select.Option>
            <Select.Option value="cyr-designvariations">
              Design Variations
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Generate
          </Button>
        </Form.Item>

        <br />
      </Form>
    </div>
  );
};

export default NewForm;
