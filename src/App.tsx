import { PostgrestResponse } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "./services/supabaseClient";
import useCreator from "./useCreators";
export interface Creator {
  id: number;
  name: string;
  image: string;
  description: string;
  youtube_handle: string;
  twitter_handle: string;
  instagram_handle: string;
}

function App() {
  const {creator, dispatch} = useCreator();

  useEffect(() => {
    getUsers();
  }, [creator]);

  async function getUsers() {
    const { data }: PostgrestResponse<Creator> = await supabase

      .from("creator")
      .select("*");
    console.log(data);
    if(data==null) throw new Error('Error fetching Cretors');
    if(data!=null) dispatch({type:'ADD',creator:data})
  }

  return (
    <>
      {creator.map((user) => (
        <ul>
          <Link to={`/creator/${user.id}`}>{user.name}</Link>
          <li key={user.name}>{user.name}</li>
          <li key={user.image}>{user.image}</li>
          <li key={user.description}>{user.description}</li>
        </ul>
      ))}
      <p>
        <Link to={"/creator"}>Creator</Link>
      </p>
    </>
  );
}

export default App;
