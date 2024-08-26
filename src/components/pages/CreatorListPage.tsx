import useCreator from "../../useCreators";
import { CreatorCard } from "../CreatorCard";

export const CreatorListPage = () => {
  const { creator,dispatch } = useCreator();
  
  return (
    <>
      {creator.map((c) => (
        <CreatorCard key={c.id} creator={c} />
      ))}
    </>
  );
}
