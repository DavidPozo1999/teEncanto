import { Router, Routes, Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
import HomePage from "../pages/home.page"
import DogPage from "../pages/information-dog.page"

const RouterPage=()=>{
    return (
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dog" element={<DogPage />}/>
        </Routes>
       </BrowserRouter>
    )
}

export default RouterPage