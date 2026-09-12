import { useEffect } from "react";
import axios from "./util/axios.customzie";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api/`);
      console.log("res", res);
    };
    fetchHelloWorld();
  }, []);
  return <>hello world</>;
}

export default App;
