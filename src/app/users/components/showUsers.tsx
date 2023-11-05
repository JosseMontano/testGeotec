import { ListUser } from "../interfaces/listUser";
import CardComponent from "./card";

interface Params {
  data: ListUser[];
  loading: boolean;
  handleLoading: (heightContainer: number) => JSX.Element | undefined;
  handleRedirect: (url: string) => void;
}

const ShowUsers = (params: Params) => {
  const { data, handleLoading, handleRedirect, loading } = params;
  return (
    <>
      {/* ======== SHOW LOADING ======== */}

      {handleLoading((130 + 16) * 3)}

      {/* ======== SHOW DATA ======== */}
      {!loading &&
        data.length > 0 &&
        data.map((v) => (
          <CardComponent
            nameUser={v.login}
            photo={v.avatar_url}
            pageUser={v.html_url}
            handleRedirect={handleRedirect}
            key={v.id}
          />
        ))}
    </>
  );
};

export default ShowUsers;
