import Logo from '../../Assets/image/logo.svg'
import { Link } from 'react-router-dom'
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'
import './header.css'

export default function Header(){
    return(
        <div className="sidebar">
            <div>
                <img src={Logo} alt='Logo Natal Solidário'/>
            </div>

            <Link to="/dashboard">
                <FiHome className='icon' color='#CD3C32' size={24}/>
                Coletas
            </Link>
            <Link to="/customers">
                <FiUser className='icon' color='#CD3C32' size={24}/>
                Usuários
            </Link>
            <Link to="/Profile">
                <FiSettings color='#CD3C32' size={24}/>
                Perfil
            </Link>
        </div>
    )
}