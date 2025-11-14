import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function RoutesApp(){
    return(
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/Login" element={ <SignIn /> }/>
                <Route path="/Cadastro" element={ <SignUp />}/>
                <Route path="/Dashboard" element={ <Dashboard />}/>
            </Routes>
    )
}

export default RoutesApp;