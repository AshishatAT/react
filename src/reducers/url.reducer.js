import React from "react";
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
  originalDesign: "",
  variationName: "",
  roomName: "",
  scrollTo: "",
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
    roomName,
    variationName,
    scrollTo,
  } = state;

  var variation = "";
  var room = "";
  var scroll = "";

  if (variationName) {
    variation = `&initvar=${variationName}`;
  }
  if (roomName) {
    room = `&initview=${roomName}`;
  }
  if (scrollTo) {
    scroll = `&scrollTo=${scrollTo}`;
  }

  var generate = `https://${urlPrefix}?page=${pageName}&initdesign=${originalDesign}${room}${variation}${scroll}`;
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
