import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home-component";
import AllTolls from "./routes/all-tolls/allTolls-component";

const App = () => {
  return (
    <Routes>
      <Route index={true} element={<Home></Home>}></Route>
      <Route path="/AllTolls" element={<AllTolls></AllTolls>}></Route>
    </Routes>
  );
};

export default App;
