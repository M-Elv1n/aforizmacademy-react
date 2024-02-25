import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Children from "./pages/Children/Children";
import Offis from "./pages/Offis/Offis";
import Individual from "./pages/Individual/Individual";
import Foregn from "./pages/Foregn/Foregn";
import ExamData from "./pages/ExamData/ExamData";
import ExamAnswers from "./pages/ExamAnswers/ExamAnswers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ibtidai-sinifler" element={<Children />} />
        <Route path="/offis-proqramlari" element={<Offis />} />
        <Route path="/ferdi-hazirliqlar" element={<Individual />} />
        <Route path="/xarici-diller" element={<Foregn />} />
        <Route path="/imtahan-tarixleri" element={<ExamData />} />
        <Route path="/imtahan-cavablari" element={<ExamAnswers />} />
      </Routes>
    </div>
  );
}

export default App;
