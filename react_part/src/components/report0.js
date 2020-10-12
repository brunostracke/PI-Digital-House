import React, { Component } from 'react';
import { Link, Prompt } from 'react-router-dom';
import './report0.css';

export default class Report extends Component {
    constructor(props) {
        super(props);
        this.setAlert = this.setAlert.bind(this);
        this.newQuest = this.newQuest.bind(this);
    }

    setAlert() {
        return true;
    }

    newQuest() {
        const message = "Tem certeza que deseja sair da página atual? Todos os dados do formulário atual serão perdidos. Certifique-se de salvá-los antes de sair.";
        const newQuestAlert = window.confirm(message) ? this.props.newQuest() : null;
        return newQuestAlert;                        
    }

    render() {
        console.log(this.props.data)
        return (
            <div>
                <Prompt when={this.setAlert.value} message="Tem certeza que deseja retornar à página inicial? Todos os dados do formulário atual serão perdidos. Certifique-se de salvá-los antes de sair." />
                <header>
                    <Link to='./'>
                        <button onClick={this.setAlert}>Voltar à Página Inicial</button>
                    </Link>                    
                </header>

                <div>
                    <button onClick={this.props.reportToQuest}>Voltar ao relatório</button>
                    <button onClick={this.newQuest}>Iniciar novo relatório</button>
                    <button>Enviar Relatório por e-mail</button>
                </div>

                <table class="tableizer-table">
                <thead><tr class="tableizer-firstrow"><th>Avaliação Médica</th><th>Data: </th><th>Horário:</th><th>Examinador: </th></tr></thead><tbody>
                <tr><td>Info. do Paciente</td><td>Nome</td><td>Idade</td><td>Sexo</td></tr>
                <tr><td>Info. do Paciente</td><td>Como chegou ao PS: </td><td>Vítima de</td><td>Proteção:</td></tr>
                <tr><td>AMPLA</td><td>Comorbidades:</td><td>Medicações:</td><td>Alergias:</td></tr>
                <tr><td>A</td><td>Via aérea:</td><td>Colar Cervical:</td><td>Tábua rígida:</td><td>Cervicalgia:</td><td>SatO2:%</td></tr>
                <tr><td>B</td><td>FC: bpm</td><td>MV: </td><td>Expansiblidade:</td><td>Ruídos:</td></tr>
                <tr><td>B</td><td>Arcos Costais:</td><td>Crepitação:</td><td>Enfisema subcutâneo:</td><td>Desconforto respiratório:</td></tr>
                <tr><td>C</td><td>PA:         </td><td>Bulhas:</td><td>Sopros:</td><td>Pulso periférico:</td></tr>
                <tr><td>C</td><td>Pele:</td><td>Enchimento capilar:</td><td>Abdome:</td><td>Pelve:</td></tr>
                <tr><td>D</td><td>LOTE:</td><td>Glasgow:</td><td>Vômitos:</td><td>Perda de consciência:</td><td>Convulsão:</td></tr>
                <tr><td>E</td><td>Exposição:</td></tr>
                <tr><td> </td><td>Medicação:</td><td>Orto</td><td>Geral</td><td>Neuro</td><td>Outra:</td></tr>
                <tr><td> </td><td>Rx:</td><td>TC:</td></tr>
                <tr><td> </td><td>Observação:</td></tr>
                </tbody></table>
            </div>
        )
    }
}
