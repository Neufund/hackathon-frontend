import * as React from "react";
import TopHeader from "./TopHeader";

const App: React.SFC = ({ children }) =>
  <div>
    <TopHeader />
    {children}
  </div>;

export default App;
