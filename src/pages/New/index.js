import { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiPlusCircle } from 'react-icons/fi'
import {AuthContext} from '../../contexts/auth'
import { db } from '../../services/firebaseConnection'
import { collection, getDocs, getDoc, doc, addDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

import './new.css'


const listRef = collection(db, "customers");

export default function New(){
    const { user } = useContext(AuthContext);

    const [doador, setDoador] = useState([]);
    const [loadCustomers, setLoadCustomers] = useState(true);
    const [ doadorSelect, setDoadorSelect] = useState(0)

    const [tipo, setTipo] = useState("Brinquedos");
    const [status, setStatus] = useState("Em aberto");
    const [observacao, setObservacao] = useState("");

    useEffect(() => {
        async function loadCustomers(){
            const querySnapshot = await getDocs(listRef)
            .then( (snapshot) => {
                let lista = [];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        nome: doc.data().nome
                    })
                })

                if(snapshot.docs.size === 0){
                    console.log("Nenhuma empresa encontrada");
                    setDoador([{id: '1', nome: 'Papai noel'}])
                    setLoadCustomers(false);
                    return;
                }

                setDoador(lista);
                setLoadCustomers(false);
            })
            .catch((error) => {
                console.log('ERRO AO BUSCAR OS DOADORES', error)
                setLoadCustomers(false);
                setDoador([{id: '1', nome: 'Papai noel'}])
            })
        }

        loadCustomers();
    }, [])

    function handleOptionChange(e){
        setStatus(e.target.value);
    }

    function handleChangeSelect(e){
        setTipo(e.target.value);
    }

    function handleCustomerChange(e){
        setDoadorSelect(e.target.value);
    }

    async function handleRegister(e){
        e.preventDefault();
        await addDoc(collection(db, "coletas"), {
            created: new Date(),
            doador: doador[doadorSelect].nome,
            doadorId: doador[doadorSelect].id,
            tipo: tipo,
            observacao: observacao,
            status: status,
            userId: user.uid,
        })
        .then(() => {
            toast.success("Coleta registrada!")
            setObservacao("");
            setDoadorSelect(0)
        })
        .catch((error) => {
            console.log(error)
            toast.error("Ops! Erro ao registrar coleta.")
        })
    }

    return(
        <div>
            <Header/>
            <div className='content'>
                <Title name="Nova Coleta">
                    <FiPlusCircle size={25}/>
                </Title>
                <div className='container'>
                    <form className='form-profile' onSubmit={handleRegister}>
                        <label>Doador</label>
                        { loadCustomers ? (
                            <input type='text' disabled={true} value="Carregando"/>
                        ) : (
                               <select value={doadorSelect} onChange={handleCustomerChange}>
                                {doador.map((item, index) => {
                                    return(
                                        <option key={index} value={index}>{item.nome}</option>
                                    )
                                })}
                               </select> 
                            )
                        }
                        <label>Tipo</label>
                        <select value={tipo} onChange={handleChangeSelect}>
                            <option value="Brinquedos">Brinquedos</option>
                            <option value="Roupas">Roupas</option>
                            <option value="Outros">Outros</option>
                        </select>
                        <label>Status</label>
                        <div className='status'>
                            <input type='radio' name='radio' value="Aberto" onChange={handleOptionChange} checked={ status === "Aberto"}/>
                            <span>Em aberto</span>
                            <input type='radio' name='radio' value="Coleta" onChange={handleOptionChange} checked={ status === "Coleta"}/>
                            <span>Em coleta</span>
                            <input type='radio' name='radio' value="Coletado" onChange={handleOptionChange} checked={ status === "Coletado"}/>
                            <span>Coletado</span>
                        </div>
                        <label>Observação</label>
                        <textarea 
                            type="text"
                            placeholder='Descreva a observação (opcional)'
                            value={observacao}
                            onChange={ (e) => setObservacao (e.target.value)}
                        />
                        <button type='submit'>Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}