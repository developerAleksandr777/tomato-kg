import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./containers/Main/Main";

const View = () => {
  return <Routes>{<Route path="/" element={<Main />} />}</Routes>;
};

export default View;
