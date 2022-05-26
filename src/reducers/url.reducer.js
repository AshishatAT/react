import React from "react";
import { message, Button } from "antd";
const StateContext = React.createContext();
const DispatchContext = React.createContext();

const SET_VALUE = "SET_VALUE";
const SET_URL = "SET_URL";

const urlDataActions = {
  SET_VALUE,
  SET_URL,
};

const urlDataState = {
  urlPrefix: "",
  pageName: "",
  originalDesign: "", //original or may be custom design
  customDesign: false,
  physicalWidth: null,
  physicalHeight: null,
  unit: "",
  variationName: "",
  roomName: "",
  scrollTo: "",
  pageView: "",
  shapeVariation: "",
  ecatMode: false,
  generated_url: "",
};

const urlDataReducer = (state, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        [action.fieldName]: action.payload,
      };

    case SET_URL:
      return generate_url(state);

    default:
      return state;
  }
};

const generate_url = (state) => {
  const {
    urlPrefix,
    pageName,
    originalDesign,
    customDesign,
    physicalWidth,
    physicalHeight,
    unit,
    pageView,
    shapeVariation,
    ecatMode,
    roomName,
    variationName,
    scrollTo,
  } = state;

  var variation = "";
  var shapevariation = "";
  var room = "";
  var scroll = "";
  var pageview = "";
  var ecat = "";
  var design = "";
  var physicalWidthStr = physicalWidth ? `&width=${physicalWidth}` : ""
  var physicalHeightStr = physicalHeight ? `&width=${physicalHeight}` : ""
  var unitStr = unit ? `&unit=${unit}` : ""

  if (variationName) {
    variation = `&initvar=${variationName}`;
  }
  if (shapeVariation) {
    shapevariation = `&initshapevar=${shapeVariation}`;
  }
  if (roomName) {
    room = `&initview=${roomName}`;
  }
  if (scrollTo) {
    scroll = `&scrollTo=${scrollTo}`;
  }
  if (pageView) {
    pageview = `&pageview=${[pageView]}`;
  }
  if (ecatMode) {
    ecat = `&mode=ecat`;
  }
  if (!customDesign) {
    design = `&initdesign=${originalDesign}`;
  } else {
    design = `&customdesignurl=${originalDesign}${physicalWidthStr}${physicalHeightStr}${unitStr}`;
  }

  var generate = `https://${urlPrefix}?page=${pageName}${design}${room}${variation}${shapevariation}${scroll}${pageview}${ecat}`;

  //Check for unit if height and width are given.

  const check = (err) => {
    message.error(err, 3);
    generate = "";
  }
  if (customDesign) {
    if (physicalWidth || physicalHeight) {
      if (unit === "") {
        check("Please mention the custom design details(width, height, unit)1")
      }
      else if (!physicalWidth || !physicalHeight) {
        check(`Please mention  ${!physicalWidth ? "physical width" : "physical height"}`)
      }
    }
  }
  return {
    ...state,
    generated_url: generate,
  };
};

function UrlDataStateProvider({ children }) {
  const [state, dispatch] = React.useReducer(urlDataReducer, urlDataState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
function useUrlDataState() {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error(
      "useUrlDataState must be used within a UrlDataStateProvider"
    );
  }
  return context;
}
function useDispatchUrlData() {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error(
      "useDispatchUrlData must be used within a UrlDataStateProvider"
    );
  }
  return context;
}
export {
  UrlDataStateProvider,
  useUrlDataState,
  useDispatchUrlData,
  urlDataActions,
};
