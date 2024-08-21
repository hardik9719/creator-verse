
export const AddCreator = () => {
  return (
    <form onSubmit={(event)=>{
        event.preventDefault();
    }}>
        <button className="btn btn-primary" type="submit">Submit</button>

    </form>
  )
}
