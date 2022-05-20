import React from "react";
import { Form, Button, Typography, Select } from "antd";
import FormAtt from "./FormAtt";

const NewForm = ({ handleChange, handleSubmit }) => {
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
        onFinish={handleSubmit}
      >
        <FormAtt
          label="URL Prefix"
          name="urlPrefix"
          handleChange={handleChange}
        />
        <FormAtt
          label="Page Name"
          name="pageName"
          handleChange={handleChange}
        />
        <FormAtt
          label="Original Design"
          name="originalDesign"
          handleChange={handleChange}
        />
        <FormAtt
          label="Variation Name"
          name="variationName"
          handleChange={handleChange}
        />
        <FormAtt
          label="Room Name"
          name="roomName"
          handleChange={handleChange}
        />

        <Form.Item
          name="scroll"
          label="Scroll To"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            style={{ width: "50%" }}
            onChange={(value) => {
              handleChange("scrollTo", value);
            }}
          >
            <Select.Option value="design-view-container">
              Design View Container
            </Select.Option>
            <Select.Option value="room-view-container">
              Room View Container
            </Select.Option>
            <Select.Option value="cyr-collection">CYR Collection</Select.Option>
            <Select.Option value="cyr-designvariations">
              CYR Design Variations
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
