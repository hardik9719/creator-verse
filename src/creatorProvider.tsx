import { ReactNode, useEffect, useReducer, useRef } from "react";
import { Creator } from "./App";
import CreatorContext from "./creatorContext";
import { PostgrestResponse } from "@supabase/supabase-js";
import supabase from "./services/supabaseClient";

interface AddCreator {
  type: "ADD";
  creator: Creator;
}
interface DeleteCreator {
  type: "DELETE";
  creatorId: number;
}
interface UpdateCreator {
  type: "UPDATE";
  creator: Creator;
}

export type CreatorAction = AddCreator | DeleteCreator | UpdateCreator;

const creatorReducer = (
  creators: Creator[],
  action: CreatorAction
): Creator[] => {
  switch (action.type) {
    case "ADD":
      return [action.creator, ...creators];

    case "DELETE": {
      console.log(action.creatorId);
      return creators.filter((t) => t.id !== action.creatorId);
    }
    case "UPDATE":
      return creators.map((creator) =>
        creator.id === action.creator.id ? action.creator : creator
      );
  }
};

interface Props {
  children: ReactNode;
}
export const CreatorProvider = ({ children }: Props) => {
  const [creator, dispatch] = useReducer(creatorReducer, []);
  const isMounted = useRef(false);
  useEffect(() => {
    getUsers();
    isMounted.current = true;

    return () => {
      isMounted.current = false; // Reset ref for future mounts if needed
    };
  }, []);

  async function getUsers() {
    const { data }: PostgrestResponse<Creator> = await supabase
      .from("creator")
      .select("*");
    // console.log(data);
    if (data == null) throw new Error("Error fetching Cretors");
    data.map((d) => dispatch({ type: "ADD", creator: d }));
  }

  return (
    <CreatorContext.Provider value={{ creator, dispatch }}>
      {children}
    </CreatorContext.Provider>
  );
};
export default CreatorProvider;
