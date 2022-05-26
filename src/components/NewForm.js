import React from "react";
import { Form, Button, Typography } from "antd";
import {
  urlDataActions,
  useUrlDataState,
  useDispatchUrlData,
} from "../reducers/url.reducer";
import SimpleDropdown from "./SimpleDropdown";
import TextInput from "./TextInput";
import CustomDropdown from "./CustomDropdown";
import { scrollArray, pageViewArray, units } from "../utils/dummyData";
import CheckboxComponent from "./Checkbox";
import InputNumberField from "./InputNumberField";

const NewForm = () => {
  const urlDataState = useUrlDataState();
  const urlDataDispatch = useDispatchUrlData();
  console.log(urlDataState);

  return (
    <div>
      <div className="heading">
        <Typography.Title
          level={1}
          style={{ marginTop: "1.5rem", alignItems: "center" }}
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
        <CustomDropdown value={urlDataState.urlPrefix} />
        <TextInput label="Page Name" name="pageName" required={true} value={urlDataState.pageName} />
        <TextInput
          label={
            urlDataState.customDesign ? "Custom Design" : "Original Design"
          }
          name="originalDesign"
          required={true}
          value={urlDataState.originalDesign}
        />
        <CheckboxComponent name="customDesign" label="Custom Design" value={urlDataState.customDesign} />

        {urlDataState.customDesign && (
          <>
            <InputNumberField name="physicalWidth" label="Physical Width" value={urlDataState.physicalWidth} />
            <InputNumberField name="physicalHeight" label="Physical Height" value={urlDataState.physicalHeight} />
            <SimpleDropdown
              name="unit"
              label="Unit"
              placeholder=""
              array={units}
              value={urlDataState.unit}
            />
          </>
        )}

        <TextInput label="Variation Name (Color)" name="variationName" value={urlDataState.variationName} />
        <TextInput label="Shape Variation" name="shapeVariation" value={urlDataState.shapeVariation} />
        <TextInput label="Room Name" name="roomName" value={urlDataState.roomName} />

        <SimpleDropdown
          label="Scroll To"
          name="scrollTo"
          placeholder="Select your option"
          array={scrollArray}
          required={false}
          value={urlDataState.scrollTo}
        />

        <SimpleDropdown
          label="Page View"
          name="pageView"
          placeholder="Select your page view"
          array={pageViewArray}
          required={false}
          value={urlDataState.pageView}
        />

        <CheckboxComponent name="ecatMode" label="Ecat Mode" value={urlDataState.ecatMode} />

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
