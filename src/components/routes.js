import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Questions from "./questions";

export default function RoutesWay() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions />} />
    </Routes>
  </>
  )
}