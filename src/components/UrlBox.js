import React from "react";
import { Input, message, Button } from "antd";
import { useUrlDataState } from "../reducers/url.reducer";
import { CopyOutlined } from '@ant-design/icons';
const UrlBox = () => {
  const urlState = useUrlDataState();
  return (
    <div className="heading">
      <h3>Generated URL:</h3>
      <br />
      <Input.TextArea
        rows={4}
        style={{ width: 600, marginBottom: "5px" }}
        value={urlState.generated_url}
      />
      <Button
        type="primary"
        icon={<CopyOutlined />}
        style={{ marginBottom: "1rem" }}
        onClick={() => {
          navigator.clipboard.writeText(`${urlState.generated_url}`)
          message.success("URL copied successfully", 4)
        }}>
        Copy to clipboard
      </Button>
    </div>
  );
};

export default UrlBox;
