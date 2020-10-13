import React, { Component } from 'react';
import './report.css';

export default class Report extends Component {
    // constructor(props){
    //     super(props);

    //     // this.resposta = this.resposta.bind(this);
    // };


    // resposta(answer){
    //     let toReturn;
    //     switch(answer.type) {
    //         case 1:
    //             toReturn = {
    //                 resposta:answer.text,
    //                 obs: ''
    //                 };
    //             break;
    //         case 2:
    //             toReturn = {
    //                 resposta:answer.categorical,
    //                 obs: ''
    //                 };
    //             break;
    //         case 3:
    //             toReturn = {
    //                 resposta:answer.categorical,
    //                 obs:answer.text
    //                 };
    //             break;
    //         default:
    //             toReturn = {
    //                     resposta:'',
    //                     obs:''
    //                     };
    //             break;
    //         };

    //     return toReturn;
    // };

    render() {        
        // const table = () => (
        //     <div>
        //         <table className="tableizer-table">
        //             <thead><tr className="tableizer-firstrow"><th>Categoria</th><th>Questão</th><th>Resposta</th><th>Observação</th></tr></thead>

        //             <tbody>
        //                 {this.props.data.map( (answer) => (
        //                         <tr key={answer.title}>
        //                             <td>{answer.classe}</td>
        //                             <td>{answer.title}</td>
        //                             {console.log(answer)}
        //                             {console.log(this.resposta(answer))}
        //                             <td>{this.resposta(answer).resposta}</td>
        //                             <td>{this.resposta(answer).obs}</td>
        //                         </tr>)
        //                 )}
        //             </tbody>
        //             </table>
        //     </div>
        // );

        return (
            <div className='toReturn'>
                <h6>Avaliação Médica - Data: {new Intl.DateTimeFormat('pt-br', { year: 'numeric', month: '2-digit', day: '2-digit'}).format(this.props.date)} - Horário: {new Intl.DateTimeFormat('pt-br', { hour: '2-digit', minute: '2-digit'}).format(this.props.date)} - Examinador: Dra. Maria da Silva</h6>
                {/* {table()} */}
                <table className="tableizer-table">
                    <tbody>
                        <tr><td>Info. do Paciente</td><td colSpan={3}>Nome: {this.props.data[0].text}</td><td>Idade: {this.props.data[1].text}</td><td>Sexo: {this.props.data[2].categorical}</td></tr>
                        <tr><td>Info. do Paciente</td><td>Como chegou ao PS: {this.props.data[3].categorical}</td><td>Proteção:{this.props.data[5].categorical}</td><td colSpan={3}>Vítima de {this.props.data[4].text}</td></tr>
                        <tr><td>AMPLA</td><td colSpan={2}>Comorbidades:{this.props.data[6].text}</td><td colSpan={2}>Medicações:{this.props.data[7].text}</td><td>Alergias:{this.props.data[8].text}</td></tr>
                        <tr><td>A</td><td>Via aérea:{this.props.data[9].text}</td><td>Colar Cervical:{this.props.data[10].categorical}</td><td>Tábua rígida:{this.props.data[11].categorical}</td><td>Cervicalgia:{this.props.data[12].categorical}</td><td>SatO2: {this.props.data[13].text} %</td></tr>
                        <tr><td>B</td><td>FC: {this.props.data[14].text} bpm</td><td>MV: {this.props.data[15].categorical}</td><td colSpan={2}>Expansiblidade:{this.props.data[16].categorical}</td><td>Ruídos:{this.props.data[17].text}</td></tr>
                        <tr><td>B</td><td>Arcos Costais:</td><td colSpan={2}>Crepitação:</td><td>Enfisema subcutâneo:</td><td>Desconforto respiratório:</td></tr>
                        <tr><td>C</td><td>PA:         </td><td>Bulhas:</td><td>Sopros:</td><td colSpan={2}>Pulso periférico:</td></tr>
                        <tr><td>C</td><td>Pele:</td><td>Enchimento capilar:</td><td colSpan={2}>Abdome:</td><td>Pelve:</td></tr>
                        <tr><td>D</td><td>LOTE:</td><td>Glasgow:</td><td>Vômitos:</td><td>Perda de consciência:</td><td>Convulsão:</td></tr>
                        <tr><td>E</td><td colSpan={5}>Exposição:</td></tr>
                        <tr><td>Conduta</td><td>Medicação (no PS):</td><td>Orto</td><td>Geral</td><td>Neuro</td><td>Outra:</td></tr>
                        <tr><td>Exames</td><td>Rx:</td><td>TC:</td><td>FAST:</td><td colSpan={2}>Outros:</td></tr>
                        <tr><td>Conduta</td><td colSpan={5}>Observação:</td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
