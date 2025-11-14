import { useState, useContext } from 'react'
import './signup.css'
import Logo from './../../Assets/image/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signUp, loadingAuth} = useContext(AuthContext); 

    async function handleSubmit(e){
        e.preventDefault();

        if(name !== '' && email !== '' && password !== ''){
            await signUp(name, email, password)
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
                        {loadingAuth ? 'Carregando..' : 'Cadastrar'}
                    </button>
                </form>
                <Link to="/Login">Já tenho uma conta</Link>
            </div>
        </div>
    )
}
