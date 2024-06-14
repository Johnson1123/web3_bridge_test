import Input from "./component/Input";
import "./App.css";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Input />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
