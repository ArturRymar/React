import React from "react";
import { Provider } from "react-redux";
//components
import Tabs from "components/Tabs/Tabs";
//store
import store from "store/index";

const App = () => (
  <Provider store={store}>
    <Tabs />
  </Provider>
);

export default App;
