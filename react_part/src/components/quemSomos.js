import React from 'react';
import './quemSomos.css';
import doczinho from '../assets/imgs/doctor-mobile.jpg';

export default function QuemSomos() {
    return (
        <div id="quemSomos" className="quemSomos">
            <h3 className="quemSomos">SOBRE NÓS</h3>
            <p className="quemSomos">Nossa busca é otimizar o atendimento hospitalar, facilitando o trabalho dos médicos e suas equipes. Direcionando a atenção aos pacientes,  garantindo a uma rede  a qualidade do atendimento hospitalar.</p>
            <img src={doczinho} className="quemSomos" alt="Desenho de Médico" />            
        </div>
    )
}
