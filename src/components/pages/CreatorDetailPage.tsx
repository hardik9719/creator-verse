import { useLocation, useParams, useSearchParams } from "react-router-dom"

export const CreatorDetailPage = () => {
    const params = useParams();
    console.log(params);
    const [searchParams,setSearchParams ] = useSearchParams();
    const location = useLocation();
    console.log(location);
    console.log(searchParams.get('name'));
  return (
    <div>CreatorDetailPage</div>
  )
}
