import Root from "pages/root";
import React from "react";

//react-router-dom
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} errorElement={<>error</>} element={<Root />} />
      </Routes>
    </>
  );
}

export default App;
