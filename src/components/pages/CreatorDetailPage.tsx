import { PostgrestResponse } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import supabase from "../../services/supabaseClient";
import { Creator } from "../../App";

export const CreatorDetailPage = () => {
    const params = useParams();
    console.log(params);
    const [creator,setCreator] = useState<Creator>();
    // const [searchParams,setSearchParams ] = useSearchParams();
    // const location = useLocation();
    // console.log(location);
    // const id = (searchParams.get('id'));
    useEffect(() => {
        getUsers();
      }, []);
    
      async function getUsers() {
        const { data }: PostgrestResponse<Creator> = await supabase
        
          .from("creator")
          .select("*")
          .eq('id',params["id"])
          .single()
          ;
        console.log(data);
    
        // setCreator(data || undefined);
      }
  return (
    <div>CreatorDetailPage</div>
  )
}
