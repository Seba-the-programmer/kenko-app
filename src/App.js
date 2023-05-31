import React from "react"
import IndexPage from './pages/IndexPage.js'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFoundPage from "./pages/NotFoundPage.js";
import LogInPage from "./pages/LogInPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import ContactPage from "./pages/ContactPage.js";

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" exact element={<IndexPage/>}/>
<Route path="/login" exact element={<LogInPage/>}/>
<Route path="/signup" exact element={<RegisterPage/>}/>
<Route path="/contact" exact element={<ContactPage/>}/>
<Route path="*" element={<NotFoundPage/>}/>
</Routes>

  </BrowserRouter>
  );
}

export default App;
