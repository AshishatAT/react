import React from "react";
const StateContext = React.createContext();
const DispatchContext = React.createContext();

const SET_PAGE_NAME = "SET_PAGE_NAME";
const SET_DESIGN_NAME = "SET_DESIGN_NAME";
const SET_URL = "SET_URL";

const pageDataActions = {
  SET_PAGE_NAME,
  SET_DESIGN_NAME,
};

const pageDataState = {
  pageName: "",
  designName: "",
  url: "",
};

const pageDataReducer = (state, action) => {
  switch (action.type) {
    case SET_PAGE_NAME:
      return {
        ...state,
        page: action.payload,
      };
    case SET_DESIGN_NAME:
      return {
        ...state,
        designName: action.payload,
      };
    case SET_URL:
      return getUrl(state);
    default:
      return state;
  }
};
const getUrl = (state) => {
  var url = `https://v3.explorug.com/explorug.html?page=${state.pageName}&initdesign=${state.designName}`;

  return {
    ...state,
    url: url,
  };
};

function PageDataStateProvider({ children }) {
  const [state, dispatch] = React.useReducer(pageDataReducer, pageDataState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
function usePageDataState() {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error(
      "usePageDataState must be used within a PageDataStateProvider"
    );
  }
  return context;
}
function useDispatchPageData() {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error(
      "useDispatchPageData must be used within a PageDataStateProvider"
    );
  }
  return context;
}
export {
  PageDataStateProvider,
  usePageDataState,
  useDispatchPageData,
  pageDataActions,
};
