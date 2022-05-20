import React, { useReducer, useState } from "react";
import NewForm from "./components/NewForm";
import UrlBox from "./components/UrlBox";

const ACTIONS = {
  SET_URL: "SET_URL",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GENERATE_URL:
      return [...state, newData(postData)];
  }
}
var initialState = {
  url: "",
};

function newData(postData) {
  return {};
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [postData, setPostData] = useState([
    {
      urlPrefix: "",
      pageName: "",
      originalDesign: "",
      variationName: "",
      roomName: "",
      scrollTo: "",
    },
  ]);

  const handleChange = (name, value) => {
    var newData = { ...postData, [name]: value };
    console.log(newData);
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = () => {
    // generate url;
    const finalurl = "123url";
    dispatch({ type: ACTIONS.SET_URL, payload: finalurl });
    setPostData({
      urlPrefix: "",
      pageName: "",
      originalDesign: "",
      variationName: "",
      roomName: "",
      scrollTo: "",
    });
  };
  console.log(postData);

  return (
    <>
      <NewForm handleChange={handleChange} handleSubmit={handleSubmit} />
      <UrlBox />
    </>
  );
};

export default App;
