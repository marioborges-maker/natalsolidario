import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Private from "./private";

function RoutesApp(){
    return(
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/Login" element={ <SignIn /> }/>
                <Route path="/Cadastro" element={ <SignUp />}/>
                <Route path="/Dashboard" element={ <Private> <Dashboard /> </Private> }/>
            </Routes>
    )
}

export default RoutesApp;