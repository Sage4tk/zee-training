import { BrowserRouter, Route, Routes } from "react-router-dom"

//styles
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
import Home from "./pages/Home"
import Admin from "./pages/Admins"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}