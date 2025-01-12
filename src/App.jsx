import { memo, useState } from "react";
import MyLayout from "@components/Layout/Layout";
import MyHeader from "@components/Header/Header";
import MyFooter from "@components/Footer/Footer";
import MyBtn from "@components/Button/Button";
import MyHomePage from "./components/HomePage/Homepage";
import MyInfo from "./components/Info/Info";

function App() {
  return (
  <>
     
        <MyHomePage/>
       
  </>

        
    
  );
}

export default memo(App);
