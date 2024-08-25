import { Creator } from "../App";
import useCreator from "../useCreators";
interface Props {
  creator: Creator;
}
export const CreatorCard = ({ creator }: Props) => {
  const { dispatch } = useCreator();

  return (
    <div id={creator.id.toString()}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={creator.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{creator.name}</h5>
          <p className="card-text">{creator.description}.</p>
          <a href="#" className="btn btn-primary">
            Edit
          </a>
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => dispatch({ type: "DELETE", creatorId: creator.id })}
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};
