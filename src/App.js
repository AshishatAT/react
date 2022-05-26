import React from "react";
import NewForm from "./components/NewForm";
import UrlBox from "./components/UrlBox";
import { UrlDataStateProvider } from "./reducers/url.reducer";

const App = () => {
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
