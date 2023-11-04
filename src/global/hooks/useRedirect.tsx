import { useNavigate } from "react-router-dom";

const UseRedirect = () => {
  const navigate = useNavigate();

  const handleRedirect = (url: string) => {
    navigate(url);
  };
  return {
    handleRedirect,
  };
};

export default UseRedirect;
