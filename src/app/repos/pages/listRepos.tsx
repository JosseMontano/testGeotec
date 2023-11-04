
import { useParams } from "react-router-dom";
const ListRepos = () => {
  const { name } = useParams();
  console.log(name);
  return <div>{name}</div>;
};

export default ListRepos;
