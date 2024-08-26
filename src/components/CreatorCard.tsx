import { useNavigate } from "react-router-dom";
import { Creator } from "../App";
import useCreator from "../useCreators";
import supabase from "../services/supabaseClient";
interface Props {
  creator: Creator;
}
export const CreatorCard = ({ creator }: Props) => {
  const { dispatch } = useCreator();
  const navigate = useNavigate();
  async function deleteCreator(creatorId: number) {
    // Delete from Supabase
    const { error } = await supabase
      .from("creator")
      .delete()
      .eq("id", creatorId);

    if (error) {
      throw new Error(error.message);
    }

    // Dispatch action to update local state
    dispatch({ type: "DELETE", creatorId });
  }
  return (
    <div id={creator.description}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={creator.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{creator.name}</h5>
          <p className="card-text">{creator.description}.</p>
          <a
            className="btn btn-primary"
            onClick={() => navigate(`/edit/${creator.id}`)}
          >
            Edit
          </a>
          <a
            className="btn btn-primary"
            onClick={() => {
              deleteCreator(creator.id);
            }}
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};
