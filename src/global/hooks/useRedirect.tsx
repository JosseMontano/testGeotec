import { useNavigate } from "react-router-dom";

const UseRedirect = () => {
  // ======= hook to redirect =======
  const navigate = useNavigate();

  // ======= function that redict to other url =======
  const handleRedirect = (url: string) => {
    navigate(url);
  };

  return {
    handleRedirect,
  };
};

export default UseRedirect;
