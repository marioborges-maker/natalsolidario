import Logo from '../Assets/image/logo.svg';
import ImgHero from '../Assets/image/illustration-hero.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <div className="HeroSection">
            <div>                
                <img src={Logo} alt="Logo Natal Solidário" />
                <h1>Uma <span>plataforma de doação</span><br/>para espalhar alegria</h1>
                <p>Nessas festas de fim de ano mande um presente<br/>para a pessoa amada e compartilhe a alegria do Natal. </p>
                <Link className="BtnLogin" to="/Login">Acesse a Plataforma</Link>
            </div>
            <div>
                <img src={ImgHero} alt="Casa com Decoração de Natal"/>
            </div>
        </div>
    )
}

export default Hero;