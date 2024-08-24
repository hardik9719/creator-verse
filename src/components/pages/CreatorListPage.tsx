import { PostgrestResponse } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Creator } from "../../App";
import supabase from "../../services/supabaseClient";

export const CreatorListPage = () => {
    const [creators, setCreators] = useState<Creator[]>([]);

    useEffect(() => {
      getUsers();
    }, []);
  
    async function getUsers() {
      const { data }: PostgrestResponse<Creator> = await supabase
      
        .from("creator")
        .select("*");
      console.log(data);
  
      setCreators(data || []);
    }
  
    return (
     <>
        {creators.map((creator) => (
          <ul>
            <Link to={{pathname:`/creator/${creator.id}`}} state={{some:creator}}>{creator.name}</Link>
            <li key={creator.name}>{creator.name}</li>
            <li key={creator.image}>{creator.image}</li>
            <li key={creator.description}>{creator.description}</li>
            <li key={creator.id}>{creator.url}</li>
        </ul>
        ))}
      <p>
        <Link to={"/creator"}>Creator</Link>
      </p>
      </>
    );
}
