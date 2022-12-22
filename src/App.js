import Nav from "./component/Nav";
import Home from "./page/Home";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
