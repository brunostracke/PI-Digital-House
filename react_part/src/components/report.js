import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Report extends Component {
    render() {
        return (
            <div>
                <header>
                    <Link to='./'>
                        <button>Voltar à Página Inicial</button>
                    </Link>                    
                </header>

                <div>
                    <button>Voltar ao relatório</button>
                    <button>Iniciar novo relatório</button>
                    <button>Enviar Relatório por e-mail</button>
                </div>

                <div className="container">
                    <table border='1' cellSpacing='0' cellPadding='2' bordercolor="666633">
                        <thead>
                            <tr colSpan="5">
                                <td>Anamnese</td>
                                <td>Data: {this.props.date.toString()}</td>
                            </tr>
                        </thead>
                        {/* <tr>
                            <td colSpan="3">Data: {this.props.date}</td>
                        </tr> */}
                        <tbody>
                            <tr>
                                <td colSpan="3">Nome:</td>
                                <td>Idade:</td>
                                <td>Sexo:</td>
                            </tr>
                            <tr>
                                <td>SAMU</td>
                                <td>SIATE</td>
                                <td >Capacete/cinto:</td>
                                <td colSpan="2">Vítima de:</td>
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
