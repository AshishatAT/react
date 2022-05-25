import React from "react";
import NewForm from "./components/NewForm";
import UrlBox from "./components/UrlBox";
import { UrlDataStateProvider } from "./reducers/url.reducer";

const App = () => {
  // console.log(state);
  return (
    <>
      <UrlDataStateProvider>
        <NewForm />
        <UrlBox />
      </UrlDataStateProvider>
    </>
  );
};

export default App;
