import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";

const Root = () => {
  return (
    <div>
      
      <Navbar> </Navbar>
<div className="bg-black">
<Outlet></Outlet>
</div>
    </div>
  );
};

export default Root;