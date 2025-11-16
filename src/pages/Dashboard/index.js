import { AuthContext } from "../../contexts/auth"
import { useContext, useEffect, useState } from "react"
import Header from "../../components/Header";
import './dashboard.css'
import Title from '../../components/Title'
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { collection, getDocs, orderBy, limit, startAfter, doc as docRef, query } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { format } from "date-fns";

const listRef = collection(db, "coletas")

export default function Dashboard(){
    const { logout } = useContext(AuthContext);

    const [coletas, setColetas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect( () => {
        async function loadColetas(){
            const q = query(listRef, orderBy('created', 'desc'), limit(10));

            const querySnapshot = await getDocs(q)
            await updateState(querySnapshot)
            setLoading(false);
        }

        loadColetas();
        return() => {

        }
    }, [])
 
    async function updateState(querySnapshot){
        const isCollectionEmpty = querySnapshot.size === 0;

        if(!isCollectionEmpty){
            let lista = [];
            querySnapshot.forEach((documento) => {
                lista.push({
                    id: documento.id,
                    tipo: documento.data().tipo,
                    doador: documento.data().doador,
                    doadorId: documento.data().doadorId,
                    created: documento.data().created,
                    createdFormat: format(documento.data().created.toDate(), 'dd/MM/yyyy'),
                    status: documento.data().status,
                    observacao: documento.data().observacao,
                });
            });

            setColetas(coletas => [...coletas, ...lista])
        }else{
            setIsEmpty(true);
        }
    }
    
    return(
        <div>
            <Header />
            <div className="content">
                <Title name="Coletas">
                    <FiMessageSquare size={25}/>
                </Title>
                <>
                                    
                    {coletas.length === 0 ? (
                        <div className="container dashboard">
                            <span>Nenhuma coleta encontrada...</span>
                            <Link to="/new" className="new">
                                <FiPlus />
                                Nova coleta
                            </Link>
                        </div>
                    ) : (
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
                                    {coletas.map((item, index) => (
                                        <tr key={index}>
                                            <td data-label="Doador">{item.doador}</td>
                                            <td data-label="Tipo">{item.tipo}</td>

                                            <td data-label="Status">
                                                <span className="badge" style={{ backgroundColor: '#999' }}>
                                                    {item.status}
                                                </span>
                                            </td>

                                            <td data-label="Cadastrado">
                                               {item.createdFormat}
                                            </td>

                                            <td data-label="#">
                                                <button className="action" style={{ backgroundColor: '#3583F6' }}>
                                                    <FiSearch size={17} color="FFF" />
                                                </button>
                                                <button className="action" style={{ backgroundColor: '#F6A935' }}>
                                                    <FiEdit2 size={17} color="FFF" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table> 
                        </>    
                    )} 

                    
                </>
                
            </div>
        </div>
    )
}