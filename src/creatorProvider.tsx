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
  useEffect(() => {
    const ac = new AbortController();

    getUsers(ac.signal);

    () => {

      ac.abort();
    };
  }, []);

  async function getUsers(signal: AbortSignal) {
    const { data }: PostgrestResponse<Creator> = await supabase
      .from("creator")
      .select("*")
      .abortSignal(signal);
    if (data == null) return;
    data.map((d) => dispatch({ type: "ADD", creator: d }));
  }

  return (
    <CreatorContext.Provider value={{ creator, dispatch }}>
      {children}
    </CreatorContext.Provider>
  );
};
export default CreatorProvider;
