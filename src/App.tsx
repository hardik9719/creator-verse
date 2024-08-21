import { useEffect, useState } from "react";
import { createClient, PostgrestResponse } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
interface Creator {
  id: number;
  name: string;
  image: string;
  description: string;
  url: string[];
}
const supabase = createClient(
  "https://cpkyjrnbxltkimayradg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa3lqcm5ieGx0a2ltYXlyYWRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMTk0NjIsImV4cCI6MjAzOTc5NTQ2Mn0.oc30aPSqu18Idmr2IE287NX7l81VihLnew8V74S_tjk"
);

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
    <ul>
      {creators.map((creator) => (
        <>
          <li key={creator.name}>{creator.name}</li>
          <li key={creator.image}>{creator.image}</li>
          <li key={creator.description}>{creator.description}</li>
          <li key={creator.id}>{creator.url}</li>
        </>
      ))}
    </ul>
    <p>
      <Link to={"/creator"}>Creator</Link>
    </p>
    </>
  );
}

export default App;
