import { useNavigate } from "react-router-dom";

export const AddCreator = () => {
    const navigate = useNavigate();
  return (
    <form onSubmit={(event)=>{
        event.preventDefault();
        navigate("/");
    }}>
        
        <input type="text" name="" id="" />
        <button className="btn btn-primary" type="submit">Submit</button>

    </form>
  )
}
