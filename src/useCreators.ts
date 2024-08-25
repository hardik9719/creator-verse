import { useContext } from "react";
import CreatorContext from "./creatorContext";


const useCreator = ()=>useContext(CreatorContext);
export default useCreator; 