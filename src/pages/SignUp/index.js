import { useState } from 'react'
import './signup.css'
import Logo from './../../Assets/image/logo.svg'
import { Link } from 'react-router-dom';

export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        if(name !== '' && email !== '' && password !== ''){
            alert('fazer cadastro')
        }
    }

    return(
        <div className="container-center">
            <div className='login'>
                <div className='login-area'>
                    <img src={Logo} alt='Logo da tela de cadastro'/>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Criar Conta</h1>
                    <input 
                        type='text' 
                        placeholder='Digite seu nome'
                        value={name}
                        onChange={ (e) => setName(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='seuemail@email.com'
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                    <input 
                        type='password' 
                        placeholder='*********'
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)}
                    />
                    <button type='submit'>
                        Cadastrar
                    </button>
                </form>
                <Link to="/Login">Já tenho uma conta</Link>
            </div>
        </div>
    )
}
