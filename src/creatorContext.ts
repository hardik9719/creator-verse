import { Dispatch } from "react";
import React from "react";
import { Creator } from "./App";
import { CreatorAction } from "./creatorProvider";

export interface CreatorContextType{
    creator:Creator[];
    dispatch: Dispatch<CreatorAction>;
}

const CreatorContext = React.createContext<CreatorContextType>({} as CreatorContextType);
export default CreatorContext;