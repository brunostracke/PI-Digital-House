import React, { Component } from 'react';
import { Link, Prompt } from 'react-router-dom';

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

                <div className="container">
                    <table border='1' cellSpacing='0' cellPadding='2' bordercolor="666633">
                        <thead>
                            <tr colSpan="5">
                                <td>Avaliação Médica</td>
                                <td>Data: {this.props.date.toString()}</td>
                                <td>Horário: {this.props.date.toString()}</td>
                                <td>Examinador: {this.props.date.toString()}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="2">Nome: {this.props.data[0].text}</td>
                                <td>Idade: {this.props.data[1].text}</td>
                                <td>Sexo: {this.props.data[2].categorical}</td>
                            </tr>
                            <tr>
                                <td>Como chegou ao PS? {this.props.data[3].categorical}</td>
                                <td colSpan="2">Vítima de: {this.props.data[4].text}</td>
                                <td>Proteção: {this.props.data[5].categorical}</td>
                            </tr>
                            <tr>
                                <td>Via aérea:</td>
                                <td>CC:</td>
                                <td>TR:</td>
                                <td>Cervicalgia:</td>
                                <td>SatO2: %</td>
                            </tr>
                            <tr>
                                <td colSpan="2">FC: bpm</td>
                                <td>MV:</td>
                                <td>Expansibilidade:</td>
                                <td>Ruídos:</td>
                            </tr>
                            <tr>
                                <td>Arcos:</td>
                                <td>Crepitação:</td>
                                <td colSpan="2">Enfisema subcutâneo:</td>
                                <td>Desconforto respiratório:</td>
                            </tr>
                            <tr>
                                <td>PA:</td>
                                <td>Bulhas:</td>
                                <td colspna="2">Sopros:</td>
                                <td>Pulso periférico:</td>
                            </tr>
                            <tr>
                                <td>Pele:</td>
                                <td colSpan="2">Enchimento Capilar:</td>
                                <td>Abdome:</td>
                                <td>Pelve:</td>
                            </tr>
                            <tr>
                                <td>LOTE:</td>
                                <td>Glasgow:</td>
                                <td>Vômitos:</td>
                                <td>Perda de consciência:</td>
                                <td>Convulsão:</td>
                            </tr>
                            <tr>
                                <td colSpan="5">Exposição:</td>
                            </tr>
                            <tr>
                                <td>Medicação:</td>
                                <td>Orto:</td>
                                <td>Geral:</td>
                                <td>Neuro:</td>
                                <td>Outra:</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Rx:</td>
                                <td colSpan="3">TC:</td>
                            </tr>
                            <tr>
                                <td colSpan="5">Observação:</td>
                            </tr>
                        </tbody>
                    </table>
                </div>                
            </div>
        )
    }
}
