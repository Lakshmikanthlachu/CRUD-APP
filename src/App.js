import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./components/Form";
import Displayvalue from "./components/Displayvalue"
import Update from "./components/Update";

function App() {
  return (
   <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form></Form>}></Route>
        <Route path="/displayvalue" element={<Displayvalue></Displayvalue>}></Route>
        <Route path="/update/:ind" element={<Update></Update>}></Route>
      </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
