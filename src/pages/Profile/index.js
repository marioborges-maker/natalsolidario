import { useContext, useState } from "react"
import Header from "../../components/Header"
import Title from "../../components/Title"
import { FiSettings } from "react-icons/fi"
import { AuthContext } from "../../contexts/auth"
import { db, storage } from "../../services/firebaseConnection"
import { doc, updateDoc } from "firebase/firestore"
import './profile.css'
import { toast } from "react-toastify"

export default function Profile(){

    const { user, storageUser, setUser, logout } = useContext(AuthContext);
    const [nome, setNome] = useState(user && user.nome);
    const [email, setEmail] = useState( user && user.email);

    async function handleSubmit(e){
        e.preventDefault();

        if(nome !== ''){
            const docRef = doc(db, "users", user.uid)
            await updateDoc(docRef, {
                nome: nome,
            })
            .then(()=>{
                let data = {
                    ...user, 
                    nome: nome,
                }
                setUser(data);
                storageUser(data);
                toast.success("Informações de Usuário Atualizadas com sucesso!")
            })
        }
    }

    return(
        <div>
            <Header />
            <div className="content">
                <Title name="Minha conta">
                    <FiSettings size={25}/>
                </Title>
                <div className="container">
                    <form className="form-profile" onSubmit={handleSubmit}> 
                        <label>Nome</label>
                        <input 
                            type="text" 
                            value={nome}
                            onChange={(e)=> setNome(e.target.value)}
                        />
                        <label>E-mail</label>
                        <input 
                            type="text"
                            value={email} 
                            disable={true}
                        />
                        <button type="submit">Salvar</button>
                        <button className="logout-btn" onClick={() => logout()}>Sair</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}