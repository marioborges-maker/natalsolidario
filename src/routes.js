import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Private from "./private";
import Profile from "./pages/Profile";
import Customers from "./pages/Customers";

function RoutesApp(){
    return(
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/Login" element={ <SignIn /> }/>
                <Route path="/Cadastro" element={ <SignUp />}/>
                <Route path="/Dashboard" element={ <Private> <Dashboard /> </Private> }/>
                <Route path="/Profile" element={ <Private> <Profile /> </Private> }/>
                <Route path="/Customers" element={ <Private> <Customers /> </Private> }/>
            </Routes>
    )
}

export default RoutesApp;