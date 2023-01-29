import Nav from "./component/Nav";
import Home from "./page/Home";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default App;
