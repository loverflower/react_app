import { Route, Routes } from 'react-router-dom'
import About from '../pages/about/About'
import Home from '../pages/home/Home'
import SearchContainer from '../pages/search/searchContainer'

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/search" element={<SearchContainer />} />
    </Routes>
  )
}
