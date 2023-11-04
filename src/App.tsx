import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListUser from "./app/users/pages/listUser";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="*" element={<p>Page no found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
