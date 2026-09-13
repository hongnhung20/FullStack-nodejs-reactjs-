import { useEffect } from "react";
import axios from "./util/axios.customzie";
import Header from "./components/layout/header";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api/`);
      console.log("res", res);
    };
    fetchHelloWorld();
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
