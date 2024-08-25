import useCreator from "../../useCreators";
import { CreatorCard } from "../CreatorCard";

export const HomePage = () => {
  const { creator } = useCreator();

  return (
    <>
      {creator.map((c) => (
        <CreatorCard creator={c} />
      ))}
    </>
  );
};
