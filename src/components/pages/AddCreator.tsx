import { FieldValues, useForm } from "react-hook-form";
import { Creator } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import useCreator from "../../useCreators";
import { useEffect } from "react";
import supabase from "../../services/supabaseClient";
export const AddCreator = () => {
  const { creator, dispatch } = useCreator();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Creator>();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log(id);
      const creatorDetail = creator.find((cr) => cr.id === Number(id));
      console.log(creatorDetail);

      reset(creatorDetail);
    }
  }, [id, reset]);

  const onSubmit = async (data: FieldValues) => {
    data = { ...data, id: creator.length + 1 };

    const { error } = await supabase.from("creator").insert(data as Creator);
    if (error) throw new Error(error.message);
    console.log("Sucesss");

    dispatch({ type: "ADD", creator: data as Creator });
    navigate("/creators");
  };
  const onUpdate = async (data: FieldValues) => {
    const { error } = await supabase
      .from("creator")
      .update(data as Creator)
      .eq("id", id);
    if (error) throw new Error(error.message);
    console.log("Sucesss");

    dispatch({ type: "UPDATE", creator: data as Creator });
    navigate("/creators");
  };

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit(id ? onUpdate : onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", {
              required: "Name is required",
            })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && (
            <p className="text text-danger">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            {...register("image", {
              required: "Image Url is required and in the format: https://...",
              pattern: {
                value: /^https:\/\/.*/,
                message: "format: https://... is required",
              },
            })}
            id="image"
            type="url"
            className="form-control"
          />
          {errors.image && (
            <p className="text text-danger">{errors.image.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description", {
              required: "description is required .",
            })}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="youtube_handle" className="form-label">
            youtube_handle
          </label>
          <input
            {...register("youtube_handle", {
              required: "Handle is required ",
            })}
            id="youtube_handle"
            type="text"
            className="form-control"
          />
          {errors.youtube_handle && (
            <p className="text text-danger">{errors.youtube_handle.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="twitter_handle" className="form-label">
            twitter_handle
          </label>
          <input
            {...register("twitter_handle", {
              required: "Handle is required ",
            })}
            id="twitter_handle"
            type="text"
            className="form-control"
          />
          {errors.twitter_handle && (
            <p className="text text-danger">{errors.twitter_handle.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="instagram_handle" className="form-label">
            instagram_handle
          </label>
          <input
            {...register("instagram_handle", {
              required: "Handle is required ",
            })}
            id="instagram_handle"
            type="text"
            className="form-control"
          />
          {errors.instagram_handle && (
            <p className="text text-danger">
              {errors.instagram_handle.message}
            </p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
