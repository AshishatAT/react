import React from "react";
import { Input } from "antd";
import { useUrlDataState } from "../reducers/url.reducer";

const UrlBox = () => {
  const urlState = useUrlDataState();
  return (
    <div className="heading">
      <h3>Generated URL:</h3>
      <br />
      <Input.TextArea
        rows={4}
        style={{ width: 600 }}
        value={urlState.generated_url}
      />
    </div>
  );
};

export default UrlBox;
