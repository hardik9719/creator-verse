import { useParams } from "react-router-dom";
import useCreator from "../../useCreators";
import { CreatorCard } from "../CreatorCard";

export const CreatorDetailPage = () => {
  const { id } = useParams();
  const { creator } = useCreator();
  const creatorDetail = creator.find((cr) => cr.id === Number(id));

  if (!creatorDetail) {
    return <div>No user found</div>;
  } else {
    return <CreatorCard creator={creatorDetail} />;
  }
};
