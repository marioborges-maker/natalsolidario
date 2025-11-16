import { AuthContext } from "../../contexts/auth"
import { useContext } from "react"
import Header from "../../components/Header";
import './dashboard.css'
import Title from '../../components/Title'
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Dashboard(){
    const { logout } = useContext(AuthContext);

    async function handleLogout(){
        await logout();
    }

    return(
        <div>
            <Header />
            <div className="content">
                <Title name="Coletas">
                    <FiMessageSquare size={25}/>
                </Title>
                <>
                    <Link to="/new" className="new">
                        <FiPlus />
                        Nova coleta
                    </Link>
                
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Doador</th>
                                <th scope="col">Tipo de Doação</th>
                                <th scope="col">Status</th>
                                <th scope="col">Cadastrado em</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Doador">Henrique</td>
                                <td data-label="Tipo">Brinquedos</td>
                                <td data-label="Status">
                                    <span className="badge" style={{ backgroundColor: '#999'}}>
                                        Em aberto
                                    </span>
                                </td>
                                <td data-label="Cadastrado">16/11/2025</td>
                                <td data-label="#">
                                    <button className="action" style={{ backgroundColor: '#3583F6'}}>
                                        <FiSearch size={17} color="FFF"/>
                                    </button>
                                    <button className="action" style={{ backgroundColor: '#F6A935'}}>
                                        <FiEdit2 size={17} color="FFF"/>
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td data-label="Doador">Luis</td>
                                <td data-label="Tipo">Roupas</td>
                                <td data-label="Status">
                                    <span className="badge" style={{ backgroundColor: '#999'}}>
                                        Em coleta
                                    </span>
                                </td>
                                <td data-label="Cadastrado">15/11/2025</td>
                                <td data-label="#">
                                    <button className="action" style={{ backgroundColor: '#3583F6'}}>
                                        <FiSearch size={17} color="FFF"/>
                                    </button>
                                    <button className="action" style={{ backgroundColor: '#F6A935'}}>
                                        <FiEdit2 size={17} color="FFF"/>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
                
            </div>
        </div>
    )
}