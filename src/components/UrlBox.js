import React from "react";
import { Input } from "antd";
const UrlBox = ({ state }) => {
  return (
    <div className="heading">
      <h3>Generated URL:</h3>
      <br />
      <Input.TextArea rows={4} style={{ width: 600 }} value={state.url} />
    </div>
  );
};

export default UrlBox;
