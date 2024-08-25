import { ReactNode, useEffect, useReducer } from "react";
import { Creator } from "./App";
import CreatorContext from "./creatorContext";
import { PostgrestResponse } from "@supabase/supabase-js";
import supabase from "./services/supabaseClient";

interface AddCreator {
  type: "ADD";
  creator: Creator | Creator[];
}
interface DeleteCreator {
  type: "DELETE";
  creatorId: number;
}

export type CreatorAction = AddCreator | DeleteCreator;

const creatorReducer = (
  creators: Creator[],
  action: CreatorAction
): Creator[] => {
  switch (action.type) {
    case "ADD":
      if (Array.isArray(action.creator)) {
        return [...action.creator, ...creators];
      } else {
        return [action.creator, ...creators];
      }
    case "DELETE":{
      console.log(action.creatorId);
      
      return creators.filter((t) => t.id !== action.creatorId);
      
    }
  }
};

interface Props {
  children: ReactNode;
}
export const CreatorProvider = ({ children }: Props) => {
  const [creator, dispatch] = useReducer(creatorReducer, []);
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data }: PostgrestResponse<Creator> = await supabase
      .from("creator")
      .select("*");
    console.log(data);
    if (data == null) throw new Error("Error fetching Cretors");
    if (data != null) dispatch({ type: "ADD", creator: data });
  }

  return (
    <CreatorContext.Provider value={{ creator, dispatch }}>
      {children}
    </CreatorContext.Provider>
  );
};
export default CreatorProvider;
