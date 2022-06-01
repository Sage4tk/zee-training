import { BrowserRouter, Route, Routes } from "react-router-dom"

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