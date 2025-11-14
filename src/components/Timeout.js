import React from "react";
import ImgTimeout from '../Assets/image/illustration-1.svg'

const Timeout = () => {
    return(
        <div className="TimeoutSection">
            <div>                
                <h1>Tempo Limitado</h1>
                <p>Nessas festas de fim de ano mande um presente<br/>para a pessoa amada e compartilhe a alegria do Natal. </p>
                <h2>10 dias - 24 hrs - 01 min</h2>
                <img src={ImgTimeout} alt="Presentes Empilhados"/>
            </div>
        </div>
    )
}

export default Timeout;