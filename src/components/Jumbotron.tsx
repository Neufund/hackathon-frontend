import * as React from "react";
import "./Jumbotron.css";

const Jumbotron: React.SFC<{}> = ({ children }) =>
  <div className="neufund-jumbotron">
    {children}
  </div>;

export default Jumbotron;
