import { PostgrestResponse } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "./services/supabaseClient";
export interface Creator {
  id: number;
  name: string;
  image: string;
  description: string;
  url: string[];
}

function App() {
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
          <Link to={`/creator/${creator.id}`}>{creator.name}</Link>
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

export default App;
