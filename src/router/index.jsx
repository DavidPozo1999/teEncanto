import { Router, Routes, Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
import HomePage from "../pages/home.page"
import DogPage from "../pages/information-dog.page"
import Logging from "../pages/log.page"
import RegisterForm from "../componentes/register-form.component"
import LoggingForm from "../componentes/logging-form.component"

const RouterPage=()=>{
    return (
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dog/:id" element={<DogPage />}/>
            <Route path="/inicio" element={<Logging form={<LoggingForm />} />} />
            <Route path="/registro" element={<Logging form={<RegisterForm />} />} />
        </Routes>
       </BrowserRouter>
    )
}

export default RouterPage