import React from "react";
import ImgLast from '../Assets/image/illustration.svg';
import { Link } from "react-router-dom";

const Last = () => {
    return(
        <div className="LastSection">
            <div>
                <img src={ImgLast} alt="Mãos segurando bolinha de enfeite de árvore de natal" />
            </div>
            <div>                
                <h1>Conectando Gerenorisade<br/>ao redor da Cidade</h1>
                <p>Celebre a magia do Natal de uma maneira especial!<br/>Descubra a plataforma que permite a doação de<br/>presentes significativos para aqueles que mais<br/>precisam. Faça parte do movimento e compartilhe o<br/>verdadeiro espírito da generosidade.</p>
                <Link className="BtnLogin" to="/Login">Acesse a Plataforma</Link>
            </div>
        </div>
    )
}

export default Last;