import { useState } from "react"
import Header from "../../components/Header"
import Title from "../../components/Title"
import { FiUser } from "react-icons/fi"
import { db } from "../../services/firebaseConnection"
import { addDoc, collection } from "firebase/firestore"
import { toast } from "react-toastify"

export default function Customers(){

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');

    async function handleRegister(e){
        e.preventDefault();
        if(nome !== '' && cpf !== '' && endereco !== ''){
            await addDoc(collection(db, "customers"), {
                nome: nome,
                cpf: cpf,
                endereco: endereco,
            })
            .then(() => {
                setNome('');
                setCpf('');
                setEndereco('');
                toast.success("Doador cadastrado com sucesso")
            })
            .catch((error)=>{
              console.log(error)  
              toast.error("Erro ao cadastrar")
            })
        }else{
            toast.error("Preencha todos os campos")
        }
    }

    return(
        <div>
            <Header />

            <div className="content">
                <Title name="Doadores">
                    <FiUser size={25}/>
                </Title>
                <div className="container">
                    <form className="form-profile" onSubmit={handleRegister}>
                        <label>Nome</label>
                        <input 
                            type="text"
                            placeholder="Nome completo do doador"
                            value={nome}
                            onChange={(e)=> setNome(e.target.value)}
                        />
                        <label>CPF</label>
                        <input 
                            type="number"
                            placeholder="CPF do doador"
                            value={cpf}
                            onChange={(e)=> setCpf(e.target.value)}
                        />
                        <label>Endereço</label>
                        <input 
                            type="text"
                            placeholder="Endereço da coleta"
                            value={endereco}
                            onChange={(e)=> setEndereco(e.target.value)}
                        />
                        <button>Cadastrar Doador</button>
                    </form>

                </div>
            </div>
        </div>
    )
}