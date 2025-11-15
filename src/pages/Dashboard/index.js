import { AuthContext } from "../../contexts/auth"
import { useContext } from "react"
import Header from "../../components/Header";
import './dashboard.css'

export default function Dashboard(){
    const { logout } = useContext(AuthContext);

    async function handleLogout(){
        await logout();
    }

    return(
        <div className="dashboard">
            <Header />
            <h1>Pagina Dashboard</h1>
            <button onClick={handleLogout}>Sair da conta</button>
        </div>
    )
}