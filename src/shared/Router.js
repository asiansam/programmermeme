import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />\
          <Route
            path="/:id" /* test를 위해서 detail로 설정해두었습니다. 나중에 :id로 바꿀예정입니다. */
            element={<Detail />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
