import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
    const navigate = useNavigate();

  return <>
  <div>NavBar
    <p></p>
    <button onClick={()=>navigate('/')} className="btn btn-primary">Home</button>
    <button onClick={()=>navigate('creators')} className="btn btn-primary">View All  Creators</button>
    <button onClick={()=>navigate('new')} className="btn btn-primary">Add Creator</button>

  </div>
  <div id="main">
    <Outlet/>
  </div>
  </>
};
