import { BrowserRouter, Route, Routes } from "react-router-dom";
//PAGES
import ListUser from "./app/users/pages/listUser";
//FONTS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
