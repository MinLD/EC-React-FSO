import { memo, Suspense, useState } from "react";
import MyHomePage from "./components/HomePage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routerss from "../src/Routers/Routes.js";
import {SidebarProvider}  from "@/contexts/SidebarProvider.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
function App() {
  return (
 <SidebarProvider>
  <Sidebar/>
     <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Routerss.map((i, k) => {
            return <Route path={i.path} element={<i.component />} key={k} />;
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
 </SidebarProvider>
  );
}

export default memo(App);
