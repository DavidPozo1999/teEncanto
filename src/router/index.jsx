import { Router, Routes, Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
import HomePage from "../pages/home.page"

const RouterPage=()=>{
    return (
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
       </BrowserRouter>
    )
}

export default RouterPage