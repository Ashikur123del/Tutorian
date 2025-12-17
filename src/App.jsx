import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Root from "./Layout/Root"

function App() {
 
  return (
  <Routes>
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} />
  </Route>
</Routes>

  )
}

export default App
