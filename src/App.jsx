import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route patch='/inicio'></Route>
        <Route patch='/productos'></Route>
        <Route patch='/productos:id'></Route>
        <Route patch='/carrito'></Route>

      </Routes>
    
    
    </BrowserRouter>
      
  
</>
);

};

export default App
