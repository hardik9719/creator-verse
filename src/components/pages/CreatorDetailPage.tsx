import { PostgrestResponse } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import supabase from "../../services/supabaseClient";
import { Creator } from "../../App";

export const CreatorDetailPage = () => {
  const params = useParams();
  const location = useLocation();
  const some = location.state?.some as Creator;
    console.log(some);

  if (!some) {
    return <div>No creator data available.</div>;
  }

  const [creator, setCreator] = useState<Creator | null>();
  useEffect(()=>{
      setCreator(some);
    
  },[])
//   useEffect(() => {
//     getUsers();
//   }, [params["id"]]);

  async function getUsers() {
    try {
      const { data, error }: PostgrestResponse<Creator> = await supabase
        .from("creator")
        .select("*")
        .eq("id", params["id"]);
      //   console.log(data);

      if (!data) throw error;

      setCreator(data.at(0));
    } catch (error) {
      console.error("Error in getUsers:", error);
    }
  }
  if (!creator) {
    return <div>Loading...</div>; // Or some loading spinner
  }
  
  return (
    <ul>
      {/* <li>{creator.id}</li> */}
      <Link to={`/creator/${creator.id}`}>{creator.name}</Link>
      <li key={creator.name}>{creator.name}</li>
      <li key={creator.image}>{creator.image}</li>
      <li key={creator.description}>{creator.description}</li>
    </ul>
  );
};
